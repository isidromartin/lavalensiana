import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";
import NavbarBlog from "../components/NavbarBlog";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post)
    return (
      <div className="text-center text-gray-600">Artículo no encontrado</div>
    );

  return (
    <section id="blogPost">
      <NavbarBlog />
      <div className="max-w-3xl mx-auto p-6 mt-20">
        <Helmet>
          <title>{post.title} - La Valensiana</title>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:image" content={post.image} />
          <meta
            property="og:url"
            content={`https://www.lavalensiana.com/blog/post/${post.id}`}
          />
        </Helmet>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-4"
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose lg:prose-lg"
        />
        <Link to="/" className="block mt-6 text-blue-500 hover:underline">
          ← Volver al Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogPost;
