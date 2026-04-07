import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center text-white flex flex-col items-center">
          <div className="w-1 h-16 bg-[#d97736] mb-6"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">DỊCH VỤ</h1>
          <p className="text-xl md:text-2xl font-light">We're an architecture firm helping growing organizations.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Dotted Pattern Backgrounds */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
        <div className="absolute top-[600px] left-0 w-64 h-64 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>

        <h2 className="text-3xl font-bold text-black mb-20">DỊCH VỤ XÂY DỰNG CHUYÊN NGHIỆP</h2>

        <div className="space-y-32">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border border-gray-300 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Thiết kế thi công kiến trúc" 
                className="w-full h-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-black mb-6">THIẾT KẾ THI CÔNG KIẾN TRÚC</h3>
              <div className="w-16 h-px bg-gray-400 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chủ đầu tư sẽ luôn nhận được những đề xuất và ý tưởng tốt nhất từ các kiến trúc sư có nhiều năm kinh nghiệm.
              </p>
              <Link to="/architecture" className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-bold hover:bg-black transition-colors">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 relative z-10">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border border-gray-300 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Thiết kế thi công nội thất" 
                className="w-full h-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-black mb-6">THIẾT KẾ THI CÔNG NỘI THẤT</h3>
              <div className="w-16 h-px bg-gray-400 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kiến tạo không gian sống như ý, phối hợp đồng nhất giữa thiết kế và thi công hoàn thiện nội thất và đồ decor
              </p>
              <Link to="/interior" className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-bold hover:bg-black transition-colors">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border border-gray-300 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Vật phẩm nội thất" 
                className="w-full h-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-black mb-6">VẬT PHẨM NỘI THẤT</h3>
              <div className="w-16 h-px bg-gray-400 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Thiết kế, thi công cây cảnh, cảnh quan sân vườn và cung ứng mảng xanh cho các công trình dân cư, đô thị
              </p>
              <Link to="/furniture" className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-bold hover:bg-black transition-colors">
                XEM CHI TIẾT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
