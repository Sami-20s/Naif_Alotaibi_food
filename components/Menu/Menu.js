import React from "react";
import { useGlobal } from "../../context/context";
import MenuItems from "./MenuItems";

const Menu = () => {
    const { MenuList } = useGlobal();
    return (
        <section className="menu container-px" id="menu">
            <div className="menu__wrapper">
                <h2>We Present You Our Menu</h2>
                <MenuItems list={MenuList} />
            </div>
        </section>
    );
};

export default Menu;
