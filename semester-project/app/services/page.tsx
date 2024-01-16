import styles from './services.module.css';
import contentfulService from "@/lib/contentfulClient";
import { FC } from "react";
import Image from "next/image";

export type Service = {
  title: string;
  text: string;
  img:string;
}

const Services: FC<Service> = async () => {
  const allServices = await contentfulService.getAllServices();

  return (
    <main className="max-w-[1092px] mx-auto mt-8 p-6">
      <div id='desc-top'>
            <h1 className='text-4xl font-bold mb-6 text-center'>Services</h1>
            <h3 className='text-center'> Our mission is to provide quality service to patients both in the office and in the field. We are focused on preventive examinations as well as treatment of acute diseases and monitoring and control of chronic diseases. To achieve this, we hired the best consultants who, in cooperation with our teams, take care of your health. We have cooperation with the best laboratories in New York, and we have also organized online support and advice.</h3>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ul>
      {allServices.map((service) => {
        return (
          <li key={service.title}>
          <div className={styles.transformImg}>
              <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className={styles.serviceText}>
                <span>{service.text}</span>
              </div>
          </div>
          </li>
        );
      })}
      </ul>
      </div>
    </main>
  );
}

export default Services;