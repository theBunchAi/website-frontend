import Head from "next/head";
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
      <Head>
        <title>The Bunch Ai | Home</title>
        <meta
          name="description"
          content="TheBunch.ai aims to bring like-minded people together for exceptional social experiences,\
          forming friendships and creating memories."
        />
      </Head>
      <HomeHeroBanner />
      <JoinUs />
      <GetStarted />
      <Cards />
      <Faqs />
    </section>
  );
}
