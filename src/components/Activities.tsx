import React from 'react';

interface ActivityItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

interface GroupProkerItem {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    imageAlt: string;
    isVideoCard?: boolean;
}

interface IndividualProkerItem {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
    imageAlt: string;
}

// Data Seksi 1: Kegiatan & Agenda Padukuhan
const activitiesData: ActivityItem[] = [
    {
        id: 'pertemuan-rt',
        title: 'Pertemuan RT',
        description: 'Rapat rutin bulanan warga untuk koordinasi pembangunan dan kerukunan lingkungan.',
        imageUrl: '/images/pertemuan-rt.jpeg',
        imageAlt: 'Pertemuan RT',
    },
    {
        id: 'lembaga-dusun',
        title: 'Pertemuan Lembaga Dusun',
        description: 'Forum diskusi perangkat padukuhan dengan kalurahan dalam merancang program lokal.',
        imageUrl: '/images/kalurahan.jpeg',
        imageAlt: 'Pertemuan Lembaga Dusun',
    },
    {
        id: 'tradisi-tarup',
        title: 'Tradisi Tarup',
        description: 'Kegiatan gotong royong mendirikan tenda hajatan sebagai simbol kebersamaan.',
        imageUrl: '/images/tarup.png',
        imageAlt: 'Tradisi Tarup',
    },
    {
        id: 'tradisi-terbang',
        title: 'Tradisi Terbang',
        description: 'Seni musik religi tradisional yang dilestarikan secara turun-temurun oleh warga.',
        imageUrl: '/images/terbang.png',
        imageAlt: 'Tradisi Terbang',
    },
];

// Data Seksi 2 Bagian A: Program Kerja Kelompok
const groupProkerData: GroupProkerItem[] = [
    {
        id: 'reflektor-jalan',
        title: 'Pemasangan Reflektor Jalan',
        description: 'Peningkatan keamanan jalan desa melalui pemasangan marka reflektor.',
        imageUrl: '/images/reflektor.jpeg',
        imageAlt: 'Pemasangan Reflektor Jalan',
    },
    {
        id: 'cairan-ecoenzym',
        title: 'Pembuatan Cairan Ecoenzym',
        description: 'Pamanfaatan limbah organik rumah tangga menjadi cairan pembersih alami.',
        imageUrl: '/images/ecoezim.jpeg',
        imageAlt: 'Pembuatan Cairan Ecoenzym',
    },
    {
        id: 'medsos-marketplace',
        title: 'Pelatihan Medsos & Marketplace',
        description: 'Digitalisasi pemasaran produk UMKM PnD Custom Box.',
        imageUrl: '/images/kewir.png',
        imageAlt: 'Pelatihan Medsos & Marketplace',
    },
    {
        id: 'bahasa-inggris-paud',
        title: 'Pendidikan Bahasa Inggris untuk PAUD',
        description: 'Pengenalan dasar bahasa Inggris yang menyenangkan bagi anak usia dini.',
        imageUrl: '/images/inggris-paud.jpeg',
        imageAlt: 'Pendidikan Bahasa Inggris untuk PAUD',
    },
    {
        id: 'dokumentasi-tarup',
        title: 'Dokumentasi Tradisi Tarup',
        imageUrl: '/images/dokum.png',
        imageAlt: 'Dokumentasi Tradisi Tarup',
        isVideoCard: true,
    },
    {
        id: 'posyandu-tbc',
        title: 'Pendampingan Posyandu & Sosialisasi TBC',
        description: 'Mendukung kesehatan ibu dan anak serta pencegahan penyakit menular.',
        imageUrl: '/images/posyandu.jpeg',
        imageAlt: 'Pendampingan Posyandu & Sosialisasi TBC',
    },
];

