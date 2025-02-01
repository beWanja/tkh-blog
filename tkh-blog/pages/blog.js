// pages/blog.js
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const posts = [
    { title: 'First Post', content: 'This is the content of the first post.', author: 'John Doe', date: '2025-01-31' },
    { title: 'Second Post', content: 'This is the content of the second post.', author: 'Jane Smith', date: '2025-01-30' },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
