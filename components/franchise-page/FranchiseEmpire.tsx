import Image from 'next/image';

export default function FranchiseEmpire() {
  return (
    <section className="franchise-empire">
      <div className="content-inner franchise-empire__inner">
        <div className="franchise-empire__content">
          <h2 className="franchise-empire__heading">
            Build Your <span className="franchise-empire__accent">Fitness Empire</span>
          </h2>
          <p className="franchise-empire__text">
            Join the fastest growing premium gym network. We provide the blueprint, you build the community. Start your IronCore franchise journey today.
          </p>
          <a href="#franchise-contact" className="franchise-empire__cta">
            Enquire Now <span aria-hidden>&gt;&gt;&gt;</span>
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
