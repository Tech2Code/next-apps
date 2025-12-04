import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>

      <div className="relative w-[47px] h-[44px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-[19px] h-[19px]">
          <Image src="/tiktok.svg" fill sizes="100%" alt="tiktok" className="object-contain" />
        </div>

        <div className="relative w-[19px] h-[19px]">
          <Image src="/instagram.svg" fill sizes="100%" alt="instagram" className="object-contain" />
        </div>

        <div className="relative w-[19px] h-[19px]">
          <Image src="/twitter.svg" fill sizes="100%" alt="twitter" className="object-contain" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
