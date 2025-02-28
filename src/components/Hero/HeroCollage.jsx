import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#F8F1E5] flex items-center justify-center overflow-hidden">
      {/* Fondo con textura */}
      <div className="absolute inset-0 bg-[url('/images/textura-papel.jpg')] bg-cover opacity-50"></div>

      {/* Contenedor del collage */}
      <div className="relative grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] max-w-7xl">
        {/* Imágenes del collage (Se ocultan algunas en pantallas chicas) */}
        {[
          { src: "images/imagen1.png", hidden: "hidden md:block" },
          { src: "images/imagen2.jpg", hidden: "hidden sm:block" },
          { src: "images/imagen3.jpg", hidden: "" },
          { src: "images/imagen4.jpg", hidden: "" },
          { src: "images/imagen1.png", hidden: "" },
          { src: "images/imagen2.jpg", hidden: "hidden md:block" },
          { src: "images/imagen3.jpg", hidden: "hidden sm:block" },
          { src: "images/imagen4.jpg", hidden: "hidden lg:block" },
        ].map((item, index) => (
          <motion.img
            key={index}
            src={item.src}
            alt={`Collage ${index}`}
            className={`w-full h-auto object-cover rounded-lg shadow-lg ${item.hidden}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}
      </div>

      {/* Texto grande "La Valensiana" */}
      <motion.h1
        className="kaushan absolute text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#1E1E1E] z-20"
        // style={{ fontFamily: "'Permanent Marker', cursive" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        La Valensiana
      </motion.h1>

      {/* Textos pequeños */}
      <motion.div
        className="absolute left-5 sm:left-10 top-20 bg-primary p-4 rounded-md shadow-lg max-w-xs text-white font-semibold text-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <p>
          Tradición, pasión y sabor se unen para crear una experiencia única en
          cada paella.
        </p>
      </motion.div>

      <motion.div
        className="absolute right-5 sm:right-10 bottom-20 bg-primary p-4 rounded-md shadow-lg max-w-xs text-white font-semibold text-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <p>La paella no es solo arroz, es historia, cultura y familia.</p>
      </motion.div>
    </section>
  );
};

export default Hero;
