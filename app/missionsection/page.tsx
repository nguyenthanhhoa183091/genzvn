'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function MissionSectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          {/* PHẦN TIÊU ĐỀ: ĐÃ GIẢM KÍCH THƯỚC VÀ ĐỔI VỊ TRÍ */}
          <div className="text-center mb-16 overflow-visible">
            {/* Dòng 1: THANH NIÊN VIỆT NAM - Kích thước đã giảm xuống 6xl */}
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              Vai trò và trách nhiệm
            </span>
          </div>

          {/* Three Missions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">
                Lực lượng xung kích và sáng tạo
              </div>
              <div className="bg-white p-6">
                <img
                  src="/missionsection/lucluongxungkich.png"
                  alt="Xung kích"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thanh niên được khuyến khích nuôi dưỡng ước mơ, hoài bão, phát huy tinh thần xung kích, sáng tạo và làm chủ khoa học, công nghệ hiện đại.
                </p>
              </div>
            </div>

            {/* Mission 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-secondary text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">
                Trách nhiệm xây dựng và bảo vệ Tổ quốc
              </div>
              <div className="bg-white p-6">
                <img
                  src="/missionsection/trachnhiem.jpg"
                  alt="Bảo vệ Tổ quốc"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thế hệ trẻ có vai trò và trách nhiệm lịch sử rất nặng nề nhưng cũng đầy vẻ vang đối với sự nghiệp xây dựng xã hội chủ nghĩa trên đất nước ta. Việc phát huy vai trò của thế hệ trẻ trong sự nghiệp xây dựng và bảo vệ Tổ quốc là một phương hướng quan trọng.
                </p>
              </div>
            </div>

            {/* Mission 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">
                Trách nhiệm củng cố khối liên minh
              </div>
              <div className="bg-white p-6">
                <img
                  src="/missionsection/khoilienminh.png"
                  alt="Củng cố khối liên minh"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thanh niên và sinh viên có trách nhiệm to lớn trong việc góp phần củng cố khối liên minh giữa các giai cấp, tầng lớp và xây dựng khối đại đoàn kết toàn dân.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}