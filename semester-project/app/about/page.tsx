import Image from "next/image";
import sarahPatel from "@/public/SarahPatel.jpg";
import carlosRodriguez from "@/public/CarlosRodriguez.jpg";
import jamesNguyen from "@/public/JamesNguyen.jpg";
import emilyDawson from "@/public/EmilyDawson.jpg";

function About() {
  return (
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
        <div className="flex flex-col gap-5">
          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <Image src={sarahPatel} alt="Dr. Sarah Patel" width={200} className="md:h-48 h-44 rounded-lg border-[1px] border-neutral-800 md:w-48 w-44"></Image>
            <div className="mt-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Dr. Sarah Patel</p>
              <p className="text-sm text-gray-600">Experienced family physician specializing in preventive care and women&apos;s health.</p>
            </div>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <div className="mt-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Dr. James Nguyen</p>
              <p className="text-sm text-gray-600">Passionate about holistic healthcare and promoting wellness in all age groups.</p>
            </div>
            <Image src={jamesNguyen} alt="Dr. James Nguyen" width={200} className="md:h-48 h-44 rounded-lg border-[1px] border-neutral-800 md:w-48 w-44"></Image>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <Image src={emilyDawson} alt="Nurse Emily Dawson" width={200} className="md:h-48 h-44 rounded-lg border-[1px] border-neutral-800 md:w-48 w-44"></Image>
            <div className="mt-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Nurse Emily Dawson</p>
              <p className="text-sm text-gray-600">Dedicated to patient well-being, with a focus on pediatric and adolescent health.</p>
            </div>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <div className="mt-2 flex flex-col justify-center">
              <p className="text-base font-semibold">Nurse Carlos Rodriguez</p>
              <p className="text-sm text-gray-600">Enthusiastic healthcare professional with a passion for sports health and rehabilitation.</p>
            </div>
            <Image src={carlosRodriguez} alt="Nurse Carlos Rodriguez" width={200} className="md:h-48 h-44 rounded-lg border-[1px] border-neutral-800 md:w-48 w-44"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
