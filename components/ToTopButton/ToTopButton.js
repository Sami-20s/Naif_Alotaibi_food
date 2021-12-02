import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
const ToTopButton = () => {
    const [isScroll, setIsScroll] = useState(false);
    if (typeof window === "object") {
        window.addEventListener("scroll", () => {
            var scrolled = window.scrollY;
            if (scrolled > 300) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }

    return (
        <div
            className={`${isScroll ? "toTopButton active" : "toTopButton"}`}
            id="toTopButton"
        >
            <a href="#hero">
                <GoArrowUp />
            </a>
        </div>
    );
};

export default ToTopButton;
