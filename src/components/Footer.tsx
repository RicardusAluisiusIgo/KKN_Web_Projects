import React from 'react';

export const Footer: React.FC = () => {
  const mapAddressQuery = encodeURIComponent(
    'Mertelu wetan 01, RW.04, Piji, Mertelu, Kec. Gedang Sari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55863'
  );
  const iframeSrc = `https://maps.google.com/maps?q=${mapAddressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="w-full bg-slate-50">
      {/* ================= SEKSI LOKASI & KONTAK RESMI ================= */}
      <section id="lokasi" className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Header Seksi */}
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-dark tracking-tight">
              Lokasi & Kontak Resmi
            </h2>
            {/* Aksen Garis Pendek */}
            <div className="w-16 h-1 bg-emerald-dark mx-auto mt-4 rounded-full" />
            <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Pintu kami selalu terbuka untuk kolaborasi, kunjungan, maupun pertanyaan seputar potensi dusun. Silakan hubungi kontak resmi atau ikuti peta digital di bawah ini untuk menuju ke kediaman Pak Dukuh sebagai titik pusat Padukuhan Mertelu Wetan.
            </p>
          </div>

          {/* Grid Konten Utama (2 Kolom Sejajar Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 items-stretch">
            {/* Kolom Kiri: Peta Google Maps Aktif */}
            <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white relative">
              <iframe
                title="Peta Lokasi Padukuhan Mertelu Wetan"
                src={iframeSrc}
                className="w-full h-full min-h-[320px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Kolom Kanan: Card Kontak Pak Dukuh */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs">
              <div>
                {/* Info Profil Pak Dukuh */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-dark text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                      Pak Saekan
                    </h3>
                    <p className="font-sans text-xs font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                      DUKUH MERTELU WETAN
                    </p>
                  </div>
                </div>

                {/* Baris Nomor Telepon */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center gap-3 text-slate-700 text-sm sm:text-base font-bold font-sans mt-6 shadow-2xs">
                  <span className="text-lg">📞</span>
                  <span>081329719055</span>
                </div>
              </div>

              {/* Tombol Hubungi via WhatsApp */}
              <a
                href="https://wa.me/6281329719055"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-dark text-white font-bold text-xs py-3.5 px-4 rounded-xl w-full text-center block mt-6 hover:bg-emerald-dark/90 transition-colors shadow-xs tracking-wider"
              >
                💬 HUBUNGI VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEKSI FOOTER PALING BAWAH (FULL WIDTH GREEN) ================= */}
      <div className="w-full bg-[#1A3C34] py-8 px-4 sm:px-6 lg:px-8 text-white text-xs font-sans border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sisi Kiri: Teks Padukuhan & Navigasi Mini */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
              Padukuhan Mertelu Wetan, Gunung Kidul
            </h4>
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
              <a href="#profil" className="hover:text-white transition-colors">
                PROFIL
              </a>
              <a href="#statistik" className="hover:text-white transition-colors">
                STATISTIK
              </a>
              <a href="#potensi" className="hover:text-white transition-colors">
                POTENSI
              </a>
              <a href="#umkm" className="hover:text-white transition-colors">
                UMKM
              </a>
              <a href="#kegiatan" className="hover:text-white transition-colors">
                KEGIATAN
              </a>
            </nav>
          </div>

          {/* Sisi Kanan: Hak Cipta & Atribusi Developer */}
          <div className="text-center md:text-right text-slate-300 text-[11px] leading-relaxed">
            <p>© 2026 Padukuhan Mertelu Wetan.</p>
            <p className="mt-0.5 text-slate-400">
              Developed by KKN 89 Universitas Atma Jaya Yogyakarta (Ricardus A. Igo).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
