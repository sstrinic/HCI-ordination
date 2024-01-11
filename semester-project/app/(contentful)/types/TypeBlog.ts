export interface TypeBlogListItem {
  name: string;
  id: string;
  description: string;
  categories: string[];
}

export interface TypeBlogDetailItem extends TypeBlogListItem {
  image?: string;
}
