import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { footerText } from "@/common-data";
import useHeaderRef from "@/hooks/use-header-ref";

export default function Footer() {
  const headerRef = useHeaderRef();
  const footerRef = useRef<HTMLDivElement | null>(null);
  const observerOptions = useRef<IntersectionObserverInit>({
    root: null,
    threshold: 0.25,
  });
  const changeHeaderPos = useCallback(() => {
    if (headerRef.current) {
      const docHeight = document.body.scrollHeight;
      const num = footerRef.current?.clientHeight;
      const diff = docHeight - (num ?? 0) + 20;
      headerRef.current.style.setProperty("position", "absolute");
      headerRef.current.style.setProperty("top", `${diff}px`);
    }
  }, [headerRef]);
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const intersecting = entries[0]?.isIntersecting;
      if (intersecting) {
        changeHeaderPos();
      } else {
        if (headerRef.current) {
          headerRef.current.style.top = "80vh";
          headerRef.current.style.setProperty("position", "fixed");
          headerRef.current.style.transform = "translate(-50%,0)";
        }
      }
    },
    [changeHeaderPos, headerRef]
  );
  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
      return () => {
        footerObserver.disconnect();
      };
    }
    return;
  }, [observerCallback]);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="img-container footer-img-container">
        <Image
          src="/assets/images/bg.png"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="footer-img"
        />
      </div>
      <span className="year-span">{footerText}</span>
      <div className="footer-links">
        <Link href="/">
          <BsTwitter />
        </Link>
        <Link href="/">
          <BsInstagram />
        </Link>
        <Link href="/">
          <BsFacebook />
        </Link>
        <Link href="/">
          <BsDiscord />
        </Link>
      </div>
    </footer>
  );
}

// import { useRef, useEffect, useCallback, useMemo } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
// import useHeaderRef from "@/hooks/use-header-ref";

// export default function Footer() {
//   const headerRef = useHeaderRef();
//   const footerRef = useRef<HTMLDivElement | null>(null);
//   const intersectionThreshold: number[] = useMemo(() => {
//     const thresholds = [];
//     for (let i = 0.35; i <= 1.0; i += 0.01) {
//       thresholds.push(i);
//     }
//     return thresholds;
//   }, []);
//   const observerOptions = useRef<IntersectionObserverInit>({
//     root: null,
//     threshold: intersectionThreshold,
//   });
//   const changeHeaderPos = useCallback(() => {
//     if (headerRef.current && footerRef.current) {
//       let distanceToTop = footerRef.current.getBoundingClientRect().top;
//       headerRef.current.style.top = `${distanceToTop + 10}px`;
//     }
//   }, [headerRef]);
//   const observerCallback: IntersectionObserverCallback = useCallback(
//     (entries) => {
//       const intersecting = entries[0]?.isIntersecting;
//       if (intersecting) {
//         changeHeaderPos();
//       } else {
//         if (headerRef.current) {
//           headerRef.current.style.top = "80vh";
//         }
//       }
//     },
//     []
//   );
//   useEffect(() => {
//     const footerObserver = new IntersectionObserver(
//       observerCallback,
//       observerOptions.current
//     );
//     if (footerRef.current) {
//       footerObserver.observe(footerRef.current);
//       return () => {
//         footerObserver.disconnect();
//       };
//     }
//     return;
//   }, [observerCallback]);
//   return (
//     <footer className="footer" ref={footerRef}>
//       <div className="img-container footer-img-container">
//         <Image
//           src="/assets/images/bg.png"
//           alt="3D Swirl"
//           fill
//           priority
//           sizes="100%"
//           className="footer-img"
//         />
//       </div>
//       <span className="year-span">2023</span>
//       <div className="footer-links">
//         <Link href="/">
//           <BsTwitter />
//         </Link>
//         <Link href="/">
//           <BsInstagram />
//         </Link>
//         <Link href="/">
//           <BsFacebook />
//         </Link>
//         <Link href="/">
//           <BsDiscord />
//         </Link>
//       </div>
//     </footer>
//   );
// }
