// import contentfulService from "@/lib/contentfulClient";

// const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
//     const products = await contentfulService.getAllProducts();
//     const categories = await contentfulService.getAllCategories();
  
//     const filteredProducts = searchParams._category
//       ? products.filter((product) => {
//           return product.categories?.some((category) => {
//             return category.label === searchParams._category;
//           });
//         })
//       : products;
  
//     return (
//       <main className="container flex flex-col items-center gap-10">
//         <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
//           Products
//         </h1>
//         <CategoryFilter categories={categories} />
//         <ul className="grid grid-cols-2 gap-8">
//           {filteredProducts.map((product) => {
//             return (
//               <li key={product.id}>
//                 <ProductCard {...product} />
//               </li>
//             );
//           })}
//         </ul>
//       </main>
//     );
//   };
  
//   export default CmsPage;