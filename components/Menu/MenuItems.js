import React from "react";
import MenuSingleItem from "./MenuSingleItem";

const MenuItems = ({ list }) => {
    return (
        <div className="menu__wrapper__items">
            {list.map(item => {
                return <MenuSingleItem key={item.id} {...item} />;
            })}
        </div>
    );
};

export default MenuItems;
