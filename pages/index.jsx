import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "/components/Post";

export default function Home({ posts }) {
  return (
    <div className="bg-black">
      <Head>
        <title>A Static Blog</title>
      </Head>
      <div
        className="grid gap-4 overflow-hidden items-start justify-center max-w-5xl mx-auto xl/md:items-center 
        sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
      >
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}

//* Enable data fetching @ build-time
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts")); //read root folder for `posts`
  //console.log(files); // its an array!!
  const post = files.map((filename) => {
    // * slug
    const slug = filename.replace(".md", "");

    // * front matter
    const mdAndMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: meta } = matter(mdAndMeta);
    console.log(meta);

    return {
      slug,
      meta,
    };
  });
  //console.log(post);
  return {
    props: {
      posts: post,
    },
  };
}
