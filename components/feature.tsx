import { ThemeContext } from '@/context/themeContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const Feature = () => {
  return (
    <div className="mt-8">
      <h1 className=" text-4xl font-bold">Featured</h1>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <div className="md:flex-1 md:h-96 relative">
          <Image
            src={'/600x400.svg'}
            alt=""
            width={600}
            height={400}
            className=""
          />
        </div>
        <div className="md:flex-1 flex flex-col gap-5">
          <h1 className="postTitle text-2xl md:text-4xl">Lorem ipsum dolor</h1>
          <p className="postDescription text-base md:text-xl font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            esse ab maiores voluptate eos, suscipit soluta minima quibusdam ad
            cumque officiis in reprehenderit? Voluptatum laudantium quo nisi
            quam accusantium illum.
          </p>
          <button className="postReadMore py-3 px-4 border rounded w-max button-light dark:button-dark">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
