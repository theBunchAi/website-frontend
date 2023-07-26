import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function PageHeading({
  text,
  height,
  heightMed,
  heightSmall,
  fontSize,
  fontSizeMed,
  fontSizeSmall,
}: {
  text: string;
  height: string;
  heightMed: string;
  heightSmall: string;
  fontSize: string;
  fontSizeMed: string;
  fontSizeSmall: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const observerOptions = useRef<IntersectionObserverInit>({
    threshold: 0.1,
  });
  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries, obv) => {
      if (sectionRef.current && entries[0]?.isIntersecting) {
        if (window.innerWidth > 500 && window.innerWidth < 1000) {
          headingRef.current?.style.setProperty("font-size", fontSizeMed);
          sectionRef.current?.style.setProperty("height", heightMed);

          obv.disconnect();
        }
        if (window.innerWidth < 500) {
          headingRef.current?.style.setProperty("font-size", fontSizeSmall);
          sectionRef.current?.style.setProperty("height", heightSmall);

          obv.disconnect();
        }
        if (window.innerWidth > 1000) {
          headingRef.current?.style.setProperty("font-size", fontSize);
          sectionRef.current?.style.setProperty("height", height);

          obv.disconnect();
        }
      }
    },
    [fontSize, fontSizeMed, fontSizeSmall, height, heightMed, heightSmall]
  );
  useEffect(() => {
    sectionRef.current?.style.setProperty("height", height);
    headingRef.current?.style.setProperty("font-size", fontSize);
    const sectionObserver: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    return;
  }, [height, fontSize, fontSizeMed, observerCallback]);
  return (
    <section className="page-heading-sec" ref={sectionRef}>
      <div className="img-container bg-img-container">
        <Image
          src="/assets/images/dt-transformed.png"
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
