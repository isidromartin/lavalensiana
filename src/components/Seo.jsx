import { Helmet } from "react-helmet-async";

const SEO = () => {
  const structuredDataRestaurant = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "La Valensiana Arrocería & Catering",
    description:
      "Catering de arroces y paellas en Sevilla y alrededores. Reserva tu evento con nosotros.",
    image: "https://lavalensiana.com/images/paella.jpeg",
    telephone: "+34 640589563",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sevilla",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.3891,
      longitude: -5.9845,
    },
    servesCuisine: ["Española", "Mediterránea"],
    priceRange: "$$",
    url: "https://lavalensiana.com",
    hasMenu: "https://lavalensiana.com/menu",
    acceptsReservations: true,
    sameAs: [
      "https://www.instagram.com/la.valensiana",
      "https://wa.me/message/5V5CVVCA2MF6G1",
    ],
  };

  const structuredDataFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué tipo de arroces ofrece La Valensiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En La Valensiana preparamos arroces tradicionales, de marisco, negro, al Pedro Ximénez y muchas más especialidades gourmet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen catering para eventos privados y empresas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en La Valensiana ofrecemos servicio de catering tanto para eventos privados como para empresas, adaptándonos a las necesidades de cada cliente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas personas pueden atender con su servicio de catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos adaptamos a eventos de diferentes tamaños, desde reuniones pequeñas hasta grandes celebraciones. Contáctanos para más información.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo de antelación debo reservar el catering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recomendamos reservar con al menos 7 días de antelación para garantizar disponibilidad, aunque intentamos adaptarnos a solicitudes urgentes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo personalizar mi paella o arroz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, podemos adaptar los ingredientes según tus preferencias o necesidades alimenticias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde están ubicados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La Valensiana ofrece servicio en Sevilla y alrededores. Contáctanos para confirmar disponibilidad en tu zona.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo hacer un pedido o reservar un evento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes contactarnos a través de nuestro formulario en la web, WhatsApp o redes sociales.",
        },
      },
    ],
  };
  return (
    <Helmet>
      {/* Meta Tags para SEO */}
      <title>La Valensiana | Arrocería & Catering en Sevilla</title>
      <meta
        name="description"
        content="Catering especializado en arroces, paellas y eventos gastronómicos en Sevilla y alrededores. Disfruta de los mejores arroces y servicio de catering en Sevilla. La Valensiana ofrece una experiencia gastronómica auténtica con ingredientes de calidad. Reservas al 640589563 / 625455100."
      />
      <meta
        name="keywords"
        content="catering, paellas, arroces, Sevilla, catering para bodas, catering para eventos, arroces en Sevilla, catering en Sevilla, paellas gourmet, eventos gastronómicos, cocina mediterránea"
      />
      <meta name="author" content="La Valensiana Arrocería & Catering" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lavalensiana.com" />

      {/* Open Graph para Redes Sociales */}
      <meta
        property="og:title"
        content="La Valensiana - Arrocería & Catering en Sevilla"
      />
      <meta
        property="og:description"
        content="Descubre La Valensiana, especialistas en arroces y catering de alta calidad en Sevilla. Disfruta de los mejores arroces y servicio de catering en Sevilla. La Valensiana ofrece una experiencia gastronómica auténtica con ingredientes de calidad. Reservas al 640589563 / 625455100."
      />
      <meta
        property="og:image"
        content="https://lavalensiana.com/images/paella.jpeg"
      />
      <meta property="og:url" content="https://lavalensiana.com" />
      <meta property="og:type" content="restaurant" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="La Valensiana - Catering de Arroces en Sevilla"
      />
      <meta
        name="twitter:description"
        content="Expertos en paellas y arroces para eventos exclusivos. Contacto: 640589563 / 625455100."
      />
      <meta
        name="twitter:image"
        content="https://lavalensiana.com/images/paella.jpeg"
      />
      <meta name="twitter:site" content="@lavalsensiana" />

      {/* Datos estructurados para Google (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataRestaurant),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataFAQ),
        }}
      />
    </Helmet>
  );
};

export default SEO;
