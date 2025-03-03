import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      style={{
        background: "#091C2A",
        color: "#fff",
        border: "1",
        borderColor: "white",
      }}
      contentClasses="font-cookies"
      buttonStyle={{ background: "#E1C2B3", color: "#000", fontSize: "14px" }}
      buttonClasses="font-cookies"
      declineButtonClasses="font-cookies"
      declineButtonStyle={{
        background: "#777",
        color: "#fff",
        fontSize: "14px",
      }}
      expires={365}
    >
      🍪 Usamos cookies para mejorar tu experiencia. su uso.
    </CookieConsent>
  );
};

export default Cookies;
