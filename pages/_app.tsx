import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer";
import "@/styles/styles.css";
import HowFooter from "@/components/how-footer";
import PageBackground from "@/components/page-background";

export default function App({ Component, pageProps }: AppProps) {
  // const gaURLTag = "G-7L2RMX12CD";
  return (
    <>
      <Head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MH5RF4FK');`}</script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MH5RF4FK"
          height="0"
          width="0"
          style={{ visibility: "hidden", display: "none" }}
        ></iframe>
      </noscript>

      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7L2RMX12CD"
      ></Script>
      <Script id="ga-analaytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7L2RMX12CD');`}
      </Script>

      <PageBackground />
      <Component {...pageProps} />
      <Footer />
      <HowFooter />
    </>
  );
}
