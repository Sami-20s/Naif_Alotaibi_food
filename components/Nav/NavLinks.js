import React from "react";
import SingleLink from "./SingleLink";

const NavLinks = ({ list, click, children, setClick }) => {
    return (
        <div
            className={`${
                click ? "nav__wrapper__links active" : "nav__wrapper__links"
            }`}
        >
            <ul>
                {list.map(item => {
                    return (
                        <SingleLink
                            key={item.id}
                            {...item}
                            setClick={setClick}
                        />
                    );
                })}
            </ul>
            {children}
        </div>
    );
};

export default NavLinks;
