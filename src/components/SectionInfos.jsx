/* eslint-disable react/prop-types */
import { FaWifi } from "react-icons/fa";

const SectionInfos = ({ children, title, info, className }) => {
  return (
    <div className={`flex flex-col justify-center items-center  ${className}`}>
      <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
        <FaWifi className="text-xl text-red-600" />
        {title}
      </h3>
      <h1 className="mt-2 text-[40px] lg:text-[52px] font-bold leading-tight">{info}</h1>
      <p className="mt-6 leading-relaxed lg:w-1/2 text-slate-500">{children}</p>
    </div>
  );
};

export default SectionInfos;
