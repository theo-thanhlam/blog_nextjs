'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '@/context/themeContext';
const CategoryCard = (props: {
  link: string;
  imageLight: string;
  imageDark: string;
  name: string;
}) => {
  const { link, imageLight, imageDark, name } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <Link
      href={link}
      className="flex gap-3 items-center capitalize border-2 rounded-lg w-full md:w-1/3 h-10 justify-center button-light dark:button-dark "
    >
      <div className="flex items-center">
        <Image
          src={theme === 'light' ? `${imageLight}` : `${imageDark}`}
          alt=""
          width={32}
          height={32}
          className="category_image"
        />
        <h5 className="category_name">{name}</h5>
      </div>
    </Link>
  );
};

export default CategoryCard;
