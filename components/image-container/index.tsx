/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { ImageContainerProps } from "./types";

export default function ImageContainer(
  props: ImageContainerProps
): JSX.Element {
  const { containerClassName, ...allOtherProps } = props;
  return (
    <div
      className={
        "img-container" + (containerClassName ? " " + containerClassName : "")
      }
    >
      <Image {...allOtherProps} priority fill sizes="100%" />
    </div>
  );
}
