import { useLoaderData } from "react-router-dom";
import replaceImage from "../assets/404.jpg"
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Loader from "./Loader";


const Content = () => {
    const content = useLoaderData()
    const { cover_image, title, body_html,url } = content;
    console.log(content);
    return (
        <div className=" w-full mx-auto group hover:no-underline focus:no-underline transition space-y-4  rounded-lg border-opacity-10">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || replaceImage} />
            <div className="p-6 space-x-4">
                {
                    content.tags.map((tag, index) => <a key={index} rel="noopener noreferrer" href="#" className=" rounded-sm hover:underline">#{tag}</a>)
                }
            </div>
            <div className="">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown  rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;