import { CheckOutForm } from "@/components/operations/check-out-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CheckOutPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Assign Asset (Check-out)</h2>
      </div>
      <div className="space-y-4">
        <CheckOutForm currentUser={session.user} />
      </div>
    </div>
  );
}
