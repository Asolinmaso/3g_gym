"use client";

import React from 'react';
import Image from 'next/image';

const CareersHero = () => {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Products', href: '#' },
        { name: 'Career', href: '#', active: true },
        { name: 'Franchise', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <section className="relative min-h-screen bg-[#1a0005] overflow-hidden flex flex-col font-sans">
            {/* Navbar */}
            <nav className="relative z-50 flex items-center justify-between px-8 py-4 w-full border-b border-blue-500/50 bg-black/40 backdrop-blur-sm">
                {/* Brand Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="3rd Generation Logo"
                        width={60}
                        height={60}
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-base font-semibold transition-colors ${link.active ? 'text-[#c41230]' : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Join Button */}
                <button className="bg-[#c41230] text-white px-8 py-3 rounded-full text-base font-bold flex items-center group transition-all hover:bg-[#a00e27] hover:scale-105 shadow-[0_0_20px_rgba(196,18,48,0.4)]">
                    Join 3rd Gen
                    <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </nav>

            {/* Hero Content */}
            <div className="relative flex-1 flex flex-col items-center justify-end overflow-hidden">
                {/* Background Gym Texture */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/footer-bg.png"
                        alt="Gym Background"
                        fill
                        className="object-cover opacity-15 grayscale brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4a000e]/70 to-black/80"></div>
                </div>

                {/* Background Shapes - Matching Screenshot Fidelity */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Top Right Diagonal Sharp Bands */}
                    <div className="absolute top-0 right-0 w-[55%] h-full bg-[#30000a] skew-x-[-20deg] translate-x-[25%] border-l border-white/5"></div>
                    <div className="absolute top-0 right-0 w-[45%] h-full bg-[#c41230]/10 skew-x-[-20deg] translate-x-[20%] border-l border-white/5"></div>
                    <div className="absolute top-0 right-0 w-[35%] h-full bg-[#c41230]/20 skew-x-[-20deg] translate-x-[15%] border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"></div>

                    {/* Bottom Left Corner Shapes */}
                    {/* Large Outer Triangle */}
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c41230] opacity-90 clip-path-hero-triangle"></div>
                    {/* Inner Accent Triangle/Shape */}
                    <div className="absolute bottom-4 left-4 w-[120px] h-[120px] bg-white/20 clip-path-hero-triangle-inner"></div>
                </div>

                {/* Background "CAREERS" Text - Positioned Higher and Smaller */}
                <div className="absolute top-[15%] md:top-[15%] left-1/2 -translate-x-1/2 select-none z-10 w-full text-center">
                    <h1 className="text-[6rem] md:text-[18rem] font-black leading-none tracking-normal uppercase italic bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent opacity-95 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                        CAREERS
                    </h1>
                </div>

                {/* Hero People Image with Sharp Red Outline */}
                <div className="relative z-20 flex items-center justify-center w-full max-w-7xl px-4 pointer-events-none">
                    <div className="relative w-full max-w-6xl h-[600px] md:h-[850px] transform translate-y-28">
                        <Image
                            src="/hero-people.png"
                            alt="3rd Generation Team"
                            fill
                            className="object-contain object-bottom filter drop-shadow-[0_0_2px_#c41230] drop-shadow-[0_0_8px_rgba(196,18,48,0.5)]"
                            priority
                        />
                    </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-15"></div>
            </div>

            <style jsx>{`
                .clip-path-hero-triangle {
                    clip-path: polygon(0 100%, 100% 100%, 0 0);
                }
                .clip-path-hero-triangle-inner {
                    clip-path: polygon(0 100%, 100% 100%, 0 0);
                }
                @media (max-width: 768px) {
                    .clip-path-hero-triangle {
                        width: 150px;
                        height: 150px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CareersHero;
