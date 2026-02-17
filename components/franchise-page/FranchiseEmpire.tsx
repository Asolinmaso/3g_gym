import Image from 'next/image';

export default function FranchiseEmpire() {
  return (
    <section className="franchise-empire">
      <div className="content-inner franchise-empire__inner">
        <div className="franchise-empire__content">
          <h2 className="franchise-empire__heading">
            Build Your <span className="franchise-empire__accent">Fitness Empire</span>
            <br />
            <span className="franchise-empire__accent">At 3RD GEN</span>
          </h2>
          <p className="franchise-empire__text">
            we believe fitness is not just about lifting weights it&apos;s about building strength, confidence, and a healthier lifestyle. Our gym is designed to motivate you at every step, whether you&apos;re a beginner or a seasoned athlete. We offer a fully equipped training space, expert-certified trainers, and a supportive environment that pushes you to become the best version of yourself. From strength training and cardio to functional workouts and personal training, we focus on results-driven fitness programs tailored to your goals.
          </p>
          <a href="#franchise-contact" className="franchise-empire__cta">
            Enquire Now
            <span className="franchise-empire__cta-arrow" aria-hidden>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
          </a>
        </div>
        <div className="franchise-empire__images">
          <div className="franchise-empire__img-wrap franchise-empire__img-wrap--1">
            <Image src="/about_us/small_image.png" alt="" fill className="franchise-empire__img" sizes="321px" />
          </div>
          <div className="franchise-empire__img-wrap franchise-empire__img-wrap--2">
            <Image src="/about_us/big_image.png" alt="" fill className="franchise-empire__img" sizes="316px" />
          </div>
        </div>
      </div>
    </section>
  );
}
