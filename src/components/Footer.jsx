import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Columna 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="images/logo_blanco.svg"
            alt="Logo La Valensiana"
            className="h-16 md:h-12 transition-all duration-300"
          />
        </div>

        {/* Columna 2: Sobre Nosotros */}
        <div>
          <h3 className="text-2xl font-heading font-bold">Sobre Nosotros</h3>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Catering especializado en paellas y arroces tradicionales,
            fusionando calidad y pasión en cada evento.
          </p>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-2xl font-heading font-bold">Síguenos</h3>
          <div className="flex space-x-6 text-3xl">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/la.valensiana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/5V5CVVCA2MF6G1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition-transform duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            {/* Correo Electrónico */}
            <a
              href="mailto:info@lavalensiana.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Correo Electrónico"
              className="hover:text-primary transition-transform duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-600 mt-12 pt-6">
        {/* Menú de Navegación */}
        <ul className="flex flex-wrap justify-center space-x-6 text-lg text-gray-400">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer hover:text-primary transition"
              as="a"
              href="/#about"
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
              as="a"
              href="/#menu"
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
              as="a"
              href="/#catering"
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
              as="a"
              href="/#testimonials"
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
              as="a"
              href="/#contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-6 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} La Valensiana - Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
