import Image from "next/image";
import sarahPatel from "./dr_sarah_patel.jpg";

function About() {
  return (
    <div className="max-w-[900px] mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
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
            <Image src={sarahPatel} alt="Dr. Sarah Patel" width={200} className="h-48"></Image>
            <div className="mt-2">
              <p className="text-sm font-semibold">Dr. Sarah Patel</p>
              <p className="text-xs text-gray-600">Experienced family physician specializing in preventive care and women&apos;s health.</p>
            </div>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <div className="mt-2">
              <p className="text-sm font-semibold">Dr. James Nguyen</p>
              <p className="text-xs text-gray-600">Passionate about holistic healthcare and promoting wellness in all age groups.</p>
            </div>
            <Image src={sarahPatel} alt="Dr. James Nguyen" width={200} className="h-48"></Image>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <Image src={sarahPatel} alt="Nurse Emily Dawson" width={200} className="h-48"></Image>
            <div className="mt-2">
              <p className="text-sm font-semibold">Nurse Emily Dawson</p>
              <p className="text-xs text-gray-600">Dedicated to patient well-being, with a focus on pediatric and adolescent health.</p>
            </div>
          </div>

          <div className="mb-4 flex flex-row gap-3 mx-auto">
            <div className="mt-2">
              <p className="text-sm font-semibold">Nurse Carlos Rodriguez</p>
              <p className="text-xs text-gray-600">Enthusiastic healthcare professional with a passion for sports health and rehabilitation.</p>
            </div>
            <Image src={sarahPatel} alt="Nurse Carlos Rodriguez" width={200} className="h-48"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
