import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description: "Merchant Hydraulic - Leading manufacturer of hydraulic power packs, cylinders, and custom hydraulic solutions. 25+ years of engineering excellence.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <SolutionsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <InfrastructureSection />
      <CTASection />
    </>
  );
}
