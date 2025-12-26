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
import { getUsers } from "@/app/actions/users";
import { getAssets } from "@/app/actions/assets";
import { checkOutAsset } from "@/app/actions/operations";
import { AssetStatus, User } from "@/generated/client";

const formSchema = z.object({
  userId: z.number().min(1, "User is required"),
  assetId: z.number().min(1, "Asset is required"),
  date: z.date(),
  returnDate: z.date(),
  notes: z.string().optional(),
});


type CheckOutFormData = z.infer<typeof formSchema>;

interface CheckOutFormProps {

  currentUser: any; // Using any to avoid type gymnastics with NextAuth vs Prisma types for now, strictly we should map
}

export function CheckOutForm({ currentUser }: CheckOutFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [assets, setAssets] = useState<{ id: number; code: string; name: string }[]>([]);
  
  const [openUser, setOpenUser] = useState(false);
  const [openAsset, setOpenAsset] = useState(false);

  // Determine if we should lock the user field
  const isEmployee = currentUser?.role === "EMPLOYEE";
  const defaultUserId = isEmployee ? Number(currentUser.id) : 0;

  // Default return date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: defaultUserId,
      assetId: 0,
      date: new Date(),
      returnDate: tomorrow,
      notes: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch Employees
      const userResult = await getUsers();
      if (userResult.success && userResult.data) {
        setUsers(userResult.data);
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
        
        {/* User Selection */}
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>User <span className="text-red-500">*</span></FormLabel>
              {isEmployee ? (
                 <div className="h-10 px-3 py-2 rounded-md border border-input bg-muted text-sm text-muted-foreground">
                    {currentUser.name || currentUser.firstName} (You)
                 </div>
              ) : (
                <Popover open={openUser} onOpenChange={setOpenUser}>
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
                        ? users.find((u) => u.id === field.value)
                            ? `${users.find((u) => u.id === field.value)?.firstName} ${users.find((u) => u.id === field.value)?.lastName}`
                            : "Select user"
                        : "Select user"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search user..." />
                    <CommandList>
                      <CommandEmpty>No user found.</CommandEmpty>
                      <CommandGroup>
                        {users.map((user) => (
                          <CommandItem
                            value={`${user.firstName} ${user.lastName}`} // Searchable string
                            key={user.id}
                            onSelect={() => {
                              form.setValue("userId", user.id);
                              setOpenUser(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                user.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {user.firstName} {user.lastName}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              )}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            name="returnDate"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Return Date <span className="text-red-500">*</span></FormLabel>
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
                        date < new Date(new Date().setHours(0,0,0,0)) // Cannot be in past
                        }
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

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
