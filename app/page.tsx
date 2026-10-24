"use client";

import CifraHeader from "@/components/sections/header";
import MetricsLogos from "@/components/sections/metrics-logos";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import Integrations from "@/components/sections/integrations";
import Blog from "@/components/sections/blog";
import CtaFooter from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CifraHeader />
      <MetricsLogos />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Integrations />
      <Blog />
      <CtaFooter />
    </main>
  );
}
