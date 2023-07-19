import { companyName } from "@/common-data";
import PageHeading from "@/components/page-heading";
import Faq from "./faq";
import HomeAbout from "./home-about";
import HomeCards from "./home-cards";
import HomeCta from "./home-cta";

export default function HomeContainer() {
  return (
    <>
      <PageHeading
        text={companyName}
        height="100vh"
        heightMed="100vh"
        heightSmall="80vh"
        fontSize="12.5vw"
        fontSizeMed="18vw"
        fontSizeSmall="20vw"
      />
      <HomeAbout />
      <HomeCta />
      <HomeCards />
      <Faq />
    </>
  );
}
