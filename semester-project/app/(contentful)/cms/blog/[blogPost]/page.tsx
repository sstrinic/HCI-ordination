import contentfulService from "@/lib/contentfulClient";
import BlogPostic from "../../_components/blogPost";
import Link from "next/link";

const defaultImg = "https://images.ctfassets.net/y5exkuexzl7j/6HWyZsyeWYdB9nJBPNvQyF/c49342103d0fd36dd23db985dc163ae0/default-img.jpg";

type Params = {
  blogPost: string;
};

const BlogPost = async ({ params }: { params: Params }) => {
  const product = await contentfulService.getPostId(params.blogPost);
  
  if (!product) {
    return <div>{product}Product not found</div>;
  }

  return (
    <main className="container flex flex-col items-center gap-10 mb-10 md:w-[1092px] m-auto">
      <BlogPostic 
      key={product.id} 
      title={product.name} 
      text={product.description} 
      labels={product.categories}
      publishedAt={product.publishedAt}
      imageUrl={product.image ? product.image as string : defaultImg} />
      <Link href={"/cms/blog/"}><span className="scheduleButton">Back</span></Link>
    </main>
  );
};

export default BlogPost;
