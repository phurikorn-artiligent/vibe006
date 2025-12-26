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
    limit?: string;
    search?: string;
    status?: string | string[];
    typeId?: string;
  }>;
}

export default async function AssetListPage(props: AssetListPageProps) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;
  const search = searchParams.search || "";
  
  // Handle status which can be string or array
  let status: AssetStatus | AssetStatus[] | undefined = undefined;
  if (searchParams.status) {
      if (Array.isArray(searchParams.status)) {
           status = searchParams.status as AssetStatus[];
      } else if (searchParams.status !== 'all') {
           // It might be a single string "AVAILABLE" or multiple "AVAILABLE,IN_USE" depending on how next parses?
           // Actually Next.js 15 searchParams is async prop but plain object. 
           // If multiple params ?status=A&status=B, it behaves differently in different environments but usually string | string[]
           // Let's assume safely.
           const param = searchParams.status;
           if (typeof param === 'string' && param.includes(',')) {
                status = param.split(',') as AssetStatus[];
           } else {
                status = param as AssetStatus;
           }
      }
  }

  const typeId = searchParams.typeId && searchParams.typeId !== "all"
    ? Number(searchParams.typeId)
    : undefined;

  const result = await getAssets({
    page,
    limit,
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
