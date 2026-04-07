import React from 'react';

export default function Interior() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center text-white flex flex-col items-center px-6">
          <div className="w-1 h-16 bg-[#d97736] mb-6"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">THIẾT KẾ THI<br/>CÔNG NỘI THẤT</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">
            Kiến trúc đánh thức mọi giác quan và xúc cảm bằng những thứ tưởng chừng như gần gũi nhất.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {/* Column 1 */}
          <div className="space-y-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[300px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[400px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-16 md:pt-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[450px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[300px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[250px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Lights" 
                className="w-full h-[500px] object-cover mb-4"
              />
              <h3 className="text-xl text-center text-black">Kitchen Lights</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
