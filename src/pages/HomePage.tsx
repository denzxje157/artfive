import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-[#151412] relative overflow-hidden font-sans min-h-screen">
      {/* Global Background Robot */}
      <div className="absolute right-[-5%] top-[5%] w-[120%] md:w-[80%] lg:w-[65%] max-w-[1200px] z-0 pointer-events-none">
        <img 
            src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo-to.png" 
            alt="Background Robot" 
            className="w-full h-auto object-contain opacity-70" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start relative gap-16 lg:gap-0">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 relative z-20 pt-10 h-screen"> {/* Thêm h-screen để đảm bảo không gian cho absolute */}
            
            {/* Title & Description */}
            <div className="absolute" style={{ width: '946.05px', height: '242.6px', left: '0px', top: '50.06px' }}>
              <h1 className="text-[80px] font-bold text-white tracking-tight leading-tight">
                Art Five Design
              </h1>
              <p className="text-gray-400 text-base max-w-[871.59px] leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Buttons (Explore & Live Demo) */}
            <div className="absolute flex items-center space-x-6" style={{ left: '3.95px', top: '235.03px' }}>
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
            <div className="absolute" style={{ width: '409px', height: '308.86px', left: '0px', top: '366.5px' }}>
              
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
          <div className="w-full lg:w-1/2 relative z-20 flex justify-center lg:justify-end lg:mt-10 mt-40">
            {/* Large Card (Cruzz-Robot hướng dẫn) */}
            <div className="relative w-[320px] mt-10">
              <div className="bg-gradient-to-b from-white/15 to-transparent backdrop-blur-lg border border-white/20 rounded-[32px] p-8 pt-40 flex flex-col items-center relative z-20 shadow-2xl">
                {/* Robot Container with Lighting - Căn giữa, lún vào thẻ */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
                  {/* Ambient glow */}
                  <div className="absolute bottom-[-15px] w-48 h-24 bg-[#40E0D0]/20 blur-[25px] rounded-full z-0"></div>
                  
                  {/* Robot Image */}
                  <img 
                    src="https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo1.png"
                    alt="Cruzz Robot" 
                    className="w-56 h-auto drop-shadow-2xl" 
                  />
                </div>
                <h3 className="text-[#ff0000] font-bold text-xl mb-6 text-center">Cruzz-Robot hướng dẫn</h3>
                <button className="text-sm text-white border border-white/40 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full hover:bg-white/20 transition-colors relative z-40">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Intro Section - Đã được thêm */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/30">
        
        {/* Section Title */}
        <div className="text-center mb-20 relative flex justify-center items-center">
          <div className="relative inline-block px-8 py-4">
            {/* Bottom Left Corner */}
            <div className="absolute left-0 bottom-0 w-6 h-6 border-l-2 border-b-2 border-[#ff3333]"></div>
            {/* Top Right Corner */}
            <div className="absolute right-0 top-0 w-6 h-6 border-r-2 border-t-2 border-[#ff3333]"></div>
            
            <h2 className="text-4xl font-bold text-white tracking-wide">Giới thiệu</h2>
          </div>
        </div>

        {/* Glassmorphism Container */}
        <div className="border border-white/20 rounded-[40px] p-10 bg-white/5 backdrop-blur-md flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
          
          <div className="flex-1 relative z-10 pl-4">
            <h3 className="text-4xl font-bold text-white mb-6">Art Five Design</h3>
            <p className="text-gray-300 mb-10 text-sm leading-relaxed max-w-md">
              Sản phẩm của Art Five Design Corporation là sự kết hợp của nền tảng vững chắc về kiến trúc và thiết kế chuyên sâu, hướng đến tiêu chí tạo ra những công trình vượt qua mọi thách thức về thẩm mỹ, công năng sử dụng linh hoạt, bền bỉ, đáp ứng những yêu cầu cao nhất, hiện đại đơn giản thanh lịch nhưng vẫn sang trọng tinh tế.
            </p>
            <button className="border border-white/50 text-white px-8 py-2.5 rounded-lg text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
              XEM TẤT CẢ
            </button>
          </div>
          
          <div className="flex-1 relative z-10 w-full">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior" 
                className="w-full h-[350px] object-cover"
              />
              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

      </section>

      {/* Services Overview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border border-gray-200 rounded-3xl p-8 md:p-12 bg-white/60 backdrop-blur-md flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 1" className="rounded-xl w-full h-32 object-cover" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 2" className="rounded-xl w-full h-32 object-cover" />
              <img src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 3" className="rounded-xl w-full h-32 object-cover" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Project 4" className="rounded-xl w-full h-32 object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Dịch vụ</h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                Đội ngũ Thiết kế & Thi công Nội thất của Art Five Corporation là các chuyên gia đa dạng về các thể loại công trình, nhà ở căn hộ dân dụng, thương mại, bán lẻ, văn phòng và công trình y tế. Chúng tôi thiết kế những không gian giúp nâng cao chất lượng cuộc sống cho những cư dân và người sử dụng công trình. Nghiên cứu chuyên sâu, am hiểu các xu hướng hiện tại và tương lai, kết hợp với kỹ năng phối hợp để tạo nên những không gian giúp thay đổi và nâng cao cách sống, làm việc, vui chơi, thư giãn và an dưỡng của con người.
              </p>
              <button className="border border-gray-400 text-gray-700 px-6 py-2 text-sm hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-wider">
                XEM TẤT CẢ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Building" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[#d4af37] font-medium text-sm uppercase tracking-wider border-b border-[#d4af37] pb-1">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Where Vision Meets Construction.</h2>
            <p className="text-gray-500 mb-12 max-w-2xl">
              Commercial construction involves the design, development, and construction of structures intended for business use. From office buildings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex gap-4">
                <div className="text-[#d4af37] font-bold text-xl">01</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Qualified Planning</h3>
                  <p className="text-gray-500 text-sm">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#d4af37] font-bold text-xl">02</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Design</h3>
                  <p className="text-gray-500 text-sm">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#d4af37] font-bold text-xl">03</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Construction Quality</h3>
                  <p className="text-gray-500 text-sm">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#d4af37] font-bold text-xl">04</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Expert Worker</h3>
                  <p className="text-gray-500 text-sm">These properties are used for business purposes, such as office buildings, retail spaces, warehouses,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dân Dụng Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Dân Dụng Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#40E0D0] mb-6 uppercase tracking-wider">Dân Dụng</h2>
            <p className="text-white text-xl mb-8">
              Hãy nói về dự án của bạn<br />
              Chúng tôi sẵn sàng chia sẻ với bạn tầm nhìn thiết kế của chúng tôi và dẫn bạn vào thế giới thú vị của sự sáng tạo.
            </p>
            <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider">
              GỬI YÊU CẦU
            </button>
          </div>
          <div className="hidden lg:block w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Building Detail" 
              className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Thương Mại Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Thương Mại Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
          <div className="max-w-xl text-right">
            <div className="flex justify-end mb-4">
              <div className="w-1 h-12 bg-white"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wider">Thương Mại</h2>
            <p className="text-gray-200 text-lg mb-8">
              A stunning commercial project combining modern design and functionality, England Grand Mall offers a luxurious shopping experience with its exquisite architecture and state-of-the-art facilities.
            </p>
            <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider">
              GỬI YÊU CẦU
            </button>
          </div>
        </div>
        <div className="absolute left-32 top-1/2 -translate-y-1/2 hidden lg:block w-1/4">
           <img 
              src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior Detail" 
              className="w-full h-80 object-cover rounded-lg shadow-2xl border-4 border-white"
            />
        </div>
      </section>

      {/* Kiến Trúc Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Kiến Trúc Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wider">Kiến Trúc</h2>
            <p className="text-white text-xl mb-8">
              Hãy nói về dự án của bạn<br />
              Chúng tôi sẵn sàng chia sẻ với bạn tầm nhìn thiết kế của chúng tôi và dẫn bạn vào thế giới thú vị của sự sáng tạo.
            </p>
            <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider">
              GỬI YÊU CẦU
            </button>
          </div>
        </div>
        <div className="absolute left-32 top-1/2 -translate-y-1/2 hidden lg:block w-1/3">
           <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Architecture Detail" 
              className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">A Cube for Life Modern Living, Iranian Soul</h3>
              <p className="text-gray-400 text-xs mb-6">
                These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
              </p>
              <button className="bg-black text-white border border-white/30 px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                Xem chi tiết
              </button>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">A Cube for Life Modern Living, Iranian Soul</h3>
              <p className="text-gray-400 text-xs mb-6">
                These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
              </p>
              <button className="bg-black text-white border border-white/30 px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                Xem chi tiết
              </button>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">A Cube for Life Modern Living, Iranian Soul</h3>
              <p className="text-gray-400 text-xs mb-6">
                These properties are used for business purposes, such as office buildings, retail spaces, warehouses,
              </p>
              <button className="bg-black text-white border border-white/30 px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}