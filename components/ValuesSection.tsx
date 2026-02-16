import Image from 'next/image';

export default function ValuesSection() {
    const values = [
        {
            title: "Our Vision",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 20l7-14 3 6 2-3 4 11H4z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="6" r="1" fill="currentColor" />
                    <path d="M11 6V3l2.5 1.5L11 6" fill="currentColor" />
                </svg>
            ),
            description: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level."
        },
        {
            title: "Our Mission",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="10" width="4" height="4" rx="1" />
                    <rect x="18" y="10" width="4" height="4" rx="1" />
                    <path d="M6 12h12M9 8v8M15 8v8" strokeLinecap="round" />
                    <path d="M8 12c0-1.5 1-2.5 2-2.5h4c1 0 2 1 2 2.5s-1 2.5-2 2.5h-4c-1 0-2-1-2-2.5z" strokeWidth="1" />
                </svg>
            ),
            description: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
            highlight: true
        },
        {
            title: "Our Value",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 4h12l4 6-10 12L2 10l4-6z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 10h20M6 4l5 6M18 4l-5 6M11 4v18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level."
        }
    ];

    return (
        <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-black min-h-[900px] flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg value.jpg"
                    alt="Values background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Dark/Red Overlay to match screenshot 519 */}
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-[#4A081C]/40 to-black/95 mix-blend-multiply" />
            </div>

            {/* Background Layer: Large Stroke Typography exactly as in screenshot 519 */}
            <div className="absolute inset-x-0 bottom-[10%] flex justify-center opacity-30 pointer-events-none select-none z-10">
                <h2 className="text-[12rem] md:text-[20rem] font-black text-transparent whitespace-nowrap leading-none tracking-tighter"
                    style={{ WebkitTextStroke: '4px rgba(255,255,255,0.1)' }}>
                    PROFESSIONAL FINTESS
                </h2>
            </div>

            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
                {values.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center text-center p-12 md:p-16 py-28 transition-all duration-500
              ${item.highlight
                                ? 'bg-brand-primary text-white scale-110 z-30 shadow-[0_0_80px_rgba(0,0,0,0.6)]'
                                : 'bg-black text-white z-20'
                            }`}
                    >
                        {/* Icon Box - Exactly as in screenshot 519 */}
                        <div className={`w-28 h-28 flex items-center justify-center mb-10 shadow-2xl
                            ${item.highlight ? 'bg-black text-white p-6' : 'bg-brand-primary text-white p-6'}`}>
                            <div className="w-full h-full flex items-center justify-center">
                                {item.icon}
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black mb-10 tracking-tight uppercase">
                            {item.title}
                        </h3>

                        <p className="text-base leading-relaxed opacity-90 max-w-xs font-medium">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
