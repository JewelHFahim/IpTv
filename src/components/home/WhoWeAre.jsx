import { FaRegCircleCheck, FaWifi } from "react-icons/fa6";
import Image from "next/image";

const WhoWeAre = () => {
  const points = [
    {
      title: "Up to +22000 Channels",
    },
    {
      title: "Unlimited Movies",
    },
    {
      title: "Server up-time 99.9%",
    },
    {
      title: "24/7 support",
    },
  ];
  return (
    <div className="commonPadding font-inter">
      <div className="my-[50px] lg:my-[100px] flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="mt-16 lg:mt-0 lg:w-1/2 border-b border-black border-opacity-[20%] pb-8 lg:mr-8">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            Who We Are?
          </h3>

          <h1 className="mt-2 text-[35px] lg:text-[52px] font-bold leading-tight">
            An IPTV Subscription In World At The Best Price
          </h1>

          <p className="mt-6 leading-loose">
            Would you like to view all your favorite channels from Worldwide ?
            In this case, we advise you to choose a{" "}
            <span className="font-bold"> PROTOIPTV </span> subscription, which
            will allow you to benefit from a quality subscription, for the
            viewing of all of your favorite programs. Everything is done to
            facilitate your use, and why you can enjoy the best advantages while
            enjoying our service.
          </p>

          <div className="grid lg:grid-cols-2 gap-3 lg:gap-5 mt-4">
            {points.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaRegCircleCheck className="text-xl text-red-600" />
                <p className=" font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full relative">
          <div className="relative h-[50vh] lg:h-[580px]">
            <Image
              src="/assets/hyf.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-[18px]"
            />
          </div>

          <div className="absolute right-[-15px] top-[-30px] lg:right-[-50px] lg:top-[-50px] bg-white rounded-full w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] shadow-2xl flex justify-center items-center border">
            <FaWifi className="text-5xl lg:text-6xl text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
