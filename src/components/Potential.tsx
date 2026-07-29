import React from 'react';

interface PotentialItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

export const Potential: React.FC = () => {
    const potentialData: PotentialItem[] = [
        {
            id: 'pertanian',
            title: 'Pertanian & Agrobisnis',
            description: 'Mayoritas warga Mertelu Wetan bermata pencaharian sebagai petani. Lahan pertanian di sini sangat subur dan menjadi pusat komoditas unggulan seperti melon, padi, semangka, cabai, timun, hingga aneka sayur-sayuran.',
            imageUrl: '/images/sawah.jpeg', // Foto pertanian/sawah subur
            imageAlt: 'Lahan pertanian subur di Mertelu Wetan'
        },
        {
            id: 'lingkungan',
            title: 'Lingkungan Asri & Alami',
            description: 'Memiliki lanskap visual yang luar biasa indah karena dikelilingi oleh beberapa pegunungan. Udara yang sejuk dan pemandangan hijau yang asri menjadi daya tarik alami padukuhan ini.',
            imageUrl: '/images/pemandangan.jpeg', // Foto pemandangan bukit/gunung hijau
            imageAlt: 'Lanskap pegunungan hijau asri'
        },
        {
            id: 'peternakan',
            title: 'Sektor Peternakan',
            description: 'Hampir seluruh warga di padukuhan memiliki hewan ternak sendiri. Sektor ini menjadikan Mertelu Wetan sebagai salah satu daerah potensial penghasil hewan ternak sapi dan kambing berkualitas.',
            imageUrl: '/images/sapi.jpeg', // Foto hewan ternak sapi/kambing yang bersih
            imageAlt: 'Peternakan sapi dan kambing warga'
        }
    ];

    return (
        <section id="potensi" className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-dark tracking-tight">
                        Potensi & Kekayaan Alam
                    </h2>
                    <div className="w-16 h-1 bg-emerald-dark mx-auto mt-4 rounded-full" />
                    <p className="font-sans text-sm text-slate-500 mt-4 max-w-xl mx-auto">
                        Menilik sumber daya alam, pertanian, dan peternakan unggulan yang menjadi penopang kehidupan di Padukuhan Mertelu Wetan.
                    </p>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {potentialData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-dark/20 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Container dengan Efek Hover Zoom */}
                            <div className="w-full h-48 sm:h-52 overflow-hidden bg-slate-100 relative">
                                <img
                                    src={item.imageUrl.startsWith('http') ? item.imageUrl : `${import.meta.env.BASE_URL}${item.imageUrl.startsWith('/') ? item.imageUrl.slice(1) : item.imageUrl}`}
                                    alt={item.imageAlt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    loading="lazy"
                                />
                                {/* Efek gradasi halus di atas foto */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent mix-blend-multiply" />
                            </div>

                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="font-display text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-dark transition-colors duration-200">
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
    );
};

export default Potential;