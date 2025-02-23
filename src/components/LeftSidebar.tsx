import ProfilePicture from "./ProfilePicture.tsx";
import NavigationMenuBar from "./NavigationMenuBar.tsx";
import {Link} from "react-router";

const LeftSidebar = ({width} : {width: number}) => {

    return (
        <aside className="h-full absolute z-1 overflow-auto px-[20px] scroll-smooth bg-[#09090A]" style={{width: width}}>
            <div className="flex flex-col justify-between gap-[30px]">
                <div className="logo">
                    <img src="/assets/icons/instaclone_logo.svg" alt=""/>
                </div>

                <Link to="/profile">
                    <ProfilePicture name="Azim" username="username"/>
                </Link>

                <NavigationMenuBar/>
            </div>
        </aside>
    );
};

export default LeftSidebar;