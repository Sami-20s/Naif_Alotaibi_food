import React from "react";

const SingleLink = ({ text, setClick, url }) => {
    return (
        <li onClick={() => setClick(false)}>
            <a href={`${url}`}>{text}</a>
        </li>
    );
};

export default SingleLink;
