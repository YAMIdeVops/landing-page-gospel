import { siteData } from "@/shared/config/site";

export function ContactSection() {
  return (
    <section className="contact" id="contato">
      <p className="eyebrow">Agenda e convites</p>
      <h2>Permita que Deus fale ao seu coração através do louvor</h2>
      <a
        className="button primary"
        href={siteData.whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        Agenda agora
      </a>
    </section>
  );
}
