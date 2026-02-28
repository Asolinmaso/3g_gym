import Image from 'next/image';
import Link from 'next/link';
import "./footer.css";

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Career', href: '/career' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Contact', href: '/contact' },
];

const programs = [
  'Strength Training',
  'Weight Loss Program',
  'Functional Training',
  'Personal Training',
  'Group Classes',
  'Nutrition Guidance',
  'Weight Gain Program',
  'Zumba Class',
  'Contest Preparation',
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
    href: 'https://www.instagram.com/3rdgenerationfitnessstudio?igsh=MnF4M3cxdTJmdXZ5&utm_source=qr',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="content-inner footer-inner">
        <Image
              src="/logo1.png"
              alt="3RD GENERATION FITNESS STUDIO"
              width={156}
              height={156}
              className="footer-logo"
            />
        <div className="footer-grid">
          {/* Column 1: Logo, tagline, Follow Us (Frame 60) – Figma Frame 55 */}
          <div className="footer-col footer-col--about">
            
            <p className="footer-tagline">Let's Transform Your Life</p>
            <div className="footer-follow">
              <p className="footer-follow-title">Follow Us -</p>
              <div className="footer-social">
                {social.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="footer-social-link"
                    aria-label={name}
                  >
                    <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Frame 55) */}
          <div className="footer-col footer-col--links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Programs (Frame 61) */}
          <div className="footer-col footer-col--programs">
            <h3 className="footer-heading">Our Programs</h3>
            <ul className="footer-list">
              {programs.map((name) => (
                <li key={name}>
                  <Link href="/services" className="footer-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Frame 1321314932) */}
          <div className="footer-col footer-col--contact">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span className="footer-contact-text">
                  <a href="tel:+918190895694">+91 8190895694</a>
                  <a href="tel:+918778359643">+91 8778359643</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href="mailto:3rdgenerationfitnessstudio@gmail.com" className="footer-link footer-contact-text">
                  3rdgenerationfitnessstudio@gmail.com
                </a>
              </li>
              <li className="footer-contact-item footer-contact-item--address">
                <span className="footer-contact-icon" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="footer-contact-text">
                  No. 10, ganesh nagar, alamathi main road, vellanur, chennai - 600062
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Line 54 + Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 3rd Generation Gym. All rights reserved. | Designed & Developed By Manvian
          </p>
        </div>
      </div>
    </footer>
  );
}
