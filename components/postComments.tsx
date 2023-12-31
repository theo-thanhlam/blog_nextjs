'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Comment from './postComment';

const Comments = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="commentContainer mt-12">
      <h1 className="title mb-4 text-1xl font-bold">Comments</h1>
      {login && (
        <div className="writeComment flex items-center justify-between gap-8 ">
          <textarea
            placeholder="Write a comment...."
            className=" w-full h-auto p-5"
          />
          <button className="px-4 py-1 rounded-lg button-light dark:button-dark">
            Send
          </button>
        </div>
      )}
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
