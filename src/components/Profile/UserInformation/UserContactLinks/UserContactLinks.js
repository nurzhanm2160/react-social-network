import React from 'react';
import style from "./UserContactLinks.module.css";

const UserContactLinks = () => {
    return (
        <div className={style.contacts}>
            <ul>
                <li>github: <a href="/">ссылка</a></li>
                <li>vk: <a href="/">ссылка</a></li>
                <li>facebook: <a href="/">ссылка</a></li>
                <li>instagram: <a href="/">ссылка</a></li>
                <li>twitter: <a href="/">ссылка</a></li>
                <li>website: <a href="/">ссылка</a></li>
                <li>youtube: <a href="/">ссылка</a></li>
                <li>mainLink: <a href="/">ссылка</a></li>
            </ul>
        </div>
    );
};

export default UserContactLinks;