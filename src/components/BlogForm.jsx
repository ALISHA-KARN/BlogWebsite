import React, { useState, useEffect } from "react";

function BlogForm({ onAdd, editBlog }) {
  const [blog, setBlog] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editBlog) {
      setBlog(editBlog);
    }
  }, [editBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(blog);
    setBlog({ imageUrl: "", title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="imageUrl"
        value={blog.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        name="title"
        value={blog.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={blog.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>
      <button type="submit">Post Blog</button>
    </form>
  );
}

export default BlogForm;
