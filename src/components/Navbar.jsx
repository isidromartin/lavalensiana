import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
        setScrolled(true);
      } else {
        setShowNavbar(false);
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${
        scrolled ? "bg-[#F8F1E5] shadow-lg" : "bg-transparent"
      } ${showNavbar ? "block" : "hidden"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo cambia según el scroll */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={
              scrolled ? "/images/logo_negro.svg" : "/images/logo_blanco.svg"
            }
            alt=""
            className="h-8 md:h-10 transition-all duration-300 ml-4 scale-90"
          />
        </a>

        {/* Menú Desktop */}
        <ul
          className={`hidden md:flex space-x-6 text-lg transition-all duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <li>
            <a href="#about" className="hover:text-primary transition">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-primary transition">
              Carta
            </a>
          </li>
          <li>
            <a href="#catering" className="hover:text-primary transition">
              Catering
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón de menú en móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
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
          <a
            href="#about"
            className="text-black text-xl"
            onClick={() => setIsOpen(false)}
          >
            Sobre Nosotros
          </a>
          <a
            href="#menu"
            className="text-black text-xl"
            onClick={() => setIsOpen(false)}
          >
            Carta
          </a>
          <a
            href="#catering"
            className="text-black text-xl"
            onClick={() => setIsOpen(false)}
          >
            Catering
          </a>
          <a
            href="#contact"
            className="text-black text-xl"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
