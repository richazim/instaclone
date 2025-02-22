import {Link} from "react-router";

const ProfilePicture = ({name, username, flex} : {name: string, username: string, flex?: boolean}) => {
    return (
        <Link to="/profile" className={`profile flex ${flex ? 'flex-col border py-[30px] my-[10px] bg-blue-950' : 'flex-row'} justify-between items-center rounded-[12px] shadow-xl`}>
            <div className="rounded-full overflow-hidden">
                <img src="/assets/images/profile.png" alt=""/>
            </div>

            <div className={`flex-1 flex flex-col justify-center pl-2 ${flex && 'text-center'}`}>
                <p className="font-bold">{name}</p>
                <p className="font-light">@{username}</p>
            </div>
        </Link>
    );
};

export default ProfilePicture;