"use server";

import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "./types";

export const fetchPosts = async (page: number, limit?: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`
  );
  const data = await res.json();
  return data;
};

export const fetchAnime = async (page: number, limit?: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const allAnimeFetch = async () => {
  const res = await fetch(
    `https://shikimori.one/api/animes?limit=100&order=popularity`
  );
  const data = await res.json();
  return data.length;
};

export const fetchSearch = async (
  query: string,
  page: number,
  limit?: number
) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&search=${query}&limit=${limit}&order=popularity`
  );
  const data = await res.json();
  return data;
};

export const allfetchSearch = async (query: string) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?&search=${query}&limit=100&order=popularity`
  );
  const data = await res.json();
  return data.length;
};

export async function getAnime(id: string) {
  const res = await fetch(`https://shikimori.one/api/animes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch anime");
  return res.json();
}
