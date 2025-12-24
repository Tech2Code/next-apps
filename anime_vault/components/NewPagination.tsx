"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Loader from "./Loader";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function NewPagination({
  basePath,
  currentPage,
  totalPages,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  if (totalPages <= 1) return;

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    startTransition(() => {
      router.push(`${basePath}page/${page}`);
    });
  };

  const renderPaginationButtons = () => {
    const current = currentPage; // 1-based
    const total = totalPages;

    // Small totals: show all
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Case: current near the start -> 1 2 [3] 4 ... total
    if (current <= 3) {
      pages.push(2, 3, 4, "…", total);
      return pages;
    }

    // Case: current near the end -> 1 ... total-3 total-2 [total-1] total
    if (current >= total - 2) {
      pages.push("…", total - 3, total - 2, total - 1, total);
      return pages;
    }

    // Middle: 1 ... current-1 current current+1 ... total
    pages.push("…", current - 1, current, current + 1, "…", total);

    return pages;
  };

  return (
    <>
      {isPending && <Loader />}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-full border border-neutral-800/60 bg-neutral-900/80 px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
          {/* Prev */}
          <button
            onClick={() => handleChange(currentPage - 1)}
            disabled={currentPage === 1 || isPending}
            className="inline-flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium text-neutral-300 transition
                     hover:bg-neutral-800 hover:text-white
                     disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="text-lg leading-none">‹</span>
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Pages */}
          <div className="flex items-center justify-center gap-1 min-w-[248px]">
            {renderPaginationButtons().map((page: number | string) => {
              if (typeof page === "string") {
                // non-clickable ellipsis
                return (
                  <span
                    key={page + Math.random()} // or use an index from map callback
                    className="inline-flex sm:h-5 sm:w-5 h-8 w-8 items-center justify-center text-xs font-semibold text-neutral-400 transition-all duration-200 ease-out"
                  >
                    {page}
                  </span>
                );
              }

              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => handleChange(page)}
                  className={[
                    "inline-flex sm:h-5 sm:w-5 h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 ease-out",
                    "hover:bg-neutral-800 hover:text-white transition-all duration-200 ease-out",
                    isActive
                      ? "bg-white text-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-200 ease-out"
                      : "bg-transparent text-neutral-400 transition-all duration-200 ease-out",
                  ].join(" ")}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={() => handleChange(currentPage + 1)}
            disabled={currentPage === totalPages || isPending}
            className="inline-flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium text-neutral-300 transition
                     hover:bg-neutral-800 hover:text-white
                     disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </>
  );
}
