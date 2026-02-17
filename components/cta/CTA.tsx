import Image from "next/image";
import "./CTA.css";
export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="content-inner cta-inner">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-heading">Start Your Fitness Journey Today.</h2>
            <p className="cta-desc">
              Train with expert coaches, modern equipment, and programs designed
              to deliver real results.
            </p>
            <a href="#contact" className="cta-btn">
              Contact Us
              <span className="cta-btn-arrow" aria-hidden>
                <svg width="9" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="cta-image">
          <Image
            src="/home/homeService.png"
            alt="Fitness training"
            fill
            className="cta-img"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 701px"
          />
        </div>
      </div>
    </section>
  );
}
