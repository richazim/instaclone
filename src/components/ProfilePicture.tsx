import {Link} from "react-router";

const ProfilePicture = ({name, username} : {name: string, username: string}) => {
    return (
        <Link to="/profile" className="profil flex flex-row justify-between items-center rounded-[12px] shadow-xl">
            <div className="rounded-full overflow-hidden">
                <img src="/assets/images/profile.png" alt=""/>
            </div>

            <div className="flex-1 flex flex-col justify-center pl-2">
                <p className="font-bold">{name}</p>
                <p className="font-light">@{username}</p>
            </div>
        </Link>
    );
};

export default ProfilePicture;