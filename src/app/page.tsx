import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Process } from "@/components/sections/Process";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <Process />
      <WhyChoose />
      <PortfolioShowcase />
      <Pricing />
      <ContactCTA />
    </>
  );
}
