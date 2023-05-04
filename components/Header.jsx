import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <dev className="p-4 top-0 bg-slate-900 bg-opacity-60 backdrop-filter backdrop-blur-md z-10 w-full fixed rounded-b-3xl">
        <Link href="/">
          <h2
            className="flex flex-col px-5 uppercase font-mono text-3xl text-blue-100 font-bold tracking-[8px]
          justify-between max-w-5xl mx-auto xl:items-center"
          >
            A Static Blog
          </h2>
        </Link>
      </dev>
    </header>
  );
}

export default Header;
