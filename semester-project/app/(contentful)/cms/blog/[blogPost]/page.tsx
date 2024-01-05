import Image from "next/image";
import contentfulService from "@/lib/contentfulClient";

type Params = {
  productId: string;
};

const BlogPost = async ({ params }: { params: Params }) => {
  const product = await contentfulService.getProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="container flex flex-col items-center gap-10 mb-10">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        {product?.name}
      </h1>
      <div className="grid grid-cols-2 gap-4 w-3/4 relative">
        <div className="flex flex-col gap-4 justify-between">
          <div className="grid grid-cols-2 gap-2">
            {product.images?.map((image) => (
              <div key={image} className="relative w-full h-32">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={image as string}
                  alt={product.name as string}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="mb-2">{product.description}</div>
          </div>
        </div>
      </div>
      {/* <div
        className="mt-10 prose prose-h1:text-brand-purple-800"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(product?.richTextDescription?.json),
        }}
      /> */}
      <div className="mt-10 prose prose-h1:text-brand-purple-800">
      </div>
    </main>
  );
};

export default BlogPost;
