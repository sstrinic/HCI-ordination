export type ServiceCardProps = {
  title: string;
  body: string;
};

const ServiceCard = ({
  title,
  body,
}: ServiceCardProps) => (
  <div
      className={`flex flex-col  items-start gap-[18px] px-[30px] py-[22px] relative bg-[#dff3ff] rounded-[30px]`}
    >
      <div
        className={`w-fit [font-family:'Poppins',Helvetica] font-normal text-black leading-[normal]`}
      >
        {title}
      </div>
      <p
        className={`[font-family:'Poppins',Helvetica] font-light text-black leading-[normal]`}
      >
        {body}
      </p>
    </div>
);

export default ServiceCard;
