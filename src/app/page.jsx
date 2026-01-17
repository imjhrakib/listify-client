import HeroSection from "./components/home/HeroSection";
import Features from "./components/home/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section Full Width & Height */}
      <HeroSection />

      {/* Features Section */}
      <Features />
    </div>
  );
}
