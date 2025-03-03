import { motion } from "framer-motion";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Testimonials = () => {
  const featurableWidgetId = "8e2d1d9e-98dd-4bdb-b438-66525a48f73b";

  return (
    <section id="testimonios" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
            Opiniones de Nuestros Clientes
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-3"></div>
        </motion.div>

        <div className="mt-12">
          <ReactGoogleReviews
            layout="carousel"
            config={{ language: "es", lang: "es" }}
            language="es"
            featurableId={"8e2d1d9e-98dd-4bdb-b438-66525a48f73b"}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
