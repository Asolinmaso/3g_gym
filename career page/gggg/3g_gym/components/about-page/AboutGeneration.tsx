import Image from 'next/image';

const PINK_CARDS = [
  { label: 'MODERN FACILITIES', icon: true },
  { label: 'EXPERT TEAM', icon: true },
  { label: 'DIVERSE OFFERING', icon: true },
  { label: 'FITNESS FOCUS', icon: true },
];

export default function AboutGeneration() {
  return (
    <section className="about-gen">
      <div className="content-inner about-gen__inner">
        <div className="about-gen__subtitle-wrap">
          <span className="about-gen__line about-gen__line--left" aria-hidden />
          <span className="about-gen__subtitle">ABOUT 3RD GENERATION</span>
          <span className="about-gen__line about-gen__line--right" aria-hidden />
        </div>
        <h2 className="about-gen__heading">
          Always Provide Best <span className="about-gen__heading-accent">Fitness Trainers.</span>
        </h2>
        <div className="about-gen__layout">
          <div className="about-gen__image-wrap">
            <Image
              src="/about_us/big_image.png"
              alt="Fitness training"
              fill
              className="about-gen__image"
              sizes="(max-width: 1023px) 100vw, 532px"
            />
            <div className="about-gen__card">
              <span className="about-gen__card-num">25+</span>
              <span className="about-gen__card-label">Years of Fitness Experience</span>
            </div>
          </div>
          <div className="about-gen__right">
            <p className="about-gen__text">
              Harum congue eiusmod minus saepe, qui quis facere dolor scelerisque magnis ea nec parturient, iste odio, accumsan distinctio quibusdam nonummy placerat, habitasse sit. Iaculis consequatur iaculis accusantium. Ligula quasi ligula suspendisse quos! A numquam qui commodo nemo corporis hac laboris.
            </p>
            <div className="about-gen__pink-grid">
              {PINK_CARDS.map((item) => (
                <div key={item.label} className="about-gen__pink-card">
                  <span className="about-gen__pink-icon" aria-hidden>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="12" fill="#C50D3E" />
                      <path d="M8 13l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="about-gen__pink-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
