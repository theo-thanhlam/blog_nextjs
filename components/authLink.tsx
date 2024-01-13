'use client';
import { useSession,signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AuthLink = () => {
  const {data:session} = useSession();
  
  
  return (
    <>
        <hr className="h-px w-1/3 bg-stone-800 border-0 dark:bg-gray-200 md:hidden "/>
      {session?.user ? (
        <div className='flex flex-col md:flex-row gap-3 '>
          <button className='button-light dark:button-dark rounded-full p-1'>         
            <Link href={'/post/create'}>Create Post</Link>
            </button>
        <button className='button-light dark:button-dark rounded-full p-1' onClick={()=>signOut()}>
          <Link href={'/'} >Logout</Link>
          </button>
        </div>


      ) : (
        <button className='button-light dark:button-dark rounded-full px-2' >
        <Link href={'/login'}>Login</Link>
        </button>
      )}
    </>
  );
};

export default AuthLink;
