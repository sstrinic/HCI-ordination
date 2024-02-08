import Link from 'next/link';
import Image from 'next/image';
import cross from "@/public/contact.jpeg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[71vh]">
      <div className="p-8 text-center bg-white rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-black mb-4">
          404 - Lost in the Digital Universe
        </h1>
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          Uh-oh, you&apos;ve hit a whimsical glitch
        </h2>
        <div className='p-7 max-md:hidden flex justify-center'>
          <Image
            src={cross}
            alt="Whimsical Glitch"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <Link href="/">
          <span className="scheduleButton w-fit m-auto text-white px-6 py-3 rounded-full inline-block hover:bg-indigo-800 transition duration-300">
            Beam me back to the home page
          </span>
        </Link>
      </div>
    </div>
  );
}
