"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MainMenu from "@/components/MainMenu";
import Breadcum from "@/components/Breadcum";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "IpTv",
//   description: "Developped by JHF",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const bgClass =
    pathname === "/subscription"
      ? "Subscription"
      : pathname === "/list"
      ? "ChannelList"
      : pathname === "/contact"
      ? "ContactUs"
      : pathname === "/faq"
      ? "FAQ"
      : "Home";
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div
          className={`w-full commonContainer ${bgClass} relative font-inter `}
        >
          <div className="hidden lg:block ">
            <Navbar />
            <MainMenu />
          </div>
          {/* <IpMobile /> */}
          {pathname !== "/" && <Breadcum />}
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
