import { ShoppingCart, Mail, Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const nav = [
  { label: 'GIỚI THIỆU', to: '/' },
  { label: 'DỊCH VỤ', to: '/services', hasArrow: true },
  { label: 'DỰ ÁN', to: '/project', hasArrow: true },
  { label: 'TUYỂN DỤNG', to: '#' },
  { label: 'BLOG', to: '#' },
  { label: 'LIÊN HỆ', to: '#' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#120f0d]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-end gap-7">
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {nav.map((item) => (
            <Link key={item.label} to={item.to} className="text-[11px] tracking-wide text-white/90 hover:text-white flex items-center gap-1">
              {item.label}
              {item.hasArrow ? <ChevronDown size={13} /> : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-white/90">
          <button className="hover:text-white"><ShoppingCart size={14} /></button>
          <button className="hover:text-white"><Mail size={14} /></button>
          <button className="hover:text-white relative"><Bell size={14} /><span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-orange-500 rounded-full" /></button>
        </div>
      </div>
    </nav>
  );
}
