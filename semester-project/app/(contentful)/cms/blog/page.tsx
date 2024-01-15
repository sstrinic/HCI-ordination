import contentfulService from "@/lib/contentfulClient";
import Link from "next/link";
import { FC } from "react";
import CategoryFilter from "../_components/categoryFilter";
import LabelLister from "@/components/LabelList";
import Date from "@/components/date";

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
    <main className="container flex flex-col items-center gap-10 w-[1092px] m-auto">
      <h1 className="font-roboto-condensed text-5xl font-extrabold text-brand-purple-900 my-4">
        Blog Posts
      </h1>
      <CategoryFilter/>
      <ul className="grid gap-8">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="text-gray-500">Last modified</dt>
                <dd className="text-base font-medium leading-6">
                <Date dateString={product.publishedAt} />
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={"/cms/blog/"+product.id} className="">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                  <LabelLister labels={product.categories}/>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {product.description}
                </div>
              </div>
            </article>
          </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CmsPage;