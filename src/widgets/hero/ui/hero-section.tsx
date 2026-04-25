import Image from "next/image";

import { siteData } from "@/shared/config/site";

export function HeroSection() {
  return (
    <section
      className="hero"
      id="inicio"
      aria-label="Apresentação de Vanessa Soares"
    >
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-bokeh hero-bokeh-left"></div>
        <div className="hero-bokeh hero-bokeh-right"></div>
        <Image
          className="hero-echo"
          src="/cantora/Vanessa.png"
          alt=""
          width={520}
          height={650}
        />
        <Image
          className="hero-portrait"
          src="/cantora/Vanessa.png"
          alt=""
          width={520}
          height={650}
          priority
        />
        <div className="hero-mist"></div>
      </div>

      <div className="hero-copy">
        <h1>Vanessa Soares</h1>
        <p className="hero-text">
          Bendiga o Senhor a minha alma!
          <br />
          Não esqueça nenhuma de suas bênçãos!
          <br />
          Salmos 103:2
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a
            className="button primary"
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Assistir vídeos
          </a>
          <a
            className="button ghost"
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Convidar
          </a>
        </div>
      </div>
    </section>
  );
}
