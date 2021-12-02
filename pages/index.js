import React from "react";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Space from "../components/Space/Space";
import Story from "../components/Story/Story";

const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <Story />
                <Space />
            </main>
            <article>
                <Menu />
            </article>
        </>
    );
};

export default Home;
