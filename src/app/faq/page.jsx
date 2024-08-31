"use client"

import { FaWifi } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import TrailButton from "@/components/TrailButton";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium border-b border-red-600">
        <span className={`${state ? "text-red-600" : ""}`}>{faqsList.q}</span>
        {state ? (
          <IoIosArrowRoundUp className="text-red-600 text-2xl" />
        ) : (
          <IoIosArrowDown />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqsList = [
    {
      q: "How much time do you need for casino software?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "What is cost of a online spinner wheel game?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I get only API integration service?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can you make a custom app?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
  ];

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
    <div className="mb-16">
      <div className="commonPadding">
        <div className="mt-24 flex flex-col justify-center items-center">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            FAQ
          </h3>
          <h1 className="mt-2 text-[35px] lg:text-[52px] font-bold leading-tight text-center">
            What Can We Help You?
          </h1>
        </div>

        <div className="mt-14 lg:mx-20">
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} />
          ))}
        </div>
      </div>

      <div className="mt-10">
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
      </div>
    </div>
  );
};

export default Faq;
