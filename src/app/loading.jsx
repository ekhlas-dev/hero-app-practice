const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="flex flex-col items-center">

        {/* Loader */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200">
            <span className="text-xl font-bold text-white">
              A
            </span>
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-xl font-bold text-slate-900">
          Loading Apps
        </h2>

        <p className="mt-2 text-center text-sm text-slate-500">
          Please wait while we prepare everything for you...
        </p>

        {/* Loading dots */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600" />
        </div>

      </div>
    </main>
  );
};

export default Loading;