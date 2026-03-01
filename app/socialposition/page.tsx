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

            <h2 className="flex flex-col items-center"> 

              {/* Dòng 1: THANH NIÊN VIỆT NAM - Kích thước đã giảm xuống 6xl */}

              <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">

                Vai trò và trách nhiệm lịch sử

              </span>

              

              {/* Dòng 2: Text nhỏ ở dưới - Kích thước giảm xuống xl/base */}

            <span className="text-sm md:text-lg font-medium italic uppercase tracking-[0.3em] text-blue-900/60 px-4 py-1 -mt-1 select-none">

                  Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, cơ cấu xã hội - giai cấp bao gồm nhiều nhóm cơ bản. Bên cạnh các giai cấp, tầng lớp chủ đạo như công nhân, nông dân, trí thức và doanh nhân

                </span>

              </h2>



          {/* Three Missions Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Mission 1 */}

            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">

              <div className="bg-primary text-white p-6 text-center font-bold text-xl h-20 flex items-center justify-center">

                Lúck Lượng Xung Kích & Sáng Tạo

              </div>

              <div className="bg-white p-6">

                <img

                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"

                  alt="Xung kích"

                  className="w-full h-48 object-cover rounded-lg mb-4"

                />

                <p className="text-sm text-muted-foreground leading-relaxed">

                  Thanh niên là lực lượng dẫn đầu trong sáng tạo và đổi mới, góp phần phát triển bền vững đất nước.

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

                  src="https://images.unsplash.com/photo-1533611338633-f56301f464a6?w=400&h=300&fit=crop"

                  alt="Bảo vệ tổ quốc"

                  className="w-full h-48 object-cover rounded-lg mb-4"

                />

                <p className="text-sm text-muted-foreground leading-relaxed">

                  Lực lượng thanh niên vũ trang luôn sẵn sàng bảo vệ chủ quyền và toàn vẹn lãnh thổ quốc gia.

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

                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop"

                  alt="Đoàn kết"

                  className="w-full h-48 object-cover rounded-lg mb-4"

                />

                <p className="text-sm text-muted-foreground leading-relaxed">

                  Thanh niên kết nối các lớp dân cư, thúc đẩy sự đoàn kết và hòa bình xã hội.

                </p>

              </div>

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

