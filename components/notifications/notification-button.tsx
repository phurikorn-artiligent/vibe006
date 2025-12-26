"use client";

import { useState } from "react";
import { Bell, BellOff, Loader2 } from "lucide-react";
import { requestNotificationPermission } from "@/lib/firebase-client";
import { saveFcmToken } from "@/app/actions/notifications";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function NotificationButton() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const token = await requestNotificationPermission();
      if (token) {
        const result = await saveFcmToken(token);
        if (result.success) {
          setSubscribed(true);
          toast.success("Notifications enabled!", {
            description: "You will now receive alerts for overdue assets."
          });
        } else {
            console.error(result.error);
            toast.error("Failed to save preference.");
        }
      } else {
        toast.info("Notification permission denied or ignored.");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading || subscribed}
      className={cn(
        "relative p-2 rounded-lg transition-colors group",
        subscribed 
            ? "text-green-500 hover:bg-green-500/10 cursor-default" 
            : "text-slate-400 hover:bg-blue-500/10 hover:text-blue-400"
      )}
      title={subscribed ? "Notifications Enabled" : "Enable Notifications"}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : subscribed ? (
        <Bell className="h-4 w-4" />
      ) : (
        <BellOff className="h-4 w-4" />
      )}
      
      {!subscribed && !loading && (
        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500 animate-pulse border border-slate-900" />
      )}
    </button>
  );
}
