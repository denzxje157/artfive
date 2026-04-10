import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail() {
  return (
    <div className="bg-white min-h-screen pt-28 md:pt-32 pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-12 md:mb-20">
          <Link to="/" className="absolute left-0 text-black hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-[2.75rem] font-bold text-black text-center tracking-tight leading-tight px-8">
            A Cube for Life Modern Living, Iranian Soul
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column */}
          <div className="pr-0 lg:pr-4">
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-2">Commercial</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">Project Overview</h3>
            <p className="text-gray-500 mb-12 leading-relaxed text-[1.05rem]">
              A stunning residential project offering mesmerizing sunrise and sunset views over rolling hills. Company is a sanctuary for those seeking tranquility without compromising urban connectivity. The design philosophy prioritizes sustainability, elegance, and a deep connection with the environment, making it an ideal retreat for families, professionals, and nature lovers alike.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior 1" 
                className="w-full aspect-[3/4] object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior 2" 
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="pl-0 lg:pl-4">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Living Room View" 
              className="w-full h-[240px] md:h-[280px] object-cover mb-8 md:mb-10"
            />

            <div className="relative inline-block mb-6 mt-2">
              <div className="absolute top-0 left-0 w-6 h-3 border-t border-l border-orange-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-3 border-b border-r border-orange-500"></div>
              <h4 className="px-4 py-2 text-xs font-semibold tracking-[0.3em] text-gray-600 uppercase">Project Details</h4>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-10">Architecture Nordic Space</h3>

            <div className="space-y-0">
              <div className="grid grid-cols-3 border-b border-gray-100 py-5">
                <div className="font-bold text-black">Tên dự án:</div>
                <div className="col-span-2 text-gray-700">A&T Saigon Riverside</div>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-5">
                <div className="font-bold text-black">Client:</div>
                <div className="col-span-2 text-gray-700">Commercial</div>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-5">
                <div className="font-bold text-black">Quy mô:</div>
                <div className="col-span-2 text-gray-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>2 tháp cao 40 tầng + khối đế 3-4 tầng + 2 tầng hầm</li>
                    <li>946 căn hộ cao cấp</li>
                    <li>17 căn shophouse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
