'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { getAllMaternalChildTests } from '@/data/mother_child';

export default function MaternalChildHealth() {
  const { t, language } = useLanguage();
  const maternalChildTests = getAllMaternalChildTests();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-blue-600">
            {t('products')}
          </Link>
          <span>/</span>
          <Link
            href="/products/rapid-diagnostic-tests"
            className="hover:text-blue-600"
          >
            {language === 'uz'
              ? 'Tezkor diagnostika'
              : language === 'ru'
              ? 'Экспресс-диагностика'
              : 'Rapid Diagnostic'}
          </Link>
          <span>/</span>
          <span className="text-gray-900">
            {language === 'uz'
              ? 'Ona va bola salomatligi'
              : language === 'ru'
              ? 'Здоровье матери и ребенка'
              : 'Maternal & Child Health'}
          </span>
        </div>

        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Link href="/products/rapid-diagnostic-tests">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('back')}
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'uz'
              ? 'Ona va bola salomatligi testlari'
              : language === 'ru'
              ? 'Тесты здоровья матери и ребенка'
              : 'Maternal & Child Health Tests'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz'
              ? 'Homiladorlik, ovulyatsiya va reproduktiv salomatlik uchun professional testlar'
              : language === 'ru'
              ? 'Профессиональные тесты для беременности, овуляции и репродуктивного здоровья'
              : 'Professional tests for pregnancy, ovulation and reproductive health'}
          </p>
        </div>

        {/* Products Grid (now 3 columns on lg, 4 on xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {maternalChildTests.map((test) => (
            <Card
              key={test.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <Link
                href={`/products/rapid-diagnostic-tests/maternal-child-health/${test.id}`}
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={test.image}
                      alt={test.title[language]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {test.title[language]}
                  </CardTitle>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        {maternalChildTests.length < 10 && (
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {language === 'uz'
                  ? 'Tez orada yangi mahsulotlar'
                  : language === 'ru'
                  ? 'Скоро новые продукты'
                  : 'More Products Coming Soon'}
              </h3>
              <p className="text-gray-600">
                {language === 'uz'
                  ? "Ona va bola salomatligi bo'yicha yangi testlar ustida ishlamoqdamiz"
                  : language === 'ru'
                  ? 'Мы работаем над новыми тестами по здоровью матери и ребенка'
                  : 'We are working on new maternal and child health tests'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
