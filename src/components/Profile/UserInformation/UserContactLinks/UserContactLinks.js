import React from 'react';
import style from "./UserContactLinks.module.css";

const UserContactLinks = () => {
    return (
        <div className={style.contacts}>
            <ul>
                <li>github: <a href=""></a></li>
                <li>vk: <a href=""></a></li>
                <li>facebook: <a href=""></a></li>
                <li>instagram: <a href=""></a></li>
                <li>twitter: <a href=""></a></li>
                <li>website: <a href=""></a></li>
                <li>youtube: <a href=""></a></li>
                <li>mainLink: <a href=""></a></li>
            </ul>
        </div>
    );
};

export default UserContactLinks;