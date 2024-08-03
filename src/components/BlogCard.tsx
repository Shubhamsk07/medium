import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id:string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}> <div className="border-b-[2px] p-4 w-full border-slate-400 pb-4">
        <div className="flex">
            <div className="flex ">
                <Avatar name={authorName} size="small" />
            </div>
            <div className="font-[400] flex flex-col justify-center pl-2">
                {authorName} </div>
                <div className="pt-[10px] pl-2">
<Circle />
                </div>
            <div className="flex flex-col justify-center pl-2 font-thin font-slate-400">{publishedDate}</div>
        </div>
        <div className="text-xl font-bold">
            {title}
        </div>
        <div className="text-md pt-1 font-then font-serif">
            {content.slice(0, 100)}...
        </div>
        <div className="text-slate-500 pt-4  font-[370] text-sm ">
            {Math.ceil(content.length / 100)} minute(s) read
        </div>
        
    </div>
    </Link>
}

function Circle(){
    return <div className="rounded-full bg-slate-500 w-1 h-1"></div>
}

export function Avatar({ name,size="small" }: { name: string,size:"small"| "big" }) {
    return <div className={`inline-flex items-center justify-center relative overflow-hidden ${size==="small"?"w-6 h-6":"w-10 h-10"} overflos-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`font-medium text-gray-600 ${size=="small"?"text-xs":"text-md"} dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}