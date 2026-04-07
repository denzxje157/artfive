import { ShoppingCart, Mail, Bell, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const navBg = isHome ? 'bg-transparent backdrop-blur-sm' : 'bg-[#151412]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo bên trái (Nếu có) */}
          <div className="flex-shrink-0">
            {/* Thêm logo hoặc text logo vào đây */}
          </div>
          
          {/* Nhóm Menu và Icon lại, đẩy sang bên phải */}
          <div className="flex items-center justify-end flex-1 space-x-1 lg:space-x-8">
            
            {/* Các link menu */}
            <div className="hidden md:flex items-center space-x-10">
              <Link to="/" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">GIỚI THIỆU</Link>
              <div className="relative group cursor-pointer">
                <Link to="/services" className="flex items-center text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">
                  DỊCH VỤ <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                  <Link to="/architecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thiết kế Kiến trúc</Link>
                  <Link to="/interior" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thiết kế Nội thất</Link>
                  <Link to="/furniture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vật phẩm Nội thất</Link>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <Link to="/project" className="flex items-center text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">
                  DỰ ÁN <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">TUYỂN DỤNG</Link>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">BLOG</Link>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">LIÊN HỆ</Link>
            </div>

            {/* Các icon */}
            <div className="flex items-center space-x-8">
              <button className="text-white hover:text-gray-300">
                <ShoppingCart className="w-5 h-5" />
              </button>
              
              <div className="relative">
                <button onClick={() => setIsMailOpen(!isMailOpen)} className="text-white hover:text-gray-300">
                  <Mail className="w-5 h-5" />
                </button>
                {isMailOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-bold text-gray-900">Tin nhắn mới</h3>
                    </div>
                    <div className="px-4 py-4 text-sm text-gray-500 text-center">
                      Không có tin nhắn nào.
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="text-white hover:text-gray-300 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-[#ff5500] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
                </button>
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="text-sm font-bold text-gray-900">Thông báo</h3>
                      <span className="text-xs text-blue-600 cursor-pointer hover:underline">Đánh dấu đã đọc</span>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                        <p className="text-sm text-gray-800">Dự án mới đã được cập nhật</p>
                        <p className="text-xs text-gray-500 mt-1">2 giờ trước</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <p className="text-sm text-gray-800">Chào mừng bạn đến với Art Five</p>
                        <p className="text-xs text-gray-500 mt-1">1 ngày trước</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}