import Footer from '@/components/Footer'
import './globals.css'

import Navbar from '@/components/Navbar'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GalileoSoft',
  description: 'Aumente a eficiência do seu negócio com a ajuda da GalileoSoft. Oferecemos soluções de software personalizadas para empresas em diversos setores.',
  // TODO Complete meta tags
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
