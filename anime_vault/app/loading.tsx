import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="text-white text-xl animate-pulse">
        <Image
          src="/spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </div>
  );
}
