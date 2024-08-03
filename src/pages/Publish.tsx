import { Appbar } from "../components/Appbar";
import { ChangeEvent, useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();
    return (
        <div><Appbar />
            <div className="flex justify-center w-ful">

                <div className="max-w-screen-lg w-full">

                    <input type="text" onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" />
                    <TextEditor onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                    <button
                        onClick={async () => {
                            const response =await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                title:title,
                                content:description
                            },{
                                headers: {
                                    authorization: localStorage.getItem('token')
                                }
                            })
                            navigate(`/blog/${response.data.id}`)
                        }}
                        
                        type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                        Publish Post
                    </button>
                </div>

            </div>

        </div>
    )
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (

        <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-t-lg ">
                    <label className="sr-only">Your comment</label>
                    <textarea onChange={onChange} id="comment" rows={8} className="w-full px-0 text-sm text-gray-900 bg-white border-0 outline-none focus:ring-0  " placeholder="Write a article..." required ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t ">


                </div>
            </div>
        </form>


    )
}