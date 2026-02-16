import Image from "next/image";
import "./CTA.css";
export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="content-inner">
        <div className="cta-banner">
          {/* Text Content */}
          <div className="cta-content">
            <h2 className="cta-heading">Start Your Fitness Journey Today.</h2>
            <p className="cta-desc">
              Train with expert coaches, modern equipment, and programs designed
              to deliver real results.
            </p>
            <a href="#contact" className="cta-btn">
              <span>Contact Us</span>
              <span className="cta-btn-arrows">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.64216 8.88875L1.72819 16L0 14.2225L6.04988 8L0 1.7775L1.72819 0L8.64216 7.11125C8.87128 7.34699 9 7.66667 9 8C9 8.33333 8.87128 8.65301 8.64216 8.88875Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Image */}
          <div className="cta-image">
            <Image
              src="/home/homeService.png"
              alt="Fitness Model"
              width={500}
              height={600}
              className="cta-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
