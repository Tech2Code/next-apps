"use client";

import { fetchAnime, fetchSearch } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type AnimeCard = JSX.Element;

type LoadMoreProps = {
  query?: string;
};

function LoadMore({ query }: LoadMoreProps) {
  const { ref, inView } = useInView();

  const [data, setData] = useState<AnimeCard[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page , setPage] = useState(1);

  useEffect(() => {
    if (inView && hasMore) {
      const fetchMore = async () => {
        const res = query
          ? await fetchSearch(query, page)
          : await fetchAnime(page);

        if (res.length === 0) {
          setHasMore(false);
          return;
        }

        setData((prev) => [...prev, ...res]);
        setPage((prev) => prev + 1);
      };

      fetchMore();
    }
  }, [inView, query, hasMore, page]);

  return (
    <>
      <section className="grid place-items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-4">
        {data}
      </section>
      {!hasMore && data.length === 0 && (
        <div className="py-10 flex justify-center items-center w-full">
          <h1 className="font-bold text-2xl">No results found</h1>
        </div>
      )}

      {hasMore && (
        <section className="flex justify-center items-center w-full">
          <div ref={ref}>
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
    </>
  );
}

export default LoadMore;
