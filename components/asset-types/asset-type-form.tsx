"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createAssetType, updateAssetType } from "@/app/actions/asset-types";
import { toast } from "sonner";

const assetTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

type AssetTypeFormData = z.infer<typeof assetTypeSchema>;

interface AssetTypeFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  assetTypeToEdit?: { id: number; name: string; description: string | null } | null;
  onSuccess: () => void;
}

export function AssetTypeForm({
  open,
  onOpenChange,
  assetTypeToEdit,
  onSuccess,
}: AssetTypeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AssetTypeFormData>({
    resolver: zodResolver(assetTypeSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // Reset form when opening/closing or switching edit mode
  useEffect(() => {
    if (open) {
      form.reset({
        name: assetTypeToEdit?.name || "",
        description: assetTypeToEdit?.description || "",
      });
    }
  }, [open, assetTypeToEdit, form]);

  async function onSubmit(data: AssetTypeFormData) {
    setIsSubmitting(true);
    try {
      let result;
      if (assetTypeToEdit) {
        result = await updateAssetType(assetTypeToEdit.id, data);
      } else {
        result = await createAssetType(data);
      }

      if (result.success) {
        toast.success(
          assetTypeToEdit
            ? "Asset type updated successfully"
            : "Asset type created successfully"
        );
        onOpenChange(false);
        onSuccess();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {assetTypeToEdit ? "Edit Asset Type" : "Create Asset Type"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Laptop" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Optional description" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
