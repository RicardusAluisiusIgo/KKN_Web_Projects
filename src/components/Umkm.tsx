import React, { useState } from 'react';

interface UmkmItem {
    id: string;
    badgeText: string;
    badgeType: 'special' | 'region';
    title: string;
    description?: string;
    contactPhone?: string;
    contactSocial?: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    buttonType: 'primary' | 'outline';
    buttonUrl?: string;
}

const umkmData: UmkmItem[] = [
    {
        id: 'pnd-custom-box',
        badgeText: 'KERAJINAN KAYU',
        badgeType: 'special',
        title: 'PnD Custom Box',
        description:
            'Usaha kerajinan kayu milik Mas Fendy yang menyediakan berbagai macam pembuatan kerajinan kayu berkualitas, khususnya Speaker Box berbagai ukuran.',
        contactPhone: '082134825960',
        contactSocial: '@PnDCustomBox',
        imageUrl:
            '/images/tempat-pnd.png',
        imageAlt: 'PnD Custom Box Kerajinan Kayu',
        buttonText: 'HUBUNGI PENGRAJIN',
        buttonType: 'primary',
        buttonUrl: 'https://wa.me/6282134825960',
    },
    {
        id: 'toko-kelontong-1',
        badgeText: 'WILAYAH: RT 05',
        badgeType: 'region',
        title: 'Toko Kelontong 1',
        description:
            'Menyediakan berbagai macam kebutuhan pokok sehari-hari, sembako mentah, kebutuhan dapur, hingga aneka jajanan konsumsi warga di wilayah RT 05.',
        imageUrl:
            '/images/kelontong1.jpeg',
        imageAlt: 'Toko Kelontong 1',
        buttonText: '📍 BUKA GOOGLE MAPS',
        buttonType: 'outline',
        buttonUrl: 'https://maps.app.goo.gl/nCKNGNLTFJ9asAGa6',
    },
    {
        id: 'toko-kelontong-2',
        badgeText: 'WILAYAH: RT 02',
        badgeType: 'region',
        title: 'Toko Kelontong 2',
        description:
            'Warung belanja harian keluarga yang melayani pemenuhan kebutuhan sembako harian, pulsa/token listrik, serta perlengkapan rumah tangga umum di RT 02.',
        imageUrl:
            '/images/kelontong2.png',
        imageAlt: 'Toko Kelontong 2',
        buttonText: '📍 BUKA GOOGLE MAPS',
        buttonType: 'outline',
        buttonUrl: 'https://maps.app.goo.gl/nCKNGNLTFJ9asAGa6',
    },
    {
        id: 'toko-kelontong-3',
        badgeText: 'WILAYAH: RT 04',
        badgeType: 'region',
        title: 'Toko Kelontong 3',
        description:
            'Pusat belanja kebutuhan pokok lokal yang lengkap dan strategis, menyediakan bahan pangan berkualitas serta perlengkapan harian warga RT 04.',
        imageUrl:
            '/images/kelontong3.png',
        imageAlt: 'Toko Kelontong 3',
        buttonText: 'HUBUNGI PAK GUNAWAN (OWNER)',
        buttonType: 'primary',
        buttonUrl: 'https://wa.me/6282137174250',
    },
    {
        id: 'bengkel-motor',
        badgeText: 'WILAYAH: RT 05',
        badgeType: 'region',
        title: 'Bengkel Motor',
        description:
            'Melayani jasa perawatan berkala sepeda motor, ganti oli, tambal ban, tune-up, serta penyediaan suku cadang (sparepart) harian untuk kendaraan warga.',
        imageUrl:
            '/images/bengkel.png',
        imageAlt: 'Bengkel Motor',
        buttonText: '📍 BUKA GOOGLE MAPS',
        buttonType: 'outline',
        buttonUrl: 'https://maps.app.goo.gl/S8q6TBEpb75zw7G36',
    },
];

