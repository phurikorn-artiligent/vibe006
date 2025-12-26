'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
         <h1 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Welcome back
         </h1>
         <p className="text-slate-500 text-sm">
            Enter your credentials to access your account
         </p>
      </div>

      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
        <form action={formAction} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-slate-500">Email</Label>
            <div className="relative group">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="pl-10 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 h-10"
                  required
                />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-medium uppercase tracking-wider text-slate-500">Password</Label>
            </div>
            <div className="relative group">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="pl-10 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 h-10"
                  required
                  minLength={6}
                />
            </div>
          </div>
          
          <Button 
            className="w-full h-11 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/25 rounded-xl transition-all duration-300 group font-medium" 
            aria-disabled={isPending} 
            disabled={isPending}
          >
              {isPending ? (
                <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                    Authenticating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                    Sign in to Account 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
          </Button>

          {errorMessage && (
            <div
              className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-1"
              aria-live="polite"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
              {errorMessage}
            </div>
          )}
        </form>
      </div>

      <div className="text-center">
          <Link href="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors hover:underline underline-offset-4">
             Forgot your password?
          </Link>
      </div>
    </div>
  );
}
