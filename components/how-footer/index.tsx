import Link from "next/link";

export default function HowFooter() {
  return (
    <Link
      href="https://hymnsofweb.com"
      id="how-footer"
      target="_blank"
      rel="noopener noreferrer"
    >
      Designed and Developed by
      <span className="how-name">Hymns Of Web</span>
    </Link>
  );
}
