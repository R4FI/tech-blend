import Navbar from "@/components/shared/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Dispatch the action to load products from local storage
    store.dispatch({ type: "build/loadProductsFromLocalStorage" });
  }, []);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      </SessionProvider>
    </Provider>
  );
}
