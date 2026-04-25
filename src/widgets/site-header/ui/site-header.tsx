import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Cabeçalho">
      <a className="brand-mark" href="#inicio" aria-label="Vanessa Soares">
        <Image
          src="/logo/logo.png"
          alt="Vanessa Soares"
          width={170}
          height={255}
          priority
        />
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#videos">Vídeos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
