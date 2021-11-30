import Nav from "../components/Nav/Nav";
import ContextProvider from "../context/context";
import "../styles/globals.scss";
import "../styles/pages/Nav/nav.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Nav />
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
