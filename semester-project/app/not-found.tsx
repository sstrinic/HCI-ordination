import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
    <h1 className="text-4xl font-bold mb-4">Ooopsie doopsie &#128553;</h1>
    <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
    <p className="text-gray-600 mb-8">The page you're looking for does not exist.</p>
    <Link href="/">
      <span className="text-blue-500 hover:underline">Go back to the home page</span>
    </Link>
  </div>
)}