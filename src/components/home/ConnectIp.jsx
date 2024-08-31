import { MdDevices } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import TrailButton from "../TrailButton";
import ConnectSlider from "./ConnectSlider";

const ConnectIpTv = () => {
  const cardDatas = [
    {
      title: "Video On Demand",
      des: "Enjoy more than 160000 TV Channels, Movies, and TV shows! with Features of Catch Up & EPG (Electronic Program Guide) for all European Channels",
      color: "",
      icon: (
        <IoVideocamOutline className="text-[55px] lg:text-[80px] text-red-600" />
      ),
    },
    {
      title: "Compatibility",
      des: "Our IPTV server support all the TV boxes : Android, Smart Tv, Mag Box, Firestick, IOS, Windows and Mac OS, . All devices can be supported on request",
      color: "",
      icon: <MdDevices className="text-[55px] lg:text-[80px] text-white" />,
    },
    {
      title: "Money back Guarantee",
      des: "If you have a problem after using your IPTV subscription or you don’t like it. We offer a 7 Days Money Back Guarantee.",
      color: "",
      icon: (
        <FaSackDollar className="text-[55px] lg:text-[80px] text-red-600" />
      ),
    },
  ];

  return (
    <div className="font-inter pb-10">
      <div className="parallax">
        <div className="flex flex-col lg:flex-row lg:justify-between items-end lg:items-start commonPadding bg-slate-950 bg-opacity-[90%] h-full min-h-[350px]">
          <h1 className="mt-14 text-[35px] lg:text-[40px] text-white font-bold leading-none lg:leading-normal">
            Call Us Now and Connect IPTV
          </h1>

          <TrailButton className="mt-12">Free IPTV Trail</TrailButton>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 commonPadding gap-6  mt-[-100px] lg:mt-[-160px]">
        {cardDatas?.map((item, i) => (
          <div
            key={i}
            className="lg:w-[410px] lg:h-[400px] flex flex-col items-center justify-center gap-8 lg:gap-4 lg:p-7 p-10 rounded-2xl shadow-lg odd:bg-white even:bg-red-600 even:text-white text-center border"
          >
            {item?.icon}

            <h1 className="text-xl lg:text-2xl font-bold uppercase">
              {item?.title}
            </h1>
            <p className="lg:mt-4 text-sm lg:text-base text-center leading-loose">
              {item?.des}
            </p>
          </div>
        ))}
      </div>

      <div className="commonPadding">
        <ConnectSlider />
      </div>
    </div>
  );
};

export default ConnectIpTv;
