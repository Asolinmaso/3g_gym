import Image from "next/image";
import type { FC } from "react";
import type { IconType } from "./services-detail-data";

const IconBlock: FC<{ type: IconType }> = ({ type }) => (
  <div className="services-detail__icon" aria-hidden>
    {type === "gym" && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4v32M8 12h24M8 28h24M12 8v24M28 8v24"
          stroke="#C50D3E"
          strokeWidth="2"
        />
      </svg>
    )}
    {type === "scale" && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 6v28M12 14l8-8 8 8M12 26l8 8 8-8"
          stroke="#C50D3E"
          strokeWidth="2"
        />
      </svg>
    )}
    {type === "weights" && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="8"
          y="12"
          width="24"
          height="16"
          rx="2"
          stroke="#C50D3E"
          strokeWidth="2"
        />
        <path d="M16 12V8h8v4M20 28v4" stroke="#C50D3E" strokeWidth="2" />
      </svg>
    )}
    {type === "person" && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="12" r="6" stroke="#C50D3E" strokeWidth="2" />
        <path
          d="M8 36c0-6.6 5.4-12 12-12s12 5.4 12 12"
          stroke="#C50D3E"
          strokeWidth="2"
        />
      </svg>
    )}
    {type === "group" && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="12" r="5" stroke="#C50D3E" strokeWidth="2" />
        <circle cx="26" cy="12" r="5" stroke="#C50D3E" strokeWidth="2" />
        <path
          d="M6 32c0-4.4 3.6-8 8-8s8 3.6 8 8M22 32c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="#C50D3E"
          strokeWidth="2"
        />
      </svg>
    )}
    {type === "nutrition" && (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0625 21.5C28.5625 21.25 30.0625 20.5 31.0625 19.25L38.8125 11.5C39.8125 10.5 39.8125 9 38.8125 8L38.5625 7.5L31.0625 15C30.5625 15.5 29.5625 15.5 28.8125 15C28.0625 14.5 28.3125 13.5 28.8125 12.75L35.3125 6.25C35.8125 5.75 35.8125 4.75 35.3125 4C34.8125 3.5 33.8125 3.5 33.0625 4L26.5625 10.5C26.0625 11 25.0625 11 24.3125 10.5C23.8125 10 23.8125 9 24.3125 8.25L31.8125 0.75L31.5625 0.5C30.5625 -0.5 29.0625 -0.5 28.0625 0.5L20.3125 8.75C19.3125 9.75 18.5625 11.25 18.3125 12.75L6.0625 0.75C5.0625 -0.25 3.5625 -1.49012e-08 2.8125 0.75L2.3125 1.25C-1.1875 4.75 0.0624996 11.75 6.0625 17.75L8.0625 19.75C9.0625 20.75 10.3125 21.5 11.8125 21.75C10.5625 22.75 9.8125 23.75 9.8125 23.75L1.3125 32.25C-0.4375 34 -0.4375 37 1.3125 38.75C3.0625 40.5 6.0625 40.5 7.8125 38.75L16.0625 30C16.5625 29.5 17.8125 28 19.3125 26.25C20.0625 27.25 20.5625 27.75 20.5625 27.75L31.3125 38.5C33.0625 40.25 36.0625 40.25 37.8125 38.5C39.5625 36.75 39.5625 33.75 37.8125 32L27.0625 21.5Z"
          fill="#C50D3E"
        />
      </svg>
    )}
    {type === "weightgain" && (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 40V34H24V30H30V24H34V30H40V34H34V40H30ZM22.25 16.25C23.4167 15.0833 24 13.6667 24 12C24 10.3333 23.4167 8.91667 22.25 7.75C21.0833 6.58333 19.6667 6 18 6C16.3333 6 14.9167 6.58333 13.75 7.75C12.5833 8.91667 12 10.3333 12 12C12 13.6667 12.5833 15.0833 13.75 16.25C14.9167 17.4167 16.3333 18 18 18C19.6667 18 21.0833 17.4167 22.25 16.25ZM14.3 12.7C14.1 12.5 14 12.2667 14 12C14 11.7333 14.1 11.5 14.3 11.3C14.5 11.1 14.7333 11 15 11C15.2667 11 15.5 11.1 15.7 11.3C15.9 11.5 16 11.7333 16 12C16 12.2667 15.9 12.5 15.7 12.7C15.5 12.9 15.2667 13 15 13C14.7333 13 14.5 12.9 14.3 12.7ZM17.3 12.7C17.1 12.5 17 12.2667 17 12C17 11.7333 17.1 11.5 17.3 11.3C17.5 11.1 17.7333 11 18 11C18.2667 11 18.5 11.1 18.7 11.3C18.9 11.5 19 11.7333 19 12C19 12.2667 18.9 12.5 18.7 12.7C18.5 12.9 18.2667 13 18 13C17.7333 13 17.5 12.9 17.3 12.7ZM20.3 12.7C20.1 12.5 20 12.2667 20 12C20 11.7333 20.1 11.5 20.3 11.3C20.5 11.1 20.7333 11 21 11C21.2667 11 21.5 11.1 21.7 11.3C21.9 11.5 22 11.7333 22 12C22 12.2667 21.9 12.5 21.7 12.7C21.5 12.9 21.2667 13 21 13C20.7333 13 20.5 12.9 20.3 12.7ZM4 36C2.9 36 1.95867 35.6087 1.176 34.826C0.393333 34.0433 0.00133333 33.1013 0 32V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H32C33.1 0 34.042 0.392 34.826 1.176C35.61 1.96 36.0013 2.90133 36 4V20.7C35.3333 20.4667 34.6667 20.292 34 20.176C33.3333 20.06 32.6667 20.0013 32 20C28.6667 20 25.8333 21.1667 23.5 23.5C21.1667 25.8333 20 28.6667 20 32C20 32.6667 20.0587 33.3333 20.176 34C20.2933 34.6667 20.468 35.3333 20.7 36H4Z"
          fill="#C50D3E"
        />
      </svg>
    )}
    {type === "dance" && (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0625 21.5C28.5625 21.25 30.0625 20.5 31.0625 19.25L38.8125 11.5C39.8125 10.5 39.8125 9 38.8125 8L38.5625 7.5L31.0625 15C30.5625 15.5 29.5625 15.5 28.8125 15C28.0625 14.5 28.3125 13.5 28.8125 12.75L35.3125 6.25C35.8125 5.75 35.8125 4.75 35.3125 4C34.8125 3.5 33.8125 3.5 33.0625 4L26.5625 10.5C26.0625 11 25.0625 11 24.3125 10.5C23.8125 10 23.8125 9 24.3125 8.25L31.8125 0.75L31.5625 0.5C30.5625 -0.5 29.0625 -0.5 28.0625 0.5L20.3125 8.75C19.3125 9.75 18.5625 11.25 18.3125 12.75L6.0625 0.75C5.0625 -0.25 3.5625 -1.49012e-08 2.8125 0.75L2.3125 1.25C-1.1875 4.75 0.0624996 11.75 6.0625 17.75L8.0625 19.75C9.0625 20.75 10.3125 21.5 11.8125 21.75C10.5625 22.75 9.8125 23.75 9.8125 23.75L1.3125 32.25C-0.4375 34 -0.4375 37 1.3125 38.75C3.0625 40.5 6.0625 40.5 7.8125 38.75L16.0625 30C16.5625 29.5 17.8125 28 19.3125 26.25C20.0625 27.25 20.5625 27.75 20.5625 27.75L31.3125 38.5C33.0625 40.25 36.0625 40.25 37.8125 38.5C39.5625 36.75 39.5625 33.75 37.8125 32L27.0625 21.5Z"
          fill="#C50D3E"
        />
      </svg>
    )}
    {type === "contest" && (
      <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6056 0.170511C24.6965 0.38071 26.2901 0.927679 27.0587 2.46914C28.7424 5.84588 27.3517 9.05537 25.8596 11.0511C24.8858 12.353 23.6326 13.578 22.1743 14.3284C21.87 14.4866 21.2502 14.7805 20.5357 14.7805C19.2036 14.7805 17.8985 14.1725 16.8279 13.413C16.6251 14.1047 16.429 14.8641 16.2599 15.6687C15.9256 17.2126 15.7444 18.7858 15.719 20.3654C18.0924 19.597 20.5199 19.6783 22.6116 20.8627C24.1836 19.6248 25.9915 18.7225 27.9242 18.2114C30.8544 17.4407 34.3705 17.5469 37.5644 19.6806C39.8522 21.2107 41.5855 24.0925 41.9349 27.2455C42.3 30.5318 41.1617 34.1255 37.7199 36.8875C35.2902 38.8358 31.5869 39.5884 28.1789 39.8619C24.6514 40.1467 20.9256 39.9523 18.0338 39.6291C12.6739 39.0324 8.55811 37.5317 5.68204 35.9834C3.79547 34.9663 1.21468 33.5605 0.396491 31.4065C-0.155731 29.9464 -0.0114769 28.1744 0.123761 26.6556C0.304078 24.6643 0.745856 22.1781 1.57306 19.4839C3.22297 14.1069 6.4529 7.74445 12.338 2.86693C14.1479 1.36616 17.1773 0.434955 19.713 0.123047C21.0203 -0.0374271 22.3952 -0.0600293 23.6056 0.170511Z" fill="#C50D3E"/>
</svg>

    )}
    {type === "dance" && (
  <Image
    src="/services/dance-icon.png"   // put your image path here
    alt="Dance Icon"
    width={40}
    height={40}
    className="services-detail__icon-img"
  />
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

export default function ServicesDetailBlock({
  service,
}: {
  service: ServiceDetail;
}) {
  const {
    title,
    icon,
    whoItFor,
    benefits,
    duration,
    intensity,
    image,
    imageLeft,
  } = service;

  return (
    <div className="services-detail">
      <div
        className={`services-detail__row ${imageLeft ? "" : "services-detail__row--reverse"}`}
      >
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
            <h3 className="services-detail__subheading">
              Duration / Intensity
            </h3>
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
