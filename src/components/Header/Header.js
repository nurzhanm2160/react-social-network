import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src="http://autodrive.org.ua/wp-content/uploads/2018/11/final-logo-example.png" alt="logo"/>
            <button>Login</button>
        </header>
    );
};

export default Header;