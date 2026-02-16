
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between border-b border-white/10">
            {/* Left Spacer to balance the centered links */}
            <div className="flex-1 hidden lg:flex"></div>

            <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
                <div className="hidden lg:flex items-center gap-8 text-neutral-300 text-sm font-medium">
                    <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                    <Link href="#about" className="text-brand-primary">About</Link>
                    <Link href="#services" className="hover:text-brand-primary transition-colors">Services</Link>
                    <Link href="#products" className="hover:text-brand-primary transition-colors">Products</Link>
                    <Link href="#career" className="hover:text-brand-primary transition-colors">Career</Link>
                    <Link href="#franchise" className="hover:text-brand-primary transition-colors">Franchise</Link>
                    <Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link>
                </div>
            </div>

            <div className="flex-1 flex justify-end">
                <button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                    Join 3rd Gen
                    <span className="text-sm">›</span>
                </button>
            </div>
        </nav>
    );
}
