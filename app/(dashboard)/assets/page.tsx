import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AssetListPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Asset Inventory</h2>
        <Link href="/assets/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Asset
          </Button>
        </Link>
      </div>
      <div className="rounded-md border p-4 bg-white">
        <p className="text-muted-foreground text-center">
            Asset List Table will be implemented in Story 1.3
        </p>
      </div>
    </div>
  );
}
