import Footer from "@/components/footer";
import Header from "@/components/header";
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
