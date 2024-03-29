import Icons from "@/components/icons/FooterIcons";
import Link from "next/link";

export type Page = {
  href: string;
  title: string;
};

const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/services", title: "Services" },
  { href: "/about", title: "About Us" },
  { href: "/cms/blog", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

const Footer = () => (
  <footer>
    <div className="flex flex-col py-5 mt-[3rem] items-center gap-4 text-white [font-family:'Cinzel',Helvetica] text-center">
      <h6 className="text-white font-thin [font-family:'Cinzel',Helvetica] tracking-[2.96px] [text-shadow:0px_5px_4px_#000000bd] text-2xl">Ordinacija Horvat<span className="relative text-xs align-top">®</span></h6>
      <div className="flex flex-col">
        <ul className="flex flex-row gap-4 mb-3">
          {pages.map(({ href, title }) => (
            <li key={href}>
              <Link href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-4 justify-center items-center">
          <Link href="https://facebook.com" aria-label="Follow us on Facebook.">
            <Icons.facebook className="w-3" />
          </Link>
          <Link href="https://twitter.com" aria-label="Follow us on X.">
            <Icons.twitter className="w-6" />
          </Link>
          <Link href="https://youtube.com" aria-label="Follow us on Youtube.">
            <Icons.youtube className="w-4" />
          </Link>
        </div>
      </div>
      <p className="font-thin text-xs">
        ©2024. Family Medicine Office. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
