"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainMenu = () => {
  const route = useRouter();

  const menus = [
    { name: "Home", url: "/" },
    { name: "Subscription", url: "/subscription" },
    { name: "Channel List", url: "/list" },
    { name: "Contact Us", url: "/contact" },
    { name: "FAQ", url: "/faq" },
  ];

  return (
    <div className="px-[120px] flex justify-between items-center py-6">
      <Link href="/">
        <Image src="/assets/logoip.webp" alt="" width={200} height={40} />
      </Link>

      <div>
        <ul>
          <li className="font-medium uppercase flex items-center gap-x-7 text-[17px]">
            {menus.map((menu, i) => (
              <Link
                href={menu.url}
                key={i}
                className={`${route === menu.url ? "text-red-600" : ""}`}
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <Link href="/ip-tv/iptv-trail">
        <button className="bg-red-600 hover:bg-blue-800 transition-colors duration-300 ease-in-out uppercase text-white px-10 py-3 rounded-full">
          Free Trial
        </button>
      </Link>
    </div>
  );
};

export default MainMenu;
