// components/BlogCard.js

/**This component handles display of individual blog posts
 easier to reuse for multiple posts
 **/
import React from 'react';

const BlogCard = ({ title, content, author, date }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p><strong>By:</strong> {author} | <em>{date}</em></p>
      <div>{content}</div>
    </article>
  );
};

export default BlogCard;