// Data Seksi 2 Bagian B: Program Kerja Keilmuan Individu
const individualProkerData: IndividualProkerItem[] = [
    {
        id: 'sabun-jelantah',
        title: 'Sabun Cuci Piring Jelantah',
        author: 'Ignatius Aryo D. – Teknik Industri',
        imageUrl: '/images/minyak-jelantah.jpeg',
        imageAlt: 'Sabun Cuci Piring Jelantah',
    },
    {
        id: 'arang-sekam',
        title: 'Arang Sekam Padi',
        author: 'Ega Juan M.S. – Teknik Industri',
        imageUrl: '/images/sekam-padi.jpeg',
        imageAlt: 'Arang Sekam Padi',
    },
    {
        id: 'totebag-ecoprint',
        title: 'Totebag Ecoprint',
        author: 'Louisa Gabriella A. – Teknik Industri',
        imageUrl: '/images/ecorprint.jpeg',
        imageAlt: 'Totebag Ecoprint',
    },
    {
        id: 'ai-edukasi-paud',
        title: 'AI untuk Edukasi PAUD',
        author: 'Ivan Ong – Sistem Informasi',
        imageUrl: '/images/ai-paud.jpeg',
        imageAlt: 'AI untuk Edukasi PAUD',
    },
    {
        id: 'digitalisasi-visualisasi',
        title: 'Digitalisasi & Visualisasi Data',
        author: 'Joycelyn – Informatika',
        imageUrl: '/images/visualisasi_data.png',
        imageAlt: 'Digitalisasi & Visualisasi Data',
    },
    {
        id: 'website-profil',
        title: 'Website Profil Padukuhan',
        author: 'Ricardus Aluisius Igo – Informatika',
        imageUrl: '/images/web_saya.png',
        imageAlt: 'Website Profil Padukuhan',
    },
    {
        id: 'katalog-pnd',
        title: 'Katalog Digital PnD Custom Box',
        author: 'Hannella Christa S. – Ilmu Komunikasi',
        imageUrl: '/images/katalog.jpeg',
        imageAlt: 'Katalog Digital PnD Custom Box',
    },
    {
        id: 'pembukuan-akuntansi',
        title: 'Pembukuan Akuntansi UMKM',
        author: 'Michael Davidson N. – Akuntansi',
        imageUrl: '/images/pembukuan.jpeg',
        imageAlt: 'Pembukuan Akuntansi UMKM',
    },
    {
        id: 'peta-tata-letak',
        title: 'Peta Tata Letak Ternak & UMKM',
        author: 'Lintang Chelsea W. – Arsitektur',
        imageUrl: '/images/peta.png',
        imageAlt: 'Peta Tata Letak Ternak & UMKM',
    },
];

export default function Activities() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const currentProker = individualProkerData[activeIndex];

    return (
        <div className="w-full">
            {/* ================= SEKSI 1: KEGIATAN & AGENDA PADUKUHAN ================= */}
            <section id="kegiatan" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Seksi */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-dark tracking-tight">
                            Kegiatan & Agenda Padukuhan
                        </h2>
                        {/* Aksen Garis Hijau */}
                        <div className="w-16 h-1 bg-emerald-dark mx-auto mt-4 rounded-full" />
                        <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto">
                            Dokumentasi agenda rutin masyarakat dan kolaborasi program kerja pengabdian mahasiswa.
                        </p>
                    </div>

                    {/* Grid Agenda (4 Kartu) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {activitiesData.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-dark/30 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Gambar Lanskap Estetik */}
                                <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={item.imageUrl.startsWith('http') ? item.imageUrl : `${import.meta.env.BASE_URL}${item.imageUrl.startsWith('/') ? item.imageUrl.slice(1) : item.imageUrl}`}
                                        alt={item.imageAlt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                                </div>

                                {/* Konten Kartu */}
                                <div className="p-6 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-dark transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SEKSI 2: KOLABORASI PROGRAM KERJA KKN 89 UAJY ================= */}
            <section id="kolaborasi-kkn" className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
                <div className="max-w-7xl mx-auto">
                    {/* Header Sub-Seksi */}
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-dark tracking-tight">
                            Kolaborasi Program Kerja KKN UAJY
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
                            Sinergi mahasiswa dan warga dalam pembangunan desa berkelanjutan melalui 15 program kerja strategis.
                        </p>
                    </div>

                    {/* ----- BAGIAN A: PROGRAM KERJA KELOMPOK (KELOMPOK 31 KKN 89 UAJY) ----- */}
                    <div className="flex items-center justify-center my-8 md:my-10 max-w-4xl mx-auto">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="px-4 font-sans text-xs font-semibold tracking-wider text-slate-400 uppercase text-center">
                            PROGRAM KERJA KELOMPOK (KELOMPOK 31 KKN 89 UAJY)
                        </span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Grid Proker Kelompok (6 Kartu - 3 Kolom Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {groupProkerData.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-dark/30 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Gambar Kartu */}
                                <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={item.imageUrl.startsWith('http') ? item.imageUrl : `${import.meta.env.BASE_URL}${item.imageUrl.startsWith('/') ? item.imageUrl.slice(1) : item.imageUrl}`}
                                        alt={item.imageAlt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                                </div>

                                {/* Konten Teks Kartu */}
                                <div className="p-6 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="font-display text-base font-bold text-slate-800 mb-2 group-hover:text-emerald-dark transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        {item.isVideoCard ? (
                                            <a
                                                href="https://youtu.be/-XmS0f3HEhI"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 text-white bg-emerald-dark rounded-xl py-2 px-4 text-xs font-bold w-full text-center mt-3 hover:bg-emerald-dark/90 transition-colors duration-200 shadow-xs"
                                            >
                                                <span>▶</span> TONTON DI YOUTUBE
                                            </a>
                                        ) : (
                                            <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ----- BAGIAN B: PROGRAM KERJA KEILMUAN INDIVIDU ----- */}
                    <div className="flex items-center justify-center my-12 max-w-4xl mx-auto">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="px-4 font-sans text-xs font-semibold tracking-wider text-slate-400 uppercase text-center">
                            PROGRAM KERJA KEILMUAN INDIVIDU
                        </span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Area Slider/Carousel 3D Coverflow */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden my-4">
                        {individualProkerData.map((item, index) => {
                            const total = individualProkerData.length;
                            let offset = index - activeIndex;

                            if (offset > total / 2) offset -= total;
                            if (offset < -total / 2) offset += total;

                            let positionClasses = "opacity-0 pointer-events-none hidden";

                            if (offset === 0) {
                                positionClasses = "scale-100 opacity-100 z-30 shadow-2xl border-2 border-white/80 translate-x-0 pointer-events-auto";
                            } else if (offset === -1) {
                                positionClasses = "scale-75 sm:scale-80 opacity-40 sm:opacity-50 z-20 shadow-lg -translate-x-[55%] sm:-translate-x-[65%] md:-translate-x-[75%] pointer-events-auto";
                            } else if (offset === 1) {
                                positionClasses = "scale-75 sm:scale-80 opacity-40 sm:opacity-50 z-20 shadow-lg translate-x-[55%] sm:translate-x-[65%] md:translate-x-[75%] pointer-events-auto";
                            }

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`absolute w-64 sm:w-80 md:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer select-none bg-slate-200 ${positionClasses}`}
                                >
                                    <img
                                        src={item.imageUrl.startsWith('http') ? item.imageUrl : `${import.meta.env.BASE_URL}${item.imageUrl.startsWith('/') ? item.imageUrl.slice(1) : item.imageUrl}`}
                                        alt={item.imageAlt}
                                        className="w-full h-full object-cover rounded-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Informasi Teks Dinamis di Bawah Slider */}
                    {currentProker && (
                        <div className="text-center mt-6 min-h-[72px] flex flex-col items-center justify-center px-4 transition-all duration-300">
                            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight italic">
                                {currentProker.title}
                            </h3>
                            <p className="font-sans text-sm sm:text-base text-slate-500 mt-1 font-medium">
                                {currentProker.author}
                            </p>
                        </div>
                    )}

                    {/* Navigasi Kontrol (Oval Arrows & Counter) */}
                    <div className="flex items-center justify-center mt-6">
                        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xs shadow-xs text-xs sm:text-sm font-sans text-slate-600">
                            <button
                                onClick={() => setActiveIndex((prev) => (prev - 1 + individualProkerData.length) % individualProkerData.length)}
                                className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                                aria-label="Previous Proker"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <span className="font-medium tracking-wide text-slate-500 min-w-[50px] text-center select-none">
                                {activeIndex + 1} / {individualProkerData.length}
                            </span>

                            <button
                                onClick={() => setActiveIndex((prev) => (prev + 1) % individualProkerData.length)}
                                className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                                aria-label="Next Proker"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

