import BestQuality from "@/components/home/BestQuality";
import BestService from "@/components/home/BestService";
import ConnectIpTv from "@/components/home/ConnectIp";
import HeroSection from "@/components/home/HeroSection";
import MovieSliderSection from "@/components/home/MovieSliderSection";
import PricingPackage from "@/components/home/PricingPackage";
import SupportedDevice from "@/components/home/SupportedDevice";
import Testimonial from "@/components/home/Testimonial";
import WhatsAppBtn from "@/components/home/WhatsAppBtn";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ConnectIpTv />
      <WhoWeAre />
      <MovieSliderSection />
      <PricingPackage />
      <BestQuality />
      <BestService />
      <SupportedDevice />
      <Testimonial />
      <WhatsAppBtn />
    </main>
  );
}
