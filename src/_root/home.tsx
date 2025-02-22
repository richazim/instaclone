import PostCard from "../components/PostCard.tsx";
import Top5Creators from "../components/Top5Creators.tsx";

const Home = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute w-screen h-screen overflow-auto border flex justify-center">
                <div className="">
                    <h1 className="text-5xl mb-[30px]">Home Feed</h1>
                    <PostCard name="Azim" city="Fès" title="Title 1" tags="#paris #az" imageLink="https://picsum.photos/800/800"/>
                </div>
            </div>

            <div className="fixed right-0 w-[300px] h-screen overflow-auto">
                <Top5Creators/>
            </div>
        </div>
    );
};

export default Home;