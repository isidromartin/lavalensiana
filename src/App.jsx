import { useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/Hero/HeroVideo";
import About2 from "./components/About2";
import MenuSection from "./components/Menu/MenuSection";
import Catering from "./components/Catering";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import gsap from "gsap";
import SEO from "./components/Seo";

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
      </Router>
    </HelmetProvider>
  );
}

export default App;
