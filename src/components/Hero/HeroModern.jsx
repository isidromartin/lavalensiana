const HeroModern = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white text-center px-4">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-wide">
        La Valensiana
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
        Una experiencia gastronómica única, fusionando tradición e innovación en cada plato.
      </p>
      <button className="mt-8 px-6 py-3 text-lg bg-primary text-black rounded-full hover:bg-secondary transition-all">
        Descubre más
      </button>
    </section>
  );
};

export default HeroModern;
