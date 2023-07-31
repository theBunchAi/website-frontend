import Image from "next/image";
import type { ImageContainerProps } from "./types";

export default function ImageContainer(props: ImageContainerProps) {
  const { src, alt, containerClassName, ...allOtherProps } = props;
  return (
    <div
      className={
        "img-container" + (containerClassName ? " " + containerClassName : "")
      }
    >
      <Image {...allOtherProps} src={src} alt={alt} fill sizes="100vw" />
    </div>
  );
}
