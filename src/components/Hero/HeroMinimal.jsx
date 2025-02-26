// const HeroMinimal = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center text-white text-center px-4">
//       {/* Video de fondo */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/images/hero.mp4" type="video/mp4" />
//       </video>
//       {/* Capa oscura sobre el video */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
//       <div
//         className="absolute inset-0"
//         style={{ background: "#F8F1E5", opacity: 0.4 }}
//       ></div>

//       <div className="absolute z-20 text-center text-white drop-shadow-lg px-4">
//         {/* Título con mayor tamaño y progresión equilibrada */}
//         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-heading font-bold drop-shadow-xl">
//           La Valensiana
//         </h1>

//         {/* Párrafo con tamaño más compacto y progresivo */}
//         <p className="mt-4 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-gray-700 font-medium max-w-xl mx-auto">
//           Tradición, pasión y sabor se unen, creando una experiencia que honra
//           nuestras raíces y deleita los sentidos.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroMinimal;

import { motion, useScroll, useTransform } from "framer-motion";

const HeroMinimal = () => {
  const { scrollY } = useScroll();

  // Efecto Parallax: el texto sube ligeramente al hacer scroll
  const parallaxText = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* Video de fondo con Parallax */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: useTransform(scrollY, [0, 300], [0, 30]) }} // Parallax en el video
      >
        <source src="images/hero2.mp4" type="video/mp4" />
      </motion.video>

      {/* Capa oscura semitransparente para mejorar visibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Contenido con Parallax */}
      <div className="relative z-10">
        {/* <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold drop-shadow-2xl"
          style={{ y: parallaxText }}
        >
          La Valensiana
        </motion.h1> */}
        <motion.img
          src="images/logo_blanco.svg"
          alt="La Valensiana Logo"
          className="w-72 sm:w-80 md:w-[30rem] lg:w-[36rem] xl:w-[40rem] 2xl:w-[48rem] mx-auto drop-shadow-2xl"
          style={{ y: parallaxText }}
        />

        {/* 
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl mx-auto drop-shadow-lg"
          style={{ y: parallaxText }}
        >
          Donde la cocina tradicional se encuentra con la pasión por el buen
          sabor.
        </motion.p> */}
      </div>
    </section>
  );
};

export default HeroMinimal;
