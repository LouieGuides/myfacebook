"use client";

import { useEffect, useState } from "react";

export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}) {
  const [content, setContent] = useState("");
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (!isOpen) {
      setContent("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }
    const timeout = setTimeout(() => setShouldRender(false), 200);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!shouldRender) return null;

  const overlayState = isOpen ? "opacity-100" : "opacity-0 pointer-events-none";
  const panelState = isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-2 scale-95";

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 p-6 backdrop-blur-sm transition-opacity duration-200 ${overlayState}`}
    >
      <div
        className={`w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl transition-all duration-200 ${panelState}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Create a post
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-slate-400 transition-all duration-200 hover:text-slate-600"
          >
            Close
          </button>
        </div>
        <div className="mt-4">
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Share an update, ask a question, or spark a conversation..."
            className="min-h-[140px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(content)}
            disabled={!content.trim()}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
