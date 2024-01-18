import React from "react";
import Image from "next/image";
import LabelLister from "@/components/LabelList";
import Date from "@/components/date";
import MarkdownRenderer from "@/components/MarkdownRendere";
import styles from "./blogPost.module.css";

interface BlogPosticProps {
  title: string;
  text: string;
  imageUrl: string;
  labels: string[];
  publishedAt: string;
}

const BlogPostic: React.FC<BlogPosticProps> = ({
  title,
  text,
  imageUrl,
  labels,
  publishedAt,
}) => {
  return (
    <div className="bg-white max-w-[1000px] p-6 px-10 rounded-md shadow-md mt-8">
      <h2 className="text-3xl mx-auto font-bold mb-4">{title}</h2>
      <div className="flex md:h-72 mb-6 justify-center">
        <Image
          src={imageUrl}
          alt={title}
          height={10000}
          width={500}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className={`text-gray-700 py-4 ${styles.markerDown}`}><MarkdownRenderer source={text} /></p>
      <LabelLister labels={labels}/>
      <p className="text-gray-700">
        <b>Last Modified:</b> <Date dateString={publishedAt} />
      </p>
    </div>
  );
};

export default BlogPostic;
