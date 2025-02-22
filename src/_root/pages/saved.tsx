

const Saved = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute pl-[350px] pr-[30px] border h-screen  w-screen overflow-auto">
                <div className="">
                    <h2 className="flex flex-row text-[30px] font-bold">
                        <img src="/assets/icons/bookmark.svg" height={20} width={20}/>
                        <span className="pl-[10px]">Saved Posts</span>
                    </h2>

                    <div className="border text-center mt-[30px] text-[#333]">
                        No available posts
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Saved;