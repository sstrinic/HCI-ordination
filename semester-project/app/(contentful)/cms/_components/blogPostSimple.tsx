import React from 'react';

const BlogPostics = ({ title, text, imageUrl }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <img src={imageUrl} alt={`Image for ${title}`} className="blog-post-image" />
      <p className="blog-post-text">{text}</p>
    </div>
  );
};

export default BlogPostics;
