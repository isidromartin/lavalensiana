import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Paella Valenciana",
    image: "images/paella4.jpg",
    ingredients: [
      "Conejo",
      "Pollo",
      "Costilla",
      "Judías verdes",
      "Alcachofa",
      "Garrofons",
    ],
    location: "Albufera - Valencia",
    date: "15/10/24",
  },
  {
    name: "Arroz Negro",
    image: "images/paella3.jpg",
    ingredients: ["Sepia en su tinta", "Tacos de merluza", "Puntos de alioli"],
    location: "Costa Blanca",
    date: "08/05/24",
  },
  {
    name: "Arroz Pedro Ximénez",
    image: "images/paella2.jpg",
    ingredients: [
      "Contramuslo de pollo",
      "Costilla de cerdo",
      "Pimiento rojo",
      "Pedro Ximénez",
    ],
    location: "Suelta de Palomas - Guillena",
    date: "02/11/24",
  },
  {
    name: "Arroz Imperial",
    image: "images/paella1.jpg",
    ingredients: [
      "Secreto ibérico",
      "Panceta",
      "Higos",
      "Setas variadas",
      "Foie",
    ],
    location: "Evento Privado - Sevilla",
    date: "04/02/24",
  },
  {
    name: "Arroz Mediterráneo",
    image: "images/paella3.jpg",
    ingredients: ["Fumet de pescado", "Galeras", "Chipirones", "Alcachofa"],
    location: "Catering Gourmet",
    date: "12/06/24",
  },
  {
    name: "Arroz Mar y Fuego",
    image: "images/paella3.jpg",
    ingredients: ["Pulpo", "Sepia", "Emperador", "Sobrasada ibérica"],
    location: "Catering - Valencia",
    date: "10/03/24",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto text-center">
        {/* Título del menú */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900">
            Nuestra Carta
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-3"></div>
        </motion.div>

        {/* Sección de cada plato */}
        <div className="mt-12 space-y-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen en Parallax */}
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: `url(${item.image})` }}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-75"
                />
              </motion.div>

              {/* Fondo oscuro semitransparente para resaltar el texto */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-6 py-12 text-center">
                {/* Nombre del Plato */}
                <motion.h3
                  className="text-6xl sm:text-7xl font-heading font-semibold tracking-wide drop-shadow-lg"
                  initial={{ opacity: 0, translateY: 8 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {item.name}
                </motion.h3>

                {/* Divisor */}
                <motion.hr
                  className="border-t-[1px] border-white/30 w-1/2 mx-auto my-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Ingredientes */}
                <motion.p
                  className="my-4 text-2xl sm:text-3xl font-body italic"
                  initial={{ opacity: 0, translateY: 10 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  - Ingredientes -
                </motion.p>
                <motion.ul
                  className="my-4 text-lg sm:text-xl font-body italic space-y-1"
                  initial={{ opacity: 0, translateY: 10 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {item.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </motion.ul>

                {/* Segunda línea divisoria */}
                <motion.hr
                  className="border-t-[1px] border-white/30 w-1/3 mx-auto my-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
