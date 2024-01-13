'use client'
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import '@/styles/loading.css'
const LoginPage = () => {
  const {data, status} = useSession();
  const router = useRouter();
  if(status === 'loading'){
    return <div className='lds-dual-ring'></div>
  }
  if (status === "authenticated"){
    router.push("/")
  }


  return (
    <div className="mt-20 flex items-center justify-center ">
      <div className="px-10 py-12  bg-stone-200 dark:bg-slate-800 rounded-lg">
        <div className='flex flex-col gap-5 mb-5'>
        <button className=" button-google-light p-2 dark:button-google-dark rounded-lg " onClick={() => signIn('google')}>
          Sign in with Google
        </button>
        </div>
        
        {/*<hr className="h-px min-w-full bg-stone-800 border-0 dark:bg-gray-200 "/>
           <div className="flex flex-col gap-5 items-center">
          <h1 className='font-bold lg:text-lg pt-4'>Login with your account</h1>
          <input type="text" name="" id=""  placeholder='Email' className='input-field'/>
          <input type="password" name="" id=""  placeholder='Password' className='input-field'/>
          <button type="button" className='button-light dark:button-dark rounded-lg p-2 w-fit'>Sign In</button>
         
        </div>
        <div className='text-center pt-5 flex gap-1'>
        <p className="opacity-40">Don't have an account? </p>
          <Link href={"/register"} className='text-blue-500'> Sign Up Here</Link>
          </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
