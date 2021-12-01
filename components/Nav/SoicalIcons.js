import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const SoicalIcons = () => {
    return (
        <div className="nav__wrapper__links__icons">
            <a href="https://www.facebook.com" target="_blank">
                <AiFillFacebook />
            </a>
            <a href="https://twitter.com" target="_blank">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
            </a>
        </div>
    );
};

export default SoicalIcons;
