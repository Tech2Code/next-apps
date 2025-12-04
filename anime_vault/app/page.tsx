
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      {/* <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 place-items-center gap-10">
        {data}
      </section> */}
      <LoadMore />
    </main>
  );
}

export default Home;
