import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const HeroDefault = () => {
  const { scrollY } = useScroll();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Captura el movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/textura-papel.jpg')" }}
    >
      {/* Capa semitransparente */}
      <div
        className="absolute inset-0"
        style={{ background: "#F8F1E5", opacity: 0.6 }}
      ></div>

      {/* Contenido */}
      <div className="absolute z-20 text-center text-white drop-shadow-lg px-4">
        <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold drop-shadow-xl">
          La Valensiana
        </motion.h1>
        <motion.p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-xl mx-auto">
          Tradición, pasión y sabor se unen, creando una experiencia que honra
          nuestras raíces y deleita los sentidos.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroDefault;
