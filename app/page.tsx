'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
