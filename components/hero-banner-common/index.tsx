import { useEffect, useRef, useCallback } from "react";
import ImageContainer from "../image-container";
import Link from "next/link";

export default function HeroBannerCommon({
  title,
  module,
}: {
  title: string;
  module: string;
}) {
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
      (navigator.userAgent.includes("Mac") && "ontouchend" in document) ||
      navigator.userAgent.includes("iPhone")
    );
  }, []);
  useEffect(() => {
    // const target = ref.current?.querySelector("img");
    const targetTwo = ref.current?.querySelector("h1");
    const isNotIphone = !isIOS();
    // if (target && isNotIphone) {
    //   target?.classList.add("aniS2BwithRotate");
    // } else {
    //   target?.classList.add("no-main-animation");
    // }
    if (targetTwo && isNotIphone) {
      targetTwo?.classList.add("aniB2C");
    } else {
      targetTwo?.classList.add("no-main-animation");
    }
  }, [isIOS]);
  return (
    <div id={`${module}-hero-banner`} ref={ref}>
      {/* <ImageContainer
        src="/assets/images/curves.jpg"
        alt="The Bunch Ai"
        priority
      /> */}
      <h1 className="hero-banner-heading">{title}</h1>
      <div className="navigation-container">
        <Link href="/" className="home-link nav-link">
          Home
        </Link>
        <Link href="/events" className="home-link nav-link">
          Events
        </Link>
      </div>
    </div>
  );
}
