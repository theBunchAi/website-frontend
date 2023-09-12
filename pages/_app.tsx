import type { AppProps } from "next/app";
import Script from "next/script";
import Footer from "@/components/footer";
import "@/styles/styles.css";
import HowFooter from "@/components/how-footer";
import PageBackground from "@/components/page-background";

export default function App({ Component, pageProps }: AppProps) {
  // const gaURLTag = "G-7L2RMX12CD";
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7L2RMX12CD"
      ></Script>
      <Script id="ga-script">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-7L2RMX12CD');
  `}
      </Script>

      <PageBackground />
      <Component {...pageProps} />
      <Footer />
      <HowFooter />
    </>
  );
}
