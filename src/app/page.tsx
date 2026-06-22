import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <PortfolioShowcase />
      <WhyChoose />
      <Process />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
