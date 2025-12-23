"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getAssets } from "@/app/actions/assets";
import { checkInAsset } from "@/app/actions/operations";
import { AssetStatus } from "@prisma/client";

const formSchema = z.object({
  assetId: z.number().min(1, "Asset is required"),
  status: z.nativeEnum(AssetStatus,).refine((val) => val !== AssetStatus.IN_USE, {
    message: "New status cannot be IN USE",
  }),
  date: z.date(),
  notes: z.string().optional(),
});

type CheckInFormData = z.infer<typeof formSchema>;

export function CheckInForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assets, setAssets] = useState<{ id: number; code: string; name: string }[]>([]);
  
  const [openAsset, setOpenAsset] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetId: 0,
      status: AssetStatus.AVAILABLE,
      date: new Date(),
      notes: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch IN_USE Assets
      const assetResult = await getAssets({ status: AssetStatus.IN_USE, limit: 100 }); 
      if (assetResult.success && assetResult.data) {
        setAssets(assetResult.data);
      }
    }
    fetchData();
  }, []);

  async function onSubmit(data: CheckInFormData) {
    setIsSubmitting(true);
    try {
      const result = await checkInAsset(data);

      if (result.success) {
        toast.success("Asset returned successfully");
        router.push("/assets"); 
      } else {
        toast.error(result.error || "Failed to return asset");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl bg-white p-6 rounded-lg border shadow-sm">
        
        {/* Asset Selection */}
        <FormField
          control={form.control}
          name="assetId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Asset (Returned) <span className="text-red-500">*</span></FormLabel>
              <Popover open={openAsset} onOpenChange={setOpenAsset}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? assets.find((a) => a.id === field.value)
                            ? `[${assets.find((a) => a.id === field.value)?.code}] ${assets.find((a) => a.id === field.value)?.name}`
                            : "Select asset"
                        : "Select asset"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0">
                  <Command>
                    <CommandInput placeholder="Search asset..." />
                    <CommandList>
                      <CommandEmpty>No In-Use assets found.</CommandEmpty>
                      <CommandGroup>
                        {assets.map((asset) => (
                          <CommandItem
                            value={`${asset.code} ${asset.name}`}
                            key={asset.id}
                            onSelect={() => {
                              form.setValue("assetId", asset.id);
                              setOpenAsset(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                asset.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="font-mono mr-2">[{asset.code}]</span> {asset.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Status <span className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select new status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={AssetStatus.AVAILABLE}>Available</SelectItem>
                  <SelectItem value={AssetStatus.MAINTENANCE}>Maintenance</SelectItem>
                  <SelectItem value={AssetStatus.RETIRED}>Retired</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Return Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes (Condition, etc.)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Asset condition, repairs needed, etc." 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end space-x-2 pt-4">
           <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Return Asset"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
