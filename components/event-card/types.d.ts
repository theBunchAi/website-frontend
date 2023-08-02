import type { ImageProps } from "next/image";
export interface EventCardProps {
  img: {
    src: ImageProps["src"];
    alt: ImageProps["alt"];
  };
  heading: string;
  description: string;
  date: Date;
  venue: string;
  barCodeMsg?: string;
}
