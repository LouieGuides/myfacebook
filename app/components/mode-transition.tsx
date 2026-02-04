"use client";

import { useMode } from "@/app/context/mode-context";

export function ModeTransition({ children }: { children: React.ReactNode }) {
  const { mode } = useMode();

  return (
    <div key={mode} className="animate-[mode-fade_350ms_ease-out]">
      {children}
    </div>
  );
}
