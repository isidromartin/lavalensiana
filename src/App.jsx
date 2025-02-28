import { useEffect, useRef } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import HeroCollage from "./components/Hero/HeroCollage";
import HeroModern from "./components/Hero/HeroModern";
import HeroImg from "./components/Hero/HeroImg";
import HeroVideo from "./components/Hero/HeroVideo";
import About from "./components/About";
import About2 from "./components/About2";
import Menu from "./components/Menu/Menu";
import Menu2 from "./components/Menu/Menu2";
import MenuSection from "./components/Menu/MenuSection";
import Catering from "./components/Catering";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import gsap from "gsap";

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
      <Helmet>
        <title>La Valensiana - Arroces & Catering</title>
        <meta
          name="description"
          content="Un viaje gastronómico por la auténtica cocina valenciana."
        />
      </Helmet>
      <Navbar />
      <main>
        <section id="hero">
          <HeroVideo />
        </section>
        <section id="about">
          <About2 />
        </section>
        <div className="absolute w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="menu">
          {/* <Menu />
          <Menu2 /> */}
          <MenuSection />
        </section>
        <div className="absolute w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="catering">
          <Catering />
        </section>
        <div className="absolute w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="testimonials">
          <Testimonials />
        </section>
        <div className="absolute w-full flex items-center justify-center z-40">
          <div className="border-t border-gray-400 w-1/4"></div>
          <img
            src="images/lgR.png"
            alt="Logo Divisor"
            className="h-12 mx-4 bg-transparent"
          />
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
