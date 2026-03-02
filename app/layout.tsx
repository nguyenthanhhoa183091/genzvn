import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin", "latin-ext"] });
const _geistMono = Geist_Mono({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: 'Thanh niên Việt Nam',
  description: 'Thanh niên Việt Nam',
  generator: 'GenZVN',
  icons: {
    icon: [
      {
        url: '/logo/Hội_Liên_hiệp_Thanh_niên_Việt_Nam.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo/Hội_Liên_hiệp_Thanh_niên_Việt_Nam.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo/Hội_Liên_hiệp_Thanh_niên_Việt_Nam.png',
        type: 'image/png',
      },
    ],
    apple: '/logo/Hội_Liên_hiệp_Thanh_niên_Việt_Nam.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
