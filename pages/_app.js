import Nav from "../components/Nav/Nav";
import ContextProvider from "../context/context";
import "../styles/globals.scss";
import "../styles/pages/Nav/nav.scss";
import "../styles/pages/Home/home.scss";
import "../styles/pages/Footer/footer.scss";
import "../styles/pages/ToTopButton/toTopButton.scss";
import Footer from "../components/Footer/Footer";
import ToTopButton from "../components/ToTopButton/ToTopButton";

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Nav />
            <ToTopButton />
            <Component {...pageProps} />
            <Footer />
        </ContextProvider>
    );
}

export default MyApp;
