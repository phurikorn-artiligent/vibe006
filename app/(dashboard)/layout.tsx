import { auth } from "@/auth";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  // Optional: Enforce login here if middleware misses it, or just to get types right
  if (!session?.user) {
      redirect("/login");
  }

  const userRole = session.user.role;

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar role={userRole} />
      </div>
      <main className="md:pl-72 pb-10">
        <div className="flex items-center p-4 md:hidden">
             <MobileSidebar role={userRole} />
             <div className="font-bold ml-2">Asset Manager</div>
        </div>
        {children}
      </main>
    </div>
  );
}