export const Umkm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="umkm" className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Header Seksi Utama (Lebih Ringkas) */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-dark tracking-tight">
                        UMKM & Pengrajin Lokal
                    </h2>
                    {/* Aksen Garis Pendek */}
                    <div className="w-12 h-1 bg-emerald-dark mx-auto mt-3 rounded-full" />
                    <p className="font-sans text-xs sm:text-sm text-slate-500 mt-3 max-w-xl mx-auto">
                        Mendukung usaha kreatif dan komoditas lokal warga Padukuhan Mertelu Wetan.
                    </p>
                </div>

                {/* Grid Kartu UMKM (3 Kolom Desktop, Lebih Compact) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {umkmData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-dark/30 transition-all duration-300 flex flex-col justify-between h-full min-h-[360px]"
                        >
                            <div className="flex flex-col flex-1 justify-between">
                                {/* Foto Kartu (Diperkecil) */}
                                <div className="w-full h-32 overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={item.imageUrl.startsWith('http') ? item.imageUrl : `${import.meta.env.BASE_URL}${item.imageUrl.startsWith('/') ? item.imageUrl.slice(1) : item.imageUrl}`}
                                        alt={item.imageAlt}
                                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                                </div>

                                {/* Konten Kartu (Padding Dikurangi) */}
                                <div className="p-4 flex flex-col justify-between flex-1">
                                    <div>
                                        {/* Badge (Diperkecil) */}
                                        {item.badgeType === 'special' ? (
                                            <span className="bg-emerald-dark text-white text-[9px] font-bold px-2 py-0.5 rounded-md inline-block mb-2 tracking-wider font-sans">
                                                {item.badgeText}
                                            </span>
                                        ) : (
                                            <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded-md inline-block mb-2 tracking-wider font-sans">
                                                {item.badgeText}
                                            </span>
                                        )}

                                        {/* Judul (Diperkecil) */}
                                        <h3 className="font-display text-base font-bold text-slate-800 mb-1.5 group-hover:text-emerald-dark transition-colors duration-200">
                                            {item.title}
                                        </h3>

                                        {/* Deskripsi (Diperkecil & Dibatasi Baris) */}
                                        {item.description && (
                                            <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal mb-2.5 line-clamp-3">
                                                {item.description}
                                            </p>
                                        )}

                                        {/* Info Kontak (Diperkecil) */}
                                        {(item.contactPhone || item.contactSocial) && (
                                            <div className="text-slate-600 text-[10px] mt-2 space-y-0.5 font-sans">
                                                {item.contactPhone && (
                                                    <p className="flex items-center gap-1">
                                                        <span>📞</span>
                                                        <span>{item.contactPhone}</span>
                                                    </p>
                                                )}
                                                {item.contactSocial && (
                                                    <p className="flex items-center gap-1">
                                                        <span>💬</span>
                                                        <span>{item.contactSocial}</span>
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Tombol Bawah Kartu (Diperkecil Padding) */}
                            <div className="p-4 pt-0">
                                {item.buttonType === 'primary' ? (
                                    <a
                                        href={item.buttonUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-emerald-dark text-white rounded-xl py-2 text-xs font-bold text-center mt-3 block w-full hover:bg-emerald-dark/90 transition-colors shadow-xs"
                                    >
                                        {item.buttonText}
                                    </a>
                                ) : (
                                    <a
                                        href={item.buttonUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl py-1.5 w-full text-center text-xs font-semibold block mt-3 transition-colors"
                                    >
                                        {item.buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= SUB-SEKSI: PETA DIGITAL TATA LETAK TERNAK & UMKM (Pas di scroll) ================= */}
                <div className="max-w-4xl mx-auto mt-16 md:mt-20 w-full border-t border-slate-100 pt-16">
                    {/* Header Peta */}
                    <div className="text-center mb-8">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-emerald-dark tracking-tight">
                            Peta Digital Tata Letak Ternak & UMKM
                        </h3>
                        <p className="font-sans text-xs text-slate-500 mt-2 max-w-xl mx-auto">
                            Dokumentasi visual pemetaan tata letak peternakan warga dan rumah produksi UMKM dalam bentuk peta digital resolusi tinggi.
                        </p>
                    </div>

                    {/* Area Gambar Peta (Menggunakan file asli Anda) */}
                    <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl p-3 sm:p-4 shadow-xs overflow-hidden">
                        <div className="w-full rounded-xl bg-white border border-slate-100 shadow-inner flex items-center justify-center overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}images/peta-fix.jpeg`}
                                alt="Peta Persebaran UMKM dan Ternak Padukuhan Mertelu Wetan"
                                className="w-full h-auto max-h-[480px] object-contain block select-none"
                            />
                        </div>
                    </div>

                    {/* Tombol Perbesar Gambar Peta (Sama seperti sebelumnya) */}
                    <div className="text-center mt-6 md:mt-8">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 text-white bg-emerald-dark hover:bg-emerald-dark/90 active:scale-98 transition-all rounded-xl py-2.5 px-5 text-xs font-bold shadow-xs cursor-pointer no-underline"
                        >
                            🔍 PERBESAR GAMBAR PETA
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Preview Peta (Saat tombol Perbesar diklik, menampilkan file asli resolusi tinggi) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-4 max-w-5xl w-full relative shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
                            <h4 className="font-display font-bold text-emerald-dark text-base sm:text-lg">
                                Peta Digital Tata Letak Ternak & UMKM - Resolusi Tinggi
                            </h4>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-slate-700 text-xl font-bold px-2 py-1 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl overflow-auto min-h-[400px] max-h-[80vh] relative flex items-center justify-center p-2 border border-slate-200">
                            <img
                                src={`${import.meta.env.BASE_URL}images/peta-fix.jpeg`}
                                alt="Peta Persebaran UMKM dan Ternak Padukuhan Mertelu Wetan - Resolusi Tinggi"
                                className="w-full h-auto object-contain block select-none"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Umkm;