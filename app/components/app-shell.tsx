import { TopNav } from "@/app/components/top-nav";
import { LeftSidebar } from "@/app/components/left-sidebar";
import { RightSidebar } from "@/app/components/right-sidebar";
import { ModeTransition } from "@/app/components/mode-transition";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_50%),_radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),_transparent_45%)]">
      <TopNav />
      <ModeTransition>
        <div className="mx-auto grid w-full max-w-[120rem] grid-cols-1 gap-6 px-6 pb-16 pt-6 lg:grid-cols-[240px_minmax(0,1fr)_300px]">
          <aside className="hidden lg:block">
            <LeftSidebar />
          </aside>
          <main>{children}</main>
          <aside className="hidden lg:block">
            <RightSidebar />
          </aside>
        </div>
      </ModeTransition>
    </div>
  );
}
