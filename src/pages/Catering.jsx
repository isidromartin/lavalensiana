import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  BusinessCenter,
  Celebration,
  LocalFireDepartment,
  Spa,
} from "@mui/icons-material";

const Catering = () => {
  return (
    <section id="catering" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen con Parallax */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="images/catering.webp"
            alt="Catering y Eventos"
            className="w-2/3 md:w-3/4 rounded-lg shadow-xl rotate-[6deg] absolute top-6 left-6 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="images/catering.webp"
            alt="Catering y Eventos"
            className="w-2/3 md:w-3/4 rounded-lg shadow-xl rotate-[-6deg] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
            Catering & Eventos
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto md:mx-0 mt-3"></div>

          <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed mt-6">
            En <span className="font-bold">La Valensiana</span>, llevamos
            nuestra cocina a tu evento, creando una experiencia gastronómica
            única. Ofrecemos
            <span className="font-bold">
              {" "}
              paellas en vivo, servicio personalizado y atención exclusiva
            </span>{" "}
            para cada ocasión.
          </p>

          <ul className="mt-6 space-y-3 text-lg font-body text-gray-800">
            <li className="flex items-center space-x-3">
              <BusinessCenter className="text-primary" />
              <span className="hover:text-primary transition duration-300">
                Eventos corporativos y bodas
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Celebration className="text-primary" />
              <span className="hover:text-primary transition duration-300">
                Celebraciones privadas
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <LocalFireDepartment className="text-primary" />
              <span className="hover:text-primary transition duration-300">
                Showcooking en directo
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Spa className="text-primary" />
              <span className="hover:text-primary transition duration-300">
                Ingredientes de primera calidad
              </span>
            </li>
          </ul>

          {/* Botón de CTA */}
          <motion.a
            className="inline-block mt-8 px-6 py-3 text-lg font-semibold text-white bg-primary rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            as="a"
            href="/#contacto"
          >
            <Link
              to="contacto"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer text-gray-800 hover:text-text-gray-800 transition"
              as="a"
              href="/#contacto"
            >
              Solicita Información
            </Link>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Catering;
