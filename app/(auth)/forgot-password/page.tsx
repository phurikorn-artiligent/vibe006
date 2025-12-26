'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { requestPasswordReset } from "@/app/actions/auth";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const result = await requestPasswordReset(values.email);
      if (result.success) {
        setSuccessMessage("If an account exists with this email, you will receive a password reset link shortly.");
        form.reset();
      } else {
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
         <h1 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Forgot password?
         </h1>
         <p className="text-slate-500 text-sm">
            Enter your email and we'll help you reset it
         </p>
      </div>

      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
          {successMessage && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
               <p className="leading-relaxed">{successMessage}</p>
            </div>
          )}
          {errorMessage && (
             <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
               <p>{errorMessage}</p>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-medium uppercase tracking-wider text-slate-500">Email Address</FormLabel>
                    <FormControl>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                            <Input 
                                placeholder="name@company.com" 
                                type="email" 
                                {...field} 
                                className="pl-10 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 h-10"
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/25 rounded-xl transition-all duration-300 font-medium" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending Link...
                    </span>
                ) : (
                    "Send Reset Link"
                )}
              </Button>
            </form>
          </Form>
      </div>

       <div className="text-center">
            <Link href="/login" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
                Back to Login
            </Link>
        </div>
    </div>
  );
}
