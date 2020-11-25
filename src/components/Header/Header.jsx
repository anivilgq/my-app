import React from "react";
import img1 from "../../Security.svg";
import classes from "./Header.module.css";

const Header = () => {
    return <header className={classes.header}>
        <img src={img1} />
    </header>
}

export default Header;