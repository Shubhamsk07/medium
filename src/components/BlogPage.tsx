import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import axios from "axios"
import { Avatar } from "./BlogCard"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const BlogPage = ({ blog,id }: { blog: Blog,id:string }) => {
    const navigate = useNavigate()

const handleDelete = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    authorization: localStorage.getItem('token'),
                },
            });
            alert("Blog deleted successfully")
            navigate('/blogs'); // Navigate to another page after deletion
        } catch (error) {
            console.error('Error deleting the post:', error);
        }
    };

    return (
        <div>
            <Appbar />
            <div className="flex justify-center ">
                <div className="grid max-md:place-items-center grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">

                    <div className="col-span-8  max-md:col-span-11 max-md:mr-1 max-md:order-2 mr-10">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posts on 2nd december
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                        <div className="pt-4">
                        <button 
                        onClick={async ()=>{
                            navigate(`/edit/${id}`)
                        }}
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                        <button 
                        onClick={handleDelete}
                        type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                        </div>


                    </div>
                    <div className="col-span-4 max-md:col-start-1  max-md:col-span-12 py-5 ">
                        <div className="text-slate-600  text-lg ">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>

                                <div className="text-slate-500 pt-2">
                                    Random catch phrase about the author's ability to join the blog
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

