import { getDashboardStats, getRecentActivity } from "@/app/actions/dashboard";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function DashboardPage() {
  const statsData = await getDashboardStats();
  const activityData = await getRecentActivity();

  if (!statsData.success || !statsData.data) {
    return <div>Failed to load dashboard stats.</div>;
  }
  
  if (!activityData.success || !activityData.data) {
    return <div>Failed to load recent activity.</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <StatsCards stats={statsData.data} />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
             <CardDescription>
                Quick view of your asset inventory status.
              </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Visual Chart could go here if requested, for now placeholder or just spacing */}
            <div className="h-[200px] flex items-center justify-center text-muted-foreground text-sm">
                 Visual Chart Placeholder (Future Enhancement)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest 5 transactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity activity={activityData.data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
