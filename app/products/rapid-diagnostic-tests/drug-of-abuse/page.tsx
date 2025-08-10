'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function DrugOfAbuse() {
  const { t, language } = useLanguage();

  const products = [
    {
      id: 'multi-drug-test',
      name: {
        uz: 'Ko\'p giyohvand moddalar testi',
        ru: 'Мульти-тест на наркотики',
        en: 'Multi-Drug Test'
      },
      description: {
        uz: 'Bir vaqtda bir nechta giyohvand moddalarni aniqlash',
        ru: 'Одновременное обнаружение нескольких наркотических веществ',
        en: 'Simultaneous detection of multiple drugs of abuse'
      },
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '99.0%',
        specificity: '99.5%',
        time: '5 min'
      }
    },
    {
      id: 'cocaine-test',
      name: {
        uz: 'Kokain testi',
        ru: 'Тест на кокаин',
        en: 'Cocaine Test'
      },
      description: {
        uz: 'Kokain va uning metabolitlarini aniqlash',
        ru: 'Обнаружение кокаина и его метаболитов',
        en: 'Detection of cocaine and its metabolites'
      },
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '98.5%',
        specificity: '99.2%',
        time: '3 min'
      }
    },
    {
      id: 'thc-test',
      name: {
        uz: 'THC (Marixuana) testi',
        ru: 'ТГК (Марихуана) тест',
        en: 'THC (Marijuana) Test'
      },
      description: {
        uz: 'Tetragidrокannabinolni aniqlash testi',
        ru: 'Тест для обнаружения тетрагидроканнабинола',
        en: 'Test for detecting tetrahydrocannabinol'
      },
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '97.8%',
        specificity: '98.9%',
        time: '5 min'
      }
    },
    {
      id: 'amphetamine-test',
      name: {
        uz: 'Amfetamin testi',
        ru: 'Тест на амфетамин',
        en: 'Amphetamine Test'
      },
      description: {
        uz: 'Amfetamin va metamfetaminni aniqlash',
        ru: 'Обнаружение амфетамина и метамфетамина',
        en: 'Detection of amphetamine and methamphetamine'
      },
      image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800',
      specifications: {
        sensitivity: '98.2%',
        specificity: '99.1%',
        time: '4 min'
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
            {language === 'uz' ? 'Giyohvand moddalar' :
             language === 'ru' ? 'Наркотические вещества' :
             'Drug of Abuse'}
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
            {language === 'uz' ? 'Giyohvand moddalar testlari' :
             language === 'ru' ? 'Тесты на наркотические вещества' :
             'Drug of Abuse Tests'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Giyohvand moddalarni aniqlash uchun professional va ishonchli testlar' :
             language === 'ru' ? 'Профессиональные и надежные тесты для обнаружения наркотических веществ' :
             'Professional and reliable tests for detecting drugs of abuse'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              {language === 'uz' ? 'Giyohvand moddalar bo\'yicha yangi testlar ustida ishlamoqdamiz' :
               language === 'ru' ? 'Мы работаем над новыми тестами на наркотические вещества' :
               'We are working on new drug of abuse tests'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}