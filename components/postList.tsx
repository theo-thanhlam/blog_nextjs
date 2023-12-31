import React from 'react';
import PostCard from './postCard';
import Pagination from './pagination';

const data = {
  author: 'Thanh Phat Lam',
  title: 'This is post title',
  category: 'Coding',
  createdAt: '2021-09-27 15:22:53.679985+02',
  cover: '/p1.jpg'
};
const PostList = () => {
  return (
    <div className="">
      <h1 className="my-4 mx-0 text-4xl font-bold">Recent Post</h1>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center justify-center gap-y-5 md:gap-y-10  mt-10 mb-5">
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
        <PostCard
          author={data.author}
          title={data.title}
          category={data.category}
          createdAt={new Date(data.createdAt)}
          cover={data.cover}
        />
      </div>
    </div>
  );
};

export default PostList;
