'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { CountryCodeSelect } from '@/components/ui/CountryCodeSelect';

export default function CareerApply() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [countryCode, setCountryCode] = useState('+91');

  return (
    <section className="career-apply">
      <div className="content-inner">
        <div className="career-apply-layout">
          {/* Left: image + address + contact + note */}
          <div className="career-apply-info">
            <div className="career-apply-image-wrap">
              <Image
                src="/images/career_page_image/career_addresssec_img.png"
                alt="Gym team"
                fill
                className="career-apply-image"
                sizes="(max-width: 1023px) 100vw, 608px"
              />
            </div>
            <div className="career-apply-text">
              <div className="career-apply-block">
                <h3 className="career-apply-label">Address</h3>
                <p className="career-apply-value">
                  No. 10, ganesh nagar, alamathi main road, vellanur, chennai - 600062
                </p>
              </div>
              <div className="career-apply-block">
                <h3 className="career-apply-label">Contact</h3>
                <p className="career-apply-value">+91 8190895694 / +91 8778359643</p>
              </div>
              <div className="career-apply-block">
                <h3 className="career-apply-label">E-mail</h3>
                <p className="career-apply-value">3rdgenerationfitnessstudio@gmail.com</p>
              </div>
              <div className="career-apply-block">
                <p className="career-apply-note">
                  Immediate joining preferred. Salary based on experience & performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Apply Now form */}
          <div className="career-apply-form-wrap">
            <form className="career-apply-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="career-apply-form-title">Apply Now !</h3>
              <div className="career-apply-form-fields">
                <input type="text" placeholder="Name" className="career-apply-input" />
                <div className="career-apply-contact-row">
                  <CountryCodeSelect variant="career-apply" value={countryCode} onChange={setCountryCode} />
                  <input type="tel" placeholder="Contact" className="career-apply-input career-apply-input--contact" />
                </div>
                <input type="email" placeholder="E-mail" className="career-apply-input" />
                <input type="text" placeholder="Job Position" className="career-apply-input" />
                <input type="text" placeholder="Location" className="career-apply-input" />
                <textarea placeholder="Message" className="career-apply-textarea" rows={4} />
                <div className="career-apply-upload">
                  <div className="career-apply-upload-row">
                    <button
                      type="button"
                      className="career-apply-upload-btn"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 15V3m0 0l4 4m-4-4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Upload File
                    </button>
                    <span className="career-apply-upload-hint">No File Chosen</span>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="career-apply-file-input"
                    aria-label="Upload resume"
                  />
                  <p className="career-apply-upload-help">
                    Drag & drop your file here (PDF, DOCX, JPG, PNG) Max size: 5MB
                  </p>
                </div>
                <div className="career-apply-submit-wrap">
                  <button type="submit" className="career-apply-submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
