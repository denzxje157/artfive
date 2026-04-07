import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start mb-12">
          <Link to="/" className="mt-2 mr-8 text-black hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-5xl font-bold text-black leading-tight">
            A Cube for Life Modern Living, Iranian Soul
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-medium text-black mb-2">Commercial</h2>
            <h3 className="text-4xl font-bold text-black mb-6">Project Overview</h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              A stunning residential project offering mesmerizing sunrise and sunset views over rolling hills. Company is a sanctuary for those seeking tranquility without compromising urban connectivity. The design philosophy prioritizes sustainability, elegance, and a deep connection with the environment, making it an ideal retreat for families, professionals, and nature lovers alike.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior 1" 
                className="w-full h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior 2" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Living Room View" 
              className="w-full h-[300px] object-cover mb-12"
            />

            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-500"></div>
              <h4 className="pl-4 text-sm font-medium tracking-widest text-gray-500 uppercase">Project Details</h4>
            </div>

            <h3 className="text-3xl font-bold text-black mb-10">Architecture Nordic Space</h3>

            <div className="space-y-6">
              <div className="grid grid-cols-3 border-b border-gray-200 pb-6">
                <div className="font-bold text-black">Tên dự án:</div>
                <div className="col-span-2 text-gray-600">A&T Saigon Riverside</div>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-200 pb-6">
                <div className="font-bold text-black">Client:</div>
                <div className="col-span-2 text-gray-600">Commercial</div>
              </div>
              <div className="grid grid-cols-3 pt-2">
                <div className="font-bold text-black">Quy mô:</div>
                <div className="col-span-2 text-gray-600">
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
