import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"


export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs)

  if (loading) {
    return <Skeleton />
  }
  return <div >
    <Appbar />
    <div className="flex justify-center">
      <div className="flex justify-center flex-col w-full max-w-4xl">
        {blogs.map(blog =>
          <div>
            <BlogCard authorName={blog.author.name || "Anonymous"}
              id={blog.id.toString()}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Aug 2024"}
            />

          </div>
        )}
      </div>

    </div>
  </div>
}



export const Skeleton = () => {
  return (
    <div className="mt-2 w-full flex flex-col">
      <div className='animate-pulse'>
        <div className="h-10 mb-20 bg-gray-300 rounded w-full "></div>
      </div>

      <div className=" w-full  ">
        <div className="max-w-4xl  flex mx-auto flex-col">
          <div className="animate-pulse  flex items-start flex-col">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="animate-pulse pt-10 flex items-start flex-col">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="animate-pulse pt-10 flex items-start flex-col">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            
          </div>
          <div className="animate-pulse pt-10 flex items-start flex-col">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

