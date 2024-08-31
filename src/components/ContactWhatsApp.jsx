/* eslint-disable react/prop-types */
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactWhatsApp = ({ bgColor }) => {
  return (
    <Link
      href="https://web.whatsapp.com/"
      target="_blank"
      className={`w-full h-[45px] lg:h-[54px] bg-red-600 rounded-full text-white flex justify-between items-center lg:gap-x-5 px-2 lg:px-8 uppercase hover:bg-green-700 transition-colors duration-400 ${
        bgColor === "bg-black" ? "border-[3.5px] border-white" : ""
      }`}
    >
      <p></p>
      <p>Get Us On What&apos;sApp</p>
      <FaArrowRightLong />
    </Link>
  );
};

export default ContactWhatsApp;
