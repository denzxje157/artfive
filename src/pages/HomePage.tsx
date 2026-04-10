import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-[#151412] relative overflow-hidden font-sans min-h-screen"> 
      {/* Global Background Robot - Đã phóng to trên Mobile để không bị thu nhỏ/cụt lủn */}
      {/* Global Background Robot - Đã thêm 'hidden md:block' để ẨN trên Mobile, CHỈ HIỆN trên Máy tính */}
      <div className="hidden md:block absolute right-[-18%] md:top-[3%] lg:right-[-5%] lg:top-[5%] md:w-[72%] lg:w-[65%] max-w-[760px] lg:max-w-[900px] z-0 pointer-events-none">
        <img 
            src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo-to.png" 
            alt="Background Robot" 
            className="w-full h-auto object-contain opacity-100" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[760px] md:min-h-[900px] lg:min-h-[980px] pt-24 pb-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start relative gap-16 md:gap-0">
          
          {/* Left Column */}
          <div className="w-full md:w-1/2 relative z-20 pt-6 md:pt-8 min-h-0 md:min-h-[560px] lg:min-h-[680px]">
            {/* Mobile Hero Copy */}
            <div className="md:hidden relative z-20">
              <h1 className="text-[56px] sm:text-[64px] font-bold text-white tracking-tight leading-[0.95] break-words max-w-full">
                Art Five Design
              </h1>
              <p className="text-gray-400 text-[15px] leading-relaxed mt-4 max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-8 flex items-center gap-4 sm:gap-6 flex-wrap">
                <button className="bg-[#e5e5e5] text-black w-[200px] h-[56px] rounded-sm font-medium hover:bg-white transition-colors text-base flex items-center justify-center">
                  Explore
                </button>
                <button className="flex items-center text-white hover:text-gray-300 transition-colors group">
                  <div className="w-[56px] h-[56px] rounded-full border border-white/75 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                    <Play className="w-4 h-4 ml-1 fill-current" />
                  </div>
                  <span className="text-sm font-medium">Live Demo...</span>
                </button>
              </div>

              {/* SỬA mt-10 THÀNH mt-24 */}
              <div className="mt-24 relative w-full max-w-[409px] mx-auto">
                <div className="absolute z-30 pointer-events-none top-[-50px] inset-x-0 mx-auto w-[180px] h-[180px]">
                  <img
                    src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo2.png"
                    alt="Cruzz"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className="relative z-20 rounded-[28px] mt-[78px] p-7 pt-[108px]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8.05px)',
                    WebkitBackdropFilter: 'blur(8.05px)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[28px] pointer-events-none"
                    style={{
                      padding: '1.5px',
                      background:
                        'linear-gradient(107.98deg, rgba(255, 255, 255, 0.45) 4.24%, rgba(255, 255, 255, 0) 45.65%, rgba(255, 255, 255, 0.45) 96.26%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  ></div>

                  <h3 className="text-white font-bold text-[22px] leading-tight">Cruzz</h3>
                  <p className="text-white opacity-75 text-[15px] leading-[1.45] mt-5 max-w-[310px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                  </p>
                </div>
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="hidden md:block absolute origin-top-left md:scale-[0.56] lg:scale-100" style={{ width: '946.05px', height: '242.6px', left: '0px', top: '50.06px' }}>
              <h1 className="text-[80px] font-bold text-white tracking-tight leading-tight">
                Art Five Design
              </h1>
              <p className="text-gray-400 text-base max-w-[871.59px] leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Buttons (Explore & Live Demo) */}
            <div className="hidden md:flex absolute items-center space-x-6 origin-top-left md:scale-[0.74] lg:scale-100" style={{ left: '3.95px', top: '235.03px' }}>
              <button className="bg-[#e5e5e5] text-black w-[217px] h-[57.63px] rounded-sm font-medium hover:bg-white transition-colors text-base flex items-center justify-center">
                Explore
              </button>
              <button className="flex items-center text-white hover:text-gray-300 transition-colors group w-[194.39px] h-[57.63px]">
              <div className="w-[57.63px] h-[57.63px] rounded-full border border-white/75 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                  <Play className="w-4 h-4 ml-1 fill-current" />
                </div>
                <span className="text-sm font-medium">Live Demo...</span>
              </button>
            </div>

            {/* Khối Card Cruzz - Bám sát CSS Figma tuyệt đối */}
            <div className="hidden md:block absolute origin-top-left md:scale-[0.82] lg:scale-100" style={{ width: '409px', height: '308.86px', left: '0px', top: '366.5px' }}>
              
              {/* Image 36 (Robot) */}
              <div 
                className="absolute z-30 pointer-events-none"
                style={{ top: '0px', left: '131.74px', width: '213.51px', height: '213.51px' }}
              >
                <img 
                  src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo2.png" 
                  alt="Cruzz" 
                  className="w-full h-full object-contain" 
                />
              </div>

              {/* Group 48 / Rectangle 17 (Khối Card Background) */}
              <div 
                className="absolute z-20 rounded-[32px]"
                style={{
                  top: '95.45px', 
                  left: '0px', 
                  width: '409px', 
                  height: '213.41px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8.05px)',
                  WebkitBackdropFilter: 'blur(8.05px)',
                }}
              >
                {/* Rectangle 17 (Stroke) - Hiệu ứng viền Gradient của Figma */}
                <div 
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{
                    padding: '1.5px', // Độ dày viền stroke
                    background: 'linear-gradient(107.98deg, rgba(255, 255, 255, 0.45) 4.24%, rgba(255, 255, 255, 0) 45.65%, rgba(255, 255, 255, 0.45) 96.26%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                ></div>

                {/* Group 47 -> Cruzz (Title) */}
                <h3 
                  className="absolute text-white font-bold" 
                  style={{ 
                    top: '69.61px', 
                    left: '37.36px', 
                    fontSize: '24px',
                    lineHeight: '1.2'
                  }}
                >
                  Cruzz
                </h3>

                {/* Group 47 -> Text Paragraph */}
                <p 
                  className="absolute text-white opacity-75" 
                  style={{ 
                    top: '120.89px', 
                    left: '34.87px', 
                    width: '322.69px', 
                    height: '49.48px',
                    fontSize: '15px',
                    lineHeight: '1.5'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                </p>
              </div>

            </div>
            
          </div>
          {/* Right Column */}
          <div className="hidden md:flex w-full md:w-1/2 relative z-20 justify-center md:justify-end md:mt-6 lg:mt-8 mt-32">
            {/* Large Card (Cruzz-Robot hướng dẫn) */}
            <div className="relative w-[260px] lg:w-[320px] mt-6 lg:mt-10">
              <div className="bg-gradient-to-b from-white/15 to-transparent backdrop-blur-lg border border-white/20 rounded-[32px] p-6 lg:p-8 pt-32 lg:pt-40 flex flex-col items-center relative z-20 shadow-2xl">
                {/* Robot Container with Lighting - Căn giữa, lún vào thẻ */}
                <div className="absolute -top-16 lg:-top-20 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
                  {/* Ambient glow */}
                  <div className="absolute bottom-[-15px] w-48 h-24 bg-[#40E0D0]/20 blur-[25px] rounded-full z-0"></div>
                  
                  {/* Robot Image */}
                  <img 
                    src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo1.png"
                    alt="Cruzz Robot" 
                    className="w-44 lg:w-56 h-auto drop-shadow-2xl" 
                  />
                </div>
                <h3 className="text-[#ff0000] font-bold text-lg lg:text-xl mb-5 lg:mb-6 text-center">Cruzz-Robot hướng dẫn</h3>
                <button className="text-sm text-white border border-white/40 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full hover:bg-white/20 transition-colors relative z-40">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ===================== PHẦN GIỚI THIỆU ĐÃ ĐƯỢC SỬA ===================== */}
        <div className="text-center mt-16 lg:mt-[-28px] mb-10 relative flex justify-center items-center z-10">
          
          <div className="relative inline-block px-12 py-5">
            {/* Bottom Left Corner - Đã bo cong, dày hơn, phát sáng đỏ và mờ dần */}
            <div 
              className="absolute left-0 bottom-0 w-8 h-8 rounded-bl-xl border-l-[3px] border-b-[3px] border-[#ff3333] shadow-[0_0_12px_rgba(255,51,51,0.8)]"
              style={{ WebkitMaskImage: 'linear-gradient(to top right, black 10%, transparent 90%)', maskImage: 'linear-gradient(to top right, black 10%, transparent 90%)' }}
            ></div>
            
            {/* Top Right Corner - Đã bo cong, dày hơn, phát sáng đỏ và mờ dần */}
            <div 
              className="absolute right-0 top-0 w-8 h-8 rounded-tr-xl border-r-[3px] border-t-[3px] border-[#ff3333] shadow-[0_0_12px_rgba(255,51,51,0.8)]"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 90%)', maskImage: 'linear-gradient(to bottom left, black 10%, transparent 90%)' }}
            ></div>
            
            <h2 className="text-[40px] font-bold text-white tracking-widest drop-shadow-md">Giới thiệu</h2>
            
          </div>       
        </div>
        {/* ===================== KẾT THÚC PHẦN GIỚI THIỆU ===================== */}

        {/* Khối Card Giới thiệu - Kéo giãn đều cả 2 bên (Trái & Phải) */}
        <div 
          className="border border-white/20 rounded-[40px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-4 lg:gap-10 relative z-10 shadow-2xl overflow-hidden w-full lg:w-[110%] lg:-ml-[5%]"
          style={{
            // Phủ kính mờ êm hơn, che robot tốt hơn
            background: 'linear-gradient(90deg, #151412 40%, rgba(21, 20, 18, 0.8) 70%, rgba(21, 20, 18, 0.0) 100%)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(24px)'
          }}
        >
          
          {/* Cột trái: Nội dung Text */}
          <div className="flex-1 relative z-10 pl-2 lg:pl-8">
            <h3 className="text-[32px] md:text-4xl font-bold text-white mb-5 tracking-wide">Art Five Design</h3>
            <p className="text-[#a0a0a0] mb-10 text-[14px] leading-[1.7] max-w-[480px]">
              Sản phẩm của Art Five Design Corporation là sự kết hợp của nền tảng vững chắc về kiến trúc và thiết kế chuyên sâu, hướng đến tiêu chí tạo ra những công trình vượt qua mọi thách thức về thẩm mỹ, công năng sử dụng linh hoạt, bền bỉ, đáp ứng những yêu cầu cao nhất, hiện đại đơn giản thanh lịch nhưng vẫn sang trọng tinh tế.
            </p>
            {/* Nút XEM TẤT CẢ */}
            <button className="border border-[#7a7a7a] bg-transparent text-[#e5e5e5] px-7 py-2.5 rounded hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-[13px] font-medium">
              XEM TẤT CẢ
            </button>
          </div>
          
          {/* Cột phải: Hình ảnh slider - Đã fix lỗi xếp ngang và căn giữa chuẩn mực */}
          <div className="flex-1 relative z-10 w-full lg:pr-4 flex flex-col items-center justify-center">
            
            {/* Khung chứa ảnh - Được thu nhỏ lại với max-w-[460px] để cân đối */}
            <div className="relative rounded-[20px] overflow-hidden shadow-lg w-[95%] lg:w-full max-w-[460px]">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior Design" 
                className="w-full h-[260px] md:h-[280px] object-cover"
              />
              
              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors pointer-events-auto border border-white/10 shadow-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors pointer-events-auto border border-white/10 shadow-sm">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Pagination Dots - Đã bị ép xuống dòng nhờ flex-col */}
            <div className="flex justify-center items-center space-x-2 mt-5">
              <div className="w-8 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            

          </div>
            
            
          </div>

        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Services Overview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border border-white/30 rounded-[40px] p-8 md:p-12 bg-white/5 backdrop-blur-[8px] flex flex-col md:flex-row gap-12 items-center shadow-2xl">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 1" className="rounded-xl w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 2" className="rounded-xl w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 2" className="rounded-xl w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 4" className="rounded-xl w-full h-40 object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 text-white">Dịch vụ</h2>
              <p className="text-white mb-8 text-sm leading-relaxed font-medium">
                Đội ngũ Thiết kế & Thi công Nội thất của Art Five Corporation là các chuyên gia đa dạng về các thể loại công trình, nhà ở căn hộ dân dụng, thương mại, bán lẻ, văn phòng và công trình y tế. Chúng tôi thiết kế những không gian giúp nâng cao chất lượng cuộc sống cho những cư dân và người sử dụng công trình. Nghiên cứu chuyên sâu, am hiểu các xu hướng hiện tại và tương lai, kết hợp với kỹ năng phối hợp để tạo nên những không gian giúp thay đổi và nâng cao cách sống, làm việc, vui chơi, thư giãn và an dưỡng của con người.
              </p>
              <button className="border border-white text-white px-10 py-3 rounded-lg text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-wider font-medium">
                XEM TẤT CẢ
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Why Choose Us */}
      <section className="py-10 md:py-12 bg-[#f3f3f3] overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
          <div className="w-full lg:w-[35%]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Building"
              className="w-full h-full min-h-[360px] md:min-h-[430px] lg:min-h-[500px] object-cover rounded-r-[12px] lg:rounded-r-[12px] rounded-l-none"
            />
          </div>

          <div className="w-full lg:w-[65%] px-4 sm:px-6 lg:pl-6 lg:pr-10 xl:pr-14 flex flex-col justify-center">
            <div className="mb-4">
              <div className="w-26 h-[2px] bg-[#d87b31] mb-3"></div>
              <span className="text-[#d87b31] font-semibold text-[30px] md:text-[35px] leading-none">Why Choose Us</span>
              <div className="w-26 h-[2px] bg-[#d87b31] mt-3"></div>
            </div>

            <h2 className="text-[32px] md:text-[46px] font-black text-[#111111] leading-[1.08] mb-4">
              Where Vision Meets Construction.
            </h2>

            <p className="text-[#707070] text-[16px] md:text-[26px] leading-relaxed mb-6 max-w-none">
              Commercial construction involves the design, development, and construction of structures intended for business use. From office buildings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative">

              <div className="relative pl-[76px] pr-4 py-1">
                <div className="absolute left-7 -top-5 bottom-0 border-l border-[#b7b7b7]"></div>
                <div className="absolute left-0 top-[4px] w-14 h-14 rounded-full bg-white border border-[#e8e8e8] shadow-md flex items-center justify-center text-[#f97316] text-[42px] font-bold leading-none">01</div>
                <h3 className="font-bold text-[26px] md:text-[30px] text-[#111111] leading-tight pb-2 border-b border-[#d2d2d2] mb-2">Qualified Planning</h3>
                <p className="text-[#757575] text-[16px] md:text-[24px] leading-snug">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
              </div>

              <div className="relative pl-[76px] pr-4 py-1">
                <div className="absolute left-7 -top-5 bottom-0 border-l border-[#b7b7b7]"></div>
                <div className="absolute left-0 top-[4px] w-14 h-14 rounded-full bg-white border border-[#e8e8e8] shadow-md flex items-center justify-center text-[#f97316] text-[42px] font-bold leading-none">02</div>
                <h3 className="font-bold text-[26px] md:text-[30px] text-[#111111] leading-tight pb-2 border-b border-[#d2d2d2] mb-2">Professional Design</h3>
                <p className="text-[#757575] text-[16px] md:text-[24px] leading-snug">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
              </div>

              <div className="relative pl-[76px] pr-4 py-1">
                <div className="absolute left-7 top-1 bottom-0 border-l border-[#b7b7b7]"></div>
                <div className="absolute left-0 top-[4px] w-14 h-14 rounded-full bg-white border border-[#e8e8e8] shadow-md flex items-center justify-center text-[#f97316] text-[42px] font-bold leading-none">03</div>
                <h3 className="font-bold text-[26px] md:text-[30px] text-[#111111] leading-tight pb-2 border-b border-[#d2d2d2] mb-2">Construction Quality</h3>
                <p className="text-[#757575] text-[16px] md:text-[24px] leading-snug">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
              </div>

              <div className="relative pl-[76px] pr-4 py-1">
                <div className="absolute left-7 top-1 bottom-0 border-l border-[#b7b7b7]"></div>
                <div className="absolute left-0 top-[4px] w-14 h-14 rounded-full bg-white border border-[#e8e8e8] shadow-md flex items-center justify-center text-[#f97316] text-[42px] font-bold leading-none">04</div>
                <h3 className="font-bold text-[26px] md:text-[30px] text-[#111111] leading-tight pb-2 border-b border-[#d2d2d2] mb-2">Expert Worker</h3>
                <p className="text-[#757575] text-[16px] md:text-[24px] leading-snug">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Dân Dụng Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Dân Dụng Background" 
            className="w-full h-full object-cover blur-md scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
          <div className="max-w-lg w-full">
            <h2 className="text-4xl font-bold text-[#00b4d8] mb-6 uppercase tracking-wider">Dân Dụng</h2>
            <p className="text-white text-xl mb-8 font-light leading-relaxed">
              Hãy nói về dự án của bạn<br />
              Chúng tôi sẵn sàng chia sẻ với bạn tầm nhìn thiết kế của chúng tôi và dẫn bạn vào thế giới thú vị của sự sáng tạo.
            </p>
            <button className="border border-white text-white px-8 py-2.5 rounded-md hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider">
              GỬI YÊU CẦU
            </button>
          </div>
          
          {/* Vertical Line */}
          <div className="hidden lg:block w-[2px] h-64 bg-white"></div>

          <div className="hidden lg:block w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Building Detail" 
              className="w-full h-72 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Thương Mại Section - Ép ảnh sang trái, chữ sang phải */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden py-24">
        
        {/* Background Image - Làm mờ (Blur) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Thương Mại Background" 
            className="w-full h-full object-cover blur-xl scale-110"
          />
          {/* Lớp phủ mờ tối nhẹ */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Khối Nội Dung Chính - Mở rộng tối đa (max-w-7xl) và dùng justify-between */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row justify-between gap-12">
          
          {/* CỘT TRÁI: Hình ảnh (Ép sát lề trái) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
             <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Detail" 
                className="w-full max-w-[500px] h-[360px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
          </div>
          
          {/* CỘT PHẢI: Văn bản và Nút bấm (Ép sát lề phải) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-10">
            
            {/* Đường kẻ dọc màu trắng */}
            <div className="w-[2px] h-12 bg-white mb-6 mx-auto lg:mx-0"></div>
            
            {/* Tiêu đề màu xám sậm, chữ in hoa */}
            <h2 className="text-4xl md:text-[42px] font-bold text-[#2d2d2d] mb-6 uppercase tracking-widest drop-shadow-sm">
              Thương Mại
            </h2>
            
            {/* Mô tả chữ trắng, font dày dặn */}
            <p className="text-white/95 text-lg md:text-[18px] mb-10 font-medium leading-relaxed drop-shadow-md max-w-[550px] mx-auto lg:mx-0">
              A stunning commercial project combining modern design and functionality, England Grand Mall offers a luxurious shopping experience with its exquisite architecture and state-of-the-art facilities.
            </p>
            
            {/* Nút bấm viền trắng, bo tròn dạng viên thuốc (rounded-full) */}
            <button className="border-2 border-white/80 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors uppercase text-sm font-bold tracking-wider shadow-lg">
              GỬI YÊU CẦU
            </button>
          </div>

        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Kiến Trúc Section - Đã thiết kế lại theo ảnh mẫu (Glassmorphism Card) */}
      <section className="relative py-24 flex items-center min-h-[600px] overflow-hidden">
        
        {/* Background Image với hiệu ứng lớp phủ mờ (blur) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Kiến Trúc Background" 
            className="w-full h-full object-cover"
          />
          {/* Lớp phủ làm tối và mờ nền giúp thẻ kính nổi bật */}
          
        </div>

        {/* Khối nội dung chính */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Thẻ Kính (Glassmorphism Container) */}
          <div className="border border-white/30 rounded-[40px] p-8 md:p-12 bg-white/10 backdrop-blur-md flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            
            {/* Nửa bên trái: Hình ảnh */}
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Architecture Detail" 
                className="w-full h-auto object-cover rounded-sm shadow-lg"
              />
            </div>

            {/* Nửa bên phải: Nội dung Text */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
                KIẾN TRÚC
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
                Hãy nói về dự án của bạn<br />
                Chúng tôi sẵn sàng chia sẻ với bạn tầm nhìn thiết kế của chúng tôi và dẫn bạn vào thế giới thú vị của sự sáng tạo.
              </p>
              
              <button className="border border-white text-white px-8 py-2.5 rounded-lg hover:bg-white hover:text-black transition-colors uppercase text-sm font-medium tracking-wider">
                GỬI YÊU CẦU
              </button>
            </div>

          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-black/70"></div>

      <div className="w-full h-[2px] bg-black/70"></div>

      {/* Featured Projects Grid - Thiết kế lại theo ảnh mẫu (Glassmorphism Cards) */}
      <section className="relative py-24 min-h-[800px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image full màn hình */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Dự án Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Khối chứa 3 thẻ Glassmorphism */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            
            {/* Project Card 1 */}
            <div className="flex flex-col p-6 rounded-[48px] bg-white/5 backdrop-blur-xl border border-white/30 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <div className="overflow-hidden rounded-[32px] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project 1" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  A Cube for Life Modern Living,<br />Iranian Soul
                </h3>
                <p className="text-white/80 text-[13px] leading-relaxed mb-8 flex-1">
                  These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
                </p>
                <div>
                  <button className="bg-[#1a1a1a] text-white border border-white/10 px-7 py-2.5 text-sm font-semibold hover:bg-white hover:text-black transition-colors rounded-xl">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="flex flex-col p-6 rounded-[48px] bg-white/5 backdrop-blur-xl border border-white/30 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <div className="overflow-hidden rounded-[32px] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project 2" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  A Cube for Life Modern Living,<br />Iranian Soul
                </h3>
                <p className="text-white/80 text-[13px] leading-relaxed mb-8 flex-1">
                  These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
                </p>
                <div>
                  <button className="bg-[#1a1a1a] text-white border border-white/10 px-7 py-2.5 text-sm font-semibold hover:bg-white hover:text-black transition-colors rounded-xl">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="flex flex-col p-6 rounded-[48px] bg-white/5 backdrop-blur-xl border border-white/30 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <div className="overflow-hidden rounded-[32px] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project 3" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  A Cube for Life Modern Living,<br />Iranian Soul
                </h3>
                <p className="text-white/80 text-[13px] leading-relaxed mb-8 flex-1">
                  These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
                </p>
                <div>
                  <button className="bg-[#1a1a1a] text-white border border-white/10 px-7 py-2.5 text-sm font-semibold hover:bg-white hover:text-black transition-colors rounded-xl">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}