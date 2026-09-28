import Image from "next/image";
import { getAllApp } from "@/lib/app";
import { Download, HardDrive, Star, UserRound } from "lucide-react";
import React from "react";
import InstallApp from "@/components/apps/InstallApp";

const AppDeatils = async ({ params }) => {
  const { id } = await params;

  const allAps = await getAllApp();

  const app = allAps.find((app) => app.id === Number(id));

  if (!app) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-base-100 p-10 text-center shadow-sm">
            <h1 className="text-3xl font-bold">App Not Found</h1>
            <p className="mt-3 text-base-content/60">
              The app you are looking for does not exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* App Header */}
        <section className="rounded-3xl bg-base-100 p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* App Image */}
            <div className="mx-auto shrink-0 md:mx-0">
              <Image
                src={app.image}
                alt={app.title}
                width={180}
                height={180}
                className="h-40 w-40 rounded-3xl object-cover shadow-md sm:h-48 sm:w-48"
              />
            </div>

            {/* App Information */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-primary">
                {app.companyName}
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {app.title}
              </h1>

              <p className="mt-4 leading-7 text-base-content/70">
                {app.description}
              </p>

              {/* Rating */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{app.ratingAvg}</span>
                  <span className="text-sm text-base-content/60">
                    ({app.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Download size={20} />
                  <span className="font-medium">{app.downloads} downloads</span>
                </div>
              </div>

              {/* Install Button */}
              <InstallApp app={app}></InstallApp>
            </div>
          </div>
        </section>

        {/* App Stats */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Star className="text-primary" size={22} />
              </div>

              <div>
                <p className="text-sm text-base-content/60">Rating</p>
                <p className="text-xl font-bold">{app.ratingAvg}/5</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Download className="text-primary" size={22} />
              </div>

              <div>
                <p className="text-sm text-base-content/60">Downloads</p>
                <p className="text-xl font-bold">{app.downloads}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <HardDrive className="text-primary" size={22} />
              </div>

              <div>
                <p className="text-sm text-base-content/60">App Size</p>
                <p className="text-xl font-bold">{app.size} MB</p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mt-6 rounded-3xl bg-base-100 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">About this app</h2>

          <p className="mt-4 leading-8 text-base-content/70">
            {app.description}
          </p>
        </section>

        {/* Ratings */}
        <section className="mt-6 rounded-3xl bg-base-100 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <UserRound size={24} />

            <div>
              <h2 className="text-2xl font-bold">Ratings & Reviews</h2>

              <p className="text-sm text-base-content/60">
                User rating distribution
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {app.ratings.map((rating) => {
              const totalRatings = app.ratings.reduce(
                (total, item) => total + item.count,
                0,
              );

              const percentage = ((rating.count / totalRatings) * 100).toFixed(
                1,
              );

              return (
                <div key={rating.name} className="flex items-center gap-3">
                  <span className="w-14 text-sm font-medium">
                    {rating.name}
                  </span>

                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-base-300">
                    <div
                      className="h-full rounded-full bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="w-12 text-right text-sm text-base-content/60">
                    {percentage}%
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AppDeatils;
