export default function About() {
  return (
    <section id="about" className="bg-black py-16 md:py-20 lg:py-24">
      <div className="content-inner">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left column: text + small image + button */}
          <div className="flex flex-col justify-between">
            <div>
              {/* ABOUT US with horizontal lines */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <span className="h-px bg-[#C50D3E] w-6 md:w-10 shrink-0" />
                <span className="text-white/95 uppercase text-sm md:text-base tracking-[0.2em] font-medium">
                  About Us
                </span>
                <span className="h-px bg-[#C50D3E] w-16 md:w-24 lg:w-28 shrink-0" />
              </div>

              {/* Gym. / Transform. */}
              <h2 className="text-[#C50D3E] font-bold uppercase leading-[1.05] mb-6 md:mb-8">
                <span
                  className="block text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  Gym.
                </span>
                <span
                  className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1"
                  style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  Transform.
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10">
                We are a results-driven fitness community built to help you become stronger, healthier, and more confident. Our programs are designed by certified experts and backed by proven training methods that deliver real, lasting results.
              </p>
            </div>

            {/* Bottom row: small image (left) + Know More button (right) */}
            <div className="flex gap-6 md:gap-8 items-end flex-wrap">
              <div className="relative w-28 md:w-36 lg:w-40 h-40 md:h-48 lg:h-52 shrink-0 overflow-hidden rounded">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-500 text-xs text-center px-2">
                    Add image
                  </span>
                </div>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 bg-[#C50D3E] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold uppercase text-sm md:text-base hover:opacity-90 transition-opacity shrink-0"
              >
                Know More <span className="text-base md:text-lg">&gt;&gt;&gt;</span>
              </a>
            </div>
          </div>

          {/* Right column: large image */}
          <div className="relative min-h-[380px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden rounded-lg lg:rounded-none">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Add large image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
