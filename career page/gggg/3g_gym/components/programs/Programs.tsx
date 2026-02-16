export default function Programs() {
  const programs = [
    { id: 1, title: 'Strength Training', image: 'strength' },
    { id: 2, title: 'Cardio Blast', image: 'cardio' },
    { id: 3, title: 'Yoga & Flexibility', image: 'yoga' },
    { id: 4, title: 'Crossfit', image: 'crossfit' },
    { id: 5, title: 'Personal Training', image: 'personal' },
    { id: 6, title: 'Nutrition Plans', image: 'nutrition' },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="content-inner">
        <div className="mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Our Programs</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programs Designed to{' '}
            <span className="text-[#8B0000]">Transform You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Discover our comprehensive range of fitness programs tailored to meet your individual needs and help you achieve lasting results.
          </p>
          <button className="bg-gradient-to-r from-[#8B0000] to-[#A020F0] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            View All Programs
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              {/* Program Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-sm">{program.image}</p>
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/90 via-[#8B0000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Transform your body with our expert-led {program.title.toLowerCase()} program.
                  </p>
                  <button className="bg-white text-[#8B0000] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
              
              {/* Title Overlay (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-bold">{program.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
