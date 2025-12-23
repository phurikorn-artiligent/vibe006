import { Badge } from "@/components/ui/badge";
import { AssetStatus } from "@prisma/client";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: AssetStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusStyles = (status: AssetStatus) => {
    switch (status) {
      case AssetStatus.AVAILABLE:
        return "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-transparent";
      case AssetStatus.IN_USE:
        return "bg-blue-100 text-blue-700 hover:bg-blue-200 border-transparent";
      case AssetStatus.MAINTENANCE:
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 border-transparent";
      case AssetStatus.RETIRED:
        return "bg-red-100 text-red-700 hover:bg-red-200 border-transparent";
      default:
        return "bg-slate-100 text-slate-700 hover:bg-slate-200 border-transparent";
    }
  };

  const label = status.replace(/_/g, " ");

  return (
    <Badge 
      variant="outline" 
      className={cn(getStatusStyles(status), "font-medium border-0", className)}
    >
      {label}
    </Badge>
  );
}
