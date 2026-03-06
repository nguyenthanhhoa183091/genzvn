'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'


export default function DevelopmentSectionPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      {/* 1. Sử dụng bg-background để tự động chuyển từ trắng sang đen theo theme */}
      
        <Header />
        
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-16 overflow-visible">
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md py-3 leading-tight">
                Phát triển nhà nước
              </h1>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col">
                <div className="bg-primary text-white p-6 rounded-t-lg font-bold text-xl text-center shadow-lg">
                  Giáo Dục & Đạo Đức
                </div>
                
                {/* 2. Sử dụng bg-card để nền hộp tự tối đi, tránh gây chói trong Dark Mode */}
                <div className="bg-card dark:bg-slate-900/50 border border-t-0 border-border rounded-b-lg p-6 flex-grow shadow-md transition-colors">
                  <h4 className="font-bold text-foreground mb-3">Xây dựng kỹ năng và kiến thức hiện đại</h4>
                  <img
                    src="/developmentSection/giaoduc.png"
                    alt="Giáo dục"
                    className="w-full h-96 object-cover rounded-lg mb-4 shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Xây dựng kỹ năng và kiến thức hiện đại để thanh niên sẵn sàng cho thế giới số.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col">
                {/* Giữ nguyên bg-secondary (xanh lá đậm) vì nó hiển thị tốt trên cả 2 nền */}
                <div className="bg-secondary text-white p-6 rounded-t-lg font-bold text-xl text-center shadow-lg">
                  Môi Trường Phát Triển
                </div>
                
                <div className="bg-card dark:bg-slate-900/50 border border-t-0 border-border rounded-b-lg p-6 flex-grow shadow-md transition-colors">
                  <h4 className="font-bold text-foreground mb-3">Kiến tạo không gian sáng tạo</h4>
                  <img
                    src="/developmentSection/moitruong.png"
                    alt="Môi Trường Phát Triển"
                    className="w-full h-96 object-cover rounded-lg mb-4 shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tạo môi trường lành mạnh để thanh niên phát triển toàn diện về đạo đức và năng lực.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Cơ Hội Phát Triển Sự Nghiệp</h3>
              <p className="max-w-2xl mx-auto text-blue-50 opacity-90 leading-relaxed">
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