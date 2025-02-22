

const ProfilePicture = ({name, username, flex} : {name: string, username: string, flex?: boolean}) => {
    return (
        <div className={`profile flex ${flex ? 'flex-col border pt-[30px] my-[10px] bg-blue-950' : 'flex-row'} justify-between items-center rounded-[12px] shadow-xl`}>
            <div className="rounded-full overflow-hidden">
                <img src="/assets/images/profile.png" alt=""/>
            </div>

            <div className={`flex-1 flex flex-col justify-center ${flex ? 'text-center' : 'pl-2'}`}>
                <p className="font-bold">{name}</p>
                <p className="font-light">@{username}</p>
            </div>

            {
                flex && (
                    <div className="flex justify-center items-center w-full mt-[10px] mb-[10px]">
                        <button className="py-[7px] px-[20px] rounded-[10px] bg-orange-70  ">
                            Follow
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default ProfilePicture;