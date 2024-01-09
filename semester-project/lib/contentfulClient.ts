import { BlogCategory } from "@/app/(contentful)/types/BlogCategory";
import { TypeBlogDetailItem, TypeBlogListItem } from "@/app/(contentful)/types/TypeBlog";

const gqlAllBlogPostsQuery = `query BlogPosts{
  blogPostCollection{
    items{
      sys {id}
      title,
      text,
      label,
      image {
        title
        url
      }
    }
  }
}`;

interface BlogPostsResponse {
  blogPostCollection: {
    items: BlogPost[];
  };
}

interface BlogPost {
  sys: {
    id: string;
  };
  title: string;
  text: string;
  image: {
    title: string;
    url: string;
  };
  label: BlogCategory["label"];
}

interface BlogPostDetail {
  blogPost: any;
  product: {
  title: string;
  text: string;
  image: {
    title: string;
    url: string;
  };
  label: BlogCategory["label"];
}
}

const gqlProductByIdQuery = `query GetPostById($postID: String!) {
  blogPost(id: $postID) {
    title
    text
    label
    image {
      title
      url
    }
  }
}`;


const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllPosts = async (): Promise<TypeBlogListItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      cache: 'no-store',
      body: JSON.stringify({ query: gqlAllBlogPostsQuery }),
    });

    const body = (await response.json()) as {
      data: BlogPostsResponse;
    };
    const products: TypeBlogListItem[] =
      body.data.blogPostCollection.items.map((item) => ({
        id: item.sys.id,
        name: item.title,
        description: item.text,
        categories: item.label,
      }));
    return products;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getPostId = async (
  ids: string
): Promise<TypeBlogDetailItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: gqlProductByIdQuery,
        variables: { postID: ids },
      }),
    });

    const body = (await response.json()) as {
      data: BlogPostDetail;
    };
    const responseProduct = body.data.blogPost;
    const product: TypeBlogDetailItem ={
      id: ids, 
      name: responseProduct.title,
      description: responseProduct.text,
      image: responseProduct.image?.url,
      categories: responseProduct.label,
    };
    return product;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const contentfulService = {
  getAllPosts,
  getPostId,
};

export default contentfulService;
