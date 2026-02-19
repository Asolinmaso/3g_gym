import Image from 'next/image';

const ICON_AREA = <svg width="55" height="57" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.909 13.5693C13.9095 11.0014 14.6396 8.48632 16.0144 6.31619C17.3891 4.14606 19.3522 2.40994 21.6756 1.30946C23.999 0.20898 26.5874 -0.21069 29.1401 0.0991886C31.6928 0.409067 34.1051 1.43578 36.0968 3.06008C38.0885 4.68438 39.5779 6.8396 40.3919 9.27545C41.206 11.7113 41.3114 14.3278 40.6958 16.821C40.0802 19.3143 38.769 21.582 36.9143 23.3608C35.0597 25.1395 32.7377 26.3564 30.2182 26.87V43.4279H24.7818V26.87C21.712 26.2442 18.9529 24.5785 16.9716 22.1548C14.9903 19.731 13.9084 16.6981 13.909 13.5693ZM3.32164 27.1414H16.6272V32.5702H8.18721L6.07245 51.5712H48.9275L46.8128 32.5702H38.3728V27.1414H51.6784L55 57H0L3.32164 27.1414Z" fill="#C50D3E"/></svg>;
const ICON_INVESTMENT = <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 41.1667C26.7583 41.1667 25.2679 40.5471 24.0287 39.3078C22.7894 38.0686 22.1688 36.5771 22.1667 34.8333C22.1646 33.0896 22.7852 31.5991 24.0287 30.362C25.2721 29.1249 26.7626 28.5042 28.5 28.5C30.2374 28.4958 31.7289 29.1164 32.9745 30.362C34.2201 31.6076 34.8397 33.098 34.8333 34.8333C34.827 36.5687 34.2074 38.0602 32.9745 39.3078C31.7416 40.5555 30.2501 41.1751 28.5 41.1667ZM13.8542 12.6667H43.1458L47.1833 4.59167C47.7111 3.53611 47.671 2.50694 47.063 1.50417C46.455 0.501389 45.5451 0 44.3333 0H12.6667C11.4528 0 10.5429 0.501389 9.937 1.50417C9.33111 2.50694 9.291 3.53611 9.81667 4.59167L13.8542 12.6667ZM17.1 57H39.9C44.65 57 48.6875 55.3512 52.0125 52.0537C55.3375 48.7561 57 44.7049 57 39.9C57 37.8944 56.6569 35.9417 55.9708 34.0417C55.2847 32.1417 54.3083 30.4264 53.0417 28.8958L44.8083 19H12.1917L3.95833 28.8958C2.69167 30.4264 1.71528 32.1417 1.02917 34.0417C0.343056 35.9417 0 37.8944 0 39.9C0 44.7028 1.64983 48.754 4.9495 52.0537C8.24917 55.3533 12.2993 57.0021 17.1 57Z" fill="#C50D3E"/></svg>;
const ICON_ROI = <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.002 0C12.9988 0 0 4.05434 0 9.04446C0.000244001 11.7684 3.95403 14.2258 10.0728 15.884C7.94918 14.8 6.71417 13.5462 6.71417 12.1771C6.71417 8.26853 16.6877 5.05655 29.002 5.05655C41.3162 5.05655 51.3585 8.26828 51.3585 12.1771C51.3585 13.5389 50.1019 14.8037 47.9999 15.884C54.0807 14.2262 58 11.7586 58 9.04446C58 4.05434 45.0052 0 29.002 0ZM15.8032 9.7744V13.4355H42.1895V9.7744H15.8032ZM16.3368 15.7088V41.2648H18.6167V15.7089H16.337L16.3368 15.7088ZM21.1101 15.7088C21.1953 23.2287 24.1998 27.4408 27.553 28.3385C24.1556 29.2479 21.1143 33.5576 21.1061 41.2645H36.7451C36.737 33.5572 33.7009 29.249 30.3059 28.3385C33.657 27.4399 36.656 23.2292 36.7414 15.7089H21.11L21.1101 15.7088ZM39.1584 15.7088V41.2648H41.4383V15.7089H39.1584V15.7088ZM10.0728 41.1164C3.95416 42.7741 0.000121933 45.2316 0.000121933 47.9555C0.000121933 52.9457 12.9988 57 29.0021 57C45.0054 57 58 52.9458 58 47.9558C58 45.2416 54.0807 42.7741 47.9996 41.1162C50.1019 42.1966 51.3585 43.4574 51.3585 44.8192C51.3585 48.7281 41.3163 51.9438 29.002 51.9438C16.6876 51.9438 6.71417 48.7276 6.71417 44.819C6.71417 43.4499 7.94918 42.2 10.0728 41.1161V41.1164ZM15.8032 43.5379V47.1953H42.1895V43.5379H15.8032Z" fill="#C50D3E"/></svg>;

const REQUIREMENTS = [
  { label: 'Area Requirement', value: 'Minimum 2500 Sq. Ft.', icon: ICON_AREA },
  { label: 'Initial Investment', value: '30 - 35 Lakhs', icon: ICON_INVESTMENT },
  { label: 'ROI Timeline', value: '24 - 36 Months', icon: ICON_ROI },
];

export default function FranchiseBlueprint() {
  return (
    <section className="franchise-blueprint">
      <div className="franchise-blueprint__layout">
        <div className="franchise-blueprint__left">
          <div className="franchise-blueprint__gradient-strip" aria-hidden />
          <div className="franchise-blueprint__img-main">
            <Image src="/images/franchise_page/franchise_blueprint1.png" alt="" fill className="franchise-blueprint__img" sizes="517px" />
          </div>
          <div className="franchise-blueprint__img-sub">
            <Image src="/images/franchise_page/franchise_blueprint2.jpg" alt="" fill className="franchise-blueprint__img" sizes="331px" />
          </div>
        </div>
        <div className="franchise-blueprint__right">
          <div className="franchise-blueprint__header-strip">
            <div className="franchise-blueprint__strip-row">
              <span className="franchise-blueprint__line" aria-hidden />
              <span className="franchise-blueprint__subtitle">THE BLUEPRINT</span>
            </div>
            <h2 className="franchise-blueprint__heading">
              <span className="franchise-blueprint__heading-line">What You Need</span>
            </h2>
          </div>
          <div className="franchise-blueprint__right-body">
            <span className="franchise-blueprint__heading-accent franchise-blueprint__heading-get-started">Get Started</span>
          <p className="franchise-blueprint__text">
            We look for partners who are passionate about fitness and committed to delivering a premium experience.
          </p>
          <div className="franchise-blueprint__cards">
            {REQUIREMENTS.map((item) => (
              <div key={item.label} className="franchise-blueprint__card">
                <span className="franchise-blueprint__card-icon" aria-hidden>{item.icon}</span>
                <div className="franchise-blueprint__card-text">
                  <span className="franchise-blueprint__card-label">{item.label}</span>
                  <span className="franchise-blueprint__card-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
