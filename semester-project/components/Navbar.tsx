import Link from "next/link";

export type Page = {
  href: string;
  title: string;
};

const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/services", title: "Services" },
  { href: "/about", title: "About Us" },
  { href: "/resources", title: "Resources" },
  { href: "/login", title: "Contact" },
];

const NavBar = () => {
  return (
    <header>
        <div className="containerHeader font-semibold tracking-wider">
          <h2 className="text-white font-thin [font-family:'Cinzel',Helvetica] tracking-[2.96px] [text-shadow:0px_5px_4px_#000000bd]">Ordinacija Horvat®</h2>
          <nav>
            <ul className="flex gap-4 max-md:flex-col max-md:text-2xl">
              {pages.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </header>
  );
};

export default NavBar;
