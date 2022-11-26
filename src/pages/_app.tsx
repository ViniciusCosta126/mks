import { Global } from "../styles/GlobalStyle";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        {" "}
        <Global />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
