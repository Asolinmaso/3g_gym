import Image from 'next/image';

const STEPS = [
  {
    num: 1,
    title: 'Franchise Enquiry',
    text: 'We look for partners who are passionate about fitness and committed to delivering a premium experience.',
    image: '/rectangle-45.jpg',
    red: true,
  },
  {
    num: 2,
    title: 'Discussion',
    text: 'Detailed presentation of the business model, financials, and expectations.',
    image: '/rectangle-46.jpg',
    red: false,
  },
  {
    num: 3,
    title: 'Location Approval',
    text: 'Site selection assistance and final approval of the gym premises.',
    image: '/rectangle-48.png',
    red: true,
  },
  {
    num: 4,
    title: 'Launch Support',
    text: 'Pre-launch marketing, staff hiring, and grand opening execution.',
    image: '/rectangle-50.jpg',
    red: false,
  },
];

export default function FranchiseProcess() {
  return (
    <section className="franchise-process">
      <div className="content-inner franchise-process__inner">
        <div className="franchise-process__subtitle-wrap">
          <span className="franchise-process__line franchise-process__line--left" aria-hidden />
          <span className="franchise-process__subtitle">The Journey</span>
          <span className="franchise-process__line franchise-process__line--right" aria-hidden />
        </div>
        <h2 className="franchise-process__heading">Franchise Process</h2>
        <div className="franchise-process__steps">
          {STEPS.map((step) => (
            <div key={step.num} className={`franchise-process__step ${step.red ? 'franchise-process__step--red' : 'franchise-process__step--black'}`}>
              <div className="franchise-process__step-content">
                <span className="franchise-process__step-num">{step.num}</span>
                <h3 className="franchise-process__step-title">{step.title}</h3>
                <p className="franchise-process__step-text">{step.text}</p>
              </div>
              <div className="franchise-process__step-image">
                <Image src={step.image} alt="" fill className="franchise-process__step-img" sizes="460px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
