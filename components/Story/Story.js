import React from "react";
import StoryButtons from "./StoryButtons";
import StoryText from "./StoryText";

const Story = () => {
    return (
        <div className="story container-px" id="story">
            <div className="story__wrapper">
                <div className="story__wrapper__img"></div>
                <div className="story__wrapper__TB__container">
                    <StoryText />
                    <StoryButtons />
                </div>
            </div>
        </div>
    );
};

export default Story;
