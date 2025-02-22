const PostCardSmall = ({
    name,
    profileLink,
    imageLink
                       }) => {
    return (
        <div className="w-[200px] h-[200px] rounded-[14px] border overflow-hidden relative bg-[#333]">
            <div className="flex flex-row justify-between items-center absolute w-full bottom-[10px] px-[5px]">
                <div className="flex flex-row items-center">
                    <span className="h-[50px] w-[50px] rounded-full overflow-hidden">
                        <img src={profileLink} alt="" height={50} width={50}/>
                    </span>

                    <span className="pl-[7px]">
                        {name}
                    </span>
                </div>

                <div className="flex flex-row">
                    <span>Love</span>
                    <span>Save</span>
                </div>
            </div>
        </div>
    );
};

export default PostCardSmall;