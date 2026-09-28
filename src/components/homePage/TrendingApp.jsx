import { getAllApp } from "@/lib/app";
import AppCart from "../sharder/AppCart";

const TrendingApp = async () => {
  const data = await getAllApp();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Explore Apps
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Discover Your Favorite Apps
          </h1>

          <p className="mt-2  text-gray-500">
            Explore popular apps, games, entertainment, productivity and more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.slice(2,10).map((app) => (
            <AppCart key={app.id} app={app}></AppCart>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TrendingApp;
