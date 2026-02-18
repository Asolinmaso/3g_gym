"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";
  const isCareerPage = pathname === "/career";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname === "/services";
  const isAboutPage = pathname === "/about";
  const isFranchisePage = pathname === "/franchise";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Career", href: "/career" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
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
                    (link.name === "Products" && isProductsPage) ||
                    (link.name === "Career" && isCareerPage) ||
                    (link.name === "Contact" && isContactPage) ||
                    (link.name === "Services" && isServicesPage) ||
                    (link.name === "About" && isAboutPage) ||
                    (link.name === "Franchise" && isFranchisePage) ||
                    (link.name === "Home" && pathname === "/")
                      ? "text-[#C50D3E] font-semibold"
                      : "text-gray-400 hover:text-white";
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
              <Link
                href="/#contact"
                className="hidden lg:inline-flex bg-[#C50D3E] text-[20px] text-white h-[52px] min-w-[163px] px-6 rounded-[40px] font-normal hover:opacity-90 transition-opacity items-center justify-center gap-1.5 whitespace-nowrap footer-join-btn"
              >
                Join 3rd Gen
                <span className="text-base" aria-hidden>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.64216 8.88875L1.72819 16L0 14.2225L6.04988 8L0 1.7775L1.72819 0L8.64216 7.11125C8.87128 7.34699 9 7.66667 9 8C9 8.33333 8.87128 8.65301 8.64216 8.88875Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu – left-to-right sliding drawer overlay */}
        <div
          className={`mobile-menu-overlay lg:hidden ${isMenuOpen ? "mobile-menu-overlay--open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <button
            className="mobile-menu-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />
          <div className="mobile-menu-drawer">
            <div className="mobile-menu-blur mobile-menu-blur--1" aria-hidden />
            <div className="mobile-menu-blur mobile-menu-blur--2" aria-hidden />
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <nav className="mobile-menu-nav">
              {navLinks.map((link) => {
                const active =
                  (link.name === "Products" && isProductsPage) ||
                  (link.name === "Career" && isCareerPage) ||
                  (link.name === "Contact" && isContactPage) ||
                  (link.name === "Services" && isServicesPage) ||
                  (link.name === "About" && isAboutPage) ||
                  (link.name === "Franchise" && isFranchisePage) ||
                  (link.name === "Home" && pathname === "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`mobile-menu-link ${active ? "mobile-menu-link--active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-cta"
              >
                Join 3rd Gen
                <span aria-hidden>&gt;</span>
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
