import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat md:px-16  p-4 flex justify-between lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-3 md:gap-7 md:items-start items-center">
        <Link href="/" className="relative w-[101px] h-[96px]">
          <Image
            src="/logo.svg"
            alt="logo"
            priority
            sizes="100%"
            fill
          />
        </Link>
        <h1 className="sm:text-6xl text-3xl text-white lg:max-w-lg font-bold md:leading-[120%] leading-[100%] md:text-left text-center">
          Explore The <span className="red-gradient block md:inline">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="md:flex  hidden relative max-w-[350px] w-full h-[50vh] justify-end">
        <Image
          src="/anime.png"
          alt="anime"
          fill
          priority
          sizes="100%"
          className="object-contain"
        />
      </div>
    </header>
  );
}

export default Hero;
