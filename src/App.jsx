import { useEffect, useRef, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import SEO from "./components/Seo";
import Loader from "./components/Loader";
import Cookies from "./components/cookies";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Carga diferida de los componentes
const Navbar = lazy(() => import("./components/Navbar"));
const HeroVideo = lazy(() => import("./components/Hero/HeroVideo"));
const About = lazy(() => import("./pages/About"));
const MenuSection = lazy(() => import("./pages/Menu/MenuSection"));
const Catering = lazy(() => import("./pages/Catering"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const Reservas = lazy(() => import("./components/Reservas"));

function App() {
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
              <About />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.webp"
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
                src="images/lgR.webp"
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
                src="images/lgR.webp"
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
                src="images/lgR.webp"
                alt="Logo Divisor"
                className="h-12 mx-4 bg-transparent"
              />
              <div className="border-t border-gray-400 w-1/4"></div>
            </div>

            {/* Reservas */}
            <section id="reservas">
              <Reservas />
            </section>

            {/* Divisor con logo */}
            <div className="absolute w-full flex items-center justify-center z-40">
              <div className="border-t border-gray-400 w-1/4"></div>
              <img
                src="images/lgR.webp"
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
        <Analytics />
        <SpeedInsights />
        <Cookies />
      </Router>
    </HelmetProvider>
  );
}

export default App;
