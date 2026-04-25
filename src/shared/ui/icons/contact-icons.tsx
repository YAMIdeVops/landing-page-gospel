type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
      <circle cx="12" cy="12" r="4.2"></circle>
      <circle cx="17.6" cy="6.6" r="1.1" className="fill-icon"></circle>
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2"></rect>
      <path d="M4.5 7l7.5 6 7.5-6"></path>
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3"></rect>
      <path d="M10 9.3v5.4l5-2.7-5-2.7z" className="fill-icon"></path>
    </svg>
  );
}
