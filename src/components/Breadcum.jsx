"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcum = () => {
  const pathname = usePathname();

  const breadcum =
    pathname === "/subscription"
      ? "Subscription"
      : pathname === "/list"
      ? "Channel List"
      : pathname === "/contact"
      ? "Contact Us"
      : pathname === "/faq"
      ? "FAQ"
      : pathname === "/trail"
      ? "Free IPTV Trial"
      : "";

  return (
    <div className="px-[20px] lg:px-[120px] py-24">
      <h1 className="text-3xl lg:text-[50px] font-bold">{breadcum}</h1>

      <div className="mt-4 text-lg lg:text-xl font-bold flex items-center gap-x-1 text-black text-opacity-[80%]">
        <Link href="/"> Home </Link>
        <span className="text-red-600">/</span>
        <Link href="/">{breadcum}</Link>
      </div>
    </div>
  );
};

export default Breadcum;
