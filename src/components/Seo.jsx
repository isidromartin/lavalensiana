import { Helmet } from "react-helmet-async";

const SEO = () => {
  const structuredData = {
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
    acceptsReservations: "True",
    sameAs: [
      "https://www.instagram.com/la.valensiana",
      "https://wa.me/message/5V5CVVCA2MF6G1",
    ],
  };

  return (
    <Helmet>
      {/* Meta Tags para SEO */}
      <title>La Valensiana | Arrocería & Catering en Sevilla</title>
      <meta
        name="description"
        content="Catering especializado en arroces, paellas y eventos gastronómicos en Sevilla y alrededores. Reservas al 640589563 / 625455100."
      />
      <meta
        name="keywords"
        content="catering, paellas, arroces, eventos gastronómicos, Sevilla, catering para bodas, catering para eventos"
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
        content="Arroces y paellas para eventos en Sevilla. Reservas: 640589563 / 625455100."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Helmet>
  );
};

export default SEO;
