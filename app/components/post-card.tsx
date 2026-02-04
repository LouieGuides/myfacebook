"use client";

import { useMemo, useState } from "react";

import { cx } from "@/app/lib/utils";
import type { Post } from "@/app/lib/mock-data";

const avatarStyles = [
  "from-sky-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-fuchsia-500 to-pink-500",
  "from-indigo-500 to-violet-500",
  "from-slate-500 to-slate-700",
];

function getInitials(name: string) {
  const parts = name.split(" ");
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function IconLike() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7.5 17.5h6.4c1 0 1.9-.7 2.1-1.7l1.4-6.3c.2-.8-.4-1.6-1.2-1.6H11l.3-1.8c.1-.9-.5-1.7-1.4-1.9l-.8-.2-2.6 4.5c-.3.5-.5 1-.5 1.6v5.4c0 1 .8 1.8 1.5 2z" />
      <path d="M3 9.5h2v8H3a1 1 0 01-1-1v-6a1 1 0 011-1z" />
    </svg>
  );
}

function IconComment() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4 4h12a2 2 0 012 2v6a2 2 0 01-2 2H9l-4 3v-3H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13 5l-1.4 1.4 1.1 1.1H9a4 4 0 00-4 4v3h2v-3a2 2 0 012-2h3.7l-1.1 1.1L13 12l4-4-4-3z" />
      <path d="M3 6h4V4H3a1 1 0 00-1 1v10a1 1 0 001 1h4v-2H4V6z" />
    </svg>
  );
}

export function PostCard({
  post,
  onLike,
  onComment,
  onShare,
}: {
  post: Post;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
}) {
  const avatarStyle = useMemo(() => {
    const index = post.author.length % avatarStyles.length;
    return avatarStyles[index];
  }, [post.author]);

  const [liked, setLiked] = useState(false);
  const [likePulse, setLikePulse] = useState(false);
  const [commentPulse, setCommentPulse] = useState(false);
  const [sharePulse, setSharePulse] = useState(false);

  const triggerPulse = (type: "like" | "comment" | "share") => {
    if (type === "like") setLikePulse(true);
    if (type === "comment") setCommentPulse(true);
    if (type === "share") setSharePulse(true);
    setTimeout(() => {
      if (type === "like") setLikePulse(false);
      if (type === "comment") setCommentPulse(false);
      if (type === "share") setSharePulse(false);
    }, 200);
  };

  const handleLike = () => {
    onLike();
    setLiked(true);
    triggerPulse("like");
  };

  const handleComment = () => {
    onComment();
    triggerPulse("comment");
  };

  const handleShare = () => {
    onShare();
    triggerPulse("share");
  };

  return (
    <div
      className={cx(
        "group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md",
        post.isNew ? "animate-[fade-up_600ms_ease-out]" : ""
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cx(
            "flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white",
            avatarStyle
          )}
        >
          {getInitials(post.author)}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {post.author}
              </p>
              <p className="text-xs text-slate-500">{post.createdAt}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                Save
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                More
              </button>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-700">{post.content}</p>
          {post.tags.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={handleLike}
              className={cx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-semibold transition-all duration-200 active:scale-95",
                liked
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                likePulse ? "animate-[pop_200ms_ease-out]" : ""
              )}
            >
              <IconLike />
              {post.likes}
            </button>
            <button
              type="button"
              onClick={handleComment}
              className={cx(
                "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95",
                commentPulse ? "animate-[pop_200ms_ease-out]" : ""
              )}
            >
              <IconComment />
              {post.comments}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className={cx(
                "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95",
                sharePulse ? "animate-[pop_200ms_ease-out]" : ""
              )}
            >
              <IconShare />
              {post.shares}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
