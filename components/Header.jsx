import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <dev
        className="sticky top-0  flex p-5  uppercase font-mono text-2xl text-blue-500 font-bold tracking-[8px] 
      items-start justify-between max-w-5xl mx-auto xl:items-center"
      >
        <Link href="/">
          <h2>A Static Blog</h2>
        </Link>
      </dev>
    </header>
  );
}

export default Header;
