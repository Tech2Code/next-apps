"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    // router.push(`/search?q=${query}`);
    window.location.href = `/search?q=${query}`;

    setQuery("");
  };

  return (
    <div className="sticky top-0 bg-[#161921] lg:p-16 p-4 flex justify-between items-center gap-4 flex-wrap z-10">
      <Link href="/">
        <h2 className="text-2xl text-white font-bold">Explore Anime</h2>
      </Link>
      <form onSubmit={handleSubmit} className="flex gap-2 sm:w-auto w-full flex-wrap ">
        <input
          type="text"
          placeholder="Search Anime"
          className="sm:flex-none flex-1 bg-[#161921] border border-white text-white py-2 px-4 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#161921] border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#161921] transition-all"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
