import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[42vh] sm:h-[52vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-20 text-center text-white flex flex-col items-center px-4">
          <div className="w-1 h-14 md:h-20 bg-[#d97736] mb-4 md:mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-wide">DỊCH VỤ</h1>
          <p className="text-base sm:text-lg md:text-2xl font-light max-w-[640px]">We're an architecture firm helping growing organizations.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 relative overflow-hidden bg-[#ececec]">
        {/* Dotted Pattern Backgrounds */}
        <div className="absolute -top-2 right-0 w-[110px] h-[220px] sm:w-[150px] sm:h-[300px] bg-[radial-gradient(#b8bec6_2px,transparent_2px)] [background-size:14px_14px] opacity-45 sm:opacity-80 z-0"></div>
        <div className="absolute top-[180px] -left-16 sm:top-[220px] sm:-left-24 w-[120px] h-[220px] sm:w-[170px] sm:h-[260px] bg-[radial-gradient(#c3c9d1_2px,transparent_2px)] [background-size:14px_14px] opacity-40 sm:opacity-75 z-0"></div>
        <div className="absolute bottom-0 -left-4 sm:-left-8 w-[70px] h-[140px] sm:w-[95px] sm:h-[190px] bg-[radial-gradient(#c7cdd4_2px,transparent_2px)] [background-size:14px_14px] opacity-35 sm:opacity-70 z-0"></div>

        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-black tracking-tight text-[#111111] mb-10 sm:mb-14 md:mb-20 relative z-10 leading-tight">DỊCH VỤ XÂY DỰNG CHUYÊN NGHIỆP</h2>

        <div className="space-y-14 sm:space-y-20 md:space-y-28">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-14 relative z-10">
            <div className="w-full md:w-1/2 relative">
              {/* Crosshairs */}
              <div className="absolute -top-4 -left-4 md:-top-5 md:-left-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -top-6 -left-2 md:-top-8 md:-left-4 w-[1px] h-20 md:h-30 bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 w-[1px] h-20 md:h-30 bg-gray-400/70 md:bg-gray-400 z-0"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Thiết kế thi công kiến trúc" 
                className="w-full h-[220px] sm:h-[250px] md:h-[285px] object-cover relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[30px] sm:text-[34px] md:text-[28px] font-black leading-[1.08] text-[#111111] mb-4">THIẾT KẾ THI CÔNG KIẾN TRÚC</h3>
              <div className="w-14 h-[1px] bg-gray-400 mb-5"></div>
              <p className="text-[#5a6370] mb-6 leading-relaxed text-[16px] sm:text-[18px] md:text-[19px] font-normal max-w-[560px]">
                Chủ đầu tư sẽ luôn nhận được những đề xuất và ý tưởng tốt nhất từ các kiến trúc sư có nhiều năm kinh nghiệm.
              </p>
              <Link to="/architecture" className="inline-flex w-full sm:w-auto justify-center bg-[#1a1a1a] text-white px-7 sm:px-8 py-3 text-[13px] font-bold hover:bg-black transition-colors rounded-[4px]">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 sm:gap-8 md:gap-14 relative z-10">
            <div className="w-full md:w-1/2 relative">
              {/* Crosshairs */}
              <div className="absolute -top-4 -right-4 md:-top-5 md:-right-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -top-6 -right-2 md:-top-8 md:-right-4 w-[1px] h-20 md:h-30 bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-4 w-[1px] h-20 md:h-30 bg-gray-400/70 md:bg-gray-400 z-0"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Thiết kế thi công nội thất" 
                className="w-full h-[220px] sm:h-[250px] md:h-[285px] object-cover relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[30px] sm:text-[34px] md:text-[32px] font-black leading-[1.08] text-[#111111] mb-4">THIẾT KẾ THI CÔNG NỘI THẤT</h3>
              <div className="w-14 h-[1px] bg-gray-400 mb-5"></div>
              <p className="text-[#5a6370] mb-6 leading-relaxed text-[16px] sm:text-[18px] md:text-[19px] font-normal max-w-[560px]">
                Kiến tạo không gian sống như ý, phối hợp đồng nhất giữa thiết kế và thi công hoàn thiện nội thất và đồ decor
              </p>
              <Link to="/interior" className="inline-flex w-full sm:w-auto justify-center bg-[#1a1a1a] text-white px-7 sm:px-8 py-3 text-[13px] font-bold hover:bg-black transition-colors rounded-[4px]">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-14 relative z-10">
            <div className="w-full md:w-1/2 relative">
              {/* Crosshairs */}
              <div className="absolute -top-4 -left-4 md:-top-5 md:-left-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -top-6 -left-2 md:-top-8 md:-left-4 w-[1px] h-20 md:h-30 bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-7 w-20 md:w-30 h-[1px] bg-gray-400/70 md:bg-gray-400 z-0"></div>
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 w-[1px] h-20 md:h-30  bg-gray-400/70 md:bg-gray-400 z-0"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Vật phẩm nội thất" 
                className="w-full h-[220px] sm:h-[250px] md:h-[285px] object-cover relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[30px] sm:text-[34px] md:text-[32px] font-black leading-[1.08] text-[#111111] mb-4">VẬT PHẨM NỘI THẤT</h3>
              <div className="w-14 h-[1px] bg-gray-400 mb-5"></div>
              <p className="text-[#5a6370] mb-6 leading-relaxed text-[16px] sm:text-[18px] md:text-[19px] font-normal max-w-[560px]">
                Thiết kế, thi công cây cảnh, cảnh quan sân vườn và cung ứng mảng xanh cho các công trình dân cư, đô thị
              </p>
              <Link to="/furniture" className="inline-flex w-full sm:w-auto justify-center bg-[#1a1a1a] text-white px-7 sm:px-8 py-3 text-[13px] font-bold hover:bg-black transition-colors rounded-[4px]">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}