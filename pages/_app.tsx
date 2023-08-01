import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
