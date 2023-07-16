// import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useHeaderRef from "@/hooks/use-header-ref";

export default function Header() {
  const headerRef = useHeaderRef();
  // useEffect(() => {
  //   const docHeight = document.body.scrollHeight;
  //   const num = 700;
  //   const diff = docHeight - num;
  //   if (headerRef.current?.classList[1] === "inactive") {
  //     headerRef.current.style.setProperty("top", String(diff));
  //     console.log(
  //       headerRef.current.getBoundingClientRect().top,
  //       headerRef.current.clientTop
  //     );
  //   }
  // }, []);
  return (
    <header className={`header`} ref={headerRef}>
      <Link href="/" className="img-container logo-container">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          fill
          priority
          sizes="100%"
          className="logo"
        />
      </Link>
      <nav className="nav">
        <Link href="/" className="nav-links">
          Home
        </Link>
        <Link href="/events" className="nav-links">
          Events
        </Link>
        <Link href="/" className="nav-links">
          Join
        </Link>
      </nav>
    </header>
  );
}
