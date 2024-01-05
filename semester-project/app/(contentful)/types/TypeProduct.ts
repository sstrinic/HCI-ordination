import { BlogCategory } from "./BlogCategory";

export interface TypeProductListItem {
  name: string;
  id: string;
  description: string;
  categories: string;
  image: string;
}

export interface TypeProductDetailItem extends TypeProductListItem {
  price: number;
  currencyCode: "CHF" | "EUR" | "GBP" | "USD";
  listed: boolean;
  richTextDescription?: {
    json: any;
    links: any;
  };
  images: string[];
}
