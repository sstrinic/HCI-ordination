import Image from "next/image";
import contentfulService from "@/lib/contentfulClient";

type Params = {
  blogPost: string;
};

const BlogPost = async ({ params }: { params: Params }) => {
  const product = await contentfulService.getPostId(params.blogPost);
  
  if (!product) {
    return <div>{product}Product not found</div>;
  }

  return (
    <main className="container flex flex-col items-center gap-10 mb-10 w-[1092px] m-auto">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        {product?.name}
      </h1>
      <div className="w-3/4 relative">
        <div className="flex flex-col gap-4 justify-between">
          <div className="">
              <div key={product.name} className="relative w-[300px] h-[300px]">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  src={product.image ? product.image as string : "https://images.ctfassets.net/y5exkuexzl7j/6HWyZsyeWYdB9nJBPNvQyF/c49342103d0fd36dd23db985dc163ae0/default-img.jpg"}
                  alt={product.name as string}
                />
              </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">{product.description}</div>
            <div className="mb-2">{product.categories}</div>
          </div>
        </div>
      </div>
      {/* <div
        className="mt-10 prose prose-h1:text-brand-purple-800"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(product?.richTextDescription?.json),
        }}
      /> */}
      {/* <div className="mt-10 prose prose-h1:text-brand-purple-800">
      </div> */}
    </main>
  );
};

export default BlogPost;
