'use client';
import { ThemeContext } from '@/context/themeContext';
import React, { useContext } from 'react';

const socials = {
  Facebook: 'https://www.facebook.com/thanhphat.theo/',
  Instagram: 'https://www.instagram.com/thanhphat.theo/',
  Linkedin: 'https://www.linkedin.com/in/thanhphatlam/',
  Github: 'https://github.com/theo-thanhlam'
};

const Footer = () => {
  return (
    <footer className="bg-transparent">
      {/* <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <a className="block md:mx-auto mb-5 max-w-max" href="#"></a>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6"></div>
        </div>
      </div> */}
      {/* <div className="border-b border-gray-100 mt-10"></div> */}
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
