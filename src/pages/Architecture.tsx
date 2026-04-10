import React from 'react';

export default function Architecture() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative h-[52vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center text-white flex flex-col items-center px-6">
          <div className="w-1 h-12 bg-[#d97736] mb-6"></div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-wide">THIẾT KẾ THI<br/>CÔNG NỘI THẤT</h1>
          <p className="text-base md:text-xl font-light max-w-2xl leading-relaxed">
            Kiến trúc đánh thức mọi giác quan và xúc cảm bằng<br className="hidden md:block" />những thứ tưởng chừng như gần gũi nhất.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="space-y-12 md:pt-20">
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[250px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[350px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[450px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[250px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-12 md:pt-20">
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[250px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[450px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-800">Kitchen Lights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
