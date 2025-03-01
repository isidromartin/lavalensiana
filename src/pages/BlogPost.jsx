import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);
  const [isOpen, setIsOpen] = useState(false);

  if (!post)
    return (
      <div className="text-center text-gray-600">Artículo no encontrado</div>
    );

  return (
    <section id="blogPost">
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 p-4 transition-all bg-[#F8F1E5] shadow-lg block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo: Redirige a la web principal */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="../../images/logo_negro.svg"
              alt="Logo La Valensiana"
              className="h-8 md:h-10 transition-all duration-300 ml-4 scale-90"
            />
          </a>

          {/* Menú Desktop */}
          <ul className="hidden md:flex space-x-6 text-lg transition-all duration-300 text-black">
            <li>
              <a
                href="../../blog"
                className="cursor-pointer hover:text-primary transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/"
                className="cursor-pointer hover:text-primary transition"
              >
                Ir a la Web
              </a>
            </li>
          </ul>

          {/* Botón de menú en móviles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-all duration-300 text-black"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#F8F1E5] p-6 flex flex-col items-center space-y-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="text-black text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/"
              className="text-black text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Ir a la Web
            </Link>
          </motion.div>
        )}
      </motion.nav>
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
          src={`../../${post.image}`}
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
