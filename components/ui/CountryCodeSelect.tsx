'use client';

import { useState, useRef, useEffect } from 'react';

export const COUNTRY_CODES = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'US / Canada' },
  { code: '+44', country: 'UK' },
  { code: '+971', country: 'UAE' },
  { code: '+61', country: 'Australia' },
  { code: '+81', country: 'Japan' },
  { code: '+86', country: 'China' },
  { code: '+49', country: 'Germany' },
  { code: '+33', country: 'France' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+31', country: 'Netherlands' },
  { code: '+65', country: 'Singapore' },
  { code: '+60', country: 'Malaysia' },
  { code: '+92', country: 'Pakistan' },
  { code: '+880', country: 'Bangladesh' },
  { code: '+94', country: 'Sri Lanka' },
  { code: '+977', country: 'Nepal' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+27', country: 'South Africa' },
  { code: '+55', country: 'Brazil' },
  { code: '+52', country: 'Mexico' },
  { code: '+7', country: 'Russia' },
  { code: '+82', country: 'South Korea' },
  { code: '+353', country: 'Ireland' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+358', country: 'Finland' },
  { code: '+45', country: 'Denmark' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+48', country: 'Poland' },
  { code: '+90', country: 'Turkey' },
  { code: '+20', country: 'Egypt' },
  { code: '+234', country: 'Nigeria' },
  { code: '+254', country: 'Kenya' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+84', country: 'Vietnam' },
  { code: '+66', country: 'Thailand' },
] as const;

interface CountryCodeSelectProps {
  value?: string;
  onChange?: (code: string) => void;
  className?: string;
  triggerClassName?: string;
  dropdownClassName?: string;
  variant?: 'career-apply' | 'contact-form' | 'franchise-contact';
}

export function CountryCodeSelect({
  value = '+91',
  onChange,
  className = '',
  triggerClassName = '',
  dropdownClassName = '',
  variant = 'career-apply',
}: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const current = COUNTRY_CODES.find((c) => c.code === selected) ?? COUNTRY_CODES[0];

  const handleSelect = (code: string) => {
    setSelected(code);
    onChange?.(code);
    setOpen(false);
  };

  const p = variant === 'career-apply' ? 'career-apply-country' : variant === 'franchise-contact' ? 'franchise-contact-country' : 'contact-form-country';
  return (
    <div ref={containerRef} className={`${p}-wrap ${className}`.trim()}>
      <button
        type="button"
        className={`${p}-trigger ${triggerClassName}`.trim()}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Country code"
      >
        <span className={`${p}-value`}>{current.code}</span>
        <span className={`${p}-chevron`} aria-hidden>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div role="listbox" className={`${p}-dropdown ${dropdownClassName}`.trim()} aria-label="Country code list">
          {COUNTRY_CODES.map(({ code, country }) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={selected === code}
              className={`${p}-option ${selected === code ? `${p}-option--selected` : ''}`.trim()}
              onClick={() => handleSelect(code)}
            >
              <span>{code}</span>
              <span>{country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
