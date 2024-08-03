
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import { BlogPage } from '../components/BlogPage';

export const Blog = () => {
  const {id} =useParams();
  console.log("this is a id",id)
  const {loading,blog} = useBlog({
    id: id || ""
  });
  if(loading){
    return <div className='flex w-full flex-col'>
      
      <div className='w-full '>
      <div role="status" className="max-w-full  animate-pulse">
      <div className="h-14 bg-gray-200 relative rounded-full w-full  mb-4"></div></div>
      </div>
      <div className='flex'>
      <div className='w-full'>
<div role="status" className="max-w-full  animate-pulse">
   
    <div className="h-8  mt-16 ml-20 pt-4 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 ml-20 rounded-full max-w-[540px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 ml-20 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 ml-20 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-4 bg-gray-200  ml-20 rounded-full max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>
</div>
<div className='w-full'>
<div role="status" className="max-w-full  animate-pulse">
    
    <div className="h-6  mt-16 ml-20 pt-4 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 ml-20 rounded-full max-w-[540px] mb-2.5"></div>
    <div className="h-4 bg-gray-200 ml-20 rounded-full  max-w-[330px] mb-2.5"></div>
</div>
</div>
</div>
    </div>
  }

  return (
    <div>
      <BlogPage id={id} blog= {blog} />
    </div>
  )
}

