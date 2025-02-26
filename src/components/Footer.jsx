import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-20 px-6">
      <div className="container mx-auto grid grid-cols-3 gap-12">
        {/* Primera fila */}
        <div className="col-span-1 flex justify-center md:justify-start">
          <img
            src="/images/logo_blanco.svg"
            alt="Logo La Valensiana"
            className="h-16 md:h-10 transition-all duration-300 ml-4"
          />
        </div>
        <div className="col-span-1"></div> {/* Espacio vacío */}
        <div className="col-span-1"></div> {/* Espacio vacío */}
        {/* Segunda fila */}
        <div className="col-span-1">
          <p className="text-lg text-gray-400 leading-relaxed">
            "Cocinamos con pasión, servimos con amor."
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-heading font-bold">Sobre Nosotros</h3>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Catering especializado en paellas y arroces tradicionales,
            fusionando calidad y pasión en cada evento.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-heading font-bold">Síguenos</h3>
          <div className="flex space-x-6 text-3xl">
            <FaInstagram className="hover:text-primary cursor-pointer" />
            <FaWhatsapp className="hover:text-primary cursor-pointer" />
            <FaEnvelope className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Fila extra: Navegación */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm flex justify-center space-x-6">
        <ul
          className={`hidden md:flex space-x-6 text-lg transition-all duration-300`}
        >
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
            >
              Carta
            </Link>
          </li>
          <li>
            <Link
              to="catering"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
            >
              Catering
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
            >
              Testimonios
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} La Valensiana - Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
