import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const pages = {
  Home: "/",
  Services: "/services",
  Workhours: "/workhours",
  Login: "/login",
  About: "/about",
};

//const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <header>
        <div className="containerHeader font-semibold tracking-wider">
          <h2>Ordination Horvat</h2>
          <nav>
            <ul className="flex gap-4 max-md:flex-col max-md:text-2xl">
              {Object.entries(pages).map(([name, path]) => (
                <li key={name}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </header>
        {children}
      </body>
    </html>
  );
}
