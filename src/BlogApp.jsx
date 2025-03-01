import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import "./index.css";
import Loader from "./components/Loader";
import SEO from "./components/Seo";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function BlogApp() {
  return (
    <HelmetProvider>
      <Router basename="/lavalensiana/blog">
        <SEO />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/:id" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default BlogApp;
