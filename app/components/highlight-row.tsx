"use client";

import { useEffect, useState } from "react";

import type { Highlight } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

function HighlightModal({
  highlight,
  onClose,
}: {
  highlight: Highlight | null;
  onClose: () => void;
}) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (highlight) {
      setShouldRender(true);
      return;
    }
    const timeout = setTimeout(() => setShouldRender(false), 200);
    return () => clearTimeout(timeout);
  }, [highlight]);

  if (!shouldRender) return null;

  const overlayState = highlight
    ? "opacity-100"
    : "opacity-0 pointer-events-none";
  const panelState = highlight
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-2 scale-95";

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-sm transition-opacity duration-200 ${overlayState}`}
    >
      <div
        className={`w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-200 ${panelState}`}
      >
        {highlight ? (
          <div>
            <div
              className={cx(
                "flex h-40 items-end bg-gradient-to-br p-6 text-white",
                highlight.cover
              )}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Community highlight
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {highlight.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  {highlight.subtitle}
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600">
                Shared by <span className="font-semibold">{highlight.author}</span>
              </p>
              <p className="mt-3 text-sm text-slate-500">
                This is a mock highlight preview to demonstrate story-style
                content in the community feed.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function HighlightRow({ highlights }: { highlights: Highlight[] }) {
  const [activeHighlight, setActiveHighlight] = useState<Highlight | null>(null);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Community highlights
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">
            Stories from the community
          </h2>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
        >
          View all
        </button>
      </div>
      <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            type="button"
            onClick={() => setActiveHighlight(highlight)}
            className="group flex w-24 flex-col items-center gap-3 text-left"
          >
            <div
              className={cx(
                "flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md",
                highlight.cover
              )}
            >
              {highlight.title.split(" ").slice(0, 2).map((word) => word[0]).join("")}
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-900">
                {highlight.title}
              </p>
              <p className="text-[10px] text-slate-500">{highlight.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      <HighlightModal
        highlight={activeHighlight}
        onClose={() => setActiveHighlight(null)}
      />
    </section>
  );
}
