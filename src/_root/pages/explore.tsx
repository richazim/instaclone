import InputSearch from "../../components/InputSearch.tsx";
import PostCardSmall from "../../components/PostCardSmall.tsx";

const posts = [
    {
        name: "Azim",
        profileLink: "/assets/images/profile.png",
        city: "Fès",
        title: 'Titre 1',
        tags: "#paris #az",
        imageLink: "/assets/images/profile.png"
    },
    {
        name: "Azim",
        profileLink: "/assets/images/profile.png",
        city: "Fès",
        title: 'Titre 1',
        tags: "#paris #az",
        imageLink: "https://picsum.photos/800/800"
    },
    {
        name: "Azim",
        profileLink: "/assets/images/profile.png",
        city: "Fès",
        title: 'Titre 1',
        tags: "#paris #az",
        imageLink: "https://picsum.photos/800/800"
    }
]


const Explore = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute pl-[350px] pr-[30px] border h-screen  w-screen overflow-auto">
                <div className="flex flex-col gap-[40px]">
                    <h3 className="text-[30px] font-bold">
                        Search Posts
                    </h3>

                    <div>
                        <InputSearch/>
                    </div>

                    <div className="flex flex-row justify-between ">
                        <h4>Popular Today</h4>

                        <div>
                            <span>All</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[20px] flex-wrap">
                        {
                            posts.map((post, index) => (
                                <div key={index} className="">
                                    <PostCardSmall name={post.name} profileLink={post.profileLink} imageLink={post.imageLink}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;