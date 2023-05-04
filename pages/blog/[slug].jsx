import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <div className="flex flex-col my-16 text-center items-center">
        <div className="flex flex-col orign-center text-left mt-10 max-w-xl">
          <h1 className="font-mono font-semibold text-2xl">{title}</h1>
          <div className="font-mono text-sm">Posted on {date}</div>
          <img className="rounded-[20px]" src={cover_image} alt="" />
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
      <div className="">
        <Link legacyBehavior href="/">
          <div
            className="flex flex-col text-center items-center w-full bottom-1
            mx-5 z-20 fixed"
          >
            <div
              className="flex flex-col origin-center w-1/3 rounded-2xl m-1 p-2 tracking-[7px] font-mono font-bold text-xl
            bg-[#000000] text-blue-100 bg-opacity-40 backdrop-filter backdrop-blur-md
            hover:opacity-100 cursor-pointer transition-opacity duration-200"
            >
              Go Back
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
