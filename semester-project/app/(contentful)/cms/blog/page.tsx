import contentfulService from "@/lib/contentfulClient";
import Link from "next/link";
import { FC } from "react";

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
  const products = await contentfulService.getAllPosts();

  const filteredProducts = searchParams._category
    ? products.filter((product) => {
        return product.categories
    })
    : products;

  return (
    <main className="container flex flex-col items-center gap-10">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        Blog Posts
      </h1>
      <Link href={"/cms/blog/7cuAgAo3T5E41B76PYEpP8"}><span>New health</span></Link>
      <Link href={"/cms/blog/70QUXwffyU6Fkhhdfhi9e6"}><span>Pet friendly</span></Link>
      <ul className="grid grid-cols-2 gap-8">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CmsPage;