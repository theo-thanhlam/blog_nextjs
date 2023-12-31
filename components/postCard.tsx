'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const PostCard = (props: {
  author: string;
  title: string;
  category: string;
  cover: string;
  createdAt: Date;
}) => {
  const { author, title, category, createdAt, cover } = props;
  return (
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href="/asdasd">
        {/* Image Cover */}
        <Image
          src={cover}
          alt="Product"
          className="w-full h-auto rounded-t-xl"
          width={288}
          height={320}
        />
        <div className="px-4 py-3 w-full">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {category}
          </span>
          <h2 className="text-2xl font-bold text-black truncate block capitalize">
            {title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-sm italic cursor-auto my-3 text-black">
              {author}
            </p>

            <div className="">
              <time className="text-black">
                {format(new Date(createdAt), 'MMM d, yyyy')}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
