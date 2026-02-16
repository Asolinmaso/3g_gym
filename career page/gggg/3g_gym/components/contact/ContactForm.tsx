'use client';

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="content-inner">
        <div className="contact-form-layout">
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="contact-form-title">Get In Touch</h3>
              <div className="contact-form-fields">
                <input type="text" placeholder="Name" className="contact-form-input" />
                <div className="contact-form-contact-row">
                  <span className="contact-form-prefix">+91</span>
                  <span className="contact-form-dropdown" aria-hidden />
                  <input
                    type="tel"
                    placeholder="Contact"
                    className="contact-form-input contact-form-input--contact"
                  />
                </div>
                <input type="email" placeholder="E-mail" className="contact-form-input" />
                <textarea placeholder="Message" className="contact-form-textarea" rows={4} />
                <button type="submit" className="contact-form-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="contact-map-wrap">
            <iframe
              title="3rd Generation Gym - Chennai, Tamil Nadu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008769752686!2d80.2094!3d13.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjAiTiA4MMKwMTInMzMuOCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              className="contact-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-overlay" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
