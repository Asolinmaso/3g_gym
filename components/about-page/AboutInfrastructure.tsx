import Image from 'next/image';

export default function AboutInfrastructure() {
  return (
    <section className="about-infra">
      <div className="about-infra__layout">
        <div className="about-infra__left">
          <div className="about-infra__subtitle-wrap">
            <span className="about-infra__subtitle">INFRASTRUCTURE</span>
            <span className="about-infra__line" aria-hidden />
          </div>
          <h2 className="about-infra__heading">
            Explore <span className="about-infra__heading-accent">Our Gym Space</span>
          </h2>
          <p className="about-infra__text">
            From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
          </p>
          <div className="about-infra__icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/></svg>
            </a>
            <a href="https://www.instagram.com/3rdgenerationfitnessstudio?igsh=MnF4M3cxdTJmdXZ5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="about-infra__icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
        
      <div className="about-infra__right">

          <div className="about-infra__image-wrap">

            <Image src="/images/about_page/about_infrastructure.png" alt="Gym space" fill className="about-infra__image" sizes="748px" />

          </div>

          <div className="about-infra__red-bar" />    

        </div>

      </div>

    </section>
  );
}
