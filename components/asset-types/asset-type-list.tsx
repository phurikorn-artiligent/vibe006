"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AssetTypeForm } from "./asset-type-form";
import { MoreHorizontal, Pencil, Trash2, Plus } from "lucide-react";
import { deleteAssetType } from "@/app/actions/asset-types";
import { toast } from "sonner";

interface AssetType {
  id: number;
  name: string;
  description: string | null;
  _count: {
    assets: number;
  };
}

interface AssetTypeListProps {
  initialData: AssetType[];
}

export function AssetTypeList({ initialData }: AssetTypeListProps) {
  const [assetTypes, setAssetTypes] = useState<AssetType[]>(initialData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingType, setEditingType] = useState<AssetType | null>(null);

  // Note: In a real RSC setup with revalidatePath, 
  // the parent page would re-render and pass new initialData.
  // However, for immediate feedback if we want optimistic UI or simple state sync,
  // we can use useEffect or just rely on the server action revalidation refreshing the page router.
  // Here we'll trust revalidatePath refreshes the page content passed as props.
  // BUT: React state doesn't automatically update from props change unless we sync it.
  
  // Actually, better pattern with Next.js Server Actions + Server Components:
  // The page component fetches data. When action completes, revalidatePath runs, 
  // page re-renders on server, sends new HTML/payload to client.
  // So 'initialData' prop WILL update.
  // We should useEffect to sync state if we are creating a client-side search/filter on top,
  // or just use router.refresh() if needed. 
  // Let's keep it simple: we assume 'initialData' is fresh from server.
  
  if (assetTypes !== initialData) {
     setAssetTypes(initialData);
  }

  const handleCreate = () => {
    setEditingType(null);
    setIsFormOpen(true);
  };

  const handleEdit = (type: AssetType) => {
    setEditingType(type);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    // Ideally use a confirmation dialog here. For now using window.confirm for simplicity, 
    // or we can add an AlertDialog component later.
    if (!confirm("Are you sure you want to delete this asset type?")) return;

    const result = await deleteAssetType(id);
    if (result.success) {
      toast.success("Asset type deleted successfully");
    } else {
      toast.error(result.error || "Failed to delete");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Asset Types</h2>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" /> Add Type
        </Button>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Assets Count</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assetTypes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center h-24">
                  No asset types found.
                </TableCell>
              </TableRow>
            ) : (
              assetTypes.map((type) => (
                <TableRow key={type.id}>
                  <TableCell className="font-medium">{type.name}</TableCell>
                  <TableCell>{type.description || "-"}</TableCell>
                  <TableCell className="text-right">{type._count.assets}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(type)}>
                          <Pencil className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(type.id)}
                          className="text-red-600 focus:text-red-600"
                          disabled={type._count.assets > 0}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AssetTypeForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        assetTypeToEdit={editingType}
        onSuccess={() => {/* Page will auto-refresh via server action revalidation */}}
      />
    </div>
  );
}
