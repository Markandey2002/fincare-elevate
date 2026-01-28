import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="section-separator" />
      <ServicesSection />
      <div className="section-separator" />
      <WhyUsSection />
      <div className="section-separator" />
      <HowItWorksSection />
      <div className="section-separator" />
      <TestimonialsSection />
      <div className="section-separator" />
      <CTASection />
    </Layout>
  );
};

export default Index;
