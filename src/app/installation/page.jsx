"use client";

import AppCard from "@/components/sharder/AppCart";
import { AuthContex } from "@/contex/AppProvider";
import { useContext } from "react";

const InstallPageView = () => {
  const { installApp } = useContext(AuthContex);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Install Apps
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Discover Your Favorite Install Apps
          </h1>

          <p className="mt-2 text-gray-500">
            Explore popular apps, games, entertainment, productivity and more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {installApp.length > 0 ? (
            installApp.map((app) => (
              <AppCard key={app.id} app={app} />
            ))
          ) : (
            <div className="col-span-full flex min-h-[300px] items-center justify-center">
              <div className="rounded-2xl bg-white px-8 py-12 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800">
                  No Installed Apps
                </h2>

                <p className="mt-2 text-gray-500">
                  You haven't installed any apps yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default InstallPageView;