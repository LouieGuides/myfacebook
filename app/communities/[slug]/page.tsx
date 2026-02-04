"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { AppShell } from "@/app/components/app-shell";
import { CommunityFeed } from "@/app/components/community-feed";
import { useMode } from "@/app/context/mode-context";
import { getCommunityBySlug, getPostsForCommunity } from "@/app/lib/mock-data";

export default function CommunityFeedPage() {
  const params = useParams<{ slug: string }>();
  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
      ? params.slug[0]
      : "";
  const { mode } = useMode();
  const community = slug ? getCommunityBySlug(mode, slug) : null;

  if (!community) {
    return (
      <AppShell>
        <div className="flex w-full flex-col items-center text-center">
          <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Community not found
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900">
              This community lives in the other mode.
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Switch modes using the toggle above or head back to discovery.
            </p>
            <Link
              href="/communities"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Browse communities
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  const initialPosts = getPostsForCommunity(mode, slug);

  return (
    <AppShell>
      <CommunityFeed community={community} initialPosts={initialPosts} mode={mode} />
    </AppShell>
  );
}
