import { useRef, useEffect } from "react";
import Image from "next/image";

export default function PageHeading({
  text,
  height,
  fontSize,
}: {
  text: string;
  height: string;
  fontSize: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    sectionRef.current?.style.setProperty("height", height);
    headingRef.current?.style.setProperty("font-size", fontSize);
  }, [height, fontSize]);
  return (
    <section className="page-heading-sec" ref={sectionRef}>
      <div className="img-container bg-img-container">
        <Image
          src="/assets/images/bg.png"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="bg-img"
        />
      </div>
      <main className="main">
        <h1 className="company-heading" ref={headingRef}>
          {text}
        </h1>
      </main>
    </section>
  );
}
