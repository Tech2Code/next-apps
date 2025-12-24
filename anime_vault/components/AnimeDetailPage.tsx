import { getAnime } from "@/app/action";
import { AnimeDetail } from "@/app/types";
import Image from "next/image";

type Prop = {
  anime: AnimeDetail;
};

export default async function AnimeDetailPage({ anime }: Prop) {
  return (
    <div className="max-w-5xl w-full mx-auto lg:px-16 lg:py-6 p-4 text-white">
      {/* HERO */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="w-full md:w-[260px] h-[320px] relative shrink-0">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            sizes="100%"
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">
            {anime.name}
            <span className="text-neutral-400 font-normal text-xl ml-2">
              ({anime.aired_on?.slice(0, 4)})
            </span>
          </h1>

          <p className="text-sm text-neutral-400">
            {anime.english?.[0]} • {anime.japanese?.[0]}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Stat label="Score" value={anime.score} />
            <Stat label="Episodes" value={anime.episodes} />
            <Stat label="Duration" value={`${anime.duration} min`} />
            <Stat label="Rating" value={anime.rating?.toUpperCase()} />
            <Stat label="Status" value={anime.status} />
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 pt-2">
            {anime.genres.map((g: any) => (
              <span
                key={g.id}
                className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
              >
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      {anime.description && (
        <section className="mt-10 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
          <div className="text-neutral-300 leading-relaxed text-sm"
            dangerouslySetInnerHTML={{ __html: anime.description_html }}
          />
        </section>
      )}

      {/* TRAILER */}
      {anime.videos?.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Trailer</h2>

          <div className="aspect-video max-w-4xl rounded-xl overflow-hidden border border-neutral-800">
            <iframe
              src={anime.videos[0].player_url}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </section>
      )}
    </div>
  );
}

/* --- Small stat component --- */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col text-center">
      <span className="text-xs text-neutral-400">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
