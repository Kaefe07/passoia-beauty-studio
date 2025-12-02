import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LooksSection from "@/components/LooksSection";
import LaunchesSection from "@/components/LaunchesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <LooksSection />
        <LaunchesSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
