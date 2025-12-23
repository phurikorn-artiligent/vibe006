"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ArrowRightLeft,
  Settings,
  LogOut,
  FolderOpen
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Assets",
    icon: Package,
    href: "/assets",
    color: "text-violet-500",
  },
  {
    label: "Calculators", // Just for variety or remove? No, stick to spec.
    icon: FolderOpen, // Placeholder
    href: "/operations", // Let's call it Operations as per Architecture
    color: "text-pink-700",
  },
];

// Based on UI Spec:
// Dashboard, Asset List, Check-out, Check-in, Settings
// Let's refine the routes:

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
    href: "/settings/asset-types", // Direct link to asset types for now
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Asset Manager</h1>
        </Link>
        <div className="space-y-1">
          {sidebarRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname.startsWith(route.href) ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
