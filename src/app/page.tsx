"use client";

import HeroSlide from "@/components/slides/HeroSlide";
import PillarsSlide from "@/components/slides/PillarsSlide";
import DefinitionSlide from "@/components/slides/DefinitionSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import CleanEnergySlide from "@/components/slides/CleanEnergySlide";
import DigitalSlide from "@/components/slides/DigitalSlide";
import InfrastructureSlide from "@/components/slides/InfrastructureSlide";
import ConstitutionalAutonomySlide from "@/components/slides/ConstitutionalAutonomySlide";
import EconomicGrowthSlide from "@/components/slides/EconomicGrowthSlide";
import SustainableTourismSlide from "@/components/slides/SustainableTourismSlide";
import FoodSecuritySlide from "@/components/slides/FoodSecuritySlide";
import PublicInfrastructureSlide from "@/components/slides/PublicInfrastructureSlide";
import PublicServiceSlide from "@/components/slides/PublicServiceSlide";
import DigitalConnectivitySlide from "@/components/slides/DigitalConnectivitySlide";
import AffordableHousingSlide from "@/components/slides/AffordableHousingSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import SideNavigation from "@/components/ui/SideNavigation";
import ScrollProgress from "@/components/ui/ScrollProgress";

const slideIds = [
  "hero",
  "pillars",
  "definition",
  "impact",
  "clean-energy",
  "digital",
  "infrastructure",
  "autonomy",
  "economic-growth",
  "tourism",
  "food-security",
  "public-infrastructure",
  "public-service",
  "digital-connectivity",
  "housing",
  "closing",
];

export default function Home() {
  return (
    <main className="relative">
      {/* Progress bar */}
      <ScrollProgress />

      {/* Side navigation dots */}
      <SideNavigation totalSlides={slideIds.length} slideIds={slideIds} />

      {/* Opening */}
      <HeroSlide />
      <PillarsSlide />

      {/* Slides - Sustainable Job Creation Section */}
      <DefinitionSlide />
      <ImpactSlide />
      <CleanEnergySlide />
      <DigitalSlide />
      <InfrastructureSlide />

      {/* Slides - Policy Focus Areas */}
      <ConstitutionalAutonomySlide />
      <EconomicGrowthSlide />
      <SustainableTourismSlide />
      <FoodSecuritySlide />
      <PublicInfrastructureSlide />
      <PublicServiceSlide />
      <DigitalConnectivitySlide />
      <AffordableHousingSlide />

      {/* Closing */}
      <ClosingSlide />
    </main>
  );
}
