import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import "@/styles/styles.css";
import HowFooter from "@/components/how-footer";
import PageBackground from "@/components/page-background";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageBackground />
      <Component {...pageProps} />
      <Footer />
      <HowFooter />
    </>
  );
}
