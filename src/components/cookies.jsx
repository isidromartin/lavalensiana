import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    if (cookiesAccepted) {
      // Cargar Google Tag Manager dinámicamente
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-36GHG721FV";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-36GHG721FV", { anonymize_ip: true });

      // Configuración de consentimiento
      gtag("consent", "default", {
        ad_storage: "granted",
        analytics_storage: "granted",
        personalization_storage: "granted",
      });
    }
  }, [cookiesAccepted]);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      style={{ background: "#222", color: "#fff" }}
      contentClasses="font-cookies"
      buttonStyle={{ background: "#D4A373", color: "#000", fontSize: "14px" }}
      buttonClasses="font-cookies"
      declineButtonClasses="font-cookies"
      declineButtonStyle={{
        background: "#777",
        color: "#fff",
        fontSize: "14px",
      }}
      expires={365}
      onAccept={() => setCookiesAccepted(true)}
      onDecline={() => console.log("Cookies rechazadas")}
    >
      🍪 Usamos cookies para mejorar tu experiencia.
    </CookieConsent>
  );
};

export default Cookies;
