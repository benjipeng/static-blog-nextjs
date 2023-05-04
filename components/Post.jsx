import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <div
      className="flex flex-col rounded-3xl text-center items-center space-y-1 w-[400px] flex-shrink-0
      py-8 md:w-[500px] md:text-left
     bg-emerald-100 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200"
    >
      <img
        src={post.meta.cover_image}
        alt=""
        className="h-56 w-96 rounded-[20px] object-cover object-center"
      />
      <div className="font-mono text-sm tracking-widest">{post.meta.date}</div>
      <h3 className="font-bold py-2 text-lg font-mono">{post.meta.title}</h3>
      <div className="flex flex-col items-center space-y-4">
        <p className="font-mono px-5 py-2">{post.meta.excerpt}</p>
        <Link legacyBehavior href={`/blog/${post.slug}`}>
          <a className="bg-[#0af775] text-black font-bold text-lg px-6 my-2 py-2 rounded-lg">
            More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Post;
