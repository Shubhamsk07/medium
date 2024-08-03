import  { ChangeEvent, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { SignupInput } from "@sagethebot71/medium-common";
import { BACKEND_URL } from "../config";
import axios from 'axios';
export const Auth = ({type}:{type:"signup"|"signin"})=>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const [loading,setLoading] = useState(false)
    
    async function sendRequest(){
        setLoading(true);
        try{ 
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
            console.log(response.data)

            const jwt = response.data;
            localStorage.setItem('token',jwt.jwt);
            
            navigate("/blogs")
            setLoading(false)
        }catch(e){
            {type==="signup"?alert("Error while signing up"):alert("Error while signing in")}
            
        }
    }
return(
    <div className="flex flex-col justify-center">
    <div className="flex justify-center ">
        <div className="w-96 ">
        <div className="font-extrabold text-center  text-3xl">
            Create an account
        </div>
        <div className="pt-3 text-center  text-slate-500 text-md">{type==="signup"?"Already have an account? ":"Don't have an account? "}<Link className="underline hover:text-black" to={type=="signup"?'/signin':'/signup'}>{type==="signup"?"Sign in":"Sign up"}</Link></div>
        <form className="pt-2 ">
            {type==="signup"?<LabelledInput label='Username' placeholder='Enter your username' onChange={(e)=>{
                setPostInputs({
                     ...postInputs,
                     name:e.target.value
                })
            }} />:""}
            
            <LabelledInput label='Email' placeholder='Enter your email' onChange={(e)=>{
                setPostInputs({
                     ...postInputs,
                     email:e.target.value
                })
            }} />
            <LabelledInput label='Password' type="password"  placeholder='Enter your password more than 8 char' onChange={(e)=>{
                setPostInputs({
                     ...postInputs,
                     password:e.target.value
                })
            }} />
        </form>
        {loading===false?<button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 mt-5 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type==="signup"?"Sign up":"Sign in"}</button>
        :<button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 mt-5 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        Loading...</button>
        
    }
        
        
        </div>
        
    </div>

    </div>
)
}
interface LabelledInputType {
    label:string,
    placeholder:string,
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
return <div className="pt-4">
<label className="block mb-2 text-sm  font-bold text-gray-900 ">{label}</label>
<input type={type ||"text"} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
</div>
}