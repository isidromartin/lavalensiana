import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Efecto de Parallax con diferentes velocidades
  const parallaxImg1 = useTransform(scrollY, [0, 300], [0, 120]); // Imagen 1 (rápida)
  const parallaxImg2 = useTransform(scrollY, [0, 300], [0, 90]); // Imagen 2 (intermedia)
  const parallaxImg3 = useTransform(scrollY, [0, 300], [0, 70]); // Imagen 3 (lenta)
  const parallaxTitle = useTransform(scrollY, [0, 300], [0, -50]); // Título (leve subida)

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
      {/* Capa oscura semitransparente */}
      <div
        className="absolute inset-0"
        style={{ background: "#F8F1E5", opacity: 0.6 }}
      ></div>

      {/* Contenedor de imágenes con Parallax + Efecto 3D */}
      <div className="relative w-full max-w-7xl h-[80vh] flex justify-center z-10">
        {/* Imagen 1 (ahora imagen1.png) */}
        <motion.img
          src="/images/imagen1.png"
          alt="Historia"
          className="absolute w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] xl:w-[22vw] 2xl:w-[20vw] rounded-lg shadow-lg"
          style={{
            y: parallaxImg1,
            rotate: "-8deg",
            x: mouseX * 10,
            y: mouseY * 5,
            top: "8%",
            left: "5%",
            xl: { top: "5%", left: "2%" },
            "2xl": { top: "4%", left: "0%" },
            scale: 1.05,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Imagen 2 */}
        <motion.img
          src="/images/imagen2.jpg"
          alt="Cultura"
          className="absolute w-[45vw] sm:w-[38vw] md:w-[32vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[22vw] rounded-lg shadow-lg"
          style={{
            y: parallaxImg2,
            rotate: "6deg",
            x: -mouseX * 10,
            y: -mouseY * 5,
            top: "30%",
            right: "10%",
            xl: { right: "5%" },
            "2xl": { right: "2%" },
            scale: 1.08,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Imagen 3 */}
        <motion.img
          src="/images/imagen3.jpg"
          alt="Familia"
          className="absolute w-[38vw] sm:w-[32vw] md:w-[28vw] lg:w-[24vw] xl:w-[20vw] 2xl:w-[18vw] rounded-lg shadow-lg"
          style={{
            y: parallaxImg3,
            rotate: "-4deg",
            x: mouseX * 8,
            y: mouseY * 4,
            bottom: "8%",
            left: "15%",
            xl: { left: "10%", bottom: "5%" },
            "2xl": { left: "5%", bottom: "3%" },
            scale: 1.03,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      {/* Título y textos con animación */}
      <div className="absolute z-20 text-center text-white drop-shadow-lg px-4">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-heading text-gray-700 font-bold drop-shadow-xl"
          style={{ y: parallaxTitle }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          La Valensiana
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-medium max-w-xl mx-auto"
          style={{ y: parallaxTitle }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Tradición, pasión y sabor se unen, creando una experiencia que honra
          nuestras raíces y deleita los sentidos.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
