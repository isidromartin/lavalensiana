import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";
import { motion } from "framer-motion";

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [tags, setTags] = useState(["Todos"]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      //   https://sheetdb.io/api/v1/yimwb8m2l2thc
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        const uniqueTags = ["Todos", ...new Set(data.map((item) => item.tag))];
        setTags(uniqueTags);
      })
      .catch((error) => console.error("Error cargando el menú:", error));
  }, []);

  const filteredItems =
    selectedTag === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.tag === selectedTag);

  const numItemsToShow = 4;
  const displayedItems = showAll
    ? filteredItems
    : filteredItems.slice(0, numItemsToShow);

  return (
    <section id="menu" className="py-20 bg-[#F8F1E5]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
          Nuestra Carta
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mt-3 mb-12"></div>

        {/* Botones de Filtro */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-gray-800 shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Platos Filtrados */}

        <div className="flex flex-wrap justify-center gap-8 pr-12">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mx-8 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] max-w-[18rem] h-96 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FlipCard
                key={index}
                image={item.imagen}
                name={item.nombre}
                ingredients={item.ingredientes}
              />
            </motion.div>
          ))}
        </div>
        {/* Botón "Ver Más" (Solo si hay más de 3 filas y aún no se han mostrado todos los platos) */}
        {filteredItems.length > numItemsToShow && !showAll && (
          <motion.button
            onClick={() => setShowAll(true)}
            // className="mt-20 bg-[#E1C2B3] text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:scale-105"
            className="inline-block mt-20 px-6 py-3 text-lg font-semibold text-gray-800 bg-primary rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todo
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
