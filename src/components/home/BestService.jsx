import { FaHandHoldingDollar, FaHeadset, FaSackDollar } from "react-icons/fa6";
import { MdOutlineRefresh, MdOutlineSettings } from "react-icons/md";
import { PiLaptop } from "react-icons/pi";
import SectionInfos from "../SectionInfos";

const BestService = () => {
  const datas = [
    {
      title: "30K+ World Channels",
      des: "Get full access to over 30 000 TV Channels and never miss any of your favorite TV Shows or Sport Games.",
      icon: <PiLaptop />,
    },
    {
      title: "Fast Support 24/7",
      des: "Once you subscribed for ONE IPTV servcie, we are with you until the end. Just contact us for your questions.",
      icon: <FaHeadset />,
    },
    {
      title: "Secure Purchase",
      des: "By selecting “Get Service” you will be redirected to payment page and you would choose your desired payment method.",
      icon: <FaHandHoldingDollar />,
    },
    {
      title: "Continuously Updating",
      des: "We Continuously monitor lines to fix the problem and adding new TV channels and VODs to list.",
      icon: <MdOutlineRefresh />,
    },
    {
      title: "Flexible Tariff Plans",
      des: "You can pick from 1 month to 12 months of service in best price. Compare STARLINETV with Others.",
      icon: <FaSackDollar />,
    },
    {
      title: "Instant Activation!",
      des: "A few moments after your order the service will be ready and you get full access to all features.",
      icon: <MdOutlineSettings />,
    },
  ];

  return (
    <div className=" mt-20 lg:mt-28 commonPaddin px-10">
      <SectionInfos
        title="OUR BEST SERVICES"
        info="Live Sport And TV-Shows For Best Friends"
        className="text-center lg:text-left"
      >
        With our complete and large collection of TV channels, never miss your
        favorite sport games and TV shows. You can be the first one to see your
        new episode of your favorite TV series.
      </SectionInfos>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
        {datas.map((item, i) => (
          <div
            key={i}
            className="border border-slate-200 w-full lg:h-[350px] rounded-[15px] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col items-center justify-center px-5 py-14 lg:px-5 lg:py-5 text-center gap-5"
          >
            <div className="text-red-600 text-5xl lg:text-6xl">{item.icon}</div>

            <h2 className="text-2xl lg:text-3xl font-bold">{item.title}</h2>

            <p className="leading-loose">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestService;
