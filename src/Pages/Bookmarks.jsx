import { useEffect, useState } from "react";
import { getBlogs } from "../eslin";
import BlogCard from "../Components/BlogCard";
import { deleteBlogs } from "../eslin";
import ErrorBookmarks from "../Components/ErrorBookmarks";
const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)

    }, [])
    const handleDelete = id => {
        deleteBlogs(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if(blogs.length <1 ) return <ErrorBookmarks></ErrorBookmarks>
    return (
        <div className="mt-10 min-h-[calc(100vh-116px)] grid justify-center grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard
                    handleDelete={handleDelete}
                    deletable={true} key={blog.id} blog={blog}
                ></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;