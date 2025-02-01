// components/BlogCardPlusComments.js
import React from 'react';
import BlogCard from './BlogCard';
import Comment from './Comment';

const BlogCardPlusComments = ({ post, comments }) => {
  return (
    <div>
      <BlogCard {...post} />
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardPlusComments;
