// import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// export default function App() {
//   const tags = [
//     "Kẹo dẻo vị đào", "Kẹo trái cây", "Kẹo hình thú", "Kẹo mút", "Quà lưu niệm",
//     "Quà biếu", "Quốc tế thiếu nhi", "Đặc biệt", "Nho đen", "Kẹo chua",
//     "Kẹo dẻo vị đào", "Kẹo trái cây", "Kẹo hình thú", "Kẹo mút", "Quà lưu niệm",
//     "Quà biếu", "Quốc tế thiếu nhi", "Đặc biệt", "Nho đen", "Kẹo chua",
//   ];

//   const products = [
//     { img: "/img/jar1.png", name: "COMBO 2 vị hũ thủy tinh", price: "80.000" },
//     { img: "/img/jar2.png", name: "LUSTIGUM táo xanh", price: "45.000" },
//     { img: "/img/can.png", name: "COMBO 2 vị hộp thiếc", price: "75.000" },
//     { img: "/img/jar3.png", name: "LUSTIGUM cam mọng", price: "45.000" },
//     { img: "/img/jar4.png", name: "LUSTIGUM dâu tây", price: "45.000" },
//     // ... lặp lại (giữ nguyên dữ liệu như bạn có)
//   ];

//   const ProductCard = ({ img, name, price }) => (
//     <div className="border rounded-xl shadow-sm p-4 flex flex-col items-center min-w-60 bg-white hover:shadow-md transition">
//       <img src={img} alt={name} className="w-32 h-32 object-contain mb-3" />
//       <div className="text-center">
//         <div className="text-red-500 text-sm mb-1">★★★★★</div>
//         <h3 className="font-semibold text-red-600 text-sm mb-1">{name}</h3>
//         <p className="text-gray-600 text-sm mb-2">{price} VND</p>
//         <button className="px-4 py-1 text-sm bg-lime-500 text-white rounded-full hover:bg-lime-600 transition">
//           Xem nhanh
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       <header className="flex justify-between items-center px-6 md:px-12 py-4 border-b bg-white">
//         <h1 className="text-2xl font-extrabold text-red-600">LUSTIGUM</h1>
//         <nav className="hidden md:flex gap-6 text-sm">
//           <a href="#" className="hover:text-red-600">Sản phẩm</a>
//           <a href="#" className="hover:text-red-600">Sự kiện</a>
//           <a href="#" className="hover:text-red-600">Liên hệ</a>
//           <a href="#" className="hover:text-red-600">FAQ</a>
//         </nav>
//         <ShoppingCart className="w-6 h-6 text-red-600 cursor-pointer" />
//       </header>

//       {/* Banner */}
//       <section className="bg-yellow-100 py-8 px-6 md:px-12 text-center">
//         <h2 className="text-xl font-bold text-red-600 mb-2">
//           XIN CHÀO CÁC TÍN ĐỒ NGỌT NGÀO CỦA LUSTIGUM
//         </h2>
//         <p className="max-w-2xl mx-auto text-sm mb-6">
//           Hãy tìm loại sản phẩm bạn muốn vào thanh bên dưới nhé! Nếu bạn có bất
//           kì sự không hài lòng hay thắc mắc nào vui lòng liên hệ nhân viên gần nhất.
//         </p>
//         <input
//           type="text"
//           placeholder="Tìm kiếm..."
//           className="w-80 max-w-full border rounded-full px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-red-400"
//         />
//         <div className="flex flex-wrap justify-center gap-3 text-red-600 text-xs max-w-3xl mx-auto">
//           {tags.map((tag, i) => (
//             <span key={i} className="px-2 py-1 bg-white border rounded-full shadow-sm">
//               ★ {tag}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Products */}
//       <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
//         {/* Title line */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex-1 border-t border-red-300"></div>
//           <h2 className="mx-6 text-2xl font-extrabold text-red-600 whitespace-nowrap">
//             SẢN PHẨM MỚI NHẤT
//           </h2>
//           <div className="flex-1 border-t border-red-300"></div>
//         </div>

//         {/* Products scroll */}
//         <div className="relative flex items-center gap-4">
//           <button
//             onClick={() => document.getElementById("product-list")
//               .scrollBy({ left: -220, behavior: "smooth" })}
//             className="p-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
//           >
//             <ChevronLeft />
//           </button>

//           <div
//             id="product-list"
//             className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide flex-1"
//           >
//             {products.map((p, i) => (
//               <ProductCard key={i} {...p} />
//             ))}
//           </div>

//           <button
//             onClick={() => document.getElementById("product-list")
//               .scrollBy({ left: 220, behavior: "smooth" })}
//             className="p-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Main from './component/Main'

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Banner/>
      <Main/>
    </div>
  )
}

export default App
