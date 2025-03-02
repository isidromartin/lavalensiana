import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import "./index.css";
import Loader from "./components/Loader";
import SEO from "./components/Seo";
import Cookies from "./components/cookies";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function BlogApp() {
  return (
    <HelmetProvider>
      <Router basename="/blog">
        <SEO />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <Cookies />
      </Router>
    </HelmetProvider>
  );
}

export default BlogApp;
