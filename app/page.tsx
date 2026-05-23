import { HomeHero } from "@/components/sections/HomeHero";
import { ClientLogosStrip } from "@/components/sections/ClientLogosStrip";
import { TaglineMarquee } from "@/components/sections/TaglineMarquee";
import { NumberedSolutions } from "@/components/sections/NumberedSolutions";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientLogosStrip />
      <TaglineMarquee />
      <NumberedSolutions teaser />
      <ImpactStats />
      <TestimonialsCarousel />
    </>
  );
}
