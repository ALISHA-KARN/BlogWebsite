import React from "react";

function BlogPost({ blog, index, onDelete, onEdit }) {
  return (
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <img src={blog.imageUrl} alt={blog.title} />

      <p>{blog.description}</p>
      <button onClick={() => onEdit(index)}>Edit Blog</button>
      <button onClick={() => onDelete(index)}>Delete Blog</button>
    </div>
  );
}

export default BlogPost;
