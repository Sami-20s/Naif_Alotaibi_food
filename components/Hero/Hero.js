import React from "react";
import HeroButtons from "./HeroButtons";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__wrapper">
                <HeroText />
                <HeroButtons />
            </div>
        </div>
    );
};

export default Hero;
