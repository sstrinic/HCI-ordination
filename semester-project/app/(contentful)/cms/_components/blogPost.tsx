import React from 'react';
import Image from 'next/image';

interface BlogPosticProps {
  title: string;
  text: string;
  imageUrl: string;
}

const BlogPostic: React.FC<BlogPosticProps> = ({ title, text, imageUrl }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md my-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="relative h-64 mb-4">
        <Image
          src={imageUrl || 'https://images.ctfassets.net/y5exkuexzl7j/6HWyZsyeWYdB9nJBPNvQyF/c49342103d0fd36dd23db985dc163ae0/default-img.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-gray-700">{text}</p>
      <p className="text-gray-700 pt-3"><b>Last Modified:</b> 01.01.1970.</p>
    </div>
  );
};

export default BlogPostic;
