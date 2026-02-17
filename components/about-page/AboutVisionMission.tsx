const CARDS = [
  { title: 'OUR VISION', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', icon: 'vision' },
  { title: 'OUR MISSION', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', icon: 'mission', highlight: true },
  { title: 'OUR VALUE', text: 'From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.', icon: 'value' },
];

export default function AboutVisionMission() {
  return (
    <section className="about-vm">
      <div className="about-vm__bg" aria-hidden />
      <div className="about-vm__blur about-vm__blur--1" aria-hidden />
      <div className="about-vm__blur about-vm__blur--2" aria-hidden />
      <div className="about-vm__blur about-vm__blur--3" aria-hidden />
      <div className="content-inner about-vm__inner">
        <div className="about-vm__grid">
          {CARDS.map((card) => (
            <div key={card.title} className={`about-vm__card ${card.highlight ? 'about-vm__card--highlight' : ''}`}>
              <div className="about-vm__icon-wrap">
                {card.icon === 'vision' && <div className="about-vm__icon" aria-hidden />}
                {card.icon === 'mission' && <div className="about-vm__icon" aria-hidden />}
                {card.icon === 'value' && <div className="about-vm__icon" aria-hidden />}
              </div>
              <h3 className="about-vm__title">{card.title}</h3>
              <p className="about-vm__text">{card.text}</p>
            </div>
          ))}
        </div>
        <p className="about-vm__watermark" aria-hidden>Professional Fitness</p>
      </div>
    </section>
  );
}
