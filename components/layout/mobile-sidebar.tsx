"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileSidebar() {
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
        <SidebarBase />
      </SheetContent>
    </Sheet>
  );
}

// Extracting the inner part of Sidebar or reusing Sidebar?
// Sidebar component has internal styling "h-full bg-[#111827]..."
// If we just render <Sidebar /> inside SheetContent, it might double the containers or mismatch.
// Let's modify Sidebar to be reusable or just use it as is if it fits.
// Checking Sidebar code: It returns a div with "h-full bg-[#111827] ...". 
// SheetContent has default padding, we removed it with p-0.
// So <Sidebar /> should work fine.

function SidebarBase() {
    return <Sidebar />; 
}
