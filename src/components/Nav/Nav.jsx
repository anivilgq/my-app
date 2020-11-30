import React from "react";
import n from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={n.nav}>
        <div className={n.item}><NavLink to ="/profile" activeClassName={n.activeLink}>Profile</NavLink></div>
        <div className={n.item}><NavLink to ="/dialogs" activeClassName={n.activeLink}>Dialogs</NavLink></div>
        <div className={n.item}><NavLink to ="/news" activeClassName={n.activeLink}>News</NavLink></div>
        <div className={n.item}><NavLink to ="/friends" activeClassName={n.activeLink}>Friends</NavLink></div>
        <div className={n.item}><NavLink to ="/settings" activeClassName={n.activeLink}>Settings</NavLink></div>
    </nav>
}

export default Nav;