import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import FeaturesSection from "@/components/landing-page/FeaturesSection";
import TestimonialsSection from "@/components/landing-page/TestimonialsSection";
import HowItWorksSection from "@/components/landing-page/HowItWorksSection";
import PricingSection from "@/components/landing-page/PricingSection";
import CTASection from "@/components/landing-page/CTASection";
import FooterSection from "@/components/landing-page/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
