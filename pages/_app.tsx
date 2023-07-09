import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AppContext from "@/context/app-context";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContext>
  );
}
