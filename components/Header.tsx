"use client";

import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: 'TRANG CHỦ', href: '/' },
    { label: 'VỊ TRÍ XÃ HỘI', href: '/socialposition' },
    { label: 'VAI TRÒ LỊCH SỬ', href: '/missionsection' },
    { label: 'PHÁT TRIỂN NHÀ NƯỚC', href: '/developmentSection' },
    { label: 'TỔ CHỨC QUẦN THỂ', href: '/organizationssection' },
    { label: 'GAME', href: '/games' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 backdrop-blur-lg border-b border-white/20">
        
        {/* THAY ĐỔI TẠI ĐÂY: 
            1. Bỏ 'mx-auto' để không căn giữa nữa.
            2. Giữ 'max-w-7xl' nếu bạn vẫn muốn giới hạn độ rộng tối đa, hoặc dùng 'w-full' nếu muốn tràn ra.
            3. Thêm 'ml-0' hoặc 'ml-4' để kiểm soát khoảng cách với lề trái.
        */}
        <div className="max-w-7xl ml-4 md:ml-8 lg:ml-12 px-4 h-24 flex items-center justify-start gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img 
              src="/header/banner.jpg" 
              alt="Thanh Niên Việt Nam" 
              className="h-14 md:h-16 w-auto rounded-lg shadow-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl md:text-3xl font-black italic uppercase leading-none">
                <span className="text-white">Thanh Niên</span>
                <span className="text-yellow-400 ml-2">Việt Nam</span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu - Nằm ngay sau Logo nhờ justify-start và gap-6 */}
          <nav className="hidden lg:flex items-center bg-black/20 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
            <div className="flex items-center">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-[10px] xl:text-[11px] font-bold text-white hover:text-yellow-300 transition-all uppercase whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a 
              href="/quiz" 
              className="ml-2 flex-shrink-0 bg-yellow-400 text-blue-900 px-5 py-2 rounded-full text-[11px] font-black uppercase shadow-lg whitespace-nowrap active:scale-95 transition-transform"
            >
              Trắc nghiệm
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-3 z-[60]"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Giữ nguyên) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[55]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-3/4 bg-blue-900 p-8 pt-24 flex flex-col gap-6 shadow-2xl">
            {navigationItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-white text-lg font-bold border-b border-white/10 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/quiz" 
              className="bg-yellow-400 text-blue-900 text-center py-4 rounded-xl font-black"
              onClick={() => setIsOpen(false)}
            >
              THAM GIA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}