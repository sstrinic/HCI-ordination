import Link from "next/link";

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
      <h1 className="flex justify-center p-14 text-4xl font-bold">Services Index Page</h1>
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
      </ul>
    </main>
  );
}
