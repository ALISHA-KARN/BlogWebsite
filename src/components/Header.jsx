import React from "react";

function Header({ totalBlogs }) {
  return (
    <header>
      <h1>Your Blog</h1>
      <p>Total Blogs: {totalBlogs}</p>
    </header>
  );
}

export default Header;
