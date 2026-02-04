"use client";

import { useMode } from "@/app/context/mode-context";
import { modeCopy, type Mode } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

const modes: Mode[] = ["huddle", "hobbyhub"];

const modeStyles: Record<Mode, { accent: string; outline: string }> = {
  huddle: {
    accent: "from-sky-500/15 via-white to-white",
    outline: "border-sky-200",
  },
  hobbyhub: {
    accent: "from-blue-500/15 via-white to-white",
    outline: "border-blue-200",
  },
};

export function ModeCardToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {modes.map((option) => {
        const active = mode === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setMode(option)}
            className={cx(
              "group flex h-full flex-col gap-2 rounded-3xl border p-5 text-left transition-all duration-200",
              "bg-gradient-to-br shadow-sm hover:-translate-y-0.5 hover:shadow-md",
              active
                ? "border-slate-900/10 ring-2 ring-slate-900/10"
                : "border-slate-200",
              modeStyles[option].accent,
              modeStyles[option].outline
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">
                {option === "huddle" ? "Local Communities" : "Interest Communities"}
              </span>
              <span
                className={cx(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  active ? "bg-slate-900 text-white" : "bg-white text-slate-500"
                )}
              >
                {modeCopy[option].label}
              </span>
            </div>
            <p className="text-sm text-slate-600">
              {modeCopy[option].description}
            </p>
            <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-slate-900/70" />
              {modeCopy[option].subtitle}
            </div>
          </button>
        );
      })}
    </div>
  );
}
