import Image from 'next/image';

const CARDS = [
  { title: 'Pro Equipment', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/images/about_page/about_choose1.jpg' },
  { title: 'Expert Trainers', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/images/about_page/about_choose2.jpg' },
  { title: 'Health Report', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/images/about_page/about_choose3.jpg' },
];

export default function AboutWhyChoose() {
  return (
    <section className="about-wcu">
      <div className="content-inner about-wcu__inner">
        <div className="about-wcu__header">
          <div className="about-wcu__header-left">
            <div className="about-wcu__subtitle-wrap">
              <span className="about-wcu__line" aria-hidden />
              <span className="about-wcu__subtitle">WHY CHOOSE US</span>
              <span className="about-wcu__line" aria-hidden />
            </div>
            <h2 className="about-wcu__heading">
              Personal <span className="about-wcu__heading-accent">Training</span> Will <span className="about-wcu__heading-accent">Work For You</span>
            </h2>
          </div>
          <p className="about-wcu__text">
            From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
          </p>
        </div>
        <div className="about-wcu__grid">
          {CARDS.map((card) => (
            <div key={card.title} className="about-wcu__card">
              <div className="about-wcu__card-bg">
                <Image src={card.image} alt="" fill className="about-wcu__card-img" sizes="397px" />
                <div className="about-wcu__card-overlay" aria-hidden />
              </div>
              <h3 className="about-wcu__card-title">{card.title}</h3>
              <p className="about-wcu__card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
