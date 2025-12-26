"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Role } from "@/generated/client";

interface MobileSidebarProps {
  role?: Role;
}

export function MobileSidebar({ role }: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-gray-900 border-gray-800 text-white w-72">
        <Sidebar role={role} />
      </SheetContent>
    </Sheet>
  );
}
