import {Outlet} from "react-router";
import LeftSidebar from "../components/LeftSidebar.tsx";

const RootLayout = () => {
    return (
        <div className="h-screen w-screen bg-[#000] text-white relative">
            <LeftSidebar width={300}/> 

            <section className="absolute h-screen w-screen overflow-auto">
                <Outlet/>
            </section>
        </div>
    );
};

export default RootLayout;