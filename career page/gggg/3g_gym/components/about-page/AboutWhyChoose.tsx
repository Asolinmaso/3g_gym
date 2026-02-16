import Image from 'next/image';

const CARDS = [
  { title: 'Pro Equipment', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/services/Strength_training.png' },
  { title: 'Expert Trainers', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/services/Personal_training.png' },
  { title: 'Health Report', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', image: '/services/Nutrition_guidance.png' },
];

export default function AboutWhyChoose() {
  return (
    <section className="about-wcu">
      <div className="content-inner about-wcu__inner">
        <div className="about-wcu__subtitle-wrap">
          <span className="about-wcu__line about-wcu__line--left" aria-hidden />
          <span className="about-wcu__subtitle">WHY CHOOSE US</span>
          <span className="about-wcu__line about-wcu__line--right" aria-hidden />
        </div>
        <h2 className="about-wcu__heading">
          Personal Training <span className="about-wcu__heading-accent">Will Work</span> For You.
        </h2>
        <p className="about-wcu__text">
          From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.
        </p>
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
