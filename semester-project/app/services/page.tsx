import Link from "next/link";
import styles from './services.module.css';
import slika1 from '@/public/slika1-min.jpg';

export interface Service {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getServices = async (): Promise<Service[]> => {
  const data = await fetch(`${BASE_API_URL}/posts`);
  return data.json();
};

export default async function Services() {
  const servicesList = await getServices();
  return (
    <main className="flex flex-col items-center max-w-5xl m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className={styles.transformImg}>
            <img src="http://localhost/slika1-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Najbolja medicinska oprema u regiji</span>
            </div>
        </div>

        <div className={styles.transformImg}>
            <img src="http://localhost/slika2-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Besplatan prvi pregled</span>
            </div>
        </div>

        <div className={styles.transformImg}>
            <img src="http://localhost/slika3-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Ugodno osoblje u vašim najtežim trenutcima</span>
            </div>
        </div>

        <div className={styles.transformImg}>
            <img src="http://localhost/slika4-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Dostupni i preko mobilnih telefona</span>
            </div>
        </div>

        <div className={styles.transformImg}>
            <img src="http://localhost/slika5-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Obavezno nošenje zaštitni maski</span>
          </div>
        </div>

        <div className={styles.transformImg}>
            <img src="http://localhost/slika6-min.jpg" alt='slika-usluge'/>
            <div className={styles.serviceText}>
            <span>Minimalistički uređene prostorije</span>
            </div>
        </div>
      </div>

      {/* <h1 className="flex justify-center p-14 text-4xl font-bold">Services Index Page</h1>
      <ul className="flex flex-col gap-8 pb-8">
        {servicesList.map((serv) => (
          <li key={serv.id}>
            <Link href={`services/${serv.id}`}>
              <span className="text-2xl text-purple-500">
                Service {serv.title}
              </span>
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
