import Image from "next/image";
import bannerImg from "./banner.png";

// export interface Img {
//   message: string;
//   url: string;
// }

// const BASE_API_URL = "https://random-d.uk/api/v2/quack";

// const getImg = async (): Promise<Img> => {
//   const data = await fetch(`${BASE_API_URL}`, { next: { revalidate: 300 } });
//   return data.json();
// };

export default function Home() {
  // const img = await getImg();

  return (
    <main className="flex flex-col justify-center">
      <h1 className="flex justify-center p-14 text-4xl font-bold">Home Page</h1>
      <div className="w-[1024px] aspect-video relative m-auto max-lg:w-full max-md:w-full">
        <Image
          src={bannerImg} //{img.url}
          alt="Duck img from public API"
          fill={true}
          object-fit="cover"
        ></Image>
      </div>
    </main>
  );
}
