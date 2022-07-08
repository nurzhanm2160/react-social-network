import React from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({userName, id}) => {
    return (
        <div className={style.dialog + ' ' + style.dialogActive}>
            <NavLink className={({isActive}) => isActive ? style.dialogActive : ''} to={'/dialogs/' + id}>{userName}</NavLink>
        </div>
    )
}

export default DialogItem;
