import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center p-14 bg-green-400">
          <ul className="flex gap-4 text-3xl">
            <li className="hover:bg-pink-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-pink-700">
              <Link href="/showcase">Showcase</Link>
            </li>
            <li className="hover:bg-pink-700">
              <Link href="/about">About us</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
