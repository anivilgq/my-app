import React from "react";
import n from './Nav.module.css';

const Nav = () => {
    return <nav className={n.nav}>
        <div className={n.item}><a href ="/profile">Profile</a></div>
        <div className={n.item}><a href = "/messages">Messages</a></div>
        <div className={n.item}><a href = "/news">News</a></div>
        <div className={n.item}><a href = "/friends">Friends</a></div>
        <div className={n.item}><a href = "/settings">Settings</a></div>
    </nav>
}

export default Nav;