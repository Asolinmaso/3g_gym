'use client';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function FranchiseContact() {
  return (
    <section id="franchise-contact" className="franchise-contact">
      <div className="content-inner franchise-contact__inner">
        <div className="franchise-contact__left">
          <div className="franchise-contact__subtitle-wrap">
            <span className="franchise-contact__subtitle">Get In Touch</span>
            <span className="franchise-contact__line" aria-hidden />
          </div>
          <h2 className="franchise-contact__heading">Let&apos;s Build Your <span>Fitness Goals</span> Together.</h2>
          <div className="franchise-contact__blocks">
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden="true" />
              <MapPin size={35} color="#BE1E2D" strokeWidth={3} />
              <div>
                <h3 className="franchise-contact__block-title">Head Office</h3>
                <p className="franchise-contact__block-text">10,Alamadhi Rd, Vetrivel Nagar,ganesh Nagar,New Vellanur, Tamil Nadu 600062</p>
              </div>
            </div>
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden="true" />
              <Mail size={24} color="#BE1E2D" strokeWidth={3} />
              <div>
                <h3 className="franchise-contact__block-title">Email Support</h3>
                <p className="franchise-contact__block-text">Contact@3rdgenerationfitnessstudio.com</p>
              </div>
            </div>
            <div className="franchise-contact__block">
              <div className="franchise-contact__icon" aria-hidden="true" />
              <Phone size={24} color="#BE1E2D" strokeWidth={3} />
              <div>
                <h3 className="franchise-contact__block-title">Let&apos;s Talk</h3>
                <p className="franchise-contact__block-text"> +91 8667378012 / +91 8778359643</p>
              </div>
            </div>
          </div>
        </div>
        <div className="franchise-contact__form-wrap">
          <h3 className="franchise-contact__form-title">Start Your Application</h3>
          <p className="franchise-contact__form-desc">Fill out the form below and our franchise manager will contact you within 24 hours.</p>
          <form className="franchise-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="franchise-contact__input" aria-label="Name" />
            <div className="franchise-contact__input-row">
              <span className="franchise-contact__prefix">+91</span>
              <span className="franchise-contact__divider" aria-hidden />
              <input type="tel" placeholder="Contact" className="franchise-contact__input franchise-contact__input--contact" aria-label="Contact" />
            </div>
            <input type="text" placeholder="Email" className="franchise-contact__input" aria-label="Email" />
            <input type="text" placeholder="City" className="franchise-contact__input" aria-label="City" />
            <input type="text" placeholder="Investment Capacity" className="franchise-contact__input" aria-label="Investment Capacity" />
            <button type="submit" className="franchise-contact__submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
