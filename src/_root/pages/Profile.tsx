import ProfilePicture from "../../components/ProfilePicture.tsx";
import {Button} from "../../components/ui/button.tsx";
import PostCardSmall from "../../components/PostCardSmall.tsx";

const posts = [
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

const Profile = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute pl-[350px] pr-[30px] border h-screen  w-screen overflow-auto">
                <div className="flex flex-col gap-[100px]">
                    <div className="mt-[50px] relative flex flex-row justify-between items-center">
                        <ProfilePicture name="Azim" username="username" imageSize="h-[150px] w-[150px]" textSizeStyle="text-[40px]"/>

                        <span className="px-[20px] py-[15px] rounded-[10px] bg-blue-950">Edit Profile</span>

                        <div className="absolute flex flex-col gap-[20px] bottom-[-50px] left-[150px]">
                            <div className="flex flex-row gap-[20px]">
                                <div><span>4</span> Posts</div>
                                <div><span>20</span> Followers</div>
                                <div><span>20</span> Following</div>
                            </div>
                            <p>Bio here</p>
                        </div>
                    </div>

                    <div className="">
                        <Button className="rounded-r-[0px] cursor-pointer">Posts</Button>
                        <Button className="rounded-l-[0px] cursor-pointer">Liked Posts</Button>
                    </div>

                    <div className="user-posts flex flex-row gap-[20px] flex-wrap">
                        {
                            posts.map((post, index) => (
                                <div key={index} className="">
                                    <PostCardSmall name={post.name} profileLink={post.profileLink} imageLink={post.imageLink} showProfile={false}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;