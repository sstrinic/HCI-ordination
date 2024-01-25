import Image from "next/image";

type MemberCardProps = {
  name: string;
  imgURL: string;
  text: string;
};

const teamMembers: MemberCardProps[] = [
  {
    name: "Dr. Sarah Patel",
    imgURL: "/SarahPatel.jpg",
    text: "Dr. Sarah Patel is an experienced family physician, specializing in preventive care and women's health. With a focus on proactive wellness and personalized support, she ensures comprehensive healthcare for her patients.",
  },
  {
    name: "Dr. James Nguyen",
    imgURL: "/JamesNguyen.jpg",
    text: "Dr. James Nguyen is a dedicated healthcare professional whose passion lies in advancing holistic healthcare, fostering a comprehensive approach to well-being. With a focus on promoting wellness across all age groups, he strives to create personalized and enduring health solutions for every individual under his care.",
  },
  {
    name: "Nurse Emily Dawson",
    imgURL: "/EmilyDawson.jpg",
    text: "Nurse Emily Dawson is passionately committed to enhancing the overall well-being of her patients, placing particular emphasis on the health and care of children and adolescents. Through her dedication and specialized focus on pediatric and adolescent health, she ensures a compassionate and nurturing healthcare experience for young individuals under her care.",
  },
  {
    name: "Nurse Carlos Rodriguez",
    imgURL: "/CarlosRodriguez.jpg",
    text: "Nurse Carlos Rodriguez is a dedicated healthcare professional known for his vibrant enthusiasm and specialized expertise in sports health and rehabilitation, bringing a dynamic and compassionate approach to patient care. With a fervent commitment to promoting wellness and aiding in recovery, Carlos is a valued member of the healthcare team, combining his passion for healthcare with a focus on supporting individuals in their journey towards optimal physical well-being.",
  },
];

const About = () => (
  <div className="max-w-[900px] mx-auto mt-8 bg-white p-6 max-md:py-0 md:rounded-md md:shadow-md">
    <h1 className="text-4xl font-bold mb-6 md:text-center">About Us</h1>
    <p className="text-gray-700 mb-4">
      At the Family Medicine Office, we believe in providing more than just healthcare – we offer a comforting space where your family becomes a part of ours. With a commitment to compassionate, patient-centered care, our dedicated team of healthcare professionals is here to guide you on your journey to optimal health and well-being.
    </p>

    <p className="text-gray-700 mb-8">
      Led by experienced physicians, Dr. Sarah Patel and Dr. James Nguyen, along with our exceptional nursing team—Nurse Emily Dawson and Nurse Carlos Rodriguez—we bring a wealth of expertise to every consultation. Our mission is to create a personalized and comprehensive healthcare experience for every member of your family, from the youngest to the oldest.
    </p>
    <hr />
    <div className="mb-4">
      <h2 className="text-2xl text-center font-semibold my-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {teamMembers.map((teamMember) => (
          <div key={teamMember.name} className="mb-4 mx-auto flex flex-col items-center gap-5 px-6">
            <Image
              src={teamMember.imgURL}
              alt={teamMember.name}
              width={250}
              height={250}
              className="md:h-60 h-56 rounded-lg border-[1px] border-neutral-800 md:w-60 w-56"
            />
            <div className="mt-2 text-left">
              <p className="text-base font-semibold">{teamMember.name}</p>
              <p className="text-sm text-gray-600">{teamMember.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
