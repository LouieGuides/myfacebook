"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AppShell } from "@/app/components/app-shell";
import { HighlightRow } from "@/app/components/highlight-row";
import { ModeCardToggle } from "@/app/components/mode-card-toggle";
import { PostCard } from "@/app/components/post-card";
import { useMode } from "@/app/context/mode-context";
import {
  getCommunities,
  getHighlights,
  getHomeFeedPosts,
  modeCopy,
  type Post,
} from "@/app/lib/mock-data";

export default function HomePage() {
  const { mode } = useMode();
  const communities = getCommunities(mode);
  const primaryCommunity = communities[0];
  const highlights = primaryCommunity
    ? getHighlights(mode, primaryCommunity.slug)
    : [];

  const [posts, setPosts] = useState<Post[]>(getHomeFeedPosts(mode));

  useEffect(() => {
    setPosts(getHomeFeedPosts(mode));
  }, [mode]);

  const handleReaction = (id: string, type: "like" | "comment" | "share") => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== id) return post;
        if (type === "like") return { ...post, likes: post.likes + 1 };
        if (type === "comment") return { ...post, comments: post.comments + 1 };
        return { ...post, shares: post.shares + 1 };
      })
    );
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {modeCopy[mode].label} home feed
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                myFacebookai
              </h1>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                {modeCopy[mode].subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/communities"
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore communities
              </Link>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                Mock data only
              </span>
            </div>
          </div>
          <div className="mt-6">
            <ModeCardToggle />
          </div>
        </section>

        {highlights.length > 0 ? <HighlightRow highlights={highlights} /> : null}

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Home feed
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                Latest community pulse
              </h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {posts.length} updates
            </span>
          </div>
        </section>

        <section className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={() => handleReaction(post.id, "like")}
              onComment={() => handleReaction(post.id, "comment")}
              onShare={() => handleReaction(post.id, "share")}
            />
          ))}
        </section>
      </div>
    </AppShell>
  );
}
