import Image from 'next/image';

export default function FounderSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative overflow-hidden">
            {/* Background Watermark - Placed and rotated exactly as in screenshot */}
            <div className="absolute top-[-10%] right-[-5%] opacity-[0.03] pointer-events-none transform rotate-[-25deg] select-none z-0">
                <svg className="w-[800px] h-[800px] text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 10h-2V7a1 1 0 00-1-1h-2V4a1 1 0 00-1-1H8a1 1 0 00-1 1v2H5a1 1 0 00-1 1v3H2a1 1 0 00-1 1v4a1 1 0 001 1h2v3a1 1 0 001 1h2v2a1 1 0 001 1h8a1 1 0 001-1v-2h2a1 1 0 001-1v-3h2a1 1 0 001-1v-4a1 1 0 00-1-1z" />
                </svg>
            </div>

            {/* Image Side */}
            <div className="relative z-10 lg:pl-4">
                <div className="relative w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm shadow-lg border border-neutral-100">
                    <Image
                        src="/image 64.png"
                        alt="Mr. Raja Prabin"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlapping Name Tag - Precisely positioned relative to the image bottom */}
                <div className="absolute bottom-10 right-[-10%] md:right-[-15%] bg-brand-primary p-10 md:p-14 min-w-[340px] md:min-w-[420px] shadow-xl z-20">
                    <h3 className="text-white text-3xl md:text-5xl font-black mb-3 tracking-tight">Mr. Raja Prabin</h3>
                    <p className="text-white/90 text-sm font-bold uppercase tracking-[0.2em]">Founder Of 3rd Gen</p>
                </div>
            </div>

            {/* Content Side */}
            <div className="relative z-10 pt-4 flex flex-col gap-10 lg:pl-12">
                <div className="flex items-center gap-4">
                    <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Leadership That Inspires</span>
                    <div className="w-16 h-[2px] bg-brand-primary" />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter">
                        Meet The <span className="text-brand-primary">Founder</span>
                    </h2>
                </div>

                <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                    With a deep commitment to health and discipline, the founder established this gym to deliver professional training, modern facilities, and a positive fitness culture. Every decision is guided by the goal of helping members achieve lasting results.
                </p>
            </div>
        </section>
    );
}
