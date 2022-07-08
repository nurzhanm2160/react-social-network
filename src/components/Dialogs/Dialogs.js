import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({dialogs, messages}) => {

    dialogs = dialogs.map(({userName, id}) => {return <DialogItem userName={userName} id={id} key={id}/>})
    messages = messages.map(({message, id}) => {return <MessageItem message={message} key={id}/>})

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messagesItems}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;