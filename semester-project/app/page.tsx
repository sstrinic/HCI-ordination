import Image from "next/image";
import bannerImg from "./banner.png";
import ServicesList from "./_components/ServicesList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center bg-white max-w-[1092px] m-auto">
      <p className="flex justify-center font-extrabold text-black pt-11 text-4xl max-md:text-3xl text-center">
          Compassionate Family Care You Can Trust
        </p>
        <p className="flex justify-center font-light text-black p-6 pb-10 text-2xl max-md:text-1xl text-center">
          Your Partner in Health and Wellness
        </p>
      <div className="flex flex-col w-[1024px] aspect-video relative m-auto max-lg:w-full max-md:w-full">
        <Image
          src={bannerImg}
          alt="Banner image"
          fill={true}
          object-fit="cover"
        ></Image>
      </div>
      <p className="max-w-[1024px] mt-11 mb-5 font-light text-black md:text-center m-auto max-md:px-6">
          Welcome to Ordinacija Horvat, your trusted family medicine office. Our mission is to provide exceptional
          healthcare services that prioritize your well-being. Whether you need a medical consultation, health checkup,
          or specialist referral, our team of experienced professionals is here to help. With our patient-centric
          approach and state-of-the-art facilities, we offer tailored healthcare solutions that meet your unique needs.
          Book your appointment today and take the first step towards a healthier tomorrow.
        </p>
        <Link className="m-auto my-[15px]" href={"/contact"}><span className="scheduleButton">Schedule an appointment</span></Link>
      <ServicesList />
    </main>
  );
}
