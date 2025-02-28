import { Helmet } from "react-helmet-async";

const SEO = () => {
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
      <meta property="og:type" content="website" />

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

      {/* Datos estructurados para Google (JSON-LD) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          "name": "La Valensiana Arrocería & Catering",
          "description": "Catering de arroces y paellas en Sevilla y alrededores. Reserva tu evento con nosotros.",
          "image": "https://lavalensiana.com/images/paella.jpeg",
          "telephone": "+34 640589563",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 37.3891,
              "longitude": -5.9845
            },
            "geoRadius": "50"
          },
          "servesCuisine": ["Española", "Mediterránea"],
          "url": "https://lavalensiana.com",
          "sameAs": [
            "https://www.instagram.com/la.valensiana",
            "https://wa.me/message/5V5CVVCA2MF6G1"
          ]
        }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
