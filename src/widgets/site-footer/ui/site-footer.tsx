import Image from "next/image";

import { siteData } from "@/shared/config/site";
import {
  InstagramIcon,
  MailIcon,
  YoutubeIcon,
} from "@/shared/ui/icons/contact-icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Image
        src="/logo/logo.png"
        alt="Vanessa Soares"
        width={170}
        height={255}
      />
      <div className="footer-contacts" aria-label="Contatos">
        <a
          className="footer-contact"
          href={siteData.instagram.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Vanessa Soares Oficial"
        >
          <InstagramIcon />
          <span>{siteData.instagram.label}</span>
        </a>
        <a
          className="footer-contact"
          href={siteData.email.url}
          aria-label="Gmail Vanessa Soares"
        >
          <MailIcon />
          <span>{siteData.email.label}</span>
        </a>
        <a
          className="footer-contact"
          href={siteData.youtube.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Canal no YouTube Vanessa Soares"
        >
          <YoutubeIcon />
          <span>{siteData.youtube.label}</span>
        </a>
      </div>
      <div className="footer-donation">
        <p className="eyebrow">Abençoe este ministério, chave pix:</p>
        <p className="donation-key">{siteData.pixKey}</p>
      </div>
      <span>© 2026 Vanessa Soares. Todos os direitos reservados.</span>
    </footer>
  );
}
