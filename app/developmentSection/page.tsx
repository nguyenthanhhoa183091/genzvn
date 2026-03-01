'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function DevelopmentSectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16 overflow-visible">
            {/* Dòng 1: THANH NIÊN VIỆT NAM - Kích thước đã giảm xuống 6xl */}
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              Phát triển
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="bg-primary text-white p-6 rounded-lg font-bold text-xl text-center mb-4">
                Giáo Dục & Đạo Đức
              </div>
              
              {/* Nâng Công W Tuce */}
              <div className="bg-slate-100 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-foreground mb-3">Xây dựng kỹ năng và kiến thức hiện đại</h4>
                <img
                  src="/developmentSection/giaoduc.png"
                  alt="Nâng cao công nghệ"
                  className="w-full h-96 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Xây dựng kỹ năng và kiến thức hiện đại để thanh niên sẵn sàng cho thế giới số.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-secondary text-white p-6 rounded-lg font-bold text-xl text-center mb-4">
                Môi Trường Phát Triển
              </div>
              
              {/* Học Tập & Rèn Luyện */}
              <div className="bg-slate-100 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-foreground mb-3">Môi Trường Phát Triển</h4>
                <img
                  src="/developmentSection/moitruong.png"
                  alt="Môi Trường Phát Triển"
                  className="w-full h-96 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tạo môi trường lành mạnh để thanh niên phát triển toàn diện về đạo đức và năng lực
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Cơ Hội Phát Triển Sự Nghiệp</h3>
            <p className="mb-6 text-lg">
              Thanh niên được khuyến khích tham gia các chương trình đào tạo, học tập và rèn luyện để phát triển toàn diện.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}