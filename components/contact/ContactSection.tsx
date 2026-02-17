"use client";
import "./ContactSection.css";
export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="content-inner">
        <div className="contact-layout">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-item">
              <span className="contact-icon">
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3469 31.5649C11.3469 31.5649 0 21.9766 0 12.5419C0 9.21562 1.31696 6.02552 3.66117 3.67345C6.00537 1.32138 9.18479 0 12.5 0C15.8152 0 18.9946 1.32138 21.3388 3.67345C23.683 6.02552 25 9.21562 25 12.5419C25 21.9766 13.6531 31.5649 13.6531 31.5649C13.0219 32.1482 11.9828 32.1419 11.3469 31.5649ZM12.5 18.0291C13.2182 18.0291 13.9293 17.8871 14.5928 17.6114C15.2563 17.3356 15.8592 16.9314 16.367 16.4219C16.8748 15.9124 17.2776 15.3075 17.5525 14.6418C17.8273 13.976 17.9688 13.2625 17.9688 12.5419C17.9688 11.8214 17.8273 11.1079 17.5525 10.4421C17.2776 9.7764 16.8748 9.17151 16.367 8.66198C15.8592 8.15246 15.2563 7.74828 14.5928 7.47253C13.9293 7.19677 13.2182 7.05485 12.5 7.05485C11.0496 7.05485 9.6586 7.63295 8.63301 8.66198C7.60742 9.69101 7.03125 11.0867 7.03125 12.5419C7.03125 13.9972 7.60742 15.3929 8.63301 16.4219C9.6586 17.4509 11.0496 18.0291 12.5 18.0291Z"
                    fill="#C50D3E"
                  />
                </svg>
              </span>
              <div>
                <h4>Location</h4>
                <p>
                  10, Alamadhi Rd, Vetrivel Nagar, Ganesh Nagar, New Vellanur,
                  Tamil Nadu 600062
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <svg
                  width="32"
                  height="26"
                  viewBox="0 0 32 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.2 26C2.32 26 1.56693 25.682 0.9408 25.0461C0.314667 24.4102 0.00106667 23.6448 0 22.75V3.25C0 2.35625 0.3136 1.59142 0.9408 0.9555C1.568 0.319583 2.32107 0.00108333 3.2 0H28.8C29.68 0 30.4336 0.3185 31.0608 0.9555C31.688 1.5925 32.0011 2.35733 32 3.25V22.75C32 23.6437 31.6869 24.4091 31.0608 25.0461C30.4347 25.6831 29.6811 26.0011 28.8 26H3.2ZM16 14.625L28.8 6.5V3.25L16 11.375L3.2 3.25V6.5L16 14.625Z"
                    fill="#C50D3E"
                  />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>Contact@3rdgenerationfitnessstudio.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.928 17.9629L20.1696 18.7091C20.1696 18.7091 18.3646 20.4813 13.4397 15.6422C8.5147 10.8031 10.3197 9.03086 10.3197 9.03086L10.7964 8.5598C11.9747 7.40356 12.0863 5.54566 11.058 4.18847L8.95803 1.41645C7.68471 -0.263565 5.22639 -0.48592 3.76807 0.947033L1.15142 3.51647C0.429758 4.228 -0.053573 5.14707 0.00475997 6.16825C0.154759 8.78215 1.35142 14.4036 8.02471 20.9623C15.103 27.9162 21.7446 28.1929 24.4596 27.9425C25.3196 27.8635 26.0663 27.432 26.6679 26.839L29.0346 24.5133C30.6346 22.9437 30.1846 20.2507 28.1379 19.1521L24.9546 17.4408C23.6113 16.721 21.9779 16.9319 20.928 17.9629Z"
                    fill="#C50D3E"
                  />
                </svg>
              </span>
              <div>
                <h4>Contact</h4>
                <p>+91 8667378012 / +91 8778359643</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <svg
                  width="26"
                  height="28"
                  viewBox="0 0 26 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5972 27.2863L13.5831 27.2889L13.492 27.3338L13.4663 27.339L13.4483 27.3338L13.3572 27.2889C13.3435 27.2846 13.3332 27.2868 13.3264 27.2953L13.3212 27.3082L13.2994 27.8575L13.3058 27.8832L13.3187 27.8999L13.4522 27.9949L13.4714 28L13.4868 27.9949L13.6203 27.8999L13.6357 27.8793L13.6408 27.8575L13.619 27.3094C13.6156 27.2957 13.6083 27.288 13.5972 27.2863ZM13.9374 27.1413L13.9207 27.1439L13.6832 27.2632L13.6704 27.2761L13.6665 27.2902L13.6896 27.8421L13.696 27.8575L13.7063 27.8665L13.9643 27.9859C13.9806 27.9902 13.993 27.9867 14.0015 27.9756L14.0067 27.9576L13.963 27.1695C13.9587 27.1541 13.9502 27.1447 13.9374 27.1413ZM13.0196 27.1439C13.0139 27.1404 13.0072 27.1393 13.0007 27.1407C12.9943 27.1422 12.9886 27.1461 12.9849 27.1516L12.9772 27.1695L12.9336 27.9576C12.9344 27.973 12.9417 27.9833 12.9554 27.9884L12.9747 27.9859L13.2327 27.8665L13.2455 27.8562L13.2506 27.8421L13.2725 27.2902L13.2686 27.2748L13.2558 27.2619L13.0196 27.1439Z"
                    fill="#C50D3E"
                  />
                  <path
                    d="M12.8358 0C19.925 0 25.6716 5.74659 25.6716 12.8358C25.6716 19.925 19.925 25.6716 12.8358 25.6716C5.74659 25.6716 0 19.925 0 12.8358C0 5.74659 5.74659 0 12.8358 0ZM12.8358 5.13432C12.4954 5.13432 12.1689 5.26955 11.9282 5.51027C11.6874 5.75099 11.5522 6.07747 11.5522 6.4179V12.8358C11.5523 13.1762 11.6876 13.5026 11.9283 13.7433L15.779 17.594C16.0211 17.8278 16.3454 17.9572 16.6819 17.9543C17.0185 17.9514 17.3404 17.8164 17.5784 17.5784C17.8164 17.3404 17.9514 17.0185 17.9543 16.6819C17.9572 16.3454 17.8278 16.0211 17.594 15.779L14.1194 12.3044V6.4179C14.1194 6.07747 13.9841 5.75099 13.7434 5.51027C13.5027 5.26955 13.1762 5.13432 12.8358 5.13432Z"
                    fill="#C50D3E"
                  />
                </svg>
              </span>
              <div>
                <h4>Open Hours</h4>
                <p>
                  Monday - Sunday
                  <br />5 AM - 11 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="contact-form-title">Get In Touch</h3>
              <div className="contact-form-fields">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-form-input"
                />
                <div className="contact-form-contact-row">
                  <span className="contact-form-prefix">+91</span>
                  <span className="contact-form-dropdown" aria-hidden />
                  <input
                    type="tel"
                    placeholder="Contact"
                    className="contact-form-input contact-form-input--contact"
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="contact-form-input"
                />
                <textarea
                  placeholder="Message"
                  className="contact-form-textarea"
                  rows={4}
                />
                <button type="submit" className="contact-form-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
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
    </section>
  );
}
