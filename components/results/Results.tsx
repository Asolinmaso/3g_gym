export default function Results() {
  const transformations = [
    {
      id: 1,
      name: 'John Doe',
      duration: '3 Months',
      beforeImage: 'before1',
      afterImage: 'after1',
    },
    {
      id: 2,
      name: 'Alice Smith',
      duration: '6 Months',
      beforeImage: 'before2',
      afterImage: 'after2',
    },
  ];

  return (
    <section id="results" className="relative py-20 bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden">
      {/* Decorative Angular Shapes */}
      <div className="absolute left-0 top-0 w-1/4 h-full opacity-20">
        <div className="absolute left-0 top-1/3 w-0 h-0 border-l-[150px] border-l-[#8B0000] border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent transform -skew-y-12"></div>
      </div>
      <div className="absolute right-0 top-0 w-1/4 h-full opacity-20">
        <div className="absolute right-0 top-1/2 w-0 h-0 border-r-[150px] border-r-[#A020F0] border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent transform skew-y-12"></div>
      </div>

      <div className="content-inner relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real People.{' '}
            <span className="text-[#8B0000]">Real Results.</span>
          </h2>
          <p className="text-gray-300 text-lg">See the amazing transformations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <p className="text-xs mb-2">Before</p>
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-[#8B0000] text-white text-xs px-2 py-1 rounded">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <div className="text-center text-gray-300">
                      <p className="text-xs mb-2">After</p>
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-[#8B0000] text-white text-xs px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-gray-900">
                <h3 className="text-white text-xl font-bold mb-1">{transformation.name}</h3>
                <p className="text-[#8B0000] font-semibold">{transformation.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </section>
  );
}
