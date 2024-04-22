import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { cartStore } from "@/store";

import "@/styles/globals.css";
import "@cencommerce/paris-uikit/dist/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={cartStore}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
