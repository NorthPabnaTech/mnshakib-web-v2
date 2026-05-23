import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutNarrative } from "@/components/sections/AboutNarrative";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About — Nazmus Shakib",
  description:
    "Dhaka, Copenhagen, Toronto — three markets, one operating principle. Founder of UpscaleBD, CSMO at MAAC.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrowNumber="01"
        eyebrow="About"
        title={site.about.titleParts}
        subtitle={site.about.intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutNarrative />
      <TestimonialsCarousel />
    </>
  );
}
