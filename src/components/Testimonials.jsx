import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "testimonios.json";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener testimonios");
        }
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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

        {/* Manejo de Errores y Carga */}
        {loading && (
          <p className="text-lg text-gray-700 mt-6">Cargando testimonios...</p>
        )}
        {error && <p className="text-lg text-red-600 mt-6">{error}</p>}

        {/* Swiper con testimonios */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="mt-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {testimonials.map((testimonio, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Imagen del cliente */}
                    <img
                      src={testimonio.image}
                      alt={testimonio.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                    />

                    {/* Texto del testimonio */}
                    <p className="text-lg text-gray-700 font-body italic">
                      "{testimonio.text}"
                    </p>

                    {/* Nombre del cliente */}
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonio.name}
                    </h4>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
