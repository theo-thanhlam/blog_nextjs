'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CategoryCard from './categoryCard';
import axios from 'axios';

const CategoryCardList = ({categories}:{categories:any}) => {
  return (
    <div>
        {categories.map((item:any) => (
          <CategoryCard key={item._id} imageDark={`/${item.imageDark}`} imageLight={`/${item.imageLight}`} link='#' name={item.title}/>
        ))}
    </div>
  )


}


const CategoryList =  () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/categories').then((res)=> {  setCategories(res.data)})
  },[]);
  console.log(categories)

  return (
    <div className="my-8">
      <h1 className="my-4 mx-0 text-4xl font-bold">Categories</h1>
      <div className="flex flex-col justify-center gap-4 md:justify-between md:flex-row ">
        {
          <CategoryCardList categories={categories} />
        }
       
        {/* <CategoryCard
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
        /> */}
      </div>
    </div>
  );
};

export default CategoryList;
