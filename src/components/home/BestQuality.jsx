import { FaWifi } from "react-icons/fa6";
import TrailButton from "../TrailButton";

const BestQuality = () => {
  return (
    <div
      className="mt-16 commonPadding bg-green-20 lg:h-[500px] cover bg-center relative flex  justify-start items-center"
      style={{ backgroundImage: 'url(/assets/htt.webp)' }}
    >
      <div className="z-[999] text-white lg:w-1/2 py-[50px] lg:py-0">

        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          PROTOIPTV
        </h3>

        <h1 className="mt-2 text-[35px] lg:text-[52px] font-bold leading-tight">
          We Provide Best Quality IPTV For Many Devices
        </h1>

        <p className="mt-6 leading-loose">
          Our IPTV work on All devices such as Windows, OS, Smart TVs, Android,
          Amazon Fire Stick, MAG and anything else that supports M3U or portals.
        </p>

        <TrailButton className="mt-12">Get Free Trail</TrailButton>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-[80%]"></div>
    </div>
  );
};

export default BestQuality;
