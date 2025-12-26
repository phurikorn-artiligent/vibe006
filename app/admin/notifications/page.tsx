import { getNotificationLogs } from "@/app/actions/notifications";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

export default async function NotificationsPage() {
  const { data: logs, success, error } = await getNotificationLogs();

  if (!success) {
    return <div className="p-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notification Logs</h1>
          <p className="text-muted-foreground mt-2">
            History of automated alerts and notifications.
          </p>
        </div>
      </div>

      <Card className="glass-card border-none shadow-sm">
        <CardHeader>
          <CardTitle>Recent Alerts ({logs?.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                    No notifications sent yet.
                  </TableCell>
                </TableRow>
              ) : (
                logs?.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {format(new Date(log.sentAt), "MMM d, yyyy HH:mm")}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{log.user.firstName} {log.user.lastName}</span>
                        <span className="text-xs text-muted-foreground">{log.user.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{log.asset.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">[{log.asset.code}]</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={log.status === "SUCCESS" ? "default" : "destructive"}
                        className={log.status === "SUCCESS" ? "bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200" : ""}
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[300px] truncate text-sm text-muted-foreground" title={log.message || ""}>
                      {log.message}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
