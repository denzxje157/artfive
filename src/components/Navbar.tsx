import { ShoppingCart, Mail, Bell, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // Thêm State quản lý Menu trên Điện thoại
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const isHome = location.pathname === '/';
  const navBg = isHome
    ? 'bg-black/45 backdrop-blur-md border-b border-white/10'
    : 'bg-[#151412]/95 backdrop-blur-md border-b border-white/10';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
    setIsMailOpen(false);
    setIsNotificationsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg}`}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20 md:h-24">
          <div className="flex items-center ml-auto">
            
            {/* Desktop Menu - Bị ẩn trên Mobile (hidden lg:flex) */}
            <div className="hidden lg:flex items-center gap-8 lg:gap-10 mr-8 lg:mr-12">
              <Link to="/about" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">GIỚI THIỆU</Link>

              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="flex items-center text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide gap-1">
                  <Link to="/services" onClick={() => setIsServicesOpen(false)}>
                    DỊCH VỤ
                  </Link>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className={`absolute left-0 top-full mt-0 w-56 bg-white rounded-lg shadow-xl py-3 z-50 ${isServicesOpen ? 'block' : 'hidden'}`}>
                  <Link to="/architecture" onClick={() => setIsServicesOpen(false)} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Thiết kế Kiến trúc</Link>
                  <Link to="/interior" onClick={() => setIsServicesOpen(false)} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Thiết kế Nội thất</Link>
                  <Link to="/furniture" onClick={() => setIsServicesOpen(false)} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100">Vật phẩm Nội thất</Link>
                </div>
              </div>

              <div className="relative">
                <Link to="/project" className="flex items-center text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">
                  DỰ ÁN <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">TUYỂN DỤNG</Link>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">BLOG</Link>
              <Link to="#" className="text-white hover:text-gray-300 text-sm font-medium uppercase tracking-wide">LIÊN HỆ</Link>
            </div>

            {/* Các Icons bên phải */}
            <div className="flex items-center space-x-4 lg:space-x-8">
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

              {/* Mobile Hamburger Button - Chỉ hiện dưới lg */}
              <button 
                className="lg:hidden text-white hover:text-gray-300 ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel - Xổ xuống khi bấm nút Hamburger */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#151412]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl flex flex-col z-50 max-h-[80vh] overflow-y-auto">
            <Link to="/about" className="px-6 py-4 text-white text-sm font-medium uppercase border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>GIỚI THIỆU</Link>
            
            {/* Mobile Services Dropdown - Đã Sửa Lại */}
            <div className="flex flex-col border-b border-white/5">
              <div className="flex items-center justify-between px-6 py-3 w-full text-left">
                
                {/* Chữ DỊCH VỤ sẽ là Link để bấm chuyển sang trang /services */}
                <Link to="/services" className="flex-1 text-white text-sm font-medium uppercase py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  DỊCH VỤ
                </Link>
                
                {/* Mũi tên bên phải sẽ là Nút để xổ mục con */}
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="p-2 bg-white/5 rounded-md border border-white/10 text-white"
                  aria-label="Hiện danh sách dịch vụ"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

              </div>
              
              {/* Danh sách 3 mục con */}
              {isMobileServicesOpen && (
                <div className="flex flex-col bg-white/5 py-2">
                   <Link to="/architecture" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-2.5 text-sm text-gray-300 hover:text-white">Thiết kế Kiến trúc</Link>
                   <Link to="/interior" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-2.5 text-sm text-gray-300 hover:text-white">Thiết kế Nội thất</Link>
                   <Link to="/furniture" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-2.5 text-sm text-gray-300 hover:text-white">Vật phẩm Nội thất</Link>
                </div>
              )}
            </div>

            <Link to="/project" className="px-6 py-4 text-white text-sm font-medium uppercase border-b border-white/5 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
              <span>DỰ ÁN</span>
            </Link>
            <Link to="#" className="px-6 py-4 text-white text-sm font-medium uppercase border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>TUYỂN DỤNG</Link>
            <Link to="#" className="px-6 py-4 text-white text-sm font-medium uppercase border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link>
            <Link to="#" className="px-6 py-4 text-white text-sm font-medium uppercase" onClick={() => setIsMobileMenuOpen(false)}>LIÊN HỆ</Link>
          </div>
        )}

      </div>
    </nav>
  );
}