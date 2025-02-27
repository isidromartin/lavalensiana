import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const FlipCard = ({ image, name, ingredients }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  // Cerrar al hacer clic fuera de la tarjeta
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setFlipped(false);
      }
    };
    if (flipped) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [flipped]);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-80 h-96 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Tarjeta con efecto 3D */}
      <motion.div
        className="w-full h-full rounded-lg shadow-lg"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Lado Frontal */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 rounded-lg">
            <h2 className="kaushan text-white text-3xl font-bold">{name}</h2>
            <div className="my-2 flex items-center justify-center">
              <div className="border-t border-white-700 w-full"></div>
            </div>
            <p className="text-white">{ingredients}</p>
          </div>
        </div>

        {/* Lado Trasero */}
        <motion.div
          className="absolute w-full h-full bg-[#F8F1E5] rounded-lg flex flex-col justify-center items-center text-center p-6 shadow-lg"
          style={{ rotateY: 180, backfaceVisibility: "hidden" }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="absolute top-4 right-4 text-gray-700 hover:text-black"
          >
            <FaTimes size={20} />
          </button>
          <h3 className="text-xl font-bold text-black mb-4">{name}</h3>
          <p className="text-gray-700">{ingredients}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
