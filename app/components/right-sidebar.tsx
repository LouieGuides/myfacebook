"use client";

import { useMode } from "@/app/context/mode-context";
import {
  getActiveMembers,
  getSuggestedCommunities,
  getTopicSpotlights,
  getTrendingPosts,
  getUpcomingEvents,
} from "@/app/lib/mock-data";
import { cx } from "@/app/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function RightSidebar() {
  const { mode } = useMode();
  const trending = getTrendingPosts(mode);
  const suggested = getSuggestedCommunities(mode);
  const members = getActiveMembers(mode);
  const upcomingEvents = getUpcomingEvents(mode);
  const topicSpotlights = getTopicSpotlights(mode);

  return (
    <div className="sticky top-24 space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Trending posts
        </p>
        <div className="mt-4 space-y-3">
          {trending.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {post.title}
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>{post.community}</span>
                <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold">
                  {post.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Suggested communities
        </p>
        <div className="mt-4 space-y-3">
          {suggested.map((community) => (
            <div
              key={community.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {community.name}
                </p>
                <p className="text-xs text-slate-500">{community.tag}</p>
              </div>
              <button
                type="button"
                className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Active members
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={cx(
                  "flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br text-xs font-semibold text-white",
                  member.accent
                )}
              >
                {getInitials(member.name)}
              </div>
              <span className="text-[10px] text-slate-500">{member.role}</span>
            </div>
          ))}
        </div>
      </section>

      {mode === "huddle" && upcomingEvents.length > 0 ? (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Upcoming events
          </p>
          <div className="mt-4 space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">
                  {event.title}
                </p>
                <p className="mt-2 text-xs text-slate-500">{event.date}</p>
                <p className="text-xs text-slate-500">{event.location}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {mode === "hobbyhub" && topicSpotlights.length > 0 ? (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Topic spotlights
          </p>
          <div className="mt-4 space-y-3">
            {topicSpotlights.map((topic) => (
              <div
                key={topic.id}
                className="rounded-2xl border border-slate-200 bg-white p-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    {topic.title}
                  </p>
                  <span
                    className={cx(
                      "rounded-full bg-gradient-to-r px-2 py-1 text-[10px] font-semibold text-white",
                      topic.accent
                    )}
                  >
                    {topic.tag}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
