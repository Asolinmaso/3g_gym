import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Background Layer: Blurred Gym */}
            <div className="absolute inset-0 opacity-40 blur-sm">
                <Image
                    src="/Rectangle 2.png"
                    alt="Gym background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Middle Layer: Large Stroke Typography */}
            <div className="relative z-10 w-full flex justify-center pointer-events-none">
                <h1 className="text-[12rem] md:text-[24rem] font-black text-transparent stroke-white stroke-2 select-none tracking-tighter opacity-80"
                    style={{ WebkitTextStroke: '2px rgba(255,255,255,1)' }}>
                    ABOUT US
                </h1>
            </div>

            {/* Foreground Layer: Character Cutout with Echo Effect */}
            <div className="absolute inset-x-0 bottom-0 h-full flex justify-center items-end z-20 pointer-events-none">
                <div className="relative w-full max-w-4xl h-[90%] flex justify-center">
                    {/* Character mockup - simplified choice of image */}
                    <div className="relative h-full aspect-3/4">
                        {/* Red Echo/Shadow Shape */}
                        <div className="absolute inset-x-0 inset-y-0 bg-brand-primary/40 blur-3xl scale-125 translate-x-4 rounded-full" />

                        <Image
                            src="/header.png.png"
                            alt="Fitness Professional"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent z-30" />
        </section>
    );
}
