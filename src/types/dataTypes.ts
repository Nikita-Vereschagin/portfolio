import { ClassValue } from "clsx";

export type TLink = {
  href: string;
  text: string;
};

export type TButton = {
  href: string;
  image?: string;
  children?: string;
};

export type TCard = {
  title: string;
  images?: string[];
  href: string;
};
