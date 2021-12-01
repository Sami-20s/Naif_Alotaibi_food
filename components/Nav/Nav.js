import React, { useState } from "react";
import { useGlobal } from "../../context/context";
import Burger from "./Burger";
import NavLinks from "./NavLinks";
import Link from "next/link";
import SoicalIcons from "./SoicalIcons";

const Nav = () => {
    const { NavList } = useGlobal();
    const [isClick, setIsClick] = useState(false);
    return (
        <nav className="nav" id="nav">
            <div className="nav__wrapper container-px">
                <div className="nav__wrapper__logo">
                    <Link href="/">
                        <img src="/Logo.png" alt="foody photo" />
                    </Link>
                </div>
                <NavLinks list={NavList} click={isClick} setClick={setIsClick}>
                    <SoicalIcons />
                </NavLinks>
                <Burger click={isClick} setClick={setIsClick} />
            </div>
        </nav>
    );
};

export default Nav;
