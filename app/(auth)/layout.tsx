import { ShieldCheck, Lock, Activity, Globe } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900">
      {/* Left: Brand/Marketing Side */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-r border-slate-800 flex-col justify-between p-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(79,70,229,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Logo/Brand */}
        <div className="relative z-10 flex items-center gap-2">
           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <ShieldCheck className="h-6 w-6 text-white" />
           </div>
           <h1 className="text-xl font-bold text-slate-100 tracking-tight">
              Asset<span className="text-indigo-400">Guard</span>
           </h1>
        </div>

        {/* Feature Showcase */}
        <div className="relative z-10 max-w-lg space-y-8">
           <h2 className="text-4xl font-bold text-white leading-tight">
             Secure enterprise asset management for modern teams.
           </h2>
           <div className="space-y-4">
              <FeatureItem icon={Lock} title="Role-Based Security"  />
              <FeatureItem icon={Activity} title="Real-time Tracking"  />
              <FeatureItem icon={Globe} title="Cloud Infrastructure"  />
           </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
           <p className="text-slate-500 text-sm font-medium">© 2025 Artiligent Corp. All rights reserved.</p>
        </div>
      </div>

      {/* Right: Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
         <div className="absolute inset-0 bg-white dark:bg-slate-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
          
         <div className="w-full max-w-[400px] relative z-10">
            {children}
         </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <div className="flex items-center gap-4 group">
       <div className="h-12 w-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-800 group-hover:border-indigo-500/50">
          <Icon className="h-5 w-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
       </div>
       <div>
          <h3 className="text-slate-200 font-medium group-hover:text-white transition-colors">{title}</h3>
          <p className="text-slate-500 text-xs">Enterprise Grade</p>
       </div>
    </div>
  )
}
