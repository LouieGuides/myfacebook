import Link from "next/link";

import { ModePillToggle } from "@/app/components/mode-pill-toggle";

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-sm font-semibold text-white shadow-lg">
            mf
          </div>
          <div>
            <Link href="/" className="text-sm font-semibold text-slate-900">
              myFacebookai
            </Link>
            <p className="text-xs text-slate-500">Community demo</p>
          </div>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            <input
              type="text"
              placeholder="Search communities and posts"
              className="w-full bg-transparent text-xs text-slate-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/communities"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
          >
            Explore Communities
          </Link>
          <Link
            href="/roadmap"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
          >
            Roadmap
          </Link>
          <ModePillToggle />
        </div>
      </div>
    </header>
  );
}
