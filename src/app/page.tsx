"use client";

import HeroSlide from "@/components/slides/HeroSlide";
import PillarsSlide from "@/components/slides/PillarsSlide";
import ConstitutionalAutonomySlide from "@/components/slides/ConstitutionalAutonomySlide";
import PublicServiceSlide from "@/components/slides/PublicServiceSlide";
import DigitalConnectivitySlide from "@/components/slides/DigitalConnectivitySlide";
import EconomicGrowthSlide from "@/components/slides/EconomicGrowthSlide";
import SustainableTourismSlide from "@/components/slides/SustainableTourismSlide";
import FoodSecuritySlide from "@/components/slides/FoodSecuritySlide";
import PublicInfrastructureSlide from "@/components/slides/PublicInfrastructureSlide";
import EducationSlide from "@/components/slides/EducationSlide";
import HealthcareSlide from "@/components/slides/HealthcareSlide";
import AffordableHousingSlide from "@/components/slides/AffordableHousingSlide";
import DefinitionSlide from "@/components/slides/DefinitionSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import CleanEnergySlide from "@/components/slides/CleanEnergySlide";
import DigitalSlide from "@/components/slides/DigitalSlide";
import InfrastructureSlide from "@/components/slides/InfrastructureSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import SideNavigation from "@/components/ui/SideNavigation";
import ScrollProgress from "@/components/ui/ScrollProgress";

const slideIds = [
  "hero",
  "pillars",
  "autonomy",
  "public-service",
  "digital-connectivity",
  "economic-growth",
  "tourism",
  "food-security",
  "public-infrastructure",
  "education",
  "healthcare",
  "housing",
  "definition",
  "impact",
  "clean-energy",
  "digital",
  "infrastructure",
  "closing",
];

export default function Home() {
  return (
    <main className="relative snap-container">
      {/* Progress bar */}
      <ScrollProgress />

      {/* Side navigation dots */}
      <SideNavigation totalSlides={slideIds.length} slideIds={slideIds} />

      {/* Opening */}
      <HeroSlide />
      <PillarsSlide />

      {/* Policy Focus Areas - Priority Order */}
      <ConstitutionalAutonomySlide />
      <PublicServiceSlide />
      <DigitalConnectivitySlide />
      <EconomicGrowthSlide />
      <SustainableTourismSlide />
      <FoodSecuritySlide />
      <PublicInfrastructureSlide />
      <EducationSlide />
      <HealthcareSlide />
      <AffordableHousingSlide />

      {/* Sustainable Job Creation Section */}
      <DefinitionSlide />
      <ImpactSlide />
      <CleanEnergySlide />
      <DigitalSlide />
      <InfrastructureSlide />

      {/* Closing */}
      <ClosingSlide />
    </main>
  );
}
