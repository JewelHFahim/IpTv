import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  return (
    <Link href="https://web.whatsapp.com/" target="_blank" className="fixed bottom-6 right-2 lg:right-6 z-[999]">
      <button className="flex items-center gap-2 hover:bg-green-700 transition-all duration-300 bg-green-600 px-6 py-2 rounded-full text-white font-medium text-sm lg:text-base">
        <FaWhatsapp className="text-xl" />
        How can I help you?
      </button>
    </Link>
  );
};

export default WhatsAppBtn;
