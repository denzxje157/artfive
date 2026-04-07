import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const logoTo =
  'https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo-to.png';
const logo1 =
  'https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo1.png';
const logo2 =
  'https://cazllsidgvysyxbvrftq.supabase.co/storage/v1/object/public/images-sacviet/logo2.png';

const imgA =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80';
const imgB =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
const imgC =
  'https://images.unsplash.com/photo-1600566753051-f0bca0e48d31?auto=format&fit=crop&w=1200&q=80';
const imgD =
  'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1200&q=80';

const cards = [imgB, imgA, imgC];

export default function HomePage() {
  return (
    <div className="bg-[#120f0d] text-white overflow-hidden">
      <section className="relative min-h-[930px] pt-32 pb-20">
        <img src={logoTo} alt="robot" className="hero-float absolute right-[-24%] top-[80px] w-[860px] max-w-none opacity-95" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-start">
            <div className="pt-8">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08]">Art Five Design</h1>
              <p className="text-white/70 max-w-xl mt-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-7 flex items-center gap-5">
                <button className="px-8 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition">Explore</button>
                <button className="group inline-flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full border border-white/70 flex items-center justify-center group-hover:bg-white/10 transition">
                    <Play size={16} className="ml-0.5" />
                  </span>
                  <span className="text-sm text-white/90">Live Demo...</span>
                </button>
              </div>

              <div className="mt-14 w-[340px] max-w-full rounded-3xl border border-white/25 bg-white/5 backdrop-blur-lg px-6 pb-6 pt-20 relative">
                <img src={logo2} alt="Cruzz" className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 drop-shadow-2xl" />
                <h3 className="text-xl font-semibold">Cruzz</h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[34px] border border-white/25 bg-white/5 backdrop-blur-xl px-6 pt-28 pb-10 text-center mt-6 max-w-[320px] ml-auto">
                <img src={logo1} alt="Cruzz Robot" className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 drop-shadow-[0_0_45px_rgba(255,255,255,.35)]" />
                <h3 className="text-red-500 font-bold text-xl">Cruzz-Robot hướng dẫn</h3>
                <button className="mt-4 px-7 py-1.5 border border-white/60 rounded-full text-sm hover:bg-white/10 transition">Xem thêm</button>
              </div>
            </div>
          </div>

          <h2 className="text-center text-4xl font-bold mt-20 mb-8">Giới thiệu</h2>
          <div className="glass rounded-[34px] p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold">Art Five Design</h3>
              <p className="mt-4 text-white/75 text-sm leading-relaxed">
                Sản phẩm của Art Five Design Corporation là sự kết hợp của nền tảng vững chắc về kiến trúc và thiết kế chuyên sâu, hướng đến tiêu chí tạo ra những công trình vượt qua mọi thách thức về thẩm mỹ, công năng sử dụng linh hoạt, bền bỉ và đáp ứng nhu cầu hiện đại.
              </p>
              <button className="mt-7 border border-white/60 rounded-md px-5 py-2 text-sm">XEM TẤT CẢ</button>
            </div>

            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={imgA} alt="Interior" className="w-full h-[250px] md:h-[290px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <button className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center"><ChevronLeft size={17} /></button>
                  <button className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center"><ChevronRight size={17} /></button>
                </div>
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                <span className="w-7 h-1.5 bg-white rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16" style={{ backgroundImage: `url(${imgC})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="glass rounded-[32px] p-7 grid md:grid-cols-2 gap-7 items-center">
            <div className="grid grid-cols-2 gap-2">
              {cards.map((src, i) => <img key={i} src={src} alt="project" className="h-32 w-full object-cover rounded" />)}
              <img src={imgD} alt="project" className="h-32 w-full object-cover rounded" />
            </div>
            <div>
              <h3 className="text-4xl font-semibold">Dịch vụ</h3>
              <p className="text-white/80 mt-3 leading-relaxed text-sm">
                Đội ngũ Thiết kế & Thi công Nội thất của Art Five Corporation là các chuyên gia giàu kinh nghiệm, chuyên nghiệp, tận tâm và sáng tạo.
              </p>
              <button className="mt-7 border border-white/60 rounded-md px-5 py-2 text-sm">XEM TẤT CẢ</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-8 md:py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[260px_1fr] gap-6 items-center">
          <img src={imgD} alt="building" className="w-full h-[220px] object-cover" />
          <div>
            <p className="text-orange-500 text-xs font-semibold">Why Choose Us</p>
            <h3 className="text-5xl font-semibold">Where Vision Meets Construction.</h3>
            <div className="grid md:grid-cols-2 gap-5 mt-5 text-sm text-neutral-600">
              <p><b className="text-black">01 Qualified Planning</b><br />Các giải pháp phù hợp với nhu cầu.</p>
              <p><b className="text-black">02 Professional Design</b><br />Thiết kế tối ưu cho doanh nghiệp.</p>
              <p><b className="text-black">03 Construction Quality</b><br />Chất lượng thi công chuẩn chỉnh.</p>
              <p><b className="text-black">04 Expert Worker</b><br />Đội ngũ chuyên gia dày dạn kinh nghiệm.</p>
            </div>
          </div>
        </div>
      </section>

      {([['DÂN DỤNG', imgD], ['THƯƠNG MẠI', imgA], ['KIẾN TRÚC', imgB]] as Array<[string, string]>).map(([title, bg]) => (
        <section key={title} className="relative py-14 md:py-20" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="glass rounded-[34px] px-8 py-8 md:py-10 grid md:grid-cols-2 items-center gap-6">
              <img src={bg} alt={title} className="h-44 w-full object-cover rounded" />
              <div>
                <h3 className="text-4xl md:text-5xl font-semibold">{title}</h3>
                <p className="text-white/80 mt-4 max-w-md">Hãy nói về dự án của bạn. Chúng tôi sẵn sàng chia sẻ với bạn tầm nhìn thiết kế của chúng tôi.</p>
                <button className="mt-5 border border-white/60 rounded-full px-5 py-2 text-sm hover:bg-white/10">GỬI YÊU CẦU</button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-14" style={{ backgroundImage: `url(${imgC})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-6">
          {cards.map((src, i) => (
            <article key={i} className="glass rounded-[30px] p-4 hover:-translate-y-1 transition-transform duration-300">
              <img src={src} alt="portfolio" className="h-56 w-full object-cover rounded-2xl" />
              <h4 className="mt-3 text-sm font-semibold">A Cube For Life Modern Living, Japan Soul</h4>
              <p className="text-xs text-white/65 mt-2">Three properties are used for business purposes, such as office buildings, retail spaces.</p>
              <button className="mt-3 text-sm font-semibold underline">Xem chi tiết</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
