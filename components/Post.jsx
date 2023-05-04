import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <div className="card">
      <img src={post.meta.cover_image} alt="" />
      <div className="post-date">{post.meta.date}</div>
      <h3>{post.meta.title}</h3>
      <p>{post.meta.excerpt}</p>
      <Link legacyBehavior href={`/blog/${post.slug}`}>
        <a className="btn">More</a>
      </Link>
    </div>
  );
}

export default Post;
