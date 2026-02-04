"use client";

import { useState } from "react";

import { cx } from "@/app/lib/utils";

type PostComposerProps = {
  onSubmit: (content: string) => void;
  placeholder?: string;
  activeTag?: string;
};

export function PostComposer({
  onSubmit,
  placeholder = "Share an update with the community...",
  activeTag,
}: PostComposerProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const trimmed = content.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setContent("");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-xs font-semibold text-white">
          You
        </div>
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder={placeholder}
            className="min-h-[90px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {activeTag && activeTag !== "All" ? (
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Tag: {activeTag}
                </span>
              ) : null}
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                Mock post
              </span>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!content.trim()}
              className={cx(
                "rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95",
                !content.trim() ? "opacity-50" : ""
              )}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
