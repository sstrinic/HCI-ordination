import contentfulService from "@/lib/contentfulClient";
import Link from "next/link";
import { FC } from "react";
import CategoryFilter from "../_components/categoryFilter";

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
  const products = await contentfulService.getAllPosts();
  //const categories = await contentfulService.getAllCategories();
  //searchParams._category = "world";
  const filteredProducts = searchParams._category
    ? products.filter((product) => {
      console.log("Product: "+product.categories)
        return product.categories?.some((category) => {
          return category == searchParams._category;
        });
      })
    : products;

  return (
    <main className="container flex flex-col items-center gap-10">
      <h1 className="font-roboto-condensed text-5xl font-extrabold text-brand-purple-900 my-4">
        Blog Posts
      </h1>
      <CategoryFilter/>
      <ul className="grid gap-8">
        {filteredProducts.map((product) => {
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