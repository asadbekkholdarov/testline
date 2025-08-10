'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {language === 'uz' ? 'Sahifa topilmadi' :
             language === 'ru' ? 'Страница не найдена' :
             'Page Not Found'}
          </h2>
          <p className="text-gray-600">
            {language === 'uz' ? 'Kechirasiz, siz qidirayotgan sahifa mavjud emas.' :
             language === 'ru' ? 'Извините, страница, которую вы ищете, не существует.' :
             'Sorry, the page you are looking for does not exist.'}
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              {language === 'uz' ? 'Bosh sahifaga qaytish' :
               language === 'ru' ? 'Вернуться на главную' :
               'Go to Homepage'}
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/products">
              {language === 'uz' ? 'Mahsulotlar' :
               language === 'ru' ? 'Продукты' :
               'Products'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}