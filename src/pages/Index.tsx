import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { WhyThennSection } from "@/components/sections/WhyThennSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyThennSection />
      <ProcessSection />
      <WorkSection />
      <AudienceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
