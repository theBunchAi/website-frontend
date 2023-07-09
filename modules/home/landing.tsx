import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing">
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
        <h1 className="company-heading">The Bunch</h1>
      </main>
    </section>
  );
}
