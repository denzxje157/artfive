import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="About Background" 
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-28 left-4 sm:left-8 md:left-16 lg:left-24 z-20">
        <Link to="/" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-[3px] h-24 bg-[#c89b51] mb-6"></div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-widest">GIỚI THIỆU</h2>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight">Art Five Design</h1>
      </div>
    </div>
  );
}
