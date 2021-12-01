import React from "react";
import Hero from "../components/Hero/Hero";
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
        </>
    );
};

export default Home;
