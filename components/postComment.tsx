import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Comment = () => {
  return (
    <div className="comment my-2 mb-4 bg-stone-200 dark:bg-slate-800 border-none rounded-lg px-3 py-3">
      <div className="user flex items-center gap-5 pt-1 mb-2">
        <div className="imageContainer w-12 h-12 relative rounded-full overflow-hidden">
          <Link href={''}>
            <Image
              src={'/p1.jpg'}
              alt=""
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="userInfo flex flex-col">
          <span className="username text-lg">User1</span>
          <span className="date text-sm opacity-70">comment date</span>
        </div>
      </div>
      <p className="userComment text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corporis,
        itaque culpa dicta magnam animi recusandae ex optio dolore quos
        praesentium fugiat sequi unde consectetur molestiae rerum dolor earum
        ipsam.
      </p>
    </div>
  );
};

export default Comment;
