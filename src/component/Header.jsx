import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const links = ["Sản phẩm", "Sự kiện", "Liên hệ", "Câu hỏi thường gặp"];
  return (
    <div className="md:pl-6 py-2 flex justify-between items-end flex-col md:flex-row w-full ">
      <div className="text-4xl font-bold text-red-700 w-full text-center md:w-fit mb-4 md:mb-0 h-full pb-1 pt-1">LUSTIGUM</div>
      <div className="md:bg-white bg-orange-100 flex text-red-700 font-semibold text-lg flex-col md:flex-row  w-full text-center md:w-fit">
        {links.map((item, i) => (
          <div className="md:hover:border-red-500 border-b-3 border-white hover:bg-red-200  md:hover:bg-white md:hover:text-red-500 px-6 py-2 text-lg text-center cursor-pointer">{item}</div>
        ))}
        <div className="hover:bg-red-200 md:hover-bg-white  md:w-fit py-1 w-full flex items-center justify-center"><div className="px-6 relative w-fit">
          <FaShoppingCart size={36} className="active:text-red-600 cursor-pointer w-fit "/>
          <div className="absolute bg-yellow-100 top-0 right-4 text-sm w-6 h-6 rounded-full flex items-center justify-center">
            14
          </div>
        </div></div>
        
      </div>
    </div>
  );
}

export default Header;
