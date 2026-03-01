import React from 'react';

export default function Header() {
  const navigationItems = [
    { label: 'TRANG CHỦ', href: '/' },
    { label: 'VỊ TRÍ XÃ HỘI', href: '/socialposition' },
    { label: 'VAI TRÒ LỊCH SỬ', href: '/missionsection' },
    { label: 'PHÁT TRIỂN NHÀ NƯỚC', href: '/developmentSection' },
    { label: 'TỔ CHỨC QUẦN THỂ', href: '/organizationssection' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      {/* Lớp nền Gradient xanh đậm chất thanh niên, có hiệu ứng kính mờ */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-24 gap-2">
            
            {/* CỤM TRÁI: Chữ "Thanh Niên Việt Nam" làm lớn và nổi bật */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                <span className="text-white drop-shadow-md uppercase italic">
                  Thanh Niên
                </span>
                <span className="text-yellow-400 drop-shadow-md uppercase italic ml-2">
                  Việt Nam
                </span>
              </h1>
              {/* Slogan nhỏ đi kèm nếu cần (tùy chọn) */}
              <p className="text-[10px] text-blue-200 tracking-[0.2em] font-bold mt-1 uppercase">
                Sức Mạnh Việt - Lực Lượng Nông Cốt
              </p>
            </div>

            {/* CỤM PHẢI: Các mục điều hướng gom về 1 phía */}
            <nav className="hidden lg:flex items-center bg-black/10 rounded-full px-2 py-1 border border-white/10">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 text-[10px] xl:text-[11px] font-extrabold tracking-wider text-white hover:text-yellow-300 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hiệu ứng hover vạch dưới hiện đại */}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </a>
              ))}
              
              {/* Nút Action để tạo điểm kết thúc cho menu bên phải */}
              <a 
                href="/quiz"
                className="ml-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-2 rounded-full text-[11px] font-black transition-all shadow-lg active:scale-95"
              >
                Tham Gia
              </a>
            </nav>

            {/* Menu Mobile (Sẽ hiện khi màn hình nhỏ) */}
            <div className="lg:hidden text-white">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}