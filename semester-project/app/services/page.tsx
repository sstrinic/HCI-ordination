import styles from './services.module.css';
import contentfulService from "@/lib/contentfulClient";
import Image from "next/image";

const Services = async () => {
  const allServices = await contentfulService.getAllServices();

  return (
    <main className="max-w-[1092px] mx-auto mt-8 p-6 bg-white">
      <div id='desc-top'>
            <h1 className='text-4xl font-bold mb-6 text-center'>Services</h1>
            <h3 className='text-center max-md:text-left'> Our mission is to provide quality service to patients both in the office and in the field. We are focused on preventive examinations as well as treatment of acute diseases and monitoring and control of chronic diseases. To achieve this, we hired the best consultants who, in cooperation with our teams, take care of your health. We have cooperation with the best laboratories in New York, and we have also organized online support and advice.</h3>
          </div>
      <div className='mt-4'>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {allServices.map((service) => {
            return (
              <li key={service.title} className='text-center flex flex-col'>
                <div className={styles.transformImg}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="rounded-md"
                    />
                    <div className={styles.serviceText}>
                      <span className='max-md:text-sm'>{service.text}</span>
                    </div>
                </div>
                <p>{service.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Services;