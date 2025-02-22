import {Link} from "react-router";

const sidebarList = [
    {
        id: 1,
        name: "Home",
        icon: "/assets/icons/home.svg",
        link: "/"
    },
    {
        id: 2,
        name: "Explore",
        icon: "/assets/icons/wallpaper.svg",
        link: "/explore"
    },
    {
        id: 3,
        name: "People",
        icon: "/assets/icons/people.svg",
        link: "/people"
    },
    {
        id: 4,
        name: "Saved",
        icon: "/assets/icons/bookmark.svg",
        link: "/saved"
    },
    {
        id: 5,
        name: "Create Post",
        icon: "/assets/icons/gallery-add.svg",
        link: "/create-post"
    },
    {
        id: 6,
        name: "Logout",
        icon: "/assets/icons/logout.svg",
        link: "/logout"
    },
]

const NavigationMenuBar = () => {

    return (
        <ul className="">
            {sidebarList.map((item) => (
                <li className="text-[30px] font-bold my-[15px] pr-[30px]" key={item.id}>
                    <Link to={item.link} className="flex justify-between">
                        <img src={item.icon} alt=""/>
                        <span className="flex-1 pl-[10px]">{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationMenuBar;