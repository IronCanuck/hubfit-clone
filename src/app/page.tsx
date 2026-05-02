import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoachingSection } from "@/components/CoachingSection";
import { EngagementSection } from "@/components/EngagementSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { OnDemandSection } from "@/components/OnDemandSection";
import { ScaleSection } from "@/components/ScaleSection";
import { MobileAppSection } from "@/components/MobileAppSection";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CoachingSection />
      <EngagementSection />
      <IntegrationsSection />
      <OnDemandSection />
      <ScaleSection />
      <MobileAppSection />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
