import Faq from "./faq";
import HomeAbout from "./home-about";
import HomeCards from "./home-cards";
import HomeCta from "./home-cta";
import Landing from "./landing";

export default function HomeContainer() {
  return (
    <>
      <Landing />
      <HomeAbout />
      <HomeCta />
      <HomeCards />
      <Faq />
    </>
  );
}
