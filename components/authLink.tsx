'use client'
import { ThemeContext } from '@/context/themeContext';
import Link from 'next/link'
import React, { useContext, useState } from 'react'


const AuthLink = () => {
    const [login, setLogin] = useState(false);
    const {toggle, theme} = useContext(ThemeContext);

    

    return (

        theme === 'light' ? (
        <div className='rounded-full border border-stone-800 text-stone-800 hover:bg-stone-900 hover:text-white px-2 py-1'>
        {login ? (
            <div>
            <Link href={'/post/create'}>Create Post</Link>
            
            </div>

        ) :(

            <Link href={'/login'}>Login</Link>
        ) 
        }
    </div>
    ) : (
        <div className='rounded-full border border-white text-white hover:bg-white hover:text-stone-900 px-2 py-1'>
        {login ? (
            <div>
            <Link href={'/post/create'}>Create Post</Link>
            
            </div>

        ) :(

            <Link href={'/login'}>Login</Link>
        ) 
        }
    </div>
    )
    )
        
    
    
}

export default AuthLink