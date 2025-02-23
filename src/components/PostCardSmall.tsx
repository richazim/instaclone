const PostCardSmall = ({
    name,
    profileLink,
    imageLink,
    showProfile
                       } : {name: string, profileLink: string, imageLink: string, showProfile?: boolean}) => {
    return (
        <div className={`w-[200px] h-[200px] rounded-[14px] border overflow-hidden relative bg-[url(${imageLink})] bg-contain bg-no-repeat`}>
            <div className="flex flex-row justify-between items-center absolute w-full bottom-[10px] px-[5px]">
                {
                    showProfile ? (
                        <div className="flex flex-row items-center">
                            <span className="h-[50px] w-[50px] rounded-full overflow-hidden">
                                <img src={profileLink} alt="" height={50} width={50}/>
                            </span>

                            <span className="pl-[7px]">
                                {name}
                            </span>
                        </div>
                    ) : ""
                }

                <div className={`flex flex-row ${!showProfile ? 'justify-between w-full' : ''}`}>
                    <span><img src="/assets/icons/like.svg" alt=""/></span>
                    <span><img src="/assets/icons/bookmark.svg" alt=""/></span>
                </div>
            </div>
        </div>
    );
};

export default PostCardSmall;