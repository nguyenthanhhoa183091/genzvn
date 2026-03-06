'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

function VideoSection() {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-b from-sky-100 to-blue-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic text-blue-900">
            Thanh niên trong cơ cấu xã hội Việt Nam
          </h2>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-blue-200/20">
          <video 
            className="w-full h-auto aspect-video"
            autoPlay // Thêm thuộc tính này để tự chạy
            muted    // Bắt buộc phải có muted để autoPlay hoạt động trên mọi trình duyệt
            loop     // Lặp lại video
            playsInline // Quan trọng cho trải nghiệm trên iPhone/iOS
            controls // Giữ lại thanh điều khiển để người dùng có thể bật tiếng nếu muốn
          >
            <source 
              src="https://raw.githubusercontent.com/nguyenthanhhoa183091/Video_genzvn/main/video_v1.mp4" 
              type="video/mp4" 
            />
            Trình duyệt không hỗ trợ xem video.
          </video>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}
