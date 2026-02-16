import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl border-4 border-white">
                    <Image
                        src="/Rectangle 2.png"
                        alt="Fitness Trainers"
                        width={800}
                        height={800}
                        className="w-full object-cover aspect-square"
                        priority
                    />
                </div>

                {/* Experience Badge - Rounded horizontal style with white border as per screenshot */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 bg-linear-to-b from-brand-primary to-brand-dark p-6 rounded-3xl text-white shadow-2xl flex items-center gap-6 min-w-[340px] border-4 border-white">
                    <span className="text-6xl font-black leading-none drop-shadow-lg">09+</span>
                    <div className="text-sm font-bold leading-tight uppercase tracking-tight">
                        Years Of Fitness<br />
                        <span className="text-xl">Experience</span>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="text-brand-dark flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-[2px] bg-brand-primary" />
                    <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">About 3rd Gen</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-black">
                    Always Provide Best<br />
                    <span className="text-brand-primary">Fitness Trainers.</span>
                </h2>

                <p className="text-neutral-500 text-sm leading-relaxed max-w-xl font-medium mb-4">
                    With over 9 years of experience, 3rd Gen Fitness delivers expert training designed to transform your strength, endurance, and confidence. Our certified trainers combine modern techniques with personalized programs to help you achieve real, lasting results in a motivating environment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                        'Modern Facilities',
                        'Expert Team',
                        'Diverse Offering',
                        'Fitness Focus'
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-linear-to-r from-[#FFE5ED] to-white p-4 rounded-xl shadow-sm border border-pink-100">
                            <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm font-black text-brand-dark uppercase tracking-tight">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
