import ProfilePicture from "./ProfilePicture.tsx";
import {Link} from "react-router";

const top5Creators = [
    {
        name: "Azim",
        username: "username",
        databaseId: "12345"
    },
    {
        name: "Azim",
        username: "username",
        databaseId: "12345"
    },
    {
        name: "Azim",
        username: "username",
        databaseId: "12345"
    },
    {
        name: "Azim",
        username: "username",
        databaseId: "12345"
    },
]

const Top5Creators = () => {
    return (
        <div className="flex flex-col w-[300px] bg-[#09090A] pt-[30px]">
            <h2 className="font-bold text-[30px] pl-[10px]">
                Top 5 Creators
            </h2>

            <div className="mt-[30px] pr-[20px]">
                {
                    top5Creators.map(creator => (
                        <Link to="https://youtube.comm" className="">
                            <ProfilePicture name={creator.name} username={creator.username} flex={true}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Top5Creators;