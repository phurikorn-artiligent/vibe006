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
import { Input } from "@/components/ui/input";
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
import { Calendar } from "@/components/ui/calendar";
import { createAsset } from "@/app/actions/assets";
import { getAssetTypes } from "@/app/actions/asset-types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AssetStatus } from "@prisma/client";

// Adjusted schema for form:
const formSchema = z.object({
  code: z.string().min(1, "Asset Code is required"),
  name: z.string().min(1, "Asset Name is required"),
  typeId: z.number().min(1, "Asset Type is required"),
  serialNumber: z.string().optional(),
  status: z.nativeEnum(AssetStatus).default(AssetStatus.AVAILABLE),
  purchaseDate: z.date().optional(),
  price: z.string().optional(), 
});

type AssetFormData = z.infer<typeof formSchema>;

export function AssetForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assetTypes, setAssetTypes] = useState<{ id: number; name: string }[]>([]);
  const [openTypeSelect, setOpenTypeSelect] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      name: "",
      typeId: 0,
      serialNumber: "",
      status: AssetStatus.AVAILABLE,
      price: "",
    },
  });

  useEffect(() => {
    async function fetchTypes() {
      const result = await getAssetTypes();
      if (result.success && result.data) {
        setAssetTypes(result.data);
      }
    }
    fetchTypes();
  }, []);

  async function onSubmit(data: AssetFormData) {
    setIsSubmitting(true);
    try {
      const payload = {
        ...data,
        price: data.price ? parseFloat(data.price) : undefined,
      };

      const result = await createAsset(payload as any);

      if (result.success) {
        toast.success("Asset created successfully");
        router.push("/assets"); 
      } else {
        toast.error(result.error || "Failed to create asset");
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Code <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="e.g. AST-001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="e.g. MacBook Pro M3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="typeId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Asset Type <span className="text-red-500">*</span></FormLabel>
                <Popover open={openTypeSelect} onOpenChange={setOpenTypeSelect}>
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
                          ? assetTypes.find((type) => type.id === field.value)?.name
                          : "Select asset type"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Search asset type..." />
                      <CommandList>
                        <CommandEmpty>No asset type found.</CommandEmpty>
                        <CommandGroup>
                          {assetTypes.map((type) => (
                            <CommandItem
                              value={type.name}
                              key={type.id}
                              onSelect={() => {
                                form.setValue("typeId", type.id);
                                setOpenTypeSelect(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  type.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {type.name}
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
            name="serialNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serial Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. C02XYZ123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purchaseDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Purchase Date</FormLabel>
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
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-2 pt-4">
           <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Asset"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
