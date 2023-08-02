/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { ImageContainerProps } from "./types";

export default function ImageContainer(props: ImageContainerProps) {
  const { containerClassName, ...allOtherProps } = props;
  return (
    <div
      className={
        "img-container" + (containerClassName ? " " + containerClassName : "")
      }
    >
      <img {...allOtherProps} />
    </div>
  );
}
