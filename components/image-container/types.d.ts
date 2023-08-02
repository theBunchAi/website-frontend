import type { ImgHTMLAttributes } from "react";
export interface ImageContainerProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  priority?: boolean;
}
