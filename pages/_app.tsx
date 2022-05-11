import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { globalCss } from "@nextui-org/react";

const globalStyles = globalCss({
  body: {
    width: "60vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px auto",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
