import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const servicesTexts: ServiceCardProps[] = [
  {
    title: "MEDICAL CONSULTATION",
    body: "We offer comprehensive medical consultations with our experienced doctors, who will provide you with a thorough examination, diagnosis and treatment plan that addresses your specific needs and concerns.",
  },
  {
    title: "SPECIALIST REFERRAL",
    body: "We offer specialist referral services to connect you with the right medical expert, ensuring you receive the specialized care you need to achieve optimal health outcomes.",
  },
  {
    title: "HEALTH CHECKUP",
    body: "Our comprehensive health checkups are designed to assess your overall health, identify potential health risks, and provide you with an actionable plan to maintain optimal health and wellbeing.",
  },
  {
    title: "PREVENTIVE CARE",
    body: "Our preventive care services are designed to help you maintain optimal health and wellbeing, identifying potential health risks and providing you with actionable recommendations to reduce those risks.",
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
