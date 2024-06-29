'use client'
import { useFormState } from "react-dom";
import { authenticate } from "../lib/actionu";

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className='bg-blue-950 h-[95vh] pt-20'>
            <div className=' ml-[40%]  border border-white w-[300px] h-[290px] pt-6 pl-4 pb-8'>
                <div className='py-4 '>
                    <h2 className='text-2xl text-white '>Login</h2>
                </div>
                <div className='pb-6'>
                    <form action={formAction}>
                        <div className='mb-4'>
                            <input type="text" name='username' placeholder='User Name' className='px-3 py-2' />
                        </div>
                        <div>
                            <input type="password" name='password' placeholder='Password' className='px-3 py-2' />
                        </div>
                        <button className="bg-green-500 black px-3 py-2 w-[245px] font-bold mt-3">Login</button>
                        <span className="text-white font-bold  ml-9">{state && state}</span>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default LoginForm