"use client";

import Flipbook from "@/components/ui/Flipbook";
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
import SocialVulnerabilitySlide from "@/components/slides/SocialVulnerabilitySlide";
import AffordableHousingSlide from "@/components/slides/AffordableHousingSlide";
import DefinitionSlide from "@/components/slides/DefinitionSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import CleanEnergySlide from "@/components/slides/CleanEnergySlide";
import DigitalSlide from "@/components/slides/DigitalSlide";
import InfrastructureSlide from "@/components/slides/InfrastructureSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";

export default function SlidesBackup() {
  return (
    <main className="relative">
      <Flipbook>
        {[
          <HeroSlide key="hero" />,
          <PillarsSlide key="pillars" />,
          <ConstitutionalAutonomySlide key="autonomy" />,
          <PublicServiceSlide key="public-service" />,
          <DigitalConnectivitySlide key="digital-connectivity" />,
          <EconomicGrowthSlide key="economic-growth" />,
          <SustainableTourismSlide key="tourism" />,
          <FoodSecuritySlide key="food-security" />,
          <PublicInfrastructureSlide key="public-infrastructure" />,
          <EducationSlide key="education" />,
          <HealthcareSlide key="healthcare" />,
          <SocialVulnerabilitySlide key="social-vulnerability" />,
          <AffordableHousingSlide key="housing" />,
          <DefinitionSlide key="definition" />,
          <ImpactSlide key="impact" />,
          <CleanEnergySlide key="clean-energy" />,
          <DigitalSlide key="digital" />,
          <InfrastructureSlide key="infrastructure" />,
          <ClosingSlide key="closing" />,
        ]}
      </Flipbook>
    </main>
  );
}

