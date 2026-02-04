"use client";

import { useEffect, useMemo, useState } from "react";

import { CommunityHeader } from "@/app/components/community-header";
import { CreatePostModal } from "@/app/components/create-post-modal";
import { HighlightRow } from "@/app/components/highlight-row";
import { PostCard } from "@/app/components/post-card";
import { PostCardSkeleton } from "@/app/components/skeletons";
import {
  getEventsForCommunity,
  getHighlights,
  getTagFilters,
  type Community,
  type Mode,
  type Post,
} from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

const sortOptions = ["Latest", "Popular"] as const;

type SortOption = (typeof sortOptions)[number];

export function CommunityFeed({
  community,
  initialPosts,
  mode,
}: {
  community: Community;
  initialPosts: Post[];
  mode: Mode;
}) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("Latest");
  const [activeTab, setActiveTab] = useState("Posts");
  const [selectedTag, setSelectedTag] = useState("All");

  const highlights = getHighlights(mode, community.slug);
  const events = getEventsForCommunity(mode, community.slug);
  const tagFilters = getTagFilters(mode, community.slug);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts, community.slug, mode]);

  useEffect(() => {
    setSelectedTag("All");
    setSortBy("Latest");
    setActiveTab("Posts");
  }, [community.slug, mode]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timeout);
  }, [community.slug, mode]);

  const handleCreatePost = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    // TODO: Send new post to the API once a backend exists.
    const newPost: Post = {
      id: `local-${Date.now()}`,
      author: "You",
      content: trimmed,
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: "Just now",
      timestamp: Date.now(),
      tags: selectedTag !== "All" ? [selectedTag] : [],
      isNew: true,
    };

    setPosts((prev) => [newPost, ...prev]);
    setIsModalOpen(false);

    setTimeout(() => {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === newPost.id ? { ...post, isNew: false } : post
        )
      );
    }, 800);
  };

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

  const filteredPosts = useMemo(() => {
    if (selectedTag === "All") return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const sortedPosts = useMemo(() => {
    if (sortBy === "Latest") {
      return [...filteredPosts].sort((a, b) => b.timestamp - a.timestamp);
    }
    return [...filteredPosts].sort(
      (a, b) => b.likes + b.comments + b.shares - (a.likes + a.comments + a.shares)
    );
  }, [filteredPosts, sortBy]);

  return (
    <div className="space-y-6">
      <CommunityHeader
        community={community}
        mode={mode}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "Posts" ? (
        <>
          {highlights.length > 0 ? <HighlightRow highlights={highlights} /> : null}

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Feed controls
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  Sort feed by
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSortBy(option)}
                    className={cx(
                      "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200",
                      sortBy === option
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {mode === "hobbyhub" && tagFilters.length > 0 ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {["All", ...tagFilters].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={cx(
                      "rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200",
                      selectedTag === tag
                        ? "bg-indigo-500 text-white"
                        : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ) : null}
          </section>

          {mode === "huddle" && events.length > 0 ? (
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Upcoming events
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900">
                    Plan your next meetup
                  </h2>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                >
                  View calendar
                </button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">
                        {event.title}
                      </p>
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                        {event.status}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-slate-500">{event.date}</p>
                    <p className="text-xs text-slate-500">{event.location}</p>
                    <button
                      type="button"
                      className="mt-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 active:scale-95"
                    >
                      RSVP
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="grid gap-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <PostCardSkeleton key={`post-skeleton-${index}`} />
                ))
              : sortedPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => handleReaction(post.id, "like")}
                    onComment={() => handleReaction(post.id, "comment")}
                    onShare={() => handleReaction(post.id, "share")}
                  />
                ))}
          </section>
        </>
      ) : null}

      {activeTab === "About" ? (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">About this space</h2>
          <p className="mt-3 text-sm text-slate-600">
            {community.description}
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">Community focus</p>
              <p className="mt-2">{community.tag}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">House rules</p>
              <p className="mt-2">Be helpful, stay respectful, share updates.</p>
            </div>
          </div>
        </section>
      ) : null}

      {activeTab === "Events" && mode === "huddle" ? (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Events lineup</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {event.title}
                </p>
                <p className="mt-2 text-xs text-slate-500">{event.date}</p>
                <p className="text-xs text-slate-500">{event.location}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 active:scale-95"
                >
                  RSVP
                </button>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {activeTab === "Topics" && mode === "hobbyhub" ? (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Topics and tags</h2>
          <p className="mt-2 text-sm text-slate-600">
            Filter posts by tag to surface the conversations you care about.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["All", ...tagFilters].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        disabled={isLoading}
        className="fixed bottom-8 right-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95 disabled:pointer-events-none disabled:opacity-60"
      >
        + Create Post
      </button>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}
