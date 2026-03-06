export default function Footer() {
  const navigationItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Vị trí xã hội', href: '/socialposition' },
    { label: 'Vai trò lịch sử', href: '/missionsection' },
    { label: 'Phát triển nhà nước', href: '/developmentSection' },
    { label: 'Tổ chức quần thể', href: '/organizationssection' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Footer Content Grid - Chia 3 cột bằng nhau tuyệt đối */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Cột 1: Căn trái */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="font-bold text-xl tracking-tight relative inline-block">
              Thanh niên Việt Nam
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
            </h4>
            <p className="text-sm leading-relaxed text-blue-100/80 max-w-[280px]">
              Lực lượng chính xây dựng đất nước, 
              khát vọng vươn xa và cống hiến vì cộng đồng.
            </p>
          </div>

          {/* Cột 2: Căn giữa để lấp đầy khoảng trống ở giữa */}
          <div className="flex flex-col items-start md:items-center">
            <div className="text-left"> {/* Giữ text align left nhưng container nằm giữa */}
              <h4 className="font-bold text-xl mb-6 relative inline-block">
                Liên Kết Nhanh
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
              </h4>
              <ul className="text-sm space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-blue-100/70 hover:text-yellow-300 transition-all block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cột 3: Căn phải (hoặc căn giữa tùy bạn, ở đây mình để items-end để dàn đều ra biên phải) */}
          <div className="flex flex-col items-start md:items-end">
            <div className="text-left">
              <h4 className="font-bold text-xl mb-6 relative inline-block">
                Chính Sách
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400 rounded-full"></span>
              </h4>
              <ul className="text-sm space-y-3">
                {[
                  { label: 'Thành viên và nguồn dẫn chứng', href: '/privacy' },
                  { label: 'Minh chứng AI', href: '/terms' },
                  // { label: 'Hỗ Trợ', href: '/support' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-blue-100/70 hover:text-yellow-300 transition-all block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white/90">
          <p className="font-medium">
            &copy; Copyright FreeCode <span className="text-yellow-300">2026</span>. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0  tracking-widest text-xs md:text-sm font-medium">
            Cống hiến vì tương lai Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}

