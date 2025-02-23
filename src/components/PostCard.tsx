import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "./ui/card.tsx"
import {Link} from "react-router";

const PostCard = ({
    name,
    city,
    title,
    tags,
    imageLink
                  } : {name: string, city: string, title: string, tags: string, imageLink: string}) => {

    return (
        <Card className="w-[500px]">
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                    <div className="profil flex flex-row justify-between items-center rounded-l-full rounded-r-[12px] ">
                        <Link to="/profile"><img src="/assets/images/profile.png" alt=""/></Link>

                        <div className="flex-1 flex flex-col justify-center pl-2">
                            <p className="font-bold">{name}</p>
                            <p className="">
                                <span>21 days ago </span>
                                <svg className="inline" width="15" height="15" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="2" fill="black"/>
                                </svg>
                                <span> {city}</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        Edit
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div>
                    <h4>{title}</h4>

                    <p>{tags}</p>

                    <div className="image rounded-[25px] overflow-hidden">
                        <img src={imageLink} alt=""/>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <div className="flex w-full flex-row justify-between">
                    <p>Like</p>

                    <p><img src="/assets/icons/bookmark.svg" alt=""/></p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PostCard;