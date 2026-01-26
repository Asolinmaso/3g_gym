export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="content-inner">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Stories.{' '}
            <span className="text-[#8B0000]">Honest Results.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 mx-auto flex items-center justify-center overflow-hidden">
                  <div className="text-center text-gray-400">
                    <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-4">
                <div className="text-6xl text-[#8B0000] opacity-20 leading-none">"</div>
                <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed">
                  My fitness journey began here, and I've never looked back. The trainers are exceptional, and the community is incredibly supportive. I've achieved results I never thought possible.
                </p>
                <div className="pt-4">
                  <p className="text-gray-900 font-bold text-lg">Mark Johnson</p>
                  <p className="text-gray-600">Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-[#8B0000]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
