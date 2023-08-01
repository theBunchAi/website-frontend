import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&\
family=Libre+Barcode+39&family=Monoton&family=Poppins:wght@300;400;500&display=swap"
          }
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
