import React from 'react';

const Navbar = () => {
    return (
        <nav className={"nav"}>
            <ul>
                <li><a href="/Profile">Profile</a></li>
                <li><a href="/Messages">Messages</a></li>
                <li><a href="/News">News</a></li>
                <li><a href="/Music">Music</a></li>
                <li><a href="/Settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;