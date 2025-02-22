import ProfilePicture from "../../components/ProfilePicture.tsx";

const users = [
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

const People = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute pl-[350px] pr-[30px] border h-screen  w-screen overflow-auto">
                <div className="">
                    <h3 className="text-[35px] font-bold">People</h3>

                    <div className="flex flex-row flex-wrap gap-[20px]">
                        {
                            users.map((user, index) => (
                                <div key={index} className="w-[200px]">
                                    <ProfilePicture name={user.name} username={user.username} flex={true}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;