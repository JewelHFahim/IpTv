"use client"

import { useState, useRef, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const FaqsCard = ({ faqsList, idx, isOpen, handleOpenAnswer }) => {
  const answerElRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${answerElRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="space-y-2 mt-2 overflow-hidden" key={idx}>
      <h4
        className="cursor-pointer pb-2 flex items-center justify-between uppercase text-red-600 font-bold border-b"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
      </h4>

      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <div ref={answerElRef} className="py-2">
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const ChannelList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsList = [
    {
      q: "How much",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "What is",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
  ];

  // Split the faqsList into three parts
  const x = Math.ceil(faqsList.length / 3);
  const part1 = faqsList.slice(0, x);
  const part2 = faqsList.slice(x, x * 2);
  const part3 = faqsList.slice(x * 2);

  const handleOpenAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-[20px] lg:px-[120px] pb-10">
      <div className="mt-16 lg:mt-24 flex flex-col justify-center items-center">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          CHANNELS LIST
        </h3>
        <h1 className="mt-5 text-[26px] lg:text-[30px] font-bold lg:w-2/3 text-center leading-tight">
          Discover Your Favorite Channels From Anywhere In The World With Our
          Extensive Selection.
        </h1>
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-x-12">
        <div>
          {part1.map((item, idx) => (
            <FaqsCard
              key={idx}
              idx={idx}
              faqsList={item}
              isOpen={openIndex === idx}
              handleOpenAnswer={() => handleOpenAnswer(idx)}
            />
          ))}
        </div>

        <div>
          {part2.map((item, idx) => (
            <FaqsCard
              key={idx + part1.length}
              idx={idx + part1.length}
              faqsList={item}
              isOpen={openIndex === idx + part1.length}
              handleOpenAnswer={() => handleOpenAnswer(idx + part1.length)}
            />
          ))}
        </div>

        <div>
          {part3.map((item, idx) => (
            <FaqsCard
              key={idx + part1.length + part2.length}
              idx={idx + part1.length + part2.length}
              faqsList={item}
              isOpen={openIndex === idx + part1.length + part2.length}
              handleOpenAnswer={() =>
                handleOpenAnswer(idx + part1.length + part2.length)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
