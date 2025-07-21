import HeroSection from "./Components/Hero/HeroSection";
import CardCarousel from "./Components/Home/Services/ServicesSection";
import LogoAnimator from "./Reusables/LogoAnimator";

export default function Home() {
  return (
    <>
      <LogoAnimator />
      <HeroSection />
      <CardCarousel />
    </>
  );
}
