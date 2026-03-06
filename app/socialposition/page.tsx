'use client'



import React, { useState, useEffect } from 'react'

import Header from '@/components/Header'

import Footer from '@/components/Footer'

import ScrollToTop from '@/components/ScrollToTop'



export default function MissionSectionPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/socialposition/congnhanh.png',
    '/socialposition/trithuc.png', 
    '/socialposition/nongdan.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (

    <main className="min-h-screen bg-background">

      <Header />

      

      <section className="py-16 md:py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          {/* Section Title */}

        {/* PHẦN TIÊU ĐỀ: ĐÃ GIẢM KÍCH THƯỚC VÀ ĐỔI VỊ TRÍ */}

          <div className="text-center mb-16 overflow-visible">

            <h2 className="flex flex-col items-center"> 

              {/* Dòng 1: THANH NIÊN VIỆT NAM - Kích thước đã giảm xuống 6xl */}

              <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">

                Vai trò và trách nhiệm lịch sử

              </span>

              

              {/* Dòng 2: Text nhỏ ở dưới - Kích thước giảm xuống xl/base */}

            <span className="text-sm text-muted-foreground leading-relaxed italic  px-4 py-1 -mt-1 select-none">

                  Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, cơ cấu xã hội - giai cấp bao gồm nhiều nhóm cơ bản. Bên cạnh các giai cấp, tầng lớp chủ đạo như công nhân, nông dân, trí thức và doanh nhân

                </span>

              </h2>

          </div>

          {/* Three Missions Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Mission 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">
              Xây Dựng Đất Nước
            </div>
            <div className="bg-white p-6">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Công nhân, trí thức, nông dân - Ảnh ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thanh niên được khuyến khích nuôi dưỡng ước mơ, hoài bão, phát huy tinh thần xung kích, sáng tạo và làm chủ khoa học, công nghệ hiện đại.
              </p>
            </div>
          </div>

          {/* Mission 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-secondary text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">
              Bảo Vệ Tổ Quốc
            </div>
            <div className="bg-white p-6">
              <img
                src="/socialposition/baovetoquoc.jpg"
                alt="Bảo vệ tổ quốc"
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
              Đoàn Kết Toàn Dân
            </div>
            <div className="bg-white p-6">
              <img
                src="/socialposition/thanhnien.jpg"
                alt="Đoàn kết"
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

