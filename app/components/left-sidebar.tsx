"use client";

import Link from "next/link";

import { useMode } from "@/app/context/mode-context";
import { modeCopy } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

const baseItems = [
  { label: "Home", href: "/", accent: "bg-sky-500" },
  { label: "Communities", href: "/communities", accent: "bg-indigo-500" },
  { label: "Trending", href: "/communities", accent: "bg-pink-500" },
];

export function LeftSidebar() {
  const { mode } = useMode();
  const modeItem =
    mode === "huddle"
      ? { label: "Events", href: "/communities", accent: "bg-emerald-500" }
      : { label: "Topics", href: "/communities", accent: "bg-amber-500" };

  const items = [...baseItems, modeItem];

  return (
    <div className="sticky top-24 space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Navigation
        </p>
        <div className="mt-4 space-y-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <span
                  className={cx(
                    "h-2.5 w-2.5 rounded-full",
                    item.accent
                  )}
                />
                {item.label}
              </span>
              <span className="text-xs text-slate-400 transition group-hover:text-slate-600">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Mode
        </p>
        <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-lg font-semibold text-slate-900">
            {modeCopy[mode].label}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {modeCopy[mode].subtitle}
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Switch modes from the top bar to preview the other audience.
          </p>
        </div>
      </div>
    </div>
  );
}
