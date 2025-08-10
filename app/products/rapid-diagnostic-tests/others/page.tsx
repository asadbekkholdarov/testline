'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function Others() {
  const { t, language } = useLanguage();

  const products = [
    {
      id: 'dengue-test',
      name: {
        uz: 'Denge isitmasi testi',
        ru: 'Тест на лихорадку денге',
        en: 'Dengue Fever Test'
      },
      description: {
        uz: 'Denge virusini aniqlash uchun tezkor test',
        ru: 'Экспресс-тест для обнаружения вируса денге',
        en: 'Rapid test for dengue virus detection'
      },
      image: 'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '96.2%',
        specificity: '98.1%',
        time: '15 min'
      }
    },
    {
      id: 'malaria-test',
      name: {
        uz: 'Bezgak testi',
        ru: 'Тест на малярию',
        en: 'Malaria Test'
      },
      description: {
        uz: 'Bezgak parazitlarini aniqlash testi',
        ru: 'Тест для обнаружения малярийных паразитов',
        en: 'Test for detecting malaria parasites'
      },
      image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '95.8%',
        specificity: '97.5%',
        time: '20 min'
      }
    },
    {
      id: 'typhoid-test',
      name: {
        uz: 'Tif testi',
        ru: 'Тест на тиф',
        en: 'Typhoid Test'
      },
      description: {
        uz: 'Salmonella Typhi bakteriyasini aniqlash',
        ru: 'Обнаружение бактерии Salmonella Typhi',
        en: 'Detection of Salmonella Typhi bacteria'
      },
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '93.5%',
        specificity: '96.8%',
        time: '10 min'
      }
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-blue-600">
            {t('products')}
          </Link>
          <span>/</span>
          <Link href="/products/rapid-diagnostic-tests" className="hover:text-blue-600">
            {language === 'uz' ? 'Tezkor diagnostika' : 
             language === 'ru' ? 'Экспресс-диагностика' : 
             'Rapid Diagnostic'}
          </Link>
          <span>/</span>
          <span className="text-gray-900">
            {language === 'uz' ? 'Boshqalar' :
             language === 'ru' ? 'Другие' :
             'Others'}
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
            {language === 'uz' ? 'Boshqa tibbiy testlar' :
             language === 'ru' ? 'Другие медицинские тесты' :
             'Other Medical Tests'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Turli xil tibbiy holatlarni aniqlash uchun qo\'shimcha testlar' :
             language === 'ru' ? 'Дополнительные тесты для выявления различных медицинских состояний' :
             'Additional tests for detecting various medical conditions'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3">
                  {product.name[language]}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description[language]}
                </p>
                
                {/* Specifications */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {language === 'uz' ? 'Sezgirlik:' : 
                       language === 'ru' ? 'Чувствительность:' : 
                       'Sensitivity:'}
                    </span>
                    <span className="font-medium">{product.specifications.sensitivity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {language === 'uz' ? 'Aniqlik:' : 
                       language === 'ru' ? 'Специфичность:' : 
                       'Specificity:'}
                    </span>
                    <span className="font-medium">{product.specifications.specificity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {language === 'uz' ? 'Vaqt:' : 
                       language === 'ru' ? 'Время:' : 
                       'Time:'}
                    </span>
                    <span className="font-medium">{product.specifications.time}</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  {t('viewDetails')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'uz' ? 'Tez orada yangi mahsulotlar' :
               language === 'ru' ? 'Скоро новые продукты' :
               'More Products Coming Soon'}
            </h3>
            <p className="text-gray-600">
              {language === 'uz' ? 'Boshqa tibbiy testlar bo\'yicha yangi mahsulotlar ustida ishlamoqdamiz' :
               language === 'ru' ? 'Мы работаем над новыми продуктами по другим медицинским тестам' :
               'We are working on new products for other medical tests'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}