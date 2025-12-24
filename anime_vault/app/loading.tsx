import Image from "next/image";

export default function loading() {
  return (
    <section className="flex justify-center items-center w-full h-[20vh]">
      <div>
        <Image
          src="/spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  );
}
