export default function HeroSection() {
  const activities = [
    { src: "/activity/1.jpg", delay: "0s" },
    { src: "/activity/2.jpg", delay: "-3s" },
    { src: "/activity/3.jpg", delay: "-6s" },
    { src: "/activity/4.webp", delay: "-9s" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-sky-100 to-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Central Image Area - Tăng chiều cao tổng thể */}
          <div className="flex-1 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Container ảnh trung tâm - Tăng từ w-80 lên w-[450px] */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
              
              {/* Trái tim trung tâm */}
              <div className="relative z-20 w-full h-full animate-breathe">
                <img 
                  src="/heart.png" 
                  alt="Central Heart" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Các ảnh vệ tinh - Tăng từ w-28 lên w-40 */}
              <div className="absolute inset-0 flex items-center justify-center">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="absolute animate-orbit-horizontal"
                    style={{ animationDelay: item.delay }}
                  >
                    <img
                      src={item.src}
                      alt={`Activity ${index + 1}`}
                      className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-2xl border-6 border-white object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Đường quỹ đạo mờ - Mở rộng để bao quát ảnh to */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[50%] border-2 border-blue-300/10 rounded-[100%] z-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Hero Content - Thay bằng ảnh */}
          <div className="flex-1 z-30 ml-12">
            <img
              src="/header/1.jpg"
              alt="Hero Content"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}