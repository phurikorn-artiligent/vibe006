"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ArrowRightLeft,
  Settings,
  CircleDashed,
  LogOut,
  Bell,
} from "lucide-react";
import { logout } from "@/app/actions/auth";
import { NotificationPopover } from "@/components/notifications/notification-popover";

const sidebarRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Asset Inventory",
    icon: Package,
    href: "/assets",
  },
  {
    label: "Check-in",
    icon: ArrowRightLeft,
    href: "/operations/check-in",
  },
  {
    label: "Check-out",
    icon: ArrowRightLeft,
    href: "/operations/check-out",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings/asset-types",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/admin/notifications",
  },
];

import { Role } from "@/generated/client";

interface SidebarProps {
  role?: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const filteredRoutes = sidebarRoutes.filter(route => {
    if (role === 'EMPLOYEE') {
        // Employee cannot see Settings or Notifications
        return route.label !== 'Settings' && route.label !== 'Notifications';
    }
    return true; 
  });

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-slate-100 border-r border-slate-800 shadow-xl">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-10 group mt-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
            <CircleDashed className="h-6 w-6 text-white group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight text-white">
              Asset Manager
            </h1>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Enterprise Edition</span>
          </div>
        </Link>
        
        <div className="space-y-1">
          {filteredRoutes.map((route) => {
            const isActive = pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href));
            
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200 relative overflow-hidden",
                  isActive 
                    ? "bg-blue-600/10 text-blue-400" 
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                )}
              >
                 {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                 )}
                <div className="flex items-center flex-1 z-10">
                  <route.icon className={cn("h-5 w-5 mr-3 transition-colors", isActive ? "text-blue-500" : "text-slate-500 group-hover:text-slate-300")} />
                  {route.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      
      <div className="px-3 py-2">
         <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-slate-900">
                        {role === 'ADMIN' ? 'AD' : 'US'}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs font-medium text-white">Current User</p>
                        <p className="text-[10px] text-slate-400 capitalize">{role?.toLowerCase()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <NotificationPopover />
                    <button 
                      onClick={() => logout()}
                      className="p-2 rounded-lg hover:bg-red-500/10 hover:text-red-400 text-slate-400 transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
