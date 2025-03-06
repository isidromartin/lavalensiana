import React from "react";
import { motion } from "framer-motion";

const Reservas = () => {
  return (
    // <section id="reservas" className="py-20 bg-[#f8f1e7] text-center">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-4xl font-semibold text-[#4d331f] mb-4">
    //       Reserva tu evento con nosotros
    //     </h2>
    //     <p className="text-lg text-[#6b4f3f] mb-8">
    //       Planifica tu almuerzo o cena con **La Valensiana Arroces & Catering**
    //       y disfruta de una experiencia gastronómica única. Elige el horario que
    //       mejor se adapte a tu evento y nosotros nos encargamos del resto.
    //     </p>
    //     <div className="max-w-4xl mx-auto">
    //       <iframe
    //         src="https://calendly.com/contacto-lavalensiana"
    //         style={{ minWidth: "100%", height: "600px", border: "none" }}
    //         title="Calendly - Reserva tu evento"
    //       ></iframe>
    //     </div>
    //   </div>
    //   </section>

    <section id="reservas" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto lado derecho */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
            Reserva con nosotros
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto md:mx-0 mt-3"></div>

          <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed mt-6">
            Planifica tu almuerzo o cena con{" "}
            <span className=" text-3xl font-elegant font-semibold italic text-gray-800 mt-6 mr-2">
              La Valensiana Arrocería & Catering
            </span>{" "}
            y disfruta de una experiencia gastronómica única. Elige el horario
            que mejor se adapte a tu evento y nosotros nos encargamos del resto.
          </p>
        </motion.div>
        {/* Imágenes con solapamiento y rotación */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://calendly.com/contacto-lavalensiana"
            style={{ minWidth: "100%", height: "600px", border: "none" }}
            title="Calendly - Reserva tu evento"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservas;
