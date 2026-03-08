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
      <path d="M13 10h3l-.5 3H13v8h-3v-8H8v-3h2V8.5C10 6.6 11.1 5 13.5 5H16v3h-1.5c-.6 0-1.5.3-1.5 1.2V10z" />
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <circle cx="6.5" cy="6.5" r="1.5" />
        <path d="M5 10h3v9H5v-9zm5 0h3v1.3c.4-.8 1.4-1.5 2.9-1.5C18 9.8 19 11.2 19 13.5V19h-3v-5c0-1.2-.4-2-1.5-2S13 13 13 14.2V19h-3v-9z" />
      </>
    ),
  },
  {
  name: 'Instagram',
  href: 'https://www.instagram.com/3rdgenerationfitnessstudio?igsh=MnF4M3cxdTJmdXZ5&utm_source=qr',
  icon: (
    <>
      {/* White filled rounded square background */}
      <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
      {/* Red outlined circle (ring) */}
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="#C50D3E" strokeWidth="2" />
      {/* Red dot */}
      <circle cx="17" cy="7" r="1.5" fill="#C50D3E" />
    </>
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
        {/* Mobile-only description */}
        <p className="footer-mobile-description">
          We are a results-driven fitness center focused on strength, transformation, and long-term wellness. With expert trainers and modern facilities, we help you train smarter and achieve real results.
        </p>
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
                    <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24" strokeWidth="0">
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </span>
                <span className="footer-contact-text">
                  <a href="tel:+918190895694">+91 8190895694</a>
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
        {/* Mobile-only Follow Us at bottom */}
        <div className="footer-follow footer-follow--mobile">
          <p className="footer-follow-title">Follow Us -</p>
          <div className="footer-social">
            {social.map(({ name, href, icon }) => (
              <a key={name} href={href} className="footer-social-link" aria-label={name}>
                <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24" strokeWidth="0">
                  {icon}
                </svg>
              </a>
            ))}
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
