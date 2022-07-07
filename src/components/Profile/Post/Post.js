import React from 'react';
import style from "./Post.module.css";

const Post = ({username, message}) => {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img className={style.itemImg}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGpJwjxycNjEhbtaodjkXR3g2rodmotx0fw&usqp=CAU"
                     alt="ava"/>
                <p>{username}</p>
            </div>
            <div>{message}</div>
        </div>
    );
};

export default Post;