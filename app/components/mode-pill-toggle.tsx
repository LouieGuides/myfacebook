"use client";

import { useMode } from "@/app/context/mode-context";
import { modeCopy, type Mode } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

const modes: Mode[] = ["huddle", "hobbyhub"];

export function ModePillToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 shadow-inner">
      {modes.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setMode(option)}
          className={cx(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
            mode === option
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          {modeCopy[option].label}
        </button>
      ))}
    </div>
  );
}
