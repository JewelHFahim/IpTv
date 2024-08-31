/* eslint-disable react/prop-types */
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const TrailButton = ({ children, className }) => {
  return (
    <Link href="/trail">
      <button
        className={`bg-red-600 px-5 lg:px-10 py-2.5 lg:py-3.5 rounded-full uppercase text-sm lg:text-base font-medium lg:font-normal text-white flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 ease-in-out ${className}`}
      >
        {children} <IoIosArrowRoundForward className="text-xl lg:text-2xl" />
      </button>
    </Link>
  );
};

export default TrailButton;
