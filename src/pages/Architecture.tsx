import React from 'react';

export default function Architecture() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">THIẾT KẾ THI<br/>CÔNG KIẾN TRÚC</h1>
            <p className="text-lg md:text-xl font-light max-w-md">
              Kiến trúc đánh thức mọi giác quan và xúc cảm bằng những thứ tưởng chừng như gần gũi nhất.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Skyscrapers" 
              className="w-full max-w-lg h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-24 overflow-hidden">
        {/* Blurred background for the projects section */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 drop-shadow-md">DỰ ÁN GẦN ĐÂY</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-[300px] object-cover shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-[250px] object-cover shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 3" 
                className="w-full h-[200px] object-cover shadow-lg"
              />
            </div>
            
            {/* Column 2 */}
            <div className="space-y-6 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 4" 
                className="w-full h-[400px] object-cover shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 5" 
                className="w-full h-[250px] object-cover shadow-lg"
              />
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 6" 
                className="w-full h-[250px] object-cover shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Project 7" 
                className="w-full h-[300px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
