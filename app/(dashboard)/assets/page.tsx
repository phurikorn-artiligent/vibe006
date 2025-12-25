import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AssetTable } from "@/components/assets/asset-table";
import { AssetFilters } from "@/components/assets/asset-filters";
import { AssetPagination } from "@/components/assets/asset-pagination";
import { getAssets } from "@/app/actions/assets";
import { AssetStatus } from "@/generated/client";

interface AssetListPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
    typeId?: string;
  }>;
}

export default async function AssetListPage(props: AssetListPageProps) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const status = searchParams.status && searchParams.status !== "all" 
    ? (searchParams.status as AssetStatus) 
    : undefined;
  const typeId = searchParams.typeId && searchParams.typeId !== "all"
    ? Number(searchParams.typeId)
    : undefined;

  const result = await getAssets({
    page,
    limit: 10,
    search,
    status,
    typeId,
  });

  if (!result.success || !result.data) {
    return <div>Failed to load assets</div>;
  }

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
      
      <AssetFilters />
      
      <AssetTable assets={result.data} />
      
      {result.metadata && <AssetPagination metadata={result.metadata} />}
    </div>
  );
}
