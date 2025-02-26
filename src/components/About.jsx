import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const parallaxImage = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section id="about" className="pb-10 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full gap-12">
        {/* Imagen con Parallax */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          style={{ y: parallaxImage }}
        >
          <img
            src="/images/sobre-nosotros.jpg"
            alt="Sobre Nosotros"
            className="rounded-lg shadow-lg w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            En La Valensiana, fusionamos la tradición con la innovación para
            ofrecer una experiencia gastronómica única. Cada plato está
            elaborado con ingredientes frescos y auténticos, honrando nuestra
            herencia culinaria.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
