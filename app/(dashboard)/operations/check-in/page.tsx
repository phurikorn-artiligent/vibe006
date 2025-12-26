import { CheckInForm } from "@/components/operations/check-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CheckInPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Return Asset (Check-in)</h2>
      </div>
      <div className="space-y-4">
        <CheckInForm currentUser={session.user} />
      </div>
    </div>
  );
}
