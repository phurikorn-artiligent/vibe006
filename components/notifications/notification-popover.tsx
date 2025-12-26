"use client";

import { useState, useEffect } from "react";
import { Bell, Loader2, Calendar, Package } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getUserNotifications, saveFcmToken } from "@/app/actions/notifications";
import { requestNotificationPermission } from "@/lib/firebase-client";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function NotificationPopover() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    if (open) {
      loadNotifications();
    }
  }, [open]);

  const loadNotifications = async () => {
    setLoading(true);
    const result = await getUserNotifications();
    if (result.success) {
      setNotifications(result.data || []);
    }
    setLoading(false);
  };

  const handleSubscribe = async () => {
    setSubscribing(true);
    try {
      const token = await requestNotificationPermission();
      if (token) {
        const deviceInfo = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
        const result = await saveFcmToken(token, deviceInfo);
        if (result.success) {
          toast.success("Notifications enabled!", {
            description: "You will receive alerts for overdue assets."
          });
        }
      } else {
        toast.info("Permission denied or ignored.");
      }
    } catch (error) {
      toast.error("Failed to enable notifications.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-blue-400 hover:bg-blue-500/10">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && notifications[0]?.status === 'SUCCESS' && ( // Simple indicator logic
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-slate-900" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 mr-4 border-slate-200/20 shadow-2xl bg-white/95 backdrop-blur-xl" align="end" sideOffset={10}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h4 className="font-bold text-slate-900">Notifications</h4>
            <p className="text-[10px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-full w-fit mt-1">
               {notifications.length} Unread
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSubscribe} 
            disabled={subscribing}
            className={cn(
                "h-7 text-xs font-semibold border-slate-200 hover:bg-white hover:text-blue-600 transition-all shadow-sm",
                subscribing && "opacity-70 cursor-not-allowed"
            )}
          >
            {subscribing ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Bell className="h-3 w-3 mr-1" />}
            {subscribing ? "Enabling..." : "Enable Push"}
          </Button>
        </div>
        <ScrollArea className="h-[350px]">
          {loading ? (
            <div className="flex items-center justify-center h-[200px] flex-col gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              <p className="text-xs text-slate-400 font-medium">Loading alerts...</p>
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[250px] p-8 text-center">
              <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-slate-300" />
              </div>
              <p className="text-sm font-semibold text-slate-900">All caught up!</p>
              <p className="text-xs text-slate-500 mt-1 max-w-[150px]">You have no new notifications at the moment.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-50">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4 hover:bg-blue-50/40 transition-colors cursor-pointer group relative">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                        "mt-1 h-9 w-9 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white",
                        notification.type === 'EMAIL' ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                    )}>
                      {notification.type === 'EMAIL' ? (
                          <Package className="h-4 w-4" /> 
                      ) : (
                          <Bell className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-800 leading-none group-hover:text-blue-700 transition-colors">
                            {notification.type === 'EMAIL' ? 'Overdue Asset Alert' : 'System Notification'}
                          </p>
                          <span className="text-[10px] text-slate-400 font-medium tabular-nums">
                            {format(new Date(notification.sentAt), "h:mm a")}
                          </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                         Asset <span className="font-mono text-slate-800 bg-slate-100 px-1 rounded">{notification.asset.code}</span> is marked as overdue. Please return it immediately.
                      </p>
                      
                      <div className="flex items-center pt-2 gap-3">
                        <div className="flex items-center text-[10px] text-slate-400 font-medium">
                            <Calendar className="mr-1 h-3 w-3" />
                            {format(new Date(notification.sentAt), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
