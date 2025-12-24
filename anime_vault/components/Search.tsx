"use client";

import { slugify } from "@/app/lib/fun";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useTransition } from "react";
import Loader from "./Loader";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const headingRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    startTransition(() => {
      router.push(`/search/${slugify(query)}`);
    });

    setQuery("");

    headingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* 🔥 Loader overlay */}
      {isPending && <Loader />}
      <div
        ref={headingRef}
        className="sticky top-0 bg-[#161921] lg:px-16 lg:py-5 p-4 flex justify-between items-center gap-4 flex-wrap z-10"
      >
        <h2 className="text-2xl text-white font-bold">Explore Anime</h2>

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 sm:w-auto w-full flex-wrap"
        >
          <input
            type="text"
            placeholder="Search Anime"
            className="sm:flex-none flex-1 bg-[#161921] border border-white text-white py-2 px-4 rounded"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isPending}
          />

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#161921] border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#161921] transition-all disabled:opacity-50"
          >
            {isPending ? "Searching..." : "Search"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
