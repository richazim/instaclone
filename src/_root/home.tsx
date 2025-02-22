import React from 'react';
import PostCard from "../components/PostCard.tsx";

const Home = () => {
    return (
        <div className="">
            <h1 className="text-5xl mb-[30px]">Home Feed</h1>

            <PostCard name="Azim" city="Fès" title="Title 1" tags="#paris #az" imageLink="https://picsum.photos/800/800"/>
        </div>
    );
};

export default Home;