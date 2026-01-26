import Image from 'next/image';

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-black">
      <div className="content-inner">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-r-[1.75rem] md:rounded-l-2xl"
          style={{ backgroundColor: '#D92359' }}
        >
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10 min-h-[320px] md:min-h-[380px]">
            {/* Left: headline, description, button */}
            <div className="p-8 md:p-10 lg:p-12 xl:p-14 order-2 md:order-1">
              <h2
                className="font-bold leading-tight mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
              >
                <span className="block text-black">Start Your Fitness</span>
                <span className="block">
                  <span className="text-white">Journey</span>
                  <span className="text-black"> Today.</span>
                </span>
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                Train with expert coaches, modern equipment, and programs designed to deliver real results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-black text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                Contact Us <span className="text-base md:text-lg">&gt;&gt;&gt;</span>
              </a>
            </div>

            {/* Right: contactus image */}
            <div className="relative h-64 md:h-[360px] lg:h-[420px] order-1 md:order-2 md:min-h-[380px]">
              <Image
                src="/contactus.png"
                alt="Start your fitness journey"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
