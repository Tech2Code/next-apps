"use client";

import {
  allAnimeFetch,
  allfetchSearch,
  fetchAnime,
  fetchSearch,
} from "@/app/action";
import { useEffect, useState } from "react";
import Image from "next/image";

export type AnimeCard = JSX.Element;

let tilesShow: number = 5;
type PaginationProps = {
  query?: string;
};

export function Pagination({ query }: PaginationProps) {
  const [data, setData] = useState<AnimeCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState<number[]>([1, 2, 3, 4, 5]);

  useEffect(() => {
    const loadTotalPages = async () => {
      try {
        const totalData = query
          ? await allfetchSearch(query)
          : await allAnimeFetch();

        const pages = Array.from(
          { length: Math.ceil(totalData / tilesShow) },
          (_, i) => i + 1
        );

        setTotalPages(pages);
        setPageNo(1); // reset page on new search
      } catch (err) {
        console.error(err);
      }
    };

    loadTotalPages();
  }, [query]);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      try {
        const res = query
          ? await fetchSearch(query, pageNo, tilesShow)
          : await fetchAnime(pageNo, tilesShow);

        setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, [pageNo, query]);

  const handleChange = (page: number | string) => {
    if (Number(page) < 1 || Number(page) > totalPages.length || page === pageNo)
      return;
    setPageNo(Number(page));
  };

  const renderPaginationButtons = () => {
    const current = pageNo; // 1-based
    const total = totalPages.length;

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
      {data.length > 0 && (
        <section className="grid place-items-center [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] lg:gap-8 md:gap-6 gap-4">
          {data}
        </section>
      )}
      {loading && data.length === 0 && (
        <section className="flex justify-center items-center w-full">
          <div>
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      )}
      <div className="flex items-center justify-center gap-2 rounded-full border border-neutral-800/60 bg-neutral-900/80 px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
        <button
          onClick={() => handleChange(pageNo - 1)}
          disabled={pageNo === 1}
          className="inline-flex sm:h-5 sm:w-5 h-8 w-8 items-center gap-1 rounded-full px-3 text-xs font-medium text-neutral-300 ring-offset-neutral-950 transition-all duration-200 ease-out
                    hover:bg-neutral-800 hover:text-white
                    disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="text-lg leading-none">‹</span>
          <span className="hidden sm:inline">Prev</span>
        </button>

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

            const isActive = page === pageNo;

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

        <button
          onClick={() => handleChange(pageNo + 1)}
          disabled={pageNo === totalPages.length}
          className="inline-flex h-8 items-center gap-1 rounded-full px-3 text-xs font-medium text-neutral-300 ring-offset-neutral-950 transition
                    hover:bg-neutral-800 hover:text-white
                    disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="text-lg leading-none">›</span>
        </button>
      </div>
    </>
  );
}
