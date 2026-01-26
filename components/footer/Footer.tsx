import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Career', href: '#career' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Contact', href: '#contact' },
];

const programs = [
  'Strength Training',
  'Weight Loss Program',
  'Functional Training',
  'Personal Training',
  'Group Classes',
  'Nutrition Guidance',
];

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background: gym image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/85" aria-hidden />
      </div>

      <div className="content-inner relative z-10 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Logo, about, Follow Us */}
          <div className="space-y-4 lg:max-w-xs">
            <Image
              src="/logo.png"
              alt="3RD GENERATION FITNESS STUDIO"
              width={180}
              height={80}
              className="h-auto w-auto max-h-16 md:max-h-20 object-contain"
            />
            <p className="text-white/90 text-sm leading-relaxed">
              We are a results-driven fitness center focused on strength, transformation, and long-term wellness. With expert trainers and modern facilities, we help you train smarter and achieve real results.
            </p>
            <div>
              <p className="text-white font-bold text-sm mb-3">Follow Us -</p>
              <div className="flex gap-2">
                {social.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="w-9 h-9 rounded-full bg-[#C50D3E] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label={name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/85 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-white/85 hover:text-white transition-colors text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="shrink-0 mt-0.5" aria-hidden>
                  <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <a href="tel:+918667378012" className="hover:text-white transition-colors">+91 86673 78012</a>
                  <a href="tel:+918778359643" className="hover:text-white transition-colors">+91 8778359643</a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 mt-0.5" aria-hidden>
                  <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:Contact@3rdgenerationfitnessstudio.com"
                  className="hover:text-white transition-colors break-all"
                >
                  Contact@3rdgenerationfitnessstudio.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 mt-0.5" aria-hidden>
                  <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>
                  10, Alamadhi Rd, Vetrivel Nagar, Ganesh Nagar, New Vellanur, Tamil Nadu 600062
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <p className="text-white/80 text-center text-xs md:text-sm">
            © 2026 3rd Generation Gym. All rights reserved. | Designed & Developed By Manvian
          </p>
        </div>
      </div>
    </footer>
  );
}
