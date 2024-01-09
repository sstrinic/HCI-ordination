import contentfulService from "@/lib/contentfulClient";
import Link from "next/link";
import { FC } from "react";

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
  const products = await contentfulService.getAllPosts();
  // const filteredProducts = searchParams._category
  //   ? products.filter((product) => {
  //       return product.categories
  //   })
  //   : products;

  return (
    <main className="container flex flex-col items-center gap-10">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        Blog Posts
      </h1>
      <ul className="grid gap-8">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={"/cms/blog/"+product.id}><span>{product.name}</span></Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CmsPage;