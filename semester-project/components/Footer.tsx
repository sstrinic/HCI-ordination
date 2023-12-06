import Icons from "@/components/icons/FooterIcons";

type ListProps = {
  title: string;
  items: string[];
};

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <ul className="flex flex-row gap-4 mb-3">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer>
    <div className="flex flex-col py-5 mt-20 items-center gap-4 text-white [font-family:'Cinzel',Helvetica] text-center">
      <h6 className="text-white font-thin [font-family:'Cinzel',Helvetica] tracking-[2.96px] [text-shadow:0px_5px_4px_#000000bd] text-2xl">Ordinacija Horvat<span className="relative text-xs align-top">®</span></h6>
      <div className="flex flex-col">
          <FooterList
          title="Sitemap"
          items={["Home", "Services", "About us", "Resources", "Contact"]}
          />
        <div className="flex flex-row gap-2 justify-center">
            <Icons.facebook className="w-6" />
            <Icons.twitter className="w-6" />
            <Icons.linked className="w-6" />
        </div>
      </div>
      <p className="font-thin text-xs">
       ©2024. Family Medicine Office. All Rights Reserved.
      </p>
    </div>
    </footer>
);

export default Footer;
