/* eslint-disable react/prop-types */
import { FaRegMap, FaWifi } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
// import GoogleMapReact from "google-map-react";
import SectionInfos from "@/components/SectionInfos";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
    
  const datas = [
    {
      title: "Location",
      des: "99 Golden Street, UK",
      icon: <FaRegMap />,
    },
    {
      title: "24/7 Emergency",
      des: "+88 33 44 66 77",
      icon: <FiPhoneCall />,
    },
    {
      title: "Mail Us",
      des: "contact@gmail.com",
      icon: <IoMailOpenOutline />,
    },
  ];

  const defaultProps = {
    center: {
      lat: 23.760943114923084,
      lng: 90.38545542963598,
    },
    zoom: 11,
  };

  return (
    <div className=" bg-gray-50">
      <div className="pt-24 px-[20px] lg:px-[120px] flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[55%] pr-8">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            REQUEST AN IPTV TRIAL
          </h3>
          <h1 className="mt-2 text-[38px] lg:text-[52px] font-bold leading-tight">
            Let&apos;s Start Talking With Our Staff To Help You
          </h1>
          <p className="mt-8 w-[90%] leading-loose">
            Our Support work 24/24 and 7/7 to receive your ticket and help you
            for all your problems and all your questions.
          </p>
        </div>

        <div className="lg:w-[45%]">
          <h2 className="text-3xl font-bold">Please Fill Out The Form Below</h2>

          <form className="mt-5 bg-white shadow-xl flex flex-col gap-5 px-6 py-10">
            <input
              type="text"
              placeholder="name"
              className="border py-1.5 px-2"
            />
            <input
              type="text"
              placeholder="email"
              className="border py-1.5 px-2"
            />
            <textarea
              rows={5}
              type="text"
              placeholder="message"
              className="border py-1.5 px-2"
            />

            <button className="bg-red-600 py-2 uppercase text-white font-medium hover:bg-black transition-all duration-500">
              Submit Your Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 lg:mt-28 bg-gray-100 px-[20px] lg:px-[120px] py-20 text-center">
        <SectionInfos title="GET IN TOUCH" info="Let's Start Talking With Us">
          Our Support work 24/24 and 7/7 to receive your ticket and help you for
          all your problems and all your questions.
        </SectionInfos>

        <div className="grid lg:grid-cols-3 gap-5 mt-14">
          {datas.map((item, i) => (
            <div
              key={i}
              className="border border-slate-100 w-full h-[320px] rounded-[15px] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col items-center justify-center p-5 text-center gap-5"
            >
              <div className="text-red-600 text-4xl lg:text-6xl">
                {item.icon}
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold">
                {item.title}
              </h2>

              <p className="leading-loose">{item.des}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <div style={{ height: "55vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
