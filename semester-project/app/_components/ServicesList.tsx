import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const servicesTexts: ServiceCardProps[] = [
  {
    title: "MEDICAL CONSULTATION",
    body: "WE OFFER COMPREHENSIVE MEDICAL CONSULTATIONS WITH OUR EXPERIENCED DOCTORS, WHO WILL PROVIDE YOU WITH A THOROUGH EXAMINATION, DIAGNOSIS AND TREATMENT PLAN THAT ADDRESSES YOUR SPECIFIC NEEDS AND CONCERNS.",
  },
  {
    title: "SPECIALIST REFERRAL",
    body: "WE OFFER SPECIALIST REFERRAL SERVICES TO CONNECT YOU WITH THE RIGHT MEDICAL EXPERT, ENSURING YOU RECEIVE THE SPECIALIZED CARE YOU NEED TO ACHIEVE OPTIMAL HEALTH OUTCOMES.",
  },
  {
    title: "HEALTH CHECKUP",
    body: "OUR COMPREHENSIVE HEALTH CHECKUPS ARE DESIGNED TO ASSESS YOUR OVERALL HEALTH, IDENTIFY POTENTIAL HEALTH RISKS, AND PROVIDE YOU WITH AN ACTIONABLE PLAN TO MAINTAIN OPTIMAL HEALTH AND WELLBEING.",
  },
  {
    title: "PREVENTIVE CARE",
    body: "OUR PREVENTIVE CARE SERVICES ARE DESIGNED TO HELP YOU MAINTAIN OPTIMAL HEALTH AND WELLBEING, IDENTIFYING POTENTIAL HEALTH RISKS AND PROVIDING YOU WITH ACTIONABLE RECOMMENDATIONS TO REDUCE THOSE RISKS.",
  },
];

const ServicesSection = () => (
  <section className="container flex flex-col gap-7 items-center m-auto max-w-[1024px]">
    <div className="text-center mt-4 linerz">
      <h2 className="font-roboto-condensed text-3xl font-extrabold text-brand-purple-900">
        Services we provide:
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {servicesTexts.map((servicesTexts) => (
        <ServiceCard key={servicesTexts.title} {...servicesTexts} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
