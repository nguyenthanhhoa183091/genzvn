'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'


export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Điều Khoản Dịch Vụ
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Điều Khoản Sử Dụng</h2>
              <p className="text-gray-700 mb-4">
                Chào mừng bạn đến với trang web Thanh Niên Việt Nam. Vui lòng đọc kỹ các điều khoản sử dụng dưới đây.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. Chấp Nhận Điều Khoản</h3>
                <p className="text-gray-700">
                  Bằng việc truy cập và sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">2. Sử Dụng Dịch Vụ</h3>
                <p className="text-gray-700">
                  Bạn đồng ý sử dụng dịch vụ cho các mục đích hợp pháp và không vi phạm pháp luật.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">3. Nội Dung</h3>
                <p className="text-gray-700">
                  Mọi nội dung trên trang web thuộc sở hữu của Thanh Niên Việt Nam và được bảo vệ bởi bản quyền.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">4. Hạn Chế Trách Nhiệm</h3>
                <p className="text-gray-700">
                  Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng trang web.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">5. Thay Đổi Điều Khoản</h3>
                <p className="text-gray-700">
                  Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào. Thay đổi sẽ có hiệu lực ngay khi được đăng tải.
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
