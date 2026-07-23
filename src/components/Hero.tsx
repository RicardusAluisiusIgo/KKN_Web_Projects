import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollToContent = () => {
    const nextSection = document.getElementById('profil');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-emerald-dark font-sans select-none pt-24 md:pt-28">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.JPG"
          alt="Pemandangan Alam Perbukitan Padukuhan Mertelu Wetan"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-10000 ease-out"
        />
        {/* Dark Emerald Gradients for depth and legibility matching Stitch design */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#1A3C34]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1A3C34]/20 to-black/60" />
      </div>

      {/* Hero Central Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          {/* Heading with Montserrat font-display */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight sm:leading-tight tracking-tight drop-shadow-lg">
            Selamat Datang di <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-gray-200">
              Padukuhan Mertelu Wetan
            </span>
          </h1>

          {/* Subtitle with Inter font-sans */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl font-light leading-relaxed tracking-wide drop-shadow">
            Mewujudkan Padukuhan Mandiri yang Berbudaya, Harmoni dengan Alam, dan Sejahtera untuk Semua.
          </p>

          {/* Main CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleScrollToContent}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-dark hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold tracking-[0.2em] border border-white/20 rounded-md shadow-xl hover:shadow-emerald-900/50 hover:border-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer uppercase"
            >
              JELAJAHI DESA
            </button>
          </div>
        </div>
      </main>

      {/* Footer Scroll Indicator */}
      <footer className="relative z-10 pb-8 flex flex-col items-center justify-center">
        <button
          onClick={handleScrollToContent}
          className="group flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            SCROLL TO EXPLORE
          </span>
          <div className="animate-bounce pt-1">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
      </footer>
    </div>
  );
};

export default Hero;
