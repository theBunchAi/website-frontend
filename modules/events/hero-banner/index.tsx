import { useEffect, useRef, useCallback } from "react";
import ImageContainer from "@/components/image-container";

export default function EventsHeroBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isIOS = useCallback(function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }, []);
  useEffect(() => {
    if (ref.current && !isIOS()) {
      ref.current.querySelector("img")?.classList.add("aniS2BwithRotate");
    }
  }, [isIOS]);
  return (
    <div id="events-hero-banner" ref={ref}>
      <ImageContainer
        src="/assets/images/home-bg.webp"
        alt="The Bunch Ai"
        priority
      />
      <h1 className="hero-banner-heading aniB2C">Events</h1>
    </div>
  );
}
