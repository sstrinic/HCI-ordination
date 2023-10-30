export interface Image {
  message: string;
  url: string;
}

const BASE_API_URL = "https://random-d.uk/api/v2/quack";

const getImg = async (): Promise<Image> => {
  const data = await fetch(`${BASE_API_URL}`);
  return data.json();
};

export default async function Home() {
  const img = await getImg();

  return (
    <main className="flex flex-col justify-center">
      <h1 className="flex justify-center p-14 text-4xl font-bold">Home Page</h1>
      <img src={img.url} alt="Duck img from public API" className="w-fit m-auto"></img>
    </main>
  );
}
