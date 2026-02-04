"use client";

import { modeCopy, type Community, type Mode } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

export function CommunityHeader({
  community,
  mode,
  activeTab,
  onTabChange,
}: {
  community: Community;
  mode: Mode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const tabs = [
    "Posts",
    "About",
    mode === "huddle" ? "Events" : "Topics",
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm">
      <div
        className={cx(
          "h-36 bg-gradient-to-br",
          community.banner
        )}
      />
      <div className="px-6 pb-6">
        <div className="-mt-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={cx(
                "flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br text-2xl font-semibold text-white shadow-lg",
                community.accent
              )}
            >
              {community.name
                .split(" ")
                .slice(0, 2)
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {modeCopy[mode].label} Community
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                {community.name}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {community.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {community.memberCount} members
            </span>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
            >
              Join community
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={cx(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200",
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-sm"
                  : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
