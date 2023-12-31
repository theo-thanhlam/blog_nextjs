'use client';
import { ThemeContext } from '@/context/themeContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const AuthLink = () => {
  const [login, setLogin] = useState(true);
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className="rounded-full button-light px-2 py-1 dark:button-dark mt-1">
      {login ? (
        <Link href={'/post/create'}>Create Post</Link>
      ) : (
        <Link href={'/login'}>Login</Link>
      )}
    </div>
  );
};

export default AuthLink;
