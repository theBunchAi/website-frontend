import ImageContainer from "@/components/image-container";

export default function HeroBanner() {
  return (
    <div id="home-hero-banner">
      <ImageContainer
        src="/assets/images/home-bg.webp"
        alt="The Bunch Ai"
        className="aniS2BwithRotate"
        priority
      />
      <h1 className="hero-banner-heading aniB2C">The Bunch</h1>
    </div>
  );
}
