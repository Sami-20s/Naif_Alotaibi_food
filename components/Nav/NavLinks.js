import React from "react";
import SingleLink from "./SingleLink";

const NavLinks = ({ list, click, children }) => {
    return (
        <div
            className={`${
                click ? "nav__wrapper__links active" : "nav__wrapper__links"
            }`}
        >
            <ul>
                {list.map(item => {
                    return <SingleLink key={item.id} {...item} />;
                })}
            </ul>
            {children}
        </div>
    );
};

export default NavLinks;
