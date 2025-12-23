import { getAssetTypes } from "@/app/actions/asset-types";
import { AssetTypeList } from "@/components/asset-types/asset-type-list";

export default async function AssetTypesPage() {
  const result = await getAssetTypes();

  if (!result.success || !result.data) {
    return <div>Failed to load asset types</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="space-y-4">
        <AssetTypeList initialData={result.data} />
      </div>
    </div>
  );
}
