import { useEffect, useRef, lazy, Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import gsap from "gsap";
import SEO from "./components/Seo";
import Loader from "./components/Loader";

// Carga diferida de los componentes
const Navbar = lazy(() => import("./components/Navbar"));
const HeroVideo = lazy(() => import("./components/Hero/HeroVideo"));
const About2 = lazy(() => import("./components/About2"));
const MenuSection = lazy(() => import("./components/Menu/MenuSection"));
const Catering = lazy(() => import("./components/Catering"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const gsapRef = useRef(false);

  useEffect(() => {
    if (!gsapRef.current) {
      gsapRef.current = true;
      gsap.from("section", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Suspense
          fallback={
            <div className="text-center p-10 text-lg">
              <Loader />
            </div>
          }
        >
          <Navbar />
          <main>
            {/* Hero Section */}
            <section id="hero">
              <HeroVideo />
            </section>

            {/* Sobre Nosotros */}
            <section id="about">
              <About2 />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.png"
                alt="Logo Divisor"
                className="h-12 mx-4 bg-transparent"
              />
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>

            {/* Menú */}
            <section id="menu">
              <MenuSection />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.png"
                alt="Logo Divisor"
                className="h-12 mx-4 bg-transparent"
              />
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>

            {/* Catering */}
            <section id="catering">
              <Catering />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.png"
                alt="Logo Divisor"
                className="h-12 mx-4 bg-transparent"
              />
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>

            {/* Opiniones de Clientes */}
            <section id="testimonials">
              <Testimonials />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.png"
                alt="Logo Divisor"
                className="h-12 mx-4 bg-transparent"
              />
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>

            {/* Contacto */}
            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
