import { getDashboardStats, getRecentActivity } from "@/app/actions/dashboard";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function DashboardPage() {
  const statsData = await getDashboardStats();
  const activityData = await getRecentActivity();

  if (!statsData.success || !statsData.data) {
    return <div className="p-8 text-red-500">Failed to load dashboard stats.</div>;
  }
  
  if (!activityData.success || !activityData.data) {
    return <div className="p-8 text-red-500">Failed to load recent activity.</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div>
           <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
             Dashboard Overview
           </h2>
           <p className="text-muted-foreground mt-1">
             Welcome back. Here is the latest status of your asset inventory.
           </p>
        </div>
        <div className="hidden md:flex items-center space-x-2">
            {/* Place for DatePicker or Time range filter in future */}
        </div>
      </div>
      
      <StatsCards stats={statsData.data} />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 glass-card rounded-xl p-1">
            <CardHeader>
                <CardTitle>Inventory Trends</CardTitle>
                <CardDescription>
                    Visual breakdown of asset distribution (Coming Soon)
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[250px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 rounded-lg border border-dashed border-slate-200">
                    <p className="text-sm text-slate-400 font-medium">Chart Visualization Placeholder</p>
                </div>
            </CardContent>
        </div>

        <div className="col-span-3 glass-card rounded-xl p-1">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                    Latest 5 transactions recorded.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RecentActivity activity={activityData.data} />
            </CardContent>
        </div>
      </div>
    </div>
  );
}
