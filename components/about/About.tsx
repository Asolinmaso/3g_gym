import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="content-inner">
        <div className="about-layout">
          {/* Left column: label, headline, small image + paragraph, button */}
          <div className="about-left">
            <div className="about-label-wrap">
              <span className="about-label-line" aria-hidden />
              <span className="about-label">ABOUT US</span>
              <span className="about-label-line" aria-hidden />
            </div>

            <h2 className="about-heading">
              More Than a <span style={{ color: "#c50d3e" }}>Gym </span>.<br />{" "}
              A Place to<span style={{ color: "#c50d3e" }}> Transform</span>.
            </h2>

            <div className="about-content-row">
              <div className="about-image-small-wrap">
                <Image
                  src="/about_us/small_image.png"
                  alt="Athlete training"
                  fill
                  className="about-image-small"
                  sizes="292px"
                />
              </div>
              <p className="about-desc">
                We are a results-driven fitness community built to help you
                become stronger, healthier, and more confident. Our programs are
                designed by certified experts and backed by proven training
                methods that deliver real, lasting results.
                <br />
                <a href="/about" className="about-cta">
                  <span>Know More</span>
                  <span className="about-cta-arrows" aria-hidden>
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
              </p>
            </div>
          </div>

          {/* Right column: large image */}
          <div className="about-image-big-wrap">
            <Image
              src="/about_us/big_image.png"
              alt="Athlete with macebell"
              fill
              className="about-image-big"
              sizes="(max-width: 1023px) 100vw, 503px"
            />
          </div>
        </div>
        
      </div>
      {/* Bottom Stats Image */}
        <div className="about-bottom-image">
          <Image
            src="/statsp.png" // <-- your stats strip image path
            alt="About statistics"
            fill
            className="about-bottom-img"
            
          />
        </div>
      
    </section>
  );
}
