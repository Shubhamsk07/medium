import {Avatar} from '../components/BlogCard'
import { Link } from 'react-router-dom'
export const Appbar = ()=>{
return <div className="border-b flex justify-between py-4 px-10">
    
<div className='flex flex-col justify-center'><Link to='/blogs'>Medium</Link></div>

<div>

<Link to='/publish'>
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 mr-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
    </Link>
    <Avatar  
    name="Shubham" 
    size="big"/>
    
</div>
</div>
}