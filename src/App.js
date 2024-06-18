import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import "./styles.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // Function to add or edit a blog
  const addBlog = (blog) => {
    if (editBlog !== null) {
      // Edit existing blog
      const updatedBlogs = blogs.map((b, index) =>
        index === editBlog ? blog : b
      );
      setBlogs(updatedBlogs);
      setEditBlog(null);
    } else {
      setBlogs((prevBlogs) => [...prevBlogs, blog]);
    }
  };

  const deleteBlog = (index) => {
    setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditBlog(index);
  };

  return (
    <div className="App">
      <Header totalBlogs={blogs.length} />
      <BlogForm
        onAdd={addBlog}
        editBlog={editBlog !== null ? blogs[editBlog] : null}
      />
      <BlogList blogs={blogs} onDelete={deleteBlog} onEdit={startEditing} />
    </div>
  );
}

export default App;
