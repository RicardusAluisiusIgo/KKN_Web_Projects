import React from 'react';

export const Statistics: React.FC = () => {
  // Data Jenis Kelamin
  const genderData = [
    { rt: 'RT 01', l: 33, p: 44, total: 77 },
    { rt: 'RT 02', l: 44, p: 45, total: 89 },
    { rt: 'RT 03', l: 25, p: 32, total: 57 },
    { rt: 'RT 04', l: 41, p: 43, total: 84 },
  ];

  // Data Rentang Usia (Dipecah agar muat dalam grid kompak)
  const ageData = [
    { range: '0-9 Thn', count: 1 },
    { range: '10-19 Thn', count: 40 },
    { range: '20-29 Thn', count: 49 },
    { range: '30-39 Thn', count: 46 },
    { range: '40-49 Thn', count: 50 },
    { range: '50-59 Thn', count: 48 },
    { range: '60-69 Thn', count: 32 },
    { range: '70-79 Thn', count: 29 },
    { range: '80-89 Thn', count: 11 },
    { range: '90-99 Thn', count: 1 },
  ];

  const maxAgeCount = 50; // Nilai tertinggi untuk kalkulasi lebar bar usia

  return (
    <section id="statistik" className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-dark tracking-tight">
            Demografi & Statistik Padukuhan
          </h2>
          <p className="text-xs text-slate-500 font-sans mt-1">
            Data Tingkat RT Terupdate • Desember 2025
          </p>
          <div className="w-12 h-1 bg-emerald-dark mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Quadrants Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

          {/* Kuadran 1: Distribusi Jenis Kelamin */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800 text-center mb-4 font-display">
                Distribusi Jenis Kelamin per RT
              </h3>
              <div className="space-y-3">
                {genderData.map((data) => {
                  const pctL = (data.l / data.total) * 100;
                  const pctP = (data.p / data.total) * 100;
                  return (
                    <div key={data.rt} className="flex items-center gap-3 text-xs">
                      <span className="w-10 font-semibold text-slate-500 font-sans">{data.rt}</span>
                      <div className="flex-1 h-5 rounded-md overflow-hidden flex bg-slate-100">
                        <div
                          style={{ width: `${pctL}%` }}
                          className="bg-emerald-dark flex items-center justify-center text-[10px] font-bold text-white transition-all"
                        >
                          {data.l}
                        </div>
                        <div
                          style={{ width: `${pctP}%` }}
                          className="bg-emerald-800/40 flex items-center justify-center text-[10px] font-bold text-emerald-900 transition-all"
                        >
                          {data.p}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Legenda */}
            <div className="flex justify-center gap-4 mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium font-sans">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-emerald-dark" />
                <span className="text-slate-600">Laki-Laki</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-emerald-800/40" />
                <span className="text-slate-600">Perempuan</span>
              </div>
            </div>
          </div>

          {/* Kuadran 2: Distribusi Kepala Keluarga (KK) - PERUBAHAN GARIS NYATA */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-800 text-center mb-4 font-display">
              Distribusi Kepala Keluarga (KK)
            </h3>
            <div className="grid grid-cols-2 gap-3 my-auto">
              {[
                { label: 'RT 01', value: '28' },
                { label: 'RT 02', value: '38' },
                { label: 'RT 03', value: '17' },
                { label: 'RT 04', value: '30' },
              ].map((kk, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center shadow-xs hover:border-emerald-dark/20 transition-all duration-200"
                >
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-sans">
                    {kk.label}
                  </span>
                  <p className="font-display text-xl font-black text-emerald-dark mt-0.5">
                    {kk.value} <span className="text-xs font-medium text-slate-500 font-sans">KK</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500 tracking-wide font-sans">TOTAL: 113 KK</span>
            </div>
          </div>

          {/* Kuadran 3: Distribusi Agama (Pie / Donut Chart) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-800 text-center mb-3 font-display">
              Distribusi Keagamaan
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-auto py-2">
              <div className="relative w-24 h-24 rounded-full bg-emerald-dark flex items-center justify-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <span className="font-display text-base font-black text-emerald-dark">100%</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-dark" />
                  <span className="text-xs font-bold text-slate-700 font-sans">Islam (307 Jiwa)</span>
                </div>
                <p className="text-[11px] text-slate-500 max-w-[200px] leading-relaxed font-sans">
                  Seluruh warga Padukuhan Mertelu Wetan menganut agama Islam dan hidup rukun dalam harmoni keagamaan.
                </p>
              </div>
            </div>
            <div className="h-4" />
          </div>

          {/* Kuadran 4: Distribusi Rentang Usia */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-800 text-center mb-4 font-display">
              Distribusi Rentang Usia Penduduk
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 my-auto">
              {ageData.map((data, idx) => {
                const barWidth = (data.count / maxAgeCount) * 100;
                return (
                  <div key={idx} className="flex flex-col gap-0.5">
                    <div className="flex justify-between text-[10px] font-medium text-slate-600 font-sans">
                      <span>{data.range}</span>
                      <span className="font-bold text-slate-700">{data.count} org</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${Math.max(barWidth, 2)}%` }}
                        className="h-full bg-emerald-dark rounded-full transition-all"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Statistics;