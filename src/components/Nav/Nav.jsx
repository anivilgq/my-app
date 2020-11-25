import React from "react";
import n from './Nav.module.css';

const Nav = () => {
    return <nav className={n.nav}>
        <div className={n.item}><a>Profile</a></div>
        <div className={n.item}><a>Messages</a></div>
        <div className={n.item}><a>News</a></div>
        <div className={n.item}><a>Friends</a></div>
        <div className={n.item}><a>Settings</a></div>
    </nav>
}

export default Nav;