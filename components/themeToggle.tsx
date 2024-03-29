'use client';

import { ThemeContext } from '@/context/themeContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="w-10 h-5 rounded-3xl cursor-pointer flex items-center justify-between bg-black relative"
      onClick={toggle}
    >
      <Image src={'/icons/moon.png'} alt="" width={14} height={14} />
      <div className=" w-4 h-4 rounded-full absolute right-px bg-white dark:left-px dark:bg-[]" />
      <Image src={'/icons/sun.png'} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
