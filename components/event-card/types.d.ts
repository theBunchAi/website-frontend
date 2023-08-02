export interface EventCardProps {
  img: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
  date: Date;
  venue: string;
  barCodeMsg?: string;
}
