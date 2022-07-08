import React from 'react';

import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>

                    <NavLink className={({ isActive }) => isActive ? style.linkActive : ''} to={"profile"}>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? style.linkActive : ''} to={"dialogs"}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? style.linkActive : ''} to={"news"}>News</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? style.linkActive : ''} to={"music"}>Music</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? style.linkActive : ''} to={"settings"}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;