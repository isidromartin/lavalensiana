import { motion } from "framer-motion";

const About2 = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imágenes con solapamiento y rotación */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Imagen Inferior */}
          <img
            src="/images/sobre-nosotros.jpg"
            alt="Panadería Artesanal"
            className="w-2/3 md:w-3/4 rounded-lg shadow-xl rotate-[6deg] absolute top-6 left-6 hover:scale-105 transition-transform duration-300"
          />

          {/* Imagen Superior */}
          <img
            src="/images/suelta.jpg"
            alt="Chefs Cocinando"
            className="w-2/3 md:w-3/4 rounded-lg shadow-xl rotate-[-6deg] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Texto lado derecho */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900">
            Nuestra Historia
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto md:mx-0 mt-3"></div>

          <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed mt-6">
            En La Valensiana, honramos la tradición culinaria valenciana
            fusionando recetas auténticas con ingredientes frescos y de calidad.
            Desde generaciones, nuestra pasión por la cocina nos ha llevado a
            crear experiencias inolvidables en cada plato.
          </p>

          {/* Firma */}
          <p className="text-2xl font-heading font-semibold italic text-gray-800 mt-6">
            - Equipo La Valensiana
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
