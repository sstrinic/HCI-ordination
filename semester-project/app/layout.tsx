import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const pages = {
  home: "/",
  services: "/services",
  workhours: "/workhours",
  login: "/login",
  about: "/about",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HCI-2023/24",
  description: "Next.js lab project",
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
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
