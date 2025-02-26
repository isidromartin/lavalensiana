import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonios = [
  {
    name: "Carlos Rodríguez",
    text: "Una experiencia gastronómica increíble. La paella tenía un sabor auténtico y una presentación espectacular. Repetiré sin duda.",
    image: "/images/testimonio.jpg",
  },
  {
    name: "Elena Martínez",
    text: "Contratamos a La Valensiana para nuestro evento y fue un éxito total. Atención de lujo y una cocina que nos transportó a Valencia.",
    image: "/images/testimonio.jpg",
  },
  {
    name: "Javier Torres",
    text: "La mejor paella que he probado fuera de España. Ingredientes frescos y un trato impecable. Lo recomiendo al 100%.",
    image: "/images/testimonio.jpg",
  },
  {
    name: "Carlos Rodríguez",
    text: "Una experiencia gastronómica increíble. La paella tenía un sabor auténtico y una presentación espectacular. Repetiré sin duda.",
    image: "/images/testimonio.jpg",
  },
  {
    name: "Elena Martínez",
    text: "Contratamos a La Valensiana para nuestro evento y fue un éxito total. Atención de lujo y una cocina que nos transportó a Valencia.",
    image: "/images/testimonio.jpg",
  },
  {
    name: "Javier Torres",
    text: "La mejor paella que he probado fuera de España. Ingredientes frescos y un trato impecable. Lo recomiendo al 100%.",
    image: "/images/testimonio.jpg",
  },
];

const Testimonios = () => {
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

        {/* Swiper con testimonios */}
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
            {testimonios.map((testimonio, index) => (
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
      </div>
    </section>
  );
};

export default Testimonios;
