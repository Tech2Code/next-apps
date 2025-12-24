"use client";
export default function NotFoundOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-900 px-6 py-12 text-center text-neutral-50 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Error 404
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-neutral-400">
          The page you requested doesn&apos;t exist. Choose a valid page or go
          back home.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.assign("/")}
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 shadow-sm transition hover:bg-neutral-200"
          >
            Go home
          </button>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-500 hover:text-white"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
