import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/" className="header-links">
        Home
      </Link>
      <Link href="/events" className="header-links">
        Events
      </Link>
    </header>
  );
}
