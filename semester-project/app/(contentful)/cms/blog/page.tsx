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
  const filteredProducts = searchParams._category
    ? products.filter((product) => {
      return product.categories?.some((category) => {
        return category == searchParams._category;
      });
    })
    : products;

  return (
    <main className="container flex flex-col md:items-center gap-6 mb-10 mt-8 p-6 max-md:py-0 md:w-[1092px] m-auto bg-white">
      <h1 className="text-4xl font-bold text-left">
        Blog Posts
      </h1>
      <CategoryFilter />
      <ul className="grid gap-4">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id} className="py-4 max-md:px-6">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl className="max-md:hidden">
                  <dt className="text-gray-500">Last modified</dt>
                  <dd className="text-base font-medium leading-6">
                    <Date dateString={product.publishedAt} />
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={"/cms/blog/" + product.id} className="">
                        {product.name}
                      </Link>
                    </h3>
                    <hr />
                    <div className="flex flex-wrap">
                      <LabelLister labels={product.categories} />
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    {product.description.slice(0, 250) + "... "}<Link href={"/cms/blog/" + product.id} className="text-red-700">Read more</Link>
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
