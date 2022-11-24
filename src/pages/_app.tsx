import { Global } from "../styles/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global />
      <Component {...pageProps} />;
    </div>
  );
}
