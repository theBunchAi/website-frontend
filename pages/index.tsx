import { HomeHeroBanner, JoinUs, GetStarted, Cards } from "@/modules/home";

export default function Home() {
  return (
    <section id="home" aria-label="Bunch Ai | Home">
      <HomeHeroBanner />
      <JoinUs />
      <GetStarted />
      <Cards />
    </section>
  );
}
