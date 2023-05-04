import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <dev className="container">
        <Link href="/">
          <h2>A Static Blog</h2>
        </Link>
      </dev>
    </header>
  );
}

export default Header;
