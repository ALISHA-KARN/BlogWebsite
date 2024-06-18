import React from "react";
import BlogPost from "./BlogPost";

function BlogList({ blogs, onDelete, onEdit }) {
  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          index={index}
          blog={blog}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default BlogList;
