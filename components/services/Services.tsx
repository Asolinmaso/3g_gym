export default function Services() {
  const services = [
    { id: 1, title: 'Strength Training' },
    { id: 2, title: 'Weight Loss Program' },
    { id: 3, title: 'Functional Training' },
    { id: 4, title: 'Personal Training' },
    { id: 5, title: 'Group Classes' },
    { id: 6, title: 'Nutrition Guidance' },
  ];

  return (
    <section id="services" className="bg-black py-16 md:py-20 lg:py-24">
      <div className="content-inner">
        {/* Top: left (SERVICES + Transform You) | right (paragraph + Know More) */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-[#C50D3E] uppercase text-sm md:text-base tracking-widest font-medium">
                Services
              </span>
              <span className="h-px bg-[#C50D3E] w-10 md:w-14 shrink-0" />
            </div>
            <h2
              className="text-[#C50D3E] font-bold uppercase text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
            >
              Transform You
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
              From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#C50D3E] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold uppercase text-sm md:text-base hover:opacity-90 transition-opacity"
            >
              Know More <span className="text-base md:text-lg">&gt;&gt;&gt;</span>
            </a>
          </div>
        </div>

        {/* 3x2 grid of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative aspect-[4/5] min-h-[240px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Add image</span>
              </div>
              {/* Dark red/pink overlay, stronger at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#C50D3E]/85 via-[#C50D3E]/25 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-5 lg:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
