"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Page = {
  href: string;
  title: string;
};

const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/services", title: "Services" },
  { href: "/about", title: "About Us" },
  { href: "/resources", title: "Resources" },
  { href: "/contact", title: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <header>
        <div className="containerHeader font-semibold tracking-wider">
          <h2 className="linerz text-white font-thin tracking-[2.96px] [text-shadow:0px_5px_4px_#000000bd]">Ordinacija Horvat<span className="relative text-xs align-top">®</span></h2>
          <nav className="max-md:hidden">
            <ul className="flex gap-4 max-md:flex-col max-md:text-2xl max-lg:text-sm">
            {pages.map(({ href, title }) => (
              <li key={href}>
                <Link href={href}>
                  <span
                    className={cn(
                      "text-white py-[8px] px-[11px] rounded-lg",
                      {
                        "text-white pointer-events-none spaner bg-[#0C8C19]":
                          pathname === href,
                      }
                    )}
                  >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </div>
        </header>
  );
};

export default NavBar;
