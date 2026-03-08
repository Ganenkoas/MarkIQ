import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-mesh relative overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <HowItWorksSection />
                <FeaturesSection />
                <TargetAudienceSection />
                <PricingSection />
                <WaitlistSection />
            </div>
        </main>
    );
}
