import { getAssetById } from "@/app/actions/assets";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AssetDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AssetDetailPage(props: AssetDetailPageProps) {
  const params = await props.params;
  const id = Number(params.id);
  const result = await getAssetById(id);

  if (!result.success || !result.data) {
    return <div className="p-8">Asset not found</div>;
  }

  const asset = result.data;

  // Placeholder for current holder logic (Story 1.3 requirement)
  // Logic: Check last transaction. If CHECK_OUT, current holder is that employee.
  const lastTransaction = asset.transactions[0];
  const currentHolder = 
    lastTransaction?.action === "CHECK_OUT" 
      ? lastTransaction.employee 
      : null;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/assets">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">{asset.name}</h2>
          <Badge variant="outline">{asset.code}</Badge>
          <StatusBadge status={asset.status} />
        </div>
        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" /> Edit Asset
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Asset Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2">
                <span className="font-semibold">Type:</span>
                <span>{asset.type.name}</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="font-semibold">Serial Number:</span>
                <span>{asset.serialNumber || "-"}</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="font-semibold">Price:</span>
                <span>{asset.price ? `$${Number(asset.price).toFixed(2)}` : "-"}</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="font-semibold">Purchase Date:</span>
                <span>{asset.purchaseDate ? format(new Date(asset.purchaseDate), "PPP") : "-"}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
                <div className="text-sm font-medium text-muted-foreground">Current Holder</div>
                <div className="text-lg font-bold">
                    {currentHolder 
                        ? `${currentHolder.firstName} ${currentHolder.lastName}` 
                        : "None (In Stock)"}
                </div>
                {currentHolder && (
                    <div className="text-sm text-muted-foreground">{currentHolder.department}</div>
                )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Transaction History</h3>
        <div className="rounded-md border bg-white">
          <Table>
             <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Notes</TableHead>
                </TableRow>
             </TableHeader>
             <TableBody>
                {asset.transactions.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center h-24">No transactions yet.</TableCell>
                    </TableRow>
                ) : (
                    asset.transactions.map((t) => (
                        <TableRow key={t.id}>
                            <TableCell>{format(new Date(t.date), "PP p")}</TableCell>
                            <TableCell>
                                <Badge variant={t.action === "CHECK_OUT" ? "secondary" : "default"}>
                                    {t.action.replace("_", " ")}
                                </Badge>
                            </TableCell>
                            <TableCell>{t.employee.firstName} {t.employee.lastName}</TableCell>
                            <TableCell>{t.notes || "-"}</TableCell>
                        </TableRow>
                    ))
                )}
             </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
