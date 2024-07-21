'use client'
import { useFormState } from "react-dom";
import { authenticate } from "../lib/actionu";
import { useState } from "react";
import {LuEye,LuEyeOff} from 'react-icons/lu'

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);
    const [show,setShow]=useState(false)


  return ( 
   <>
     <div className="background w-full h-full">
            <div className="mx-auto border border-gray-200 w-[370px] h-[550px] sm:w-[400px] sm:h-[550px] px-6 mt-[1rem] rounded-lg bg-transparent mb-[3rem] ">
            <form action={formAction}>
            <div className=" mt-[2rem] ">
                    <h2 className="text-center text-white font-bold text-2xl">Login</h2>
            </div>
            <div>
                    <h2 className="font-bold text-3xl text-center text-white mt-[3rem] mb-[2rem] ">Welcome Back !</h2>
            </div>
            <div className="mb-2">
                    <label htmlFor="" className="text-white font-bold text-[18px]">User Name</label><br />
                    <input type="text" name="username" placeholder="User Name" className="w-full px-4 py-2" />
            </div>                
            <div className="mb-2 relative">
                    <label htmlFor=""className="text-white font-bold text-[18px]" >Password</label><br />
                    <input name='password'  type={show ? 'text' : 'password'} placeholder="Password" className="w-full px-4 py-2 " />
                    {
                        show? 
                        <LuEyeOff onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                        :
                        <LuEye onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                    }
            </div>
            <div className="mt-[3rem]">
                    <button className="w-full hover:bg-gray-950 text-center py-2 border border-white rounded-md bg-black text-white font-bold  ">Login</button>
            </div>
                <span className="text-white font-bold  ml-9">{state && state}</span>
                </form>        
            </div>
        </div>
    </>
  )
}

export default LoginForm
