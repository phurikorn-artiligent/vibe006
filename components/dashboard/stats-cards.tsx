import Link from "next/link";
import { AssetStatus } from "@/generated/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, CheckCircle, Wrench, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStats {
  total: number;
  available: number;
  inUse: number;
  maintenance: number;
  retired: number;
}

interface StatsCardsProps {
  stats: DashboardStats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      
      <Link href="/assets">
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Box className="h-24 w-24 text-slate-500 transform rotate-12 translate-x-4 -translate-y-4" />
           </div>
           <div className="flex items-center justify-between mb-4">
               <div>
                   <p className="text-sm font-medium text-muted-foreground">Total Assets</p>
                   <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.total}</h3>
               </div>
               <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                   <Box className="h-6 w-6 text-slate-600" />
               </div>
           </div>
           <div className="flex items-center text-xs text-muted-foreground">
               <span className="text-emerald-500 font-medium flex items-center mr-1">
                 Active
               </span>
               inventory
           </div>
        </div>
      </Link>

      <Link href={`/assets?status=${AssetStatus.AVAILABLE}`}>
         <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <CheckCircle className="h-24 w-24 text-emerald-500 transform rotate-12 translate-x-4 -translate-y-4" />
           </div>
           <div className="flex items-center justify-between mb-4">
               <div>
                   <p className="text-sm font-medium text-muted-foreground">Available</p>
                   <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.available}</h3>
               </div>
               <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                   <CheckCircle className="h-6 w-6 text-emerald-600" />
               </div>
           </div>
           <div className="flex items-center text-xs text-muted-foreground">
               <span className="text-emerald-600 font-medium">Ready to assign</span>
           </div>
        </div>
      </Link>

      <Link href={`/assets?status=${AssetStatus.IN_USE}`}>
         <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Box className="h-24 w-24 text-blue-500 transform rotate-12 translate-x-4 -translate-y-4" />
           </div>
           <div className="flex items-center justify-between mb-4">
               <div>
                   <p className="text-sm font-medium text-muted-foreground">In Use</p>
                   <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.inUse}</h3>
               </div>
               <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                   <Box className="h-6 w-6 text-blue-600" />
               </div>
           </div>
           <div className="flex items-center text-xs text-muted-foreground">
               <span className="text-blue-600 font-medium">Currently assigned</span>
           </div>
        </div>
      </Link>

      <Link href={`/assets?status=${AssetStatus.MAINTENANCE}`}>
         <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Wrench className="h-24 w-24 text-amber-500 transform rotate-12 translate-x-4 -translate-y-4" />
           </div>
           <div className="flex items-center justify-between mb-4">
               <div>
                   <p className="text-sm font-medium text-muted-foreground">Maintenance</p>
                   <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.maintenance}</h3>
               </div>
               <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                   <Wrench className="h-6 w-6 text-amber-600" />
               </div>
           </div>
           <div className="flex items-center text-xs text-muted-foreground">
               <span className="text-amber-600 font-medium">Under repair</span>
           </div>
        </div>
      </Link>
    </div>
  );
}
