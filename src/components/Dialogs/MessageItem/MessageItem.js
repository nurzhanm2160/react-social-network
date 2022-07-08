import style from "../Dialogs.module.css";
import React from "react";

const MessageItem = ({message}) => {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
}

export default MessageItem;