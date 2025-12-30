"use client";

import HeroSlide from "@/components/slides/HeroSlide";
import DefinitionSlide from "@/components/slides/DefinitionSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import TargetsSlide from "@/components/slides/TargetsSlide";
import CleanEnergySlide from "@/components/slides/CleanEnergySlide";
import DigitalSlide from "@/components/slides/DigitalSlide";
import InfrastructureSlide from "@/components/slides/InfrastructureSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import SideNavigation from "@/components/ui/SideNavigation";
import ScrollProgress from "@/components/ui/ScrollProgress";

const slideIds = [
  "hero",
  "definition",
  "impact",
  "targets",
  "clean-energy",
  "digital",
  "infrastructure",
  "closing",
];

export default function Home() {
  return (
    <main className="relative">
      {/* Progress bar */}
      <ScrollProgress />

      {/* Side navigation dots */}
      <SideNavigation totalSlides={slideIds.length} slideIds={slideIds} />

      {/* Slides */}
      <HeroSlide />
      <DefinitionSlide />
      <ImpactSlide />
      <TargetsSlide />
      <CleanEnergySlide />
      <DigitalSlide />
      <InfrastructureSlide />
      <ClosingSlide />
    </main>
  );
}
