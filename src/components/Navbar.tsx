import React, { useState, useEffect } from 'react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'PROFIL', href: '#profil' },
  { name: 'STATISTIK', href: '#statistik' },
  { name: 'POTENSI', href: '#potensi' },
  { name: 'KEGIATAN', href: '#kegiatan' },
  { name: 'UMKM', href: '#umkm' },
  { name: 'LOKASI', href: '#lokasi' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nama Padukuhan (Kiri) */}
          <a
            href="#"
            className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors duration-200 ${
              isScrolled ? 'text-emerald-dark' : 'text-white'
            }`}
          >
            Padukuhan Mertelu Wetan
          </a>

          {/* Navigasi Desktop (Tengah) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs font-bold tracking-widest transition-colors duration-200 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-emerald-dark'
                    : 'text-white/90 hover:text-emerald-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Tombol Aksi Hubungi Kami (Kanan) */}
          <div className="hidden lg:block">
            <a
              href="#lokasi"
              className={`inline-block font-sans text-xs font-bold rounded-xl py-2 px-4 transition-all duration-200 ${
                isScrolled
                  ? 'bg-emerald-dark text-white hover:bg-emerald-dark/90 shadow-xs'
                  : 'border border-white/80 text-white hover:bg-white hover:text-emerald-dark'
              }`}
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-3 rounded-2xl p-4 shadow-xl border transition-all duration-300 ${
              isScrolled
                ? 'bg-white border-slate-100 text-slate-800'
                : 'bg-emerald-dark/95 backdrop-blur-md border-emerald-800/50 text-white'
            }`}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-xs font-bold tracking-wider py-1.5 px-3 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-slate-50 hover:text-emerald-dark'
                      : 'hover:bg-white/10 hover:text-emerald-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200/20">
                <a
                  href="#lokasi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center font-sans text-xs font-bold rounded-xl py-2.5 px-4 bg-emerald-dark text-white hover:bg-emerald-dark/90 transition-colors shadow-xs"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
