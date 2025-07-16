import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Testline - Leading Medical Diagnostic Solutions',
  description: 'High-quality medical tests and diagnostic solutions for healthcare professionals and patients.',
  keywords: 'medical tests, diagnostics, healthcare, medical equipment, laboratory tests',
  authors: [{ name: 'Testline' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testline.uz',
    title: 'Testline - Leading Medical Diagnostic Solutions',
    description: 'High-quality medical tests and diagnostic solutions for healthcare professionals and patients.',
    siteName: 'Testline',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testline - Leading Medical Diagnostic Solutions',
    description: 'High-quality medical tests and diagnostic solutions for healthcare professionals and patients.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}