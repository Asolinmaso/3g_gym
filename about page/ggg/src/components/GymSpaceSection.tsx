import Image from 'next/image';

export default function GymSpaceSection() {
    return (
        <section className="bg-white py-32 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden font-outfit">
            {/* Left Content Side */}
            <div className="flex flex-col gap-10 relative z-10">
                <div className="flex items-center gap-6">
                    <span className="text-brand-primary font-black tracking-[0.2em] text-sm md:text-lg uppercase">INFRASTRUCTURE</span>
                    <div className="w-24 h-[3.5px] bg-brand-primary" />
                </div>

                <h2 className="text-6xl md:text-[9rem] font-black text-black leading-[0.82] tracking-[-0.05em] select-none">
                    <span className="text-brand-primary">Explore</span> Our<br />
                    Gym Space
                </h2>

                <p className="text-neutral-400 text-xl md:text-2xl leading-relaxed max-w-xl font-medium">
                    From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
                </p>

                <div className="flex gap-6 mt-6">
                    {/* Facebook Icon */}
                    <a href="#" className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-md group">
                        <span className="font-black text-2xl group-hover:scale-110 transition-transform">f</span>
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="#" className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-md group">
                        <span className="font-black text-2xl group-hover:scale-110 transition-transform">in</span>
                    </a>
                    {/* Instagram Icon */}
                    <a href="#" className="w-16 h-16 rounded-full border-2 border-brand-primary bg-white text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-md group">
                        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31s1.248 2.242 1.31 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608s-2.242 1.248-3.608 1.31c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31s-1.248-2.242-1.31-3.608c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608s2.242-1.248 3.608-1.31c1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.153.262-2.918.56a4.918 4.918 0 00-1.77 1.152 4.918 4.918 0 00-1.152 1.77c-.298.765-.502 1.638-.56 2.918-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.262 2.153.56 2.918a4.918 4.918 0 001.152 1.77 4.918 4.918 0 001.77 1.152c.765.298 1.638.502 2.918.56 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.153-.262 2.918-.56a4.918 4.918 0 001.77-1.152 4.918 4.918 0 001.152-1.77c.298-.765.502-1.638.56-2.918.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.262-2.153-.56-2.918a4.918 4.918 0 00-1.152-1.77 4.918 4.918 0 00-1.77-1.152c-.765-.298-1.638-.502-2.918-.56-1.28-.058-1.688-.072-4.947-.072z" />
                            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right Image Side */}
            <div className="relative h-[650px] lg:h-[800px] z-0">
                {/* Main Parallelogram Mask - slanting towards right (top-right further left than bottom-right) */}
                <div className="absolute inset-0 shadow-2xl overflow-hidden"
                    style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}>
                    <Image
                        src="/Vector 5.png"
                        alt="Gym Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Vertical Infrastructure Tag - Slanted Badge perfectly fit to the right leaning edge */}
                <div className="absolute right-[-4%] bottom-[15%] bg-brand-primary w-24 md:w-36 py-20 flex items-center justify-center shadow-2xl z-20"
                    style={{
                        transform: 'skewX(-11.3deg)',
                        boxShadow: '-15px 15px 40px rgba(0,0,0,0.4)'
                    }}>
                    <span className="text-white font-black text-2xl md:text-[2.2rem] tracking-[0.4em] uppercase transform -rotate-90 whitespace-nowrap">
                        INFRASTRUCTURE
                    </span>
                </div>
            </div>
        </section>
    );
}
