import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "/components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Static Blog</title>
      </Head>
      <div
        className="grid grid-cols-2 gap-4 overflow-hidden
      items-start justify-between max-w-5xl mx-auto xl:items-center"
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
