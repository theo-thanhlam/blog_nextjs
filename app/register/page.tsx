import React from 'react'
import Link from 'next/link';
const RegisterPage = () => {
    return (
        <div className="mt-12 flex items-center justify-center ">
          <div className="px-10 py-12 bg-stone-200 dark:bg-slate-800 rounded-lg">   
             <div className="flex flex-col gap-5 items-center">
              <h1 className='font-bold lg:text-lg pt-4'>Register Your Account</h1>
              <input type="text" name="" id=""  placeholder='Full Name' className='input-field'/>
              <input type="email" name="" id=""  placeholder='Email' className='input-field'/>
              <input type="password" name="" id=""  placeholder='Password' className='input-field'/>
              <input type="password" name="" id=""  placeholder='Confirm password' className='input-field'/>


              <button type="button" className='button-light dark:button-dark rounded-lg p-2 w-fit'>Sign Up</button>
             
            </div>
            <div className='text-center pt-5 flex gap-1'>
            <p className="opacity-40">Already a member? </p>
              <Link href={"/login"} className='text-blue-500'> Log In Here</Link>
              </div>
          </div>
        </div>
      );
}

export default RegisterPage