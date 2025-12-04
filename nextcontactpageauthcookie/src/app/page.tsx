import Image from "next/image";

const Homepage = () => (
  <main className="flex flex-col items-center justify-center min-h-[70vh]">
    <h1 className="text-3xl md:text-4xl font-bold text-center mt-8">
      Welcome to Contact Manager
    </h1>
    <p className="mt-3 text-base md:text-lg text-center text-gray-600">
      Manage your contacts easily and efficiently
    </p>
    <div className="my-8 flex items-center justify-center">
      <Image
        src={"/homepage-phone-image.jpg"}
        alt="Contact Manager illustration"
        width={320}
        height={180}
        className="rounded-lg shadow-lg object-contain"
        priority
      />
    </div>
    <p className="text-lg text-center text-gray-700">
      Start managing your contacts today!
    </p>
  </main>
);

export default Homepage;
