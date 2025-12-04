// app/not-found.jsx
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <Image
        src="/not-found.png" // Place image.jpg in /public, or update path
        alt="Not found illustration"
        width={200}
        height={120}
        className="mb-6 rounded shadow"
        priority
      />
      <h1 className="text-4xl font-bold text-red-500 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-4">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="inline-block px-4 py-2 mt-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Go back to Home
      </a>
    </div>
  );
}
