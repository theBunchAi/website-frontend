// import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useHeaderRef from "@/hooks/use-header-ref";

export default function Header() {
  const headerRef = useHeaderRef();
  return (
    <header className={`header`} ref={headerRef}>
      <Link href="/" className="logo-container">
        <div className="img-container logo-shapes">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            fill
            priority
            sizes="100%"
            className="logo-img"
          />
        </div>
        <div className="img-container logo-word">
          <Image
            src="/assets/images/logo-word.png"
            alt="Logo"
            fill
            priority
            sizes="100%"
            className="logo-word-img"
          />
        </div>
      </Link>
      <nav className="nav">
        <Link href="/" className="nav-links">
          Home
        </Link>
        <Link href="/events" className="nav-links">
          Events
        </Link>
      </nav>
    </header>
  );
}
