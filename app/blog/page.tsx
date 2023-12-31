import CategoryList from '@/components/categoryList';
import PostList from '@/components/postList';
import React from 'react';

const BlogPage = () => {
  return (
    <div className="container)">
      <h1 className="title"> Category Title</h1>
      <div className="content">
        <PostList />
      </div>
    </div>
  );
};

export default BlogPage;
