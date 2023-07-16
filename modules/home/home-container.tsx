import PageHeading from "@/components/page-heading";
import Faq from "./faq";
import HomeAbout from "./home-about";
import HomeCards from "./home-cards";
import HomeCta from "./home-cta";

export default function HomeContainer() {
  return (
    <>
      <PageHeading text="The Bunch" height="100vh" fontSize="12.5vw" />
      <HomeAbout />
      <HomeCta />
      <HomeCards />
      <Faq />
    </>
  );
}
