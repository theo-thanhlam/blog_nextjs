'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import AuthLink from './authLink';
import ThemeToggle from './themeToggle';
import '@/styles/hamburger.css';
import { ThemeContext } from '@/context/themeContext';

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="flex items-center justify-between ">
      <Link
        href={'/'}
        className="text-lg font-bold flex flex-center lg:text-3xl md:text-xl"
      >
        logo
      </Link>
      <div className=" justify-end"></div>
      {/* Desktop Navigation */}
      <div className="hidden gap-5 text-md md:flex">
        <div className="py-2">
          <ThemeToggle />
        </div>

        <Link href={'/'} className="py-2">
          HomePage
        </Link>
        <Link href={'/'} className="py-2">
          Contact
        </Link>
        <Link href={'/'} className="py-2">
          About
        </Link>
        <AuthLink></AuthLink>
      </div>
      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <div className="pr-4">
          <ThemeToggle />
        </div>

        <div
          className="flex relative cursor-pointer md:hidden md:flex-end"
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col justify-between w-4 h-4">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {open && (
            <div className="mobile_menu menu_bg_light dark:menu_bg_dark">
              <Link href={'/'}>HomePage</Link>
              <Link href={'/'}>Contact</Link>
              <Link href={'/'}>About</Link>
              <AuthLink></AuthLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
