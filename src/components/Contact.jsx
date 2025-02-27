import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_u22a5y9",
        "template_ihd69z8",
        form.current,
        "8mPVtDhb62eGi-7Yz"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
          console.log(result.text);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje, intenta de nuevo.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contacto" className="bg-[#F8F1E5] py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Información de Contacto */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
            Contacto
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto md:ml-0 mt-3"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Para consultas, reservas y eventos, contáctanos a través de nuestros
            canales:
          </p>

          <div className="space-y-4 text-xl">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FaEnvelope className="text-primary text-2xl" />
              <a
                href="mailto:info@lavalensiana.com"
                className="hover:text-primary transition-colors"
              >
                info@lavalensiana.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FaWhatsapp className="text-primary text-2xl" />
              <a
                href="https://wa.me/message/5V5CVVCA2MF6G1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FaInstagram className="text-primary text-2xl" />
              <a
                href="https://www.instagram.com/la.valensiana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @la.valensiana
              </a>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Formulario */}
        <motion.div
          className="bg-white text-gray-900 rounded-xl shadow-xl p-10 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold mb-6 text-center">
            Envíanos un Mensaje
          </h3>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-700 font-medium">
                Nombre *
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Tu Nombre"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Correo Electrónico *
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="ejemplo@email.com"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Mensaje *
              </label>
              <textarea
                required
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
