'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
<section className="py-16 md:py-24 bg-white">
  {/* Tăng max-w từ 4xl lên 6xl hoặc 7xl để đủ không gian cho 1 hàng chữ dài */}
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16 overflow-visible">
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight inline-block whitespace-nowrap">
        Thành viên và nguồn dẫn chứng
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
                  <li>Cải thiện trải nghiệm người dùng</li>
                  <li>Gửi thông báo và cập nhật</li>
                  <li>Cải thiện dịch vụ</li>
                  <li>Liên hệ khi cần thiết</li>
                </ul>
              </section>

{/* BOX THÀNH VIÊN PHÁT TRIỂN */}
              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-6">3. Đội Ngũ Phát Triển & Phân Công</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-200 shadow-sm">
                  
                  {/* Grid hiển thị thành viên */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Nhóm Nội dung & Website */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-blue-600">
                      <h4 className="font-black text-blue-900 mb-3 uppercase text-sm tracking-wider">Nội dung & Website</h4>
                      <ul className="space-y-2">
                        <li className="flex flex-col">
                          <span className="font-bold text-gray-800">Đỗ Trần Quốc Đạt</span>
                          <span className="text-xs text-blue-600 font-mono">SE182836</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-bold text-gray-800">Nguyễn Thanh Hòa</span>
                          <span className="text-xs text-blue-600 font-mono">SE183091</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-xs text-gray-500 italic">Hoàn thành: 05/03</p>
                    </div>

                    {/* Nhóm Nội dung Slide */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-cyan-500">
                      <h4 className="font-black text-blue-900 mb-3 uppercase text-sm tracking-wider">Thiết kế Slide</h4>
                      <ul className="space-y-2">
                        <li className="flex flex-col">
                          <span className="font-bold text-gray-800">Trần Hoàng Long</span>
                          <span className="text-xs text-cyan-600 font-mono">SE182487</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-bold text-gray-800">Nguyễn Đình Vũ Hải</span>
                          <span className="text-xs text-cyan-600 font-mono">SE182676</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-xs text-gray-500 italic">Hoàn thành: 03/03</p>
                    </div>

                    {/* Nhóm Câu hỏi & Game */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border-t-4 border-yellow-500">
                      <h4 className="font-black text-blue-900 mb-3 uppercase text-sm tracking-wider">Câu hỏi & Game</h4>
                      <ul className="space-y-2">
                        <li className="flex flex-col">
                          <span className="font-bold text-gray-800">Nguyễn Quý Toàn</span>
                          <span className="text-xs text-yellow-600 font-mono">SE182785</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-xs text-gray-500 italic">Hoàn thành: 04/03</p>
                    </div>
                  </div>

                  {/* Bảng chi tiết công việc (Ẩn trên mobile để đỡ rối) */}
                  <div className="hidden md:block overflow-hidden rounded-lg border border-blue-100 bg-white/50">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-blue-100 text-blue-800">
                        <tr>
                          <th className="p-3 font-bold">Nhiệm vụ</th>
                          <th className="p-3 font-bold">Thành viên phụ trách</th>
                          <th className="p-3 font-bold text-center">Deadline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-50">
                        <tr>
                          <td className="p-3 text-gray-700">Soạn Slide thuyết trình</td>
                          <td className="p-3 text-gray-600 italic">Long + Hải</td>
                          <td className="p-3 text-center text-green-600 font-bold">03/03</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-700">Trắc nghiệm game & câu hỏi thảo luận</td>
                          <td className="p-3 text-gray-600 italic">Toàn</td>
                          <td className="p-3 text-center text-green-600 font-bold">04/03</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-700">Xây dựng nội dung & Frontend Website</td>
                          <td className="p-3 text-gray-600 italic">Đạt + Hòa</td>
                          <td className="p-3 text-center text-green-600 font-bold">05/03</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">4. Bảo Mật</h3>
                <p className="text-gray-700">
                  Chúng tôi áp dụng các biện pháp bảo mật hiện đại để bảo vệ thông tin của bạn.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-800 mb-3">5. Liên Hệ</h3>
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