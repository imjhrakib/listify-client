import HeroSection from "./components/home/HeroSection";
import Features from "./components/home/Features";
import ItemsHighlights from "./components/home/ItemsHighlight";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import CTASection from "./components/home/CTAsection";
import AboutSection from "./components/home/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section Full Width & Height */}
      <HeroSection />
      <ItemsHighlights></ItemsHighlights>
      {/* Features Section */}
      <Features />
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <AboutSection></AboutSection>
      <CTASection></CTASection>
    </div>
  );
}
