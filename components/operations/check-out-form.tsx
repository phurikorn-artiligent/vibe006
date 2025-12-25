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
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getEmployees } from "@/app/actions/employees";
import { getAssets } from "@/app/actions/assets";
import { checkOutAsset } from "@/app/actions/operations";
import { AssetStatus, Employee } from "@/generated/client";

const formSchema = z.object({
  employeeId: z.number().min(1, "Employee is required"),
  assetId: z.number().min(1, "Asset is required"),
  date: z.date(),
  notes: z.string().optional(),
});

type CheckOutFormData = z.infer<typeof formSchema>;

export function CheckOutForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [assets, setAssets] = useState<{ id: number; code: string; name: string }[]>([]);
  
  const [openEmployee, setOpenEmployee] = useState(false);
  const [openAsset, setOpenAsset] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeId: 0,
      assetId: 0,
      date: new Date(),
      notes: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch Employees
      const empResult = await getEmployees();
      if (empResult.success && empResult.data) {
        setEmployees(empResult.data);
      }

      // Fetch Available Assets
      const assetResult = await getAssets({ status: AssetStatus.AVAILABLE, limit: 100 }); // Limit 100 for now
      if (assetResult.success && assetResult.data) {
        setAssets(assetResult.data);
      }
    }
    fetchData();
  }, []);

  async function onSubmit(data: CheckOutFormData) {
    setIsSubmitting(true);
    try {
      const result = await checkOutAsset(data);

      if (result.success) {
        toast.success("Asset assigned successfully");
        router.push("/assets"); // Redirect to asset list to see status change
      } else {
        toast.error(result.error || "Failed to assign asset");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl glass-card p-6 rounded-xl border shadow-sm">
        
        {/* Employee Selection */}
        <FormField
          control={form.control}
          name="employeeId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Employee <span className="text-red-500">*</span></FormLabel>
              <Popover open={openEmployee} onOpenChange={setOpenEmployee}>
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
                        ? employees.find((e) => e.id === field.value)
                            ? `${employees.find((e) => e.id === field.value)?.firstName} ${employees.find((e) => e.id === field.value)?.lastName}`
                            : "Select employee"
                        : "Select employee"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search employee..." />
                    <CommandList>
                      <CommandEmpty>No employee found.</CommandEmpty>
                      <CommandGroup>
                        {employees.map((employee) => (
                          <CommandItem
                            value={`${employee.firstName} ${employee.lastName}`} // Searchable string
                            key={employee.id}
                            onSelect={() => {
                              form.setValue("employeeId", employee.id);
                              setOpenEmployee(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                employee.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {employee.firstName} {employee.lastName}
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

        {/* Asset Selection */}
        <FormField
          control={form.control}
          name="assetId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Asset (Available) <span className="text-red-500">*</span></FormLabel>
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
                      <CommandEmpty>No available assets found.</CommandEmpty>
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
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Assignment Date</FormLabel>
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
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Additional notes for this assignment..." 
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
            {isSubmitting ? "Processing..." : "Assign Asset"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
