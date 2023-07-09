import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="home-cta">
      <h2 className="cta-heading">Get Started</h2>
      <p className="cta-para">
        Dive into a plethora of excitement and entertainment exclusively crafted
        for you. Don’t miss out on the fun – join TheBunch.ai today!
      </p>
      <Link href="/" className="cta-btn">
        Sign Up Now
      </Link>
    </section>
  );
}
