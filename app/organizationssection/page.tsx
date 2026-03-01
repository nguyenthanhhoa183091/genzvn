'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function OrganizationsSectionPage() {
  const organizations = [
    {
      id: 1,
      name: 'Đoàn TNCS Hồ Chí Minh',
      image: '/organizationssection/card1.png',
      button: 'Phong Trào Thí Dụa',
    },
    {
      id: 2,
      name: 'Hội Liên Hiệp Thanh Niên Việt Nam',
      image: '/organizationssection/card2.png',
      button: 'Sức Mạnh Đoàn Thể',
    },
    {
      id: 3,
      name: 'Hội Liên Hiệp Thanh Niên Việt Nam (Chi Nhánh)',
      image: '/organizationssection/card3.png',
      button: 'Khám Phá Cơ Hội',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16 overflow-visible">
            {/* Dòng 1: THANH NIÊN VIỆT NAM - Kích thước đã giảm xuống 6xl */}
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              Đoàn Thể Thanh Niên
            </span>
          </div>

          {/* Organizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Organization Image */}
                <div className="relative">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-64 object-contain"
                  />
                </div>

                {/* Organization Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {org.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {org.id === 1 && "Đơn vị nòng cốt trong giai cấp công nhân và khối liên minh. Chủ động hướng dẫn các hình thức hoạt động, phong trào thi đua yêu nước để phát huy tài năng sáng tạo của tuổi trẻ."}
                    {org.id === 2 && "Tổ chức đại diện cho sức mạnh đại đoàn kết, tạo \"mái nhà chung\" để thanh niên gắn kết với các giai tầng khác (Công - Nông - Trí thức) trong sự nghiệp bảo vệ Tổ quốc."}
                    {org.id === 3 && "Tạo môi trường thuận lợi để thế hệ trẻ học tập, nghiên cứu và làm chủ khoa học công nghệ hiện đại, phát triển toàn diện cả về trí tuệ và kỹ năng."}
                  </p>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    {org.button}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 bg-gradient-to-r from-primary via-blue-600 to-secondary text-white rounded-lg p-8 text-center">
            <p className="text-lg leading-relaxed">
              Thanh niên Việt Nam là lực lượng chính trong xây dựng và bảo vệ đất nước, 
              luôn sẵn sàng đóng góp cho sự phát triển bền vững của dân tộc.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}