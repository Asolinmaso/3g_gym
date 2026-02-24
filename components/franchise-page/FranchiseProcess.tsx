import Image from 'next/image';

const STEPS = [
  {
    num: 1,
    title: 'Franchise Enquiry',
    text: 'We look for partners who are passionate about fitness and committed to delivering a premium experience.',
    image: '/images/franchise_page/franchise_process1.png',
    red: true,
  },
  {
    num: 2,
    title: 'Discussion',
    text: 'Detailed presentation of the business model, financials, and expectations.',
    image: '/images/franchise_page/franchise_process2.jpg',
    red: false,
  },
  {
    num: 3,
    title: 'Location Approval',
    text: 'Site selection assistance and final approval of the gym premises.',
    image: '/images/franchise_page/franchise_process3.png',
    red: true,
  },
  {
    num: 4,
    title: 'Launch Support',
    text: 'Pre-launch marketing, staff hiring, and grand opening execution.',
    image: '/images/franchise_page/franchise_process4.png',
    red: false,
  },
];

export default function FranchiseProcess() {
  return (
    <section className="franchise-process">
      <div className="content-inner franchise-process__inner">
        <div className="franchise-process__subtitle-wrap">
          <span className="franchise-process__line" aria-hidden />
          <span className="franchise-process__subtitle">THE JOURNEY</span>
          <span className="franchise-process__line" aria-hidden />
        </div>
        <h2 className="franchise-process__heading">
          Franchise <span style={{ color: '#C50D3E' }}>Process</span>
        </h2>
        <div className="franchise-process__steps">
          {STEPS.map((step) => (
            <div key={step.num} className={`franchise-process__step ${step.red ? 'franchise-process__step--red' : 'franchise-process__step--black'}`}>
              <span className="franchise-process__step-num">{step.num}</span>
              <div className="franchise-process__step-content">
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
