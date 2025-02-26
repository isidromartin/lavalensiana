import { motion } from "framer-motion";

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
            src="/images/catering.jpg"
            alt="Catering y Eventos"
            className="w-2/3 md:w-3/4 rounded-lg shadow-xl rotate-[6deg] absolute top-6 left-6 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/catering.jpg"
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
          <div className="w-16 h-1 bg-primary mx-auto md:mx-0 mt-3"></div>

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
            <li>🍽️ Eventos corporativos y bodas</li>
            <li>🎉 Celebraciones privadas</li>
            <li>🔥 Showcooking en directo</li>
            <li>🌿 Ingredientes de primera calidad</li>
          </ul>

          {/* Botón de CTA */}
          <motion.a
            href="#contacto"
            className="inline-block mt-8 px-6 py-3 text-lg font-semibold text-white bg-primary rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita Información
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Catering;
