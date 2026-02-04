import Link from "next/link";

import type { Community } from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

export function CommunityCard({ community }: { community: Community }) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(99,102,241,0.25)] hover:ring-1 hover:ring-indigo-200/60"
    >
      <div className={cx("h-16 bg-gradient-to-br", community.banner)} />
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {community.tagType}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {community.tag}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {community.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {community.description}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">
            {community.memberCount} members
          </span>
          <span className="text-xs font-semibold text-slate-900 transition-all duration-200 group-hover:translate-x-1">
            View feed &gt;
          </span>
        </div>
      </div>
    </Link>
  );
}
