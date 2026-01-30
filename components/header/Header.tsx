'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname === '/products';
  const isCareerPage = pathname === '/career';
  const isContactPage = pathname === '/contact';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/products' },
    { name: 'Career', href: '/career' },
    { name: 'Franchise', href: '/#franchise' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="w-full">
        <div className="navbar-inner">
          <div className="relative flex flex-wrap items-center justify-between gap-4 h-24 md:h-28 lg:h-32">
            {/* Logo – left, contained */}
            <div className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="3RD GENERATION FITNESS STUDIO"
                width={180}
                height={80}
                className="h-auto w-auto object-contain max-h-16 md:max-h-20 lg:max-h-24"
                priority
              />
            </div>

            {/* Desktop nav – center */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none w-full">
              <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10 pointer-events-auto">
                {navLinks.map((link) => {
                  const activeClass =
                    (link.name === 'Products' && isProductsPage) ||
                    (link.name === 'Career' && isCareerPage) ||
                    (link.name === 'Contact' && isContactPage) ||
                    (link.name === 'Home' && pathname === '/')
                      ? 'text-[#C50D3E] font-semibold'
                      : 'text-gray-400 hover:text-white';
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm xl:text-base transition-colors whitespace-nowrap font-medium ${activeClass}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: Join Now (desktop) + Hamburger (mobile) */}
            <div className="flex items-center justify-end shrink-0">
              <button className="hidden lg:inline-flex bg-[#C50D3E] text-white px-8 xl:px-10 2xl:px-12 py-3.5 xl:py-4 rounded-full font-medium hover:opacity-90 transition-opacity items-center gap-1.5 text-sm xl:text-base whitespace-nowrap">
                Join Now <span className="text-base xl:text-lg">&gt;&gt;&gt;</span>
              </button>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-800 bg-black">
            <div className="navbar-inner py-6 space-y-4">
              {navLinks.map((link) => {
                const active =
                  (link.name === 'Products' && isProductsPage) ||
                  (link.name === 'Career' && isCareerPage) ||
                  (link.name === 'Contact' && isContactPage) ||
                  (link.name === 'Home' && pathname === '/');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base transition-colors ${
                      active ? 'text-[#C50D3E] font-semibold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button className="w-full bg-[#C50D3E] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 mt-4">
                Join Now <span className="text-lg">&gt;&gt;&gt;</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
