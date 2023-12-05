import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
