import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarBlog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
            src="./images/logo_negro.svg"
            alt="Logo La Valensiana"
            className="h-8 md:h-10 transition-all duration-300 ml-4 scale-90"
          />
        </a>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg transition-all duration-300 text-black">
          <li>
            <a
              href="./blog"
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
  );
};

export default NavbarBlog;
