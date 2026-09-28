import React from "react";

const AppCardSkeleton = () => {
  return (
    <div className="card overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
      {/* Image Skeleton */}
      <div className="p-3">
        <div className="skeleton h-52 w-full rounded-2xl sm:h-56" />
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Title */}
        <div className="skeleton mb-2 h-6 w-3/4" />

        {/* Company */}
        <div className="skeleton mb-5 h-4 w-1/3" />

        {/* Description */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-11/12" />
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-base-200 p-3">
          <div className="flex flex-col items-center gap-2">
            <div className="skeleton h-4 w-14" />
            <div className="skeleton h-3 w-16" />
          </div>

          <div className="flex flex-col items-center gap-2 border-x border-base-300">
            <div className="skeleton h-4 w-14" />
            <div className="skeleton h-3 w-16" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="skeleton h-4 w-14" />
            <div className="skeleton h-3 w-12" />
          </div>
        </div>

        {/* Button */}
        <div className="skeleton mt-5 h-12 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default AppCardSkeleton;