export function CommunityCardSkeleton() {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm animate-pulse">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-full bg-slate-200" />
          <div className="h-6 w-20 rounded-full bg-slate-200" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-2/3 rounded-full bg-slate-200" />
          <div className="h-3 w-full rounded-full bg-slate-100" />
          <div className="h-3 w-5/6 rounded-full bg-slate-100" />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-slate-100" />
        <div className="h-3 w-16 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm animate-pulse">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-2xl bg-slate-200" />
        <div className="flex-1 space-y-3">
          <div className="space-y-2">
            <div className="h-3 w-32 rounded-full bg-slate-200" />
            <div className="h-3 w-20 rounded-full bg-slate-100" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded-full bg-slate-100" />
            <div className="h-3 w-5/6 rounded-full bg-slate-100" />
            <div className="h-3 w-2/3 rounded-full bg-slate-100" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-7 w-20 rounded-full bg-slate-200" />
            <div className="h-7 w-24 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
