'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 overflow-visible">
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              Nguồn dẫn chứng
            </span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Chính Sách Bảo Mật Thông Tin</h2>
              <p className="text-gray-700 mb-4">
                Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng trên trang web Thanh Niên Việt Nam.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. Thu Thập Thông Tin</h3>
                <p className="text-gray-700">
                  Chúng tôi chỉ thu thập thông tin cần thiết để cải thiện trải nghiệm người dùng và cung cấp dịch vụ tốt hơn.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">2. Sử Dụng Thông Tin</h3>
                <p className="text-gray-700">
                  Thông tin của bạn được sử dụng để:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Cung cấp nội dung phù hợp</li>
                  <li>Cải thiện dịch vụ</li>
                  <li>Liên hệ khi cần thiết</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">3. Bảo Mật</h3>
                <p className="text-gray-700">
                  Chúng tôi áp dụng các biện pháp bảo mật hiện đại để bảo vệ thông tin của bạn.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">4. Liên Hệ</h3>
                <p className="text-gray-700">
                  Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ với chúng tôi.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
