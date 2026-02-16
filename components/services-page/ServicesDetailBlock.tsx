import Image from 'next/image';
import type { FC } from 'react';
import type { IconType } from './services-detail-data';

const IconBlock: FC<{ type: IconType }> = ({ type }) => (
  <div className="services-detail__icon" aria-hidden>
    {type === 'gym' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4v32M8 12h24M8 28h24M12 8v24M28 8v24" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === 'scale' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6v28M12 14l8-8 8 8M12 26l8 8 8-8" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === 'weights' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="12" width="24" height="16" rx="2" stroke="#C50D3E" strokeWidth="2" />
        <path d="M16 12V8h8v4M20 28v4" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === 'person' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="12" r="6" stroke="#C50D3E" strokeWidth="2" />
        <path d="M8 36c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === 'group' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="12" r="5" stroke="#C50D3E" strokeWidth="2" />
        <circle cx="26" cy="12" r="5" stroke="#C50D3E" strokeWidth="2" />
        <path d="M6 32c0-4.4 3.6-8 8-8s8 3.6 8 8M22 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === 'nutrition' && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6l-8 12h6v12h4V18h6L20 6z" fill="#C50D3E" />
      </svg>
    )}
  </div>
);

const TickIcon = () => (
  <span className="services-detail__tick" aria-hidden>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#C50D3E">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  </span>
);

export type ServiceDetail = {
  id: string;
  title: string;
  icon: IconType;
  whoItFor: string;
  benefits: string[];
  duration: string;
  intensity: string;
  image: string;
  imageLeft: boolean;
};

export default function ServicesDetailBlock({ service }: { service: ServiceDetail }) {
  const { title, icon, whoItFor, benefits, duration, intensity, image, imageLeft } = service;

  return (
    <div className="services-detail">
      <div className={`services-detail__row ${imageLeft ? '' : 'services-detail__row--reverse'}`}>
        <div className="services-detail__image-wrap">
          <Image
            src={image}
            alt={title}
            fill
            className="services-detail__image"
            sizes="(max-width: 1024px) 100vw, 612px"
          />
        </div>
        <div className="services-detail__content">
          <div className="services-detail__header">
            <IconBlock type={icon} />
            <span className="services-detail__line" />
          </div>
          <h2 className="services-detail__title">{title}</h2>
          <div className="services-detail__who">
            <h3 className="services-detail__subheading">Who It&apos;s For</h3>
            <p className="services-detail__text">{whoItFor}</p>
          </div>
          <div className="services-detail__benefits">
            <h3 className="services-detail__subheading">Benefits</h3>
            <ul className="services-detail__list">
              {benefits.map((b) => (
                <li key={b} className="services-detail__list-item">
                  <TickIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="services-detail__duration">
            <h3 className="services-detail__subheading">Duration / Intensity</h3>
            <p className="services-detail__meta">
              {duration}
              {intensity && (
                <>
                  <span className="services-detail__dot" /> {intensity}
                </>
              )}
            </p>
          </div>
          <a href="/contact" className="services-detail__cta">
            Enquire Now <span aria-hidden>&gt;&gt;&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
