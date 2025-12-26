import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Asset, AssetType, AssetStatus, Transaction, User } from "@/generated/client";
import { Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssetWithRelations extends Asset {
  type: AssetType;
  transactions: (Transaction & {
    user: User;
  })[];
}

interface AssetTableProps {
  assets: AssetWithRelations[];
}

export function AssetTable({ assets }: AssetTableProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50/80 border-b border-slate-200">
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold text-slate-700">Asset Code</TableHead>
            <TableHead className="font-semibold text-slate-700">Name</TableHead>
            <TableHead className="font-semibold text-slate-700">Type</TableHead>
            <TableHead className="font-semibold text-slate-700">Serial No.</TableHead>
            <TableHead className="font-semibold text-slate-700">Status</TableHead>
            <TableHead className="font-semibold text-slate-700">Current Holder</TableHead>
            <TableHead className="text-right font-semibold text-slate-700">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center h-32 text-muted-foreground italic">
                No assets found in inventory.
              </TableCell>
            </TableRow>
          ) : (
            assets.map((asset) => (
              <TableRow key={asset.id} className="cursor-pointer hover:bg-blue-50/50 transition-colors group border-b border-slate-100 last:border-0" >
                <TableCell className="font-medium font-mono text-slate-600">
                  <Link href={`/assets/${asset.id}`} className="block h-full w-full">
                    {asset.code}
                  </Link>
                </TableCell>
                <TableCell className="font-medium text-slate-900">
                    <Link href={`/assets/${asset.id}`}>{asset.name}</Link>
                </TableCell>
                <TableCell className="text-slate-500">{asset.type.name}</TableCell>
                <TableCell className="text-slate-500 font-mono text-xs">{asset.serialNumber || "-"}</TableCell>
                <TableCell>
                  <StatusBadge status={asset.status} className="shadow-none" />
                </TableCell>
                <TableCell className="text-slate-600">
                  {asset.status === AssetStatus.IN_USE && asset.transactions[0]?.action === "CHECK_OUT" 
                    ? (
                        <div className="flex items-center gap-2">
                             <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                                {asset.transactions[0].user.firstName[0]}
                             </div>
                             <span className="text-sm">{asset.transactions[0].user.firstName} {asset.transactions[0].user.lastName}</span>
                        </div>
                      )
                    : <span className="text-slate-400">-</span>}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/assets/${asset.id}`}>
                    <Button variant="ghost" size="sm" className="hidden group-hover:inline-flex h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="inline-flex group-hover:hidden h-8 w-8 p-0 text-slate-400">
                        <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
