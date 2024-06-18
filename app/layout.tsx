import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Navbar from '@/components/Navbar';
import FloatingButton from '@/components/FloatingButton';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
    <html className='scroll-smooth' lang="pt">
      <body className={`scroll-smooth ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingButton />
        <Suspense>
          {process.env?.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id=
              {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        </Suspense>
      </body>
    </html>
  )
}
