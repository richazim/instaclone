import React from 'react';
import {Link} from "react-router";

const ProfilePicture = ({name, username}) => {
    return (
        <div className="profil flex flex-row justify-between items-center rounded-[12px] shadow-xl">
            <Link to="/profile"><img src="/assets/images/profile.png" alt=""/></Link>

            <div className="flex-1 flex flex-col justify-center pl-2">
                <p className="font-bold">{name}</p>
                <p className="font-light">@{username}</p>
            </div>
        </div>
    );
};

export default ProfilePicture;