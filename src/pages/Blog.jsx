import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import NavbarBlog from "../components/NavbarBlog";

const Blog = () => {
  return (
    <section id="blog">
      <NavbarBlog />
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <div className="flex flex-col items-center text-center mt-6 mb-8">
          <h2 className="text-5xl font-bold italic text-primary ">Diario de</h2>
          <h1 className="text-8xl font-bold kaushan leading-none">
            La Valensiana
          </h1>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="block border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-bottom object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
