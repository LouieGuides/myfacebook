"use client";

import { useEffect, useState } from "react";

import { AppShell } from "@/app/components/app-shell";
import { CommunityCard } from "@/app/components/community-card";
import { CommunityCardSkeleton } from "@/app/components/skeletons";
import { useMode } from "@/app/context/mode-context";
import { getCommunities, modeCopy } from "@/app/lib/mock-data";

export default function CommunitiesPage() {
  const { mode } = useMode();
  const communities = getCommunities(mode);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timeout);
  }, [mode]);

  return (
    <AppShell>
      <div className="space-y-6">
        <header className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {modeCopy[mode].label} Mode
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                Discover communities
              </h1>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                {modeCopy[mode].description}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-right text-xs text-slate-500">
              <p className="text-lg font-semibold text-slate-900">
                {communities.length}
              </p>
              active groups
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CommunityCardSkeleton key={`community-skeleton-${index}`} />
              ))
            : communities.map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
        </section>
      </div>
    </AppShell>
  );
}
