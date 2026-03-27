import Image from 'next/image';

export default function FranchiseEmpire() {
  return (
    <section className="franchise-empire">
      <div className="content-inner franchise-empire__inner">
        <div className="franchise-empire__content">
          <h2 className="franchise-empire__heading">
            <span className="franchise-empire__heading-line franchise-empire__heading-line--1">
              <span className="franchise-empire__heading-black">Build Your</span>{" "}
              <span className="franchise-empire__accent">Fitness Empire</span>
            </span>
            <span className="franchise-empire__heading-line franchise-empire__heading-line--2">
              <span className="franchise-empire__heading-black">At</span>{" "}
              <span className="franchise-empire__accent">3RD GEN</span>
            </span>
          </h2>
          <p className="franchise-empire__text">
            we believe fitness is not just about lifting weights it&apos;s about building strength, confidence, and a healthier lifestyle. Our gym is designed to motivate you at every step, whether you&apos;re a beginner or a seasoned athlete. We offer a fully equipped training space, expert-certified trainers, and a supportive environment that pushes you to become the best version of yourself. From strength training and cardio to functional workouts and personal training, we focus on results-driven fitness programs tailored to your goals.
          </p>
          <a href="#franchise-contact" className="btn-pill btn--red">
            Enquire Now
            <span className="btn-pill__arrow" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        <div className="franchise-empire__images">
          <div className="franchise-empire__img-wrap franchise-empire__img-wrap--1">
            <Image src="/images/franchise_page/franchise_empire.jpg" alt="" fill className="franchise-empire__img" sizes="321px" />
          </div>
          <div className="franchise-empire__img-wrap franchise-empire__img-wrap--2">
            <Image src="/images/franchise_page/franchise_empire2.jpg" alt="" fill className="franchise-empire__img" sizes="316px" />
          </div>
        </div>
      </div>
    </section>
  );
}
