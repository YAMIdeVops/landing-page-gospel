import { AboutSection } from "@/widgets/about/ui/about-section";
import { ContactSection } from "@/widgets/contact/ui/contact-section";
import { HeroSection } from "@/widgets/hero/ui/hero-section";
import { SiteFooter } from "@/widgets/site-footer/ui/site-footer";
import { SiteHeader } from "@/widgets/site-header/ui/site-header";
import { VideosSection } from "@/widgets/videos/ui/videos-section";

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <VideosSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
