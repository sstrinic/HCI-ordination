export interface TypeBlogListItem {
  name: string;
  id: string;
  description: string;
  categories: string[];
  publishedAt: string;
}

export interface TypeBlogDetailItem extends TypeBlogListItem {
  image?: string;
}
