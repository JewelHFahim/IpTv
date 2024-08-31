import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {

  return (
    <nav className="px-[120px] border-b border-black border-opacity-[10%] flex items-center justify-between py-4">
      <div className="flex items-center gap-x-8">
        <div className="flex items-center gap-2">
          <GoMail className="text-lg text-red-600" />
          <p className="text-gray-500">iptv@gmail.com</p>
        </div>

        <div className="flex items-center gap-2">
          <IoCallOutline className="text-lg text-red-600" />
          <p className="text-gray-500">+44 7465874753</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5 text-red-600 text-lg cursor-pointer">
        <FaFacebookF />
        <FaYoutube />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
