import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-3xl text-center">

        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-white/5 sm:text-[180px] md:text-[240px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-slate-400 backdrop-blur-md sm:text-sm">
              PAGE NOT FOUND
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto -mt-4 max-w-xl sm:-mt-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Oops! Page not found.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            The page you are looking for doesn't exist, has been moved,
            or is no longer available.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Bottom Message */}
          <p className="mt-10 text-xs text-slate-600 sm:text-sm">
            Don't worry, let's get you back on track.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;