import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import CategoryCard from './categoryCard';

const CategoryList = () => {
  return (
    <div className="my-8">
      <h1 className="my-4 mx-0 text-4xl font-bold">Categories</h1>
      <div className="flex flex-col justify-center gap-4 md:justify-between  md:flex-row ">
        <CategoryCard
          imageLight="/icons/coding_light.png"
          imageDark="/icons/coding_dark.png"
          link="#"
          name="coding"
        />
        <CategoryCard
          imageLight="/icons/cooking_light.png"
          imageDark="/icons/cooking_dark.png"
          link="#"
          name="food"
        />
        <CategoryCard
          imageLight="/icons/coding_light.png"
          imageDark="/icons/coding_dark.png"
          link="#"
          name="coding"
        />
        <CategoryCard
          imageLight="/icons/cooking_light.png"
          imageDark="/icons/cooking_dark.png"
          link="#"
          name="food"
        />
      </div>
    </div>
  );
};

export default CategoryList;
