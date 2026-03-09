import FeaturedProjects from "./components/featured-projects";
import HeroSection from "./components/hero-section";
import OurServices from "./components/our-services";
import SellSection from "./components/sell-section";
import WhySection from "./components/why-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <WhySection />
      <SellSection />
      <OurServices />
      <FeaturedProjects />
    </main>
  );
}
