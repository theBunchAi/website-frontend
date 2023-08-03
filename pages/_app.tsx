import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import "@/styles/styles.css";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
