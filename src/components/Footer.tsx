import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white font-sans">
      {/* Top Section */}
      <div className="py-16 flex flex-col items-center justify-center border-b border-white/10">
        <h2 className="text-3xl font-bold mb-4">Liên hệ</h2>
        <p className="text-gray-400 text-sm mb-8 text-center max-w-2xl px-4">
          ART FIVE sẽ liên lạc với bạn trong thời gian ngắn nhất để tư vấn và giải đáp thắc mắc. Xin cám ơn bạn đã để lại thông tin!
        </p>
        <button className="border border-white/50 px-10 py-2.5 hover:bg-white hover:text-black transition-colors text-sm">
          Liên hệ
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Art Five Design</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              <strong className="text-white">Trụ sở chính:</strong><br />
              143 Ho Van Hue, P. 9, Q. Phú Nhuận,<br />
              HCMC.
            </p>
            <p>
              <strong className="text-white">Văn phòng:</strong><br />
              Unit 2 Charmington La Pointe Building,<br />
              98 Cao Thang, P. 12, Q. 10, HCMC.
            </p>
            <p>
              <strong className="text-white">Tel:</strong> +848 - 3844 7618
            </p>
            <p>
              <strong className="text-white">Email:</strong> hello@art5design.com
            </p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">Thông tin</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Giới thiệu</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Dịch vụ</Link></li>
            <li><Link to="/project" className="hover:text-white transition-colors">Dự án</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Tuyển dụng</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-6">Theo dõi chúng tôi</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col">
            <div className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email..." 
                className="bg-transparent border border-white/20 px-4 py-2 w-full focus:outline-none focus:border-white text-sm"
                required
              />
              <button type="submit" className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-gray-200 transition-colors">
                SUBSCRIBE
              </button>
            </div>
            {isSubscribed && (
              <span className="text-green-400 text-sm mt-2">Cảm ơn bạn đã đăng ký!</span>
            )}
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#e5e5e5] text-black text-center py-4 text-xs font-medium">
        © 2025 Art Five Design . All rights reserved.
      </div>
    </footer>
  );
}
