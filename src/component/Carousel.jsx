import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import comboHu from "../assets/Combo 2 vị hũ thủy tinh.jpg";
import taoXanh from "../assets/LUSTIGUM táo xanh.jpg";
import comboThiec from "../assets/COMBO 2 vị hộp thiết.jpg";
import camMong from "../assets/LUSTIGUM cam mọng.jpg";
import dauTay from "../assets/LUSTIGUM Dâu tây.jpg";

export const products = [
  {
    id: 1,
    name: "COMBO 2 vị hũ thủy tinh",
    price: "80.000 VNĐ",
    img: comboHu,
  },
  {
    id: 2,
    name: "LUSTIGUM táo xanh",
    price: "45.000 VNĐ",
    img: taoXanh,
  },
  {
    id: 3,
    name: "COMBO 2 vị hộp thiếc",
    price: "75.000 VNĐ",
    img: comboThiec,
  },
  {
    id: 4,
    name: "LUSTIGUM cam mọng",
    price: "45.000 VNĐ",
    img: camMong,
  },
  {
    id: 5,
    name: "LUSTIGUM dâu tây",
    price: "45.000 VNĐ",
    img: dauTay,
  },
  {
    id: 6,
    name: "COMBO 2 vị hũ thủy tinh",
    price: "80.000 VNĐ",
    img: comboHu,
  },
  {
    id: 7,
    name: "LUSTIGUM táo xanh",
    price: "45.000 VNĐ",
    img: taoXanh,
  },
  {
    id: 8,
    name: "COMBO 2 vị hộp thiếc",
    price: "75.000 VNĐ",
    img: comboThiec,
  },
  {
    id: 9,
    name: "LUSTIGUM cam mọng",
    price: "45.000 VNĐ",
    img: camMong,
  },
  {
    id: 10,
    name: "LUSTIGUM dâu tây",
    price: "45.000 VNĐ",
    img: dauTay,
  },
];


export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 260; // chiều rộng 1 thẻ + gap
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto ">
      {/* --- Nút trái --- */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-200 rounded-full shadow p-2 hover:bg-yellow-100 z-10"
      >
        <IoChevronBack size={28} className="text-red-500" />
      </button>

      {/* --- Container danh sách sản phẩm --- */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-6 px-10 py-2 hide-scrollbar"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[200px] max-w-[230px] shadow-[0_0_10px_#c9c9c9] rounded-xl flex-shrink-0 flex flex-col items-center p-3 py-6 bg-white hover:-translate-y-1 transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-30 h-30 object-cover mb-2 shadow-lg rounded-md"
            />
            <p className="font-semibold text-md text-center text-red-600">
              {p.name}
            </p>
            <p className="text-gray-700 text-sm">{p.price}</p>
            <button className="bg-green-200 text-green-800 px-3 py-1 mt-2 rounded-full hover:bg-green-300">
              Xem nhanh
            </button>
          </div>
        ))}
      </div>

      {/* --- Nút phải --- */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-200 rounded-full shadow p-2 hover:bg-yellow-100 z-10"
      >
        <IoChevronForward size={28} className="text-red-500" />
      </button>
    </div>
  );
}
