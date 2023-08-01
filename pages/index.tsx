import {
  HomeHeroBanner,
  JoinUs,
  GetStarted,
  Cards,
  Faqs,
} from "@/modules/home";

export default function Home() {
  return (
    <section id="home" aria-label="Bunch Ai | Home">
      <HomeHeroBanner />
      <JoinUs />
      <GetStarted />
      <Cards />
      <Faqs />
    </section>
  );
}
