import { FaWifi } from "react-icons/fa";
import TrailButton from "../TrailButton";

const HeroSection = () => {

  return (
    <div className="commonPadding w-full heroSection">
      <div className="pt-14 lg:w-[50%]">
        <h3 className=" lg:text-xl uppercase font-semibold tracking-widest flex items-center gap-2">
          <FaWifi className="text-red-600" />
          Welcome To Protoiptv
        </h3>

        <h1 className="mt-2 text-[43px] lg:text-[68px] font-bold leading-tight">
          The Fastest IPTV <br /> Service Provider
        </h1>

        <p className="mt-8 font-semibold lg:font-bold leading-loose lg:text-[17px]">
          +22000 worldwide & sport channels in your Buy IPTV plan, you can watch
          your favorite sport event in best possible picture quality. Buy IPTV
          Service includes VIP Sport channels all arround the world.
        </p>
      </div>

      <TrailButton className="mt-12">Get Free Trail</TrailButton>
    </div>
  );
};

export default HeroSection;
