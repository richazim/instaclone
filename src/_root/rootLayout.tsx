import React from 'react';
import {Outlet} from "react-router";
import LeftSidebar from "../components/LeftSidebar.tsx";

const RootLayout = () => {
    return (
        <div className="h-screen w-screen bg-[#000] text-white fixed">
            <LeftSidebar width={300}/> 

            <section className="absolute left-[300px] h-screen w-[calc(100vw-300px)] overflow-auto">
                <Outlet/>
            </section>
        </div>
    );
};

export default RootLayout;