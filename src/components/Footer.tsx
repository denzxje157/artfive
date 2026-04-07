import { Link } from 'react-router-dom';

const partners = ['LEXUS', 'Mylife', 'YEN', 'CITYGYM'];

export default function Footer() {
  return (
    <footer className="bg-[#151412] text-white">
      <div className="py-14 flex flex-col items-center border-t border-white/10">
        <h2 className="text-4xl font-semibold">Liên hệ</h2>
        <p className="text-white/70 text-sm mt-3 text-center max-w-3xl px-6">
          ART FIVE sẽ liên lạc với bạn trong thời gian ngắn nhất để tư vấn và giải đáp thắc mắc. Xin cám ơn bạn đã để lại thông tin!
        </p>
        <button className="mt-6 border border-white/60 px-10 py-2.5 rounded-sm hover:bg-white hover:text-black transition">Liên hệ</button>
      </div>

      <div className="bg-[#ececec] text-black py-4 text-center text-4xl font-light tracking-wide">ĐỐI TÁC</div>
      <div className="bg-[#ececec] text-neutral-500 py-5 border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-center text-4xl font-semibold opacity-70">
          {partners.map((name) => <div key={name}>{name}</div>)}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-3xl font-bold mb-3">Art Five Design</h3>
          <p>Trụ sở chính: 143 Hồ Văn Huê, P. 9, Q. Phú Nhuận, HCMC.</p>
          <p className="mt-2">Văn phòng: Unit 2 Charmington La Pointe Building, 98 Cao Thắng, P. 12, Q. 10, HCMC.</p>
          <p className="mt-2">Tel: +848 - 3844 7618</p>
          <p>Email: hello@art5design.com</p>
        </div>

        <div className="space-y-2">
          {['Giới thiệu', 'Dịch vụ', 'Dự án', 'Tuyển dụng', 'Blog', 'Liên hệ'].map((item) => (
            <Link key={item} to="#" className="block hover:underline">{item}</Link>
          ))}
        </div>

        <div>
          <p className="mb-3">Theo dõi chúng tôi</p>
          <div className="flex">
            <input className="bg-transparent border border-white/30 px-3 py-2 flex-1" placeholder="Enter Email..." />
            <button className="bg-white text-black px-4 font-medium">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="bg-[#ececec] text-black text-center text-xs py-2">© 2025 Art Five Design . All rights reserved.</div>
    </footer>
  );
}
