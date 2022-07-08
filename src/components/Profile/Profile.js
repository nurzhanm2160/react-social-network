import React from 'react';

import style from './Profile.module.css'
import Post from "./Post/Post";
import UserDescription from "./UserInformation/UserDescription/UserDescription";
import UserContactLinks from "./UserInformation/UserContactLinks/UserContactLinks";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";


const Profile = () => {
    let inputRef = React.createRef()

    let postInputMessage = useSelector(state => state.profileReducer.postInputMessage)
    let posts = useSelector(state => state.profileReducer.posts)

    const dispatch = useDispatch();

    let addNewPost = () => {
        dispatch(addPostAC())
        dispatch(updateNewPostTextAC(''))
    }

    let onChangeInput = () => {
        let text = inputRef.current.value
        dispatch(updateNewPostTextAC(text))
    }

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
                <textarea value={postInputMessage} onChange={onChangeInput} ref={inputRef} type="text"/>
                <button onClick={addNewPost}>add post</button>
            </div>

            {posts.map(({message, username}, index) => {
                return <Post message={message} username={username} key={index}/>
            })}
        </>
    );
};

export default Profile;