import { motion } from "framer-motion";

const HeroParallax = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo con las paelleras */}
      <div className="absolute inset-0">
        <img
          src="images/paelleras.jpg"
          alt="Paellas cocinándose"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Humo con efecto parallax */}
      <motion.img
        src="images/smoke.png"
        alt="Humo"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70%] opacity-80"
        initial={{ y: -50 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Texto principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-bold drop-shadow-2xl">
          La Valensiana
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
          Tradición, pasión y sabor en cada paella.
        </p>
      </div>
    </section>
  );
};

export default HeroParallax;
