"use client";

import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center px-4">
      {/* Ambient gradient + subtle grid background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl" />
        <svg className="absolute inset-0 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-lg w-full bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] text-center">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text">
          Thanks for your pitch! ✨
        </h1>

        <p className="mt-4 text-slate-400 text-sm">
          We’ve received your submission. If it’s a fit, we’ll reach out to schedule time.
        </p>
        
        <p className="mt-1 text-slate-500 text-xs">
          Make sure to check your inbox (and spam folder) for confirmation.
        </p>

        <div className="mt-8">
          <Link href="/">
            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-2 text-white font-semibold shadow-[0_0_25px_rgba(244,114,182,0.5)] hover:text-yellow-200 hover:shadow-[0_0_35px_rgba(244,214,70,0.4)]">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
