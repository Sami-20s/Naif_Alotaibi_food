import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const SoicalIcons = () => {
    return (
        <div className="nav__wrapper__links__icons">
            <a href="https://www.facebook.com">
                <AiFillFacebook />
            </a>
            <a href="https://twitter.com">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com">
                <FaInstagram />
            </a>
        </div>
    );
};

export default SoicalIcons;
