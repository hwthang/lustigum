import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaS } from "react-icons/fa6";
const LABEL = [
  "Kẹo dẻo vị đào",
  "Kẹo hình thú",
  "Quà lưu niệm",
  "Quốc tế thiếu nhi",
  "Nho đen",
  "Kẹo trái cây",
  "Kẹo mút",
  "Quà biếu",
  "Đặc biệt",
  "Kẹo chua",
];

function Banner() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-yellow-100 px-6 py-4 flex justify-center flex-col items-center gap-2">
      <div className="text-3xl font-bold text-red-500 text-center font-normal-bold">
        XIN CHÀO CÁC TÍN ĐỒ NGỌT NGÀO CỦA LUSTIGUM
      </div>
      <p className="text-center text-md text-red-500">
        Hãy tìm loại sản phẩm bạn muốn vào thanh bên dưới nhé!
        <br /> Nếu bạn có bất kì sự không hài lòng hay thắc mắc nào vui lòng
        liên hệ với nhân viên ở cơ sở gần nhất. <br />
        Trân trọng!
      </p>
      <input
        className="outline-none shadow-lg bg-white px-4 pt-4 pb-2 w-3/4 rounded-full"
        placeholder="Tìm kiếm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap justify-center w-3/4 gap-4">
        {LABEL.map((item, i)=>(
          <div key={i} className="justify-center items-center gap-1 bg-red-500 cursor-pointer hover:bg-red-400 text-white inline-flex text-nowrap rounded-full text-left pl-2 pr-4 py-2">
            <FaStar className="text-yellow-400" size={20}/> <p className="pt-1">{item}</p></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
