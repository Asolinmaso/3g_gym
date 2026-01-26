import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-end overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(180deg, #010101 0%, #0d0305 30%, #1a0608 50%, #0d0305 70%, #010101 100%)',
      }}
    >
      {/* Subtle chevron shapes bottom-left */}
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-[0.07] pointer-events-none">
        <div className="absolute left-8 bottom-24 w-0 h-0 border-l-[60px] border-l-[#C50D3E] border-t-[40px] border-t-transparent border-b-[40px] border-b-transparent rotate-45" />
        <div className="absolute left-16 bottom-16 w-0 h-0 border-l-[50px] border-l-[#C50D3E] border-t-[35px] border-t-transparent border-b-[35px] border-b-transparent rotate-45" />
        <div className="absolute left-24 bottom-8 w-0 h-0 border-l-[40px] border-l-[#C50D3E] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent rotate-45" />
      </div>

      {/* Large heading – behind image (z-0), same width as navbar */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0 pt-20"
        aria-hidden
      >
        <div className="content-inner w-full flex justify-center">
          <h1
            className="font-normal uppercase text-center select-none w-full"
            style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: 'clamp(3rem, 12vw, 135px)',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          <span className="block">
            <span
              style={{
                background: 'linear-gradient(0deg, #010101 19.5%, #C50D3E 49.75%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Train
            </span>
            <span className="text-white"> Hard. See Results.</span>
          </span>
          <span className="block mt-1">
            <span
              style={{
                background: 'linear-gradient(0deg, #010101 19.5%, #C50D3E 49.75%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Live
            </span>
            <span className="text-white"> Strong.</span>
          </span>
          </h1>
        </div>
      </div>

      {/* Banner image – in front (z-10), same width as navbar */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-16 pb-32 md:pb-40">
        <div className="content-inner w-full h-full flex justify-center">
          <div className="relative w-full h-full max-w-2xl md:max-w-3xl lg:max-w-[56rem]">
          <Image
            src="/banner.png"
            alt="Train Hard. See Results. Live Strong."
            width={1200}
            height={800}
            className="w-full h-full object-contain object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          </div>
        </div>
      </div>

      {/* Right side: description + CTA, same width as navbar */}
      <div className="relative z-20 w-full content-inner pb-8 md:pb-12 lg:pb-16 flex justify-end">
        <div className="flex flex-col items-end max-w-xl text-right space-y-4">
          <p className="text-white text-sm md:text-base leading-relaxed">
            Premium training plans, certified experts & a community built for success, start your fitness transformation today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#C50D3E] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-sm md:text-base shadow-lg"
          >
            Get Started <span className="text-base md:text-lg">&gt;&gt;&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
