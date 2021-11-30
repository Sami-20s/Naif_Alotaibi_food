import React from "react";

const Burger = ({ click, setClick }) => {
    return (
        <div
            onClick={() => setClick(!click)}
            className={`${
                click
                    ? "nav__wrapper__burger hide-for-desktop active"
                    : "nav__wrapper__burger hide-for-desktop"
            }`}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Burger;
