import { BlogCategory } from "@/app/(contentful)/types/BlogCategory";
import { TypeProductListItem } from "@/app/(contentful)/types/TypeProduct";

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
  productCollection: {
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

const getAllCategoriesQuery = `query {
  categoryCollection {
    items {
      label
      }
    }
  }`;

const gqlProductByIdQuery = `query GetPostById($postID: String!) {
  blogPost(id: $postID) {
    title
    text
    label
    image {
      url
    }
  }
}
`;

interface CategoryCollectionResponse {
  categoryCollection: {
    items: BlogCategory[];
  };
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllPosts = async (): Promise<TypeProductListItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllBlogPostsQuery }),
    });

    // Get the response as JSON, cast as BlogPostsResponse
    const body = (await response.json()) as {
      data: BlogPostsResponse;
    };

    // Map the response to the format we want
    const products: TypeProductListItem[] =
      body.data.productCollection.items.map((item) => ({
        id: item.sys.id,
        name: item.title,
        description: item.text,
        image: item.image.url,
        categories: item.label,
      }));
    return products;
  } catch (error) {
    console.log(error);

    return [];
  }
};

// const getAllCategories = async (): Promise<BlogCategory[]> => {
//   try {
//     const response = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
//       },
//       body: JSON.stringify({ query: getAllCategoriesQuery }),
//     });
//     const body = (await response.json()) as {
//       data: CategoryCollectionResponse;
//     };

//     const categories: BlogCategory[] = body.data.categoryCollection.items.map(
//       (item) => ({
//         label: item.label,
//       })
//     );

//     return categories;
//   } catch (error) {
//     console.log(error);

//     return [];
//   }
// };

const getPostId = async (
  ids: string
): Promise<TypeProductListItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: gqlProductByIdQuery,
        variables: { postID: ids },
      }),
    });

    const body = (await response.json()) as {
      data: BlogPostDetail;
    };
    console.log(body);
    const responseProduct = body.data.blogPost;
    console.log(responseProduct);
    console.log("222222222222222222222222");
    const product: TypeProductListItem ={
        id: "70QUXwffyU6Fkhhdfhi9e6", //id: ids
        name: responseProduct.title,
        description: responseProduct.text,
        image: responseProduct.image,
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
  // getAllCategories,
  getPostId,
};

export default contentfulService;
