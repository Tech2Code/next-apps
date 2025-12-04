"use client";
import LoadMore from "@/components/LoadMore";
import { useEffect, useRef } from "react";

export default function SearchPage({ searchParams }: any) {
  const query = searchParams.q;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query) {
      if (ref.current)
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [query]);

  if (!query) {
    return (
      <div className="p-8 text-white">
        <h2 className="text-2xl">Enter a search query...</h2>
      </div>
    );
  }

  return (
    <main ref={ref} className="lg:p-16 p-4 flex flex-col gap-10">
      <h2 className="text-2xl text-white font-bold">
        Search results for: {query}
      </h2>
      <LoadMore query={query} />
    </main>
  );
}
