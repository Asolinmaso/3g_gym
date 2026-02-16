
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-dark pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
                {/* Brand Info */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">3G</span>
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase">3rd Gen Fitness</span>
                    </div>
                    <p className="text-neutral-500 text-sm font-black leading-tight text-xl uppercase italic">
                        Let&apos;s Transform<br />Your Life
                    </p>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Follow Us -</span>
                        <div className="flex gap-4">
                            <a href="#" className="text-brand-primary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="#" className="text-brand-primary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="#" className="text-brand-primary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.058 1.064.048 1.79.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.417 1.363.465 2.427.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.064-.218 1.79-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.637.247-1.363.417-2.427.465-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.064-.048-1.79-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.637-.417-1.363-.465-2.427-.048-1.066-.058-1.405-.058-4.122s.01-3.056.058-4.122c.048-1.064.218-1.79.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.523c.637-.247 1.363-.417 2.427-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-1.5a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-neutral-400">Quick Links</h4>
                    <ul className="flex flex-col gap-4 text-xs font-bold text-neutral-500 uppercase">
                        <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-brand-primary transition-colors">About</Link></li>
                        <li><Link href="#services" className="hover:text-brand-primary transition-colors">Services</Link></li>
                        <li><Link href="#products" className="hover:text-brand-primary transition-colors">Products</Link></li>
                        <li><Link href="#career" className="hover:text-brand-primary transition-colors">Career</Link></li>
                        <li><Link href="#franchise" className="hover:text-brand-primary transition-colors">Franchise</Link></li>
                        <li><Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-neutral-400">Our Programs</h4>
                    <ul className="flex flex-col gap-4 text-xs font-bold text-neutral-500 uppercase">
                        <li>Strength Training</li>
                        <li>Weight Loss Program</li>
                        <li>Functional Training</li>
                        <li>Personal Training</li>
                        <li>Group Classes</li>
                        <li>Body Building</li>
                        <li>Weight Gain Program</li>
                        <li>Zumba Class</li>
                        <li>Yoga & Meditation</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-8">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-400">Contact</h4>
                    <div className="flex flex-col gap-6 text-[10px] font-bold uppercase text-neutral-500 tracking-wider">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>+91-99632 76543<br />+91-82765 43210</div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" /></svg>
                            </div>
                            <div>contact@3rdgenfitness-studio.com</div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>No. 45/B, 4th Rd, V.V. Nagar, Meganahalli Nagar, New Vellore, Tamil Nadu 600042</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                © 2024 3rd Generation Gym. All rights reserved. Designed & Developed by Antigravity
            </div>
        </footer>
    );
}
