'use client';

import { Instagram, Youtube, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import logo from '@/public/testline_logo_svg.jpg';
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Image
                src={logo}
                alt="Testline Logo"
                width={150}
                height={120}
              /> */}
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dr_sokhibjon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@sokhibjonshokirov6850"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/Mr_Shokirov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">+998 91 352 74 74</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">nambiotest@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">{t('contactAddress')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <div className="space-y-3">
              <a
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('about')}
              </a>
              <a
                href="/products"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('products')}
              </a>
              <a
                href="/news"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('news')}
              </a>
              <a
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('contact')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Testline. {t('footerCopyright')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
