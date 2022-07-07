import React from 'react';
import style from "./UserDescription.module.css";

const UserDescription = () => {
    return (
        <>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGpJwjxycNjEhbtaodjkXR3g2rodmotx0fw&usqp=CAU"
                alt="user"/>
            <div className={style.information}>
                <p>
                    fullName:
                </p>
                <p>
                    lookingForAJob:
                </p>
                <p>
                    description:
                </p>
            </div>

            contacts:
        </>
    );

};

export default UserDescription;