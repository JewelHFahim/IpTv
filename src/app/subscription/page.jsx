import { FaRegCheckCircle, FaWifi } from "react-icons/fa";
import bg from "../../../public/assets/htt.webp";
import ContactWhatsApp from "@/components/ContactWhatsApp";
import TrailButton from "@/components/TrailButton";

const Subscription = () => {
  const datas = [
    { title: "+30K Worldwide Channels" },
    { title: "+95,000 VODs & Series." },
    { title: "4K & Full HD Quality" },
    { title: "PPV Channels" },
    { title: "EPG Available" },
    { title: "Friendly With VPN" },
  ];

  const priceData = [
    {
      name: "Simple Package",
      duration: "1 Month",
      price: "16,99 $",
      facilities: datas,
      trailBtn: true,
      paypalBtn: false,
      creditCard: false,
      cryptoBtn: false,
      moneyBack: false,
      bgColor: "",
      textColor: "text-black",
    },
    {
      name: "Basic Package",
      duration: "3 Months",
      price: "35,99 $",
      facilities: datas,
      trailBtn: false,
      creditCard: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "",
      textColor: "text-black",
    },
    {
      name: "Premium Package",
      duration: "6 Months",
      price: "46,99 $",
      facilities: datas,
      trailBtn: false,
      creditCard: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
    {
      name: "Luxury Package",
      duration: "12 Months",
      price: "63,99 $",
      facilities: datas,
      trailBtn: false,
      creditCard: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
    {
      name: "Platinuim Package",
      duration: "24 Months",
      price: "99,99 $",
      facilities: datas,
      trailBtn: false,
      creditCard: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
    {
      name: "2 Accounts",
      duration: "12 Months",
      price: "99,99 $",
      facilities: datas,
      trailBtn: false,
      creditCard: true,
      paypalBtn: true,
      cryptoBtn: true,
      moneyBack: true,
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
  ];

  return (
    <div>
      <div className="px-[20px] lg:px-10">
        <div className="mt-24 flex flex-col justify-center items-center">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            PRICING PACKAGE
          </h3>
          <h1 className="mt-2 text-[40px] lg:text-[52px] text-center font-bold leading-tight">
            Choose The Right One For You
          </h1>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-24">
          {priceData.map((item, i) => (
            <div
              key={i}
              className={`w-full lg:h-[900px] shadow-xl hover:shadow-2xl transition-shadow duration-300 px-10 py-12 rounded-[18px] border border-slate-200 ${item.bgColor} ${item.textColor}`}
            >
              <div className="flex flex-col justify-center items-center border-b border-black border-opacity-[30%] pb-10">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  {item.name}
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold mt-3">
                  {item.duration}
                </h2>
                <h1 className="text-4xl lg:text-5xl text-red-600 font-bold mt-4">
                  {item.price}
                </h1>
              </div>

              <div className="flex flex-col gap-3 mt-10 border-b border-black border-opacity-[30%] pb-10">
                {datas.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 lg:text-lg font-bold"
                  >
                    <FaRegCheckCircle className="text-red-600 text-2xl" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <ContactWhatsApp />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-28 px-[20px] lg:px-[120px] py-[50px] lg:py-0 bg-green-20 lg:h-[500px] cover bg-center relative flex  justify-start items-center"
        style={{ backgroundImage: "url(/assets/htt.webp)"}}
      >
        <div className="z-[999] text-white lg:w-1/2">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            PROTOIPTV
          </h3>
          <h1 className="mt-2 text-[35px] lg:text-[52px] font-bold leading-tight">
            We Provide Best Quality IPTV For Many Devices
          </h1>
          <p className="mt-6 leading-loose">
            Our IPTV work on All devices such as Windows, OS, Smart TVs,
            Android, Amazon Fire Stick, MAG and anything else that supports M3U
            or portals.
          </p>

          <TrailButton className="mt-12">Get Free Trail</TrailButton>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-[80%]"></div>
      </div>
    </div>
  );
};

export default Subscription;
