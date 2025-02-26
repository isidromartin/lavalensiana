import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react"; // Ícono para 'Consultar Precio'

const menuItems = [
  {
    category: "Arroces Clásicos",
    image: "/images/arroz-clasico.jpg",
    items: [
      {
        name: "Paella Valenciana",
        description:
          "Conejo, pollo, costilla, judías verdes, alcachofa y garrofons",
      },
      {
        name: "Arroz Negro",
        description: "Sepia en su tinta, tacos de merluza y puntos de alioli",
      },
      {
        name: "Pedro Ximénez",
        description:
          "Contramuslo de pollo, costilla, pimiento rojo y Pedro Ximénez",
      },
    ],
  },
  {
    category: "Especialidades",
    image: "/images/arroz-especial.jpg",
    items: [
      {
        name: "Imperial",
        description: "Secreto ibérico, panceta, higos, setas variadas y foie",
      },
      {
        name: "Mediterráneo",
        description: "Fumet de pescado, galeras, chipirones y alcachofa",
      },
      {
        name: "Mar y Fuego",
        description: "Pulpo, sepia, emperador y sobrasada ibérica",
      },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-[#F8F1E5]">
      <div className="container mx-auto text-center">
        {/* Título con separador elegante */}
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

        {/* Grid del menú */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {menuItems.map((section, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-lg shadow-lg overflow-hidden transition duration-300 bg-white/40 backdrop-blur-lg border border-white/40 hover:bg-white/60 hover:shadow-2xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen de fondo con desenfoque */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src={section.image}
                  alt={section.category}
                  className="w-full h-full object-cover backdrop-blur-lg"
                />
              </div>

              {/* Contenido */}
              <div className="relative">
                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-4">
                  {section.category}
                </h3>
                <ul className="text-lg font-body text-gray-700 space-y-4">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-300 py-3"
                    >
                      <div>
                        <span className="block text-xl font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-md text-gray-600">
                          {item.description}
                        </span>
                      </div>
                      <span className="flex items-center gap-2 text-gray-600">
                        <HelpCircle className="w-5 h-5" />
                        Consultar Precio
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información adicional sobre las raciones */}
        <div
          className="mt-16 p-8 rounded-lg shadow-lg border border-white/40
                bg-white/40 backdrop-blur-lg hover:bg-white/60 hover:shadow-xl transition"
        >
          <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Información sobre las raciones
          </h3>
          <ul className="list-disc pl-6 text-lg font-body text-gray-800 leading-relaxed space-y-3">
            <li>
              Los precios de las raciones variarán en función del número de
              personas y la viabilidad del encargo / evento.{" "}
              <strong>Contáctenos</strong> y le elaboraremos un presupuesto
              ajustado.
            </li>
            <li>
              Las raciones equivalen a <strong>100g de arroz</strong>.
            </li>
            <li>
              Las paellas cocinadas a domicilio son un servicio{" "}
              <strong>personalizado y con disponibilidad limitada</strong>. Se
              recomienda reservar con la máxima antelación.
            </li>
          </ul>
        </div>

        {/* Botón de contacto con animación */}
        <div className="mt-12">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 text-lg font-bold rounded-full shadow-md hover:bg-secondary transition-all animate-pulse"
          >
            Contáctanos para Reservas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
