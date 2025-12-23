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
} from "lucide-react";

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
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white border-r border-[#1F2937]">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
            <CircleDashed className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all">
            Asset Manager
          </h1>
        </Link>
        <div className="space-y-1">
          {sidebarRoutes.map((route) => {
            const isActive = pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href));
            
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition-all duration-200 relative overflow-hidden",
                  isActive 
                    ? "text-white bg-white/10 shadow-sm" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                 {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r-full" />
                 )}
                <div className="flex items-center flex-1 z-10">
                  <route.icon className={cn("h-5 w-5 mr-3 transition-colors", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-indigo-300")} />
                  {route.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="px-3 py-2">
         <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <p className="text-xs text-zinc-500 mb-1">Fixed Asset System</p>
            <p className="text-xs text-zinc-600">v1.0.0 Pro Max</p>
         </div>
      </div>
    </div>
  );
}
