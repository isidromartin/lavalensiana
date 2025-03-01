import React from "react";
import ReactDOM from "react-dom/client";
import BlogApp from "./BlogApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("blog-root")).render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>
);
