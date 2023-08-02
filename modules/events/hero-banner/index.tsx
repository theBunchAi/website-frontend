import ImageContainer from "@/components/image-container";

export default function EventsHeroBanner() {
  return (
    <div id="events-hero-banner">
      <ImageContainer
        src="/assets/images/home-bg.webp"
        alt="The Bunch Ai"
        className="aniS2BwithRotate"
        priority
      />
      <h1 className="hero-banner-heading aniB2C">Events</h1>
    </div>
  );
}
