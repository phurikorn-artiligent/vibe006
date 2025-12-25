import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns"; // Make sure date-fns is installed or use native Intl
import { Transaction, Asset, Employee, TransactionAction } from "@/generated/client";

interface RecentActivityProps {
  activity: (Transaction & {
    asset: Asset;
    employee: Employee;
  })[];
}

export function RecentActivity({ activity }: RecentActivityProps) {
  return (
    <div className="space-y-8">
      {activity.length === 0 ? (
        <p className="text-sm text-muted-foreground">No recent activity.</p>
      ) : (
        activity.map((transaction) => (
          <div key={transaction.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback>
                {transaction.action === TransactionAction.CHECK_OUT ? "OUT" : "IN"}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {transaction.asset.name} ({transaction.asset.code})
              </p>
              <p className="text-sm text-muted-foreground">
                {transaction.action === TransactionAction.CHECK_OUT ? "Assigned to" : "Returned by"}{" "}
                <span className="font-medium text-foreground">
                  {transaction.employee.firstName} {transaction.employee.lastName}
                </span>
              </p>
            </div>
            <div className="ml-auto font-medium text-sm text-muted-foreground">
              {format(new Date(transaction.date), "MMM d, h:mm a")}
            </div>
            <div className="ml-4">
                 <Badge variant={transaction.action === "CHECK_OUT" ? "secondary" : "default"}>
                    {transaction.action.replace("_", " ")}
                 </Badge>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
