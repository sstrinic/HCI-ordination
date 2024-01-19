import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-5xl font-bold mb-4">
        Uh-oh, you've hit a whimsical glitch &#128553;
      </h1>
      <h2 className="text-3xl font-bold mb-4">404 - Lost in the Digital Universe</h2>
      <p className="text-gray-600 mb-8">Looks like the page you're seeking has gone on a cosmic adventure.</p>
      <Link href="/">
        <span className="text-pink-500 hover:underline">Beam me back to the home page</span>
      </Link>
    </div>
  );
}
