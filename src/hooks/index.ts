import { useState,useEffect } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios"

export interface Blog{
    "content":string;
    "title":string;
    "id":number;
    "author":{
        "name":string;
    }

}

export const useBlog =({id}:{id:string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog >();
    
    useEffect(() => {
        console.log("id",id)
         axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log("i am waiting")
                console.log("waiting for data",response.data)
                setBlog(response.data);
                console.log(response.data)
               setLoading(false)
            })
    }, [])
    return {
        loading,
        blog 
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        console.log("send reqest",localStorage.getItem('token'));
         axios.get(`${BACKEND_URL}/api/v1/all`,{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log("wainting for data",response.data)
                setBlogs(response.data);
               setLoading(false)
            })
    }, [])
    return {
        loading,
        blogs
    }
}