import React from 'react';

import style from './Profile.module.css'
import Post from "./Post/Post";
import UserDescription from "./UserInformation/UserDescription/UserDescription";
import UserContactLinks from "./UserInformation/UserContactLinks/UserContactLinks";

const Profile = () => {
    return (
        <>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="Profile background"/>
            </div>
            <div className={style.userInfo}>
                <UserDescription />
                <UserContactLinks />
            </div>

            <div>
                <label>Input your post: </label>
                <input type="text"/>
                <button>add post</button>
            </div>


            <Post message={"First post"} username={"nurik2160"} />
            <Post message={"Second post"} username={"dauren"} />
            <Post message={"Third post"} username={"kusaiyn"} />

        </>
    );
};

export default Profile;