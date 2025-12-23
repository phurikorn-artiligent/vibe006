import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Asset, AssetType, AssetStatus } from "@prisma/client";
import { Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssetWithRelations extends Asset {
  type: AssetType;
}

interface AssetTableProps {
  assets: AssetWithRelations[];
}

export function AssetTable({ assets }: AssetTableProps) {
  
  const getStatusColor = (status: AssetStatus) => {
    switch (status) {
      case "AVAILABLE": return "default"; // or "success" if we had one
      case "IN_USE": return "secondary"; // or "blue"
      case "MAINTENANCE": return "destructive"; // or "warning"
      case "RETIRED": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Serial Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center h-24">
                No assets found.
              </TableCell>
            </TableRow>
          ) : (
            assets.map((asset) => (
              <TableRow key={asset.id} className="cursor-pointer hover:bg-muted/50" >
                <TableCell className="font-medium">
                  <Link href={`/assets/${asset.id}`} className="block h-full w-full">
                    {asset.code}
                  </Link>
                </TableCell>
                <TableCell>
                    <Link href={`/assets/${asset.id}`}>{asset.name}</Link>
                </TableCell>
                <TableCell>{asset.type.name}</TableCell>
                <TableCell>{asset.serialNumber || "-"}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(asset.status) as any}>
                    {asset.status.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/assets/${asset.id}`}>
                    <Button variant="ghost" size="icon">
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
