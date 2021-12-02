import React from "react";

const MenuSingleItem = ({ url, alt, price }) => {
    return (
        <div className="menu__wrapper__items__single">
            <img src={url} alt={alt} />
            <div className="menu__wrapper__items__single__hover">
                <h5>{alt}</h5>
                <p>
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Cras ultricies ligula.
                </p>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default MenuSingleItem;
