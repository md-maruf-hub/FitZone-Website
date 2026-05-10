import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import BundleSection from "../components/BundleSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f3f3f3]">
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Category Section */}
      <CategorySection />

      {/* 3. Product Section */}
      <ProductSection />

      {/* 4. Bundle Section */}
      <BundleSection />

      {/* 5. Stats Section */}
      <StatsSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}