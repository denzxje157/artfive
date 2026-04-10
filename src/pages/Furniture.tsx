import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Furniture() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative min-h-[560px] md:h-[70vh] flex items-center overflow-hidden py-10 md:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-white md:w-1/2">
            <div className="border-4 border-white p-4 sm:p-6 md:p-8 inline-block mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide">VẬT PHẨM NỘI THẤT</h1>
            </div>
            <p className="text-base sm:text-lg md:text-2xl font-light max-w-lg leading-relaxed">
              Kiến trúc đánh thức mọi giác quan và xúc cảm bằng những thứ tưởng chừng như gần gũi nhất.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Living Room" 
              className="w-full max-w-lg h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Image 1 with controls */}
          <div className="flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Furniture 1" 
                className="w-full h-[340px] md:h-[500px] object-cover mb-6"
            />
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-10 h-10 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Furniture 2" 
                className="w-full h-[340px] md:h-[500px] object-cover"
            />
          </div>

          {/* Image 3 */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Furniture 3" 
                className="w-full h-[340px] md:h-[500px] object-cover"
            />
          </div>

          {/* Image 4 */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Furniture 4" 
                className="w-full h-[340px] md:h-[500px] object-cover"
            />
          </div>

          {/* Image 5 */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Furniture 5" 
                className="w-full h-[340px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
