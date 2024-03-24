import toast from "react-hot-toast";

export const getBlogs =() => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

export const saveBlog = (blog) => {
    
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
       return toast.error('Already Bookmarked');
    } 
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Bookmarked successfully')
}

export const deleteBlogs = (id) => {
    let blogs = getBlogs();
    const index = blogs.filter(blob => blob.id !== id);
    localStorage.setItem('blogs', JSON.stringify(index));
    toast.success('Bookmarked deleted successfully')
}