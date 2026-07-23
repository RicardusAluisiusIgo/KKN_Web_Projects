import React from 'react';

interface StatItem {
  id: string;
  label: string;
  value: string;
  unit: string; // Memisahkan satuan agar tata letak konsisten
}

export const Profile: React.FC = () => {
  const statsData: StatItem[] = [
    {
      id: 'luas-wilayah',
      label: 'LUAS WILAYAH',
      value: '± 104,193',
      unit: 'Hektar',
    },
    {
      id: 'jumlah-penduduk',
      label: 'JUMLAH PENDUDUK',
      value: '307',
      unit: 'Jiwa',
    },
    {
      id: 'kepala-keluarga',
      label: 'KEPALA KELUARGA',
      value: '113',
      unit: 'KK',
    },
    {
      id: 'rukun-tetangga',
      label: 'RUKUN TETANGGA',
      value: '4',
      unit: 'RT',
    },
  ];

  return (
    <section id="profil" className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-dark tracking-tight">
            Profil Padukuhan Mertelu Wetan
          </h2>
          {/* Accent Line */}
          <div className="w-16 h-1 bg-emerald-dark mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Text */}
        <div className="max-w-3xl md:max-w-4xl text-center mb-12 md:mb-16">
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Padukuhan Mertelu Wetan merupakan komunitas perbukitan yang aktif bergotong royong dalam pembangunan infrastruktur dasar dan pemenuhan air bersih. Sinergi erat dengan Kalurahan terjalin lewat program berkala seperti &apos;SAMBEL WELUT&apos; (Sambang Masyarakat Bareng Lurah lan Pamong) untuk mendekatkan pelayanan publik. Semangat swadaya warga tercermin kuat dalam aksi pengecoran jalan blok hingga inisiasi kolaboratif pengadaan fasilitas sumur bor guna mendukung produktivitas pertanian dan kesejahteraan dusun.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:border-emerald-dark/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[140px]"
            >
              {/* Label Atas */}
              <span className="font-sans text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                {item.label}
              </span>

              {/* Container Angka dan Satuan */}
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl sm:text-3xl font-black text-emerald-dark tracking-tight">
                  {item.value}
                </span>
                <span className="font-sans text-sm font-medium text-slate-500 mt-1">
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Data Update Timestamp */}
        <p className="text-xs text-slate-400 italic mt-8 text-center font-sans">
          *Data terakhir diperbarui: Desember 2025
        </p>
      </div>
    </section>
  );
};

export default Profile;