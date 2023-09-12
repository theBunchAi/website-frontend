import type { AppProps } from "next/app";
import Script from "next/script";
import Footer from "@/components/footer";
import "@/styles/styles.css";
import HowFooter from "@/components/how-footer";
import PageBackground from "@/components/page-background";

export default function App({ Component, pageProps }: AppProps) {
  const gaURLTag = "G-SL6RYF6MQS";
  const gaURLTag2 = "G-TVR8M7HM7Y";
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaURLTag}`}
      ></Script>
      <Script id="g-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window?.dataLayer?.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaURLTag}', {
            page_path : window?.location?.pathname
          });
        `}
      </Script>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaURLTag2}`}
      ></Script>
      <Script id="g-script2" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window?.dataLayer?.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaURLTag2}', {
            page_path : window?.location?.pathname
          });
        `}
      </Script>

      <PageBackground />
      <Component {...pageProps} />
      <Footer />
      <HowFooter />
    </>
  );
}
