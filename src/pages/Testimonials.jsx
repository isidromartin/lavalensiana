import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [profileUrl, setProfileUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FEATURABLE_API_URL =
    "https://featurable.com/api/v1/widgets/8e2d1d9e-98dd-4bdb-b438-66525a48f73b";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(FEATURABLE_API_URL);
        if (!response.ok) throw new Error("Error al cargar reseñas");

        const data = await response.json();
        if (data && data.reviews) {
          setReviews(data.reviews);
          setRating(data.averageRating || 5);
          setTotalReviews(data.totalReviewCount || 0);
          setProfileUrl(data.profileUrl);
        } else {
          setError("No se encontraron reseñas.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Filtrar solo el texto en español (descartar traducción automática)
  const filterSpanishReviews = (comment) => {
    const match = comment.match(/\(Original\)\n(.+)/);
    return match ? match[1] : comment;
  };

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

        {/* Swiper con reseñas */}
        {!loading && !error && reviews.length > 0 && (
          <div className="mt-12">
            {/* Barra de Resumen de Reseñas */}
            <div className="my-12 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-semibold text-gray-900">
                  Excelente
                </span>
                <span className="text-yellow-500 text-2xl">
                  ⭐ {rating.toFixed(1)}
                </span>
                <span className="text-gray-600">{totalReviews} reseñas</span>
              </div>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Escribe una reseña
              </a>
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoHeight={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-20"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Imagen del autor (si está disponible) */}
                    {review.reviewer?.profilePhotoUrl && (
                      <img
                        src={review.reviewer.profilePhotoUrl}
                        alt={review.reviewer.displayName}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                      />
                    )}

                    {/* Texto de la reseña (solo español) */}
                    <p className="text-lg text-gray-700 font-body italic">
                      "
                      {filterSpanishReviews(review.comment) || "Sin comentario"}
                      "
                    </p>

                    {/* Nombre del autor */}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {review.reviewer?.displayName || "Usuario de Google"}
                    </h3>

                    {/* Calificación en estrellas */}
                    <p className="text-yellow-500">⭐ {review.starRating}/5</p>
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
