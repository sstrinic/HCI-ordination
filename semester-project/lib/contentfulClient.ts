import { TypeBlogDetailItem, TypeBlogListItem, TypeServiceItem } from "@/app/(contentful)/types/TypeBlog";

const gqlAllBlogPostsQuery = `query BlogPosts{
  blogPostCollection{
    items{
      sys {id}
      sys {publishedAt}
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

const gqlProductByIdQuery = `query GetPostById($postID: String!) {
  blogPost(id: $postID) {
    sys {publishedAt}
    title
    text
    label
    image {
      title
      url
    }
  }
}`;

const gqlServicesQuery = `query AllServices {
  serviceCollection{
    items{
      name
      description
      image {
        title
        url
      }
    }
  }
}`;

interface Serv {
  name: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
}

interface ServResponse {
  serviceCollection: {
    items: Serv[];
  }
}

interface BlogPostsResponse {
  blogPostCollection: {
    items: BlogPost[];
  };
}

interface BlogPost {
  sys: {
    id: string;
    publishedAt: string;
  };
  title: string;
  text: string;
  image: {
    title: string;
    url: string;
  };
  label: string[];
}

interface BlogPostDetail {
  blogPost: any;
  product: {
    sys: {
      date: string;
    };
    title: string;
    text: string;
    image: {
      title: string;
      url: string;
    };
    label: string[];
  }
}

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
        publishedAt: item.sys.publishedAt,
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
    const product: TypeBlogDetailItem = {
      id: ids,
      name: responseProduct.title,
      description: responseProduct.text,
      image: responseProduct.image?.url,
      categories: responseProduct.label,
      publishedAt: responseProduct.sys.publishedAt,
    };
    return product;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const getAllServices = async (): Promise<TypeServiceItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      cache: 'no-store',
      body: JSON.stringify({ query: gqlServicesQuery }),
    });

    const body = (await response.json()) as {
      data: ServResponse;
    };
    const allServices: TypeServiceItem[] =
      body.data.serviceCollection.items.map((item) => ({
        title: item.name,
        text: item.description,
        img: item.image.url,
      }));
    return allServices;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const contentfulService = {
  getAllPosts,
  getPostId,
  getAllServices,
};

export default contentfulService;
