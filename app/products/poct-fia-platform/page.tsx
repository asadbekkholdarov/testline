'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Zap, Clock, Target } from 'lucide-react';

export default function POCTFIAPlatform() {
  const { t, language } = useLanguage();

  const platforms = [
    {
      id: 'fia-reader-100',
      name: 'FIA Reader 100',
      description: {
        uz: 'Kompakt va oson foydalaniladigan FIA o\'quvchi',
        ru: 'Компактный и простой в использовании FIA ридер',
        en: 'Compact and easy-to-use FIA reader'
      },
      image: 'https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { uz: 'Avtomatik kalibrlash', ru: 'Автоматическая калибровка', en: 'Automatic calibration' },
        { uz: 'Bluetooth ulanish', ru: 'Bluetooth подключение', en: 'Bluetooth connectivity' },
        { uz: '2 yil kafolat', ru: '2 года гарантии', en: '2-year warranty' }
      ],
      specifications: {
        readTime: '3-8 min',
        storage: '10,000 results',
        connectivity: 'Bluetooth, USB'
      }
    },
    {
      id: 'fia-reader-200',
      name: 'FIA Reader 200',
      description: {
        uz: 'Professional laboratoriyalar uchun yuqori unumli FIA tizimi',
        ru: 'Высокопроизводительная FIA система для профессиональных лабораторий',
        en: 'High-throughput FIA system for professional laboratories'
      },
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { uz: 'Yuqori aniqlik', ru: 'Высокая точность', en: 'High precision' },
        { uz: 'LIS integratsiyasi', ru: 'LIS интеграция', en: 'LIS integration' },
        { uz: 'Kengaytirilgan xotira', ru: 'Расширенная память', en: 'Extended memory' }
      ],
      specifications: {
        readTime: '1-5 min',
        storage: '50,000 results',
        connectivity: 'Ethernet, WiFi, USB'
      }
    }
  ];

  const testCards = [
    {
      category: {
        uz: 'Kardiak markerlar',
        ru: 'Кардиальные маркеры',
        en: 'Cardiac Markers'
      },
      tests: ['cTnI', 'CK-MB', 'Myo', 'NT-proBNP'],
      image: 'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: {
        uz: 'Yallig\'lanish markerlari',
        ru: 'Маркеры воспаления',
        en: 'Inflammation Markers'
      },
      tests: ['CRP', 'PCT', 'SAA'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: {
        uz: 'Gormonlar',
        ru: 'Гормоны',
        en: 'Hormones'
      },
      tests: ['TSH', 'T3', 'T4', 'β-HCG'],
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Link href="/products">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('back')}
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            POCT FIA Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Fluoressent immunoassay texnologiyasi asosidagi zamonaviy POCT platformasi' :
             language === 'ru' ? 'Современная POCT платформа на основе технологии флуоресцентного иммуноанализа' :
             'Advanced POCT platform based on Fluorescent Immunoassay technology'}
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Yuqori sezgirlik' :
                 language === 'ru' ? 'Высокая чувствительность' :
                 'High Sensitivity'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? 'Fluoressent texnologiya bilan yuqori aniqlik' :
                 language === 'ru' ? 'Высокая точность с флуоресцентной технологией' :
                 'High accuracy with fluorescent technology'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Tez natija' :
                 language === 'ru' ? 'Быстрый результат' :
                 'Rapid Results'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? '3-8 daqiqada aniq natija' :
                 language === 'ru' ? 'Точный результат за 3-8 минут' :
                 'Accurate results in 3-8 minutes'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Keng imkoniyatlar' :
                 language === 'ru' ? 'Широкие возможности' :
                 'Versatile Testing'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? 'Turli xil testlar uchun universal platforma' :
                 language === 'ru' ? 'Универсальная платформа для различных тестов' :
                 'Universal platform for various tests'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FIA Readers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'uz' ? 'FIA O\'quvchi Qurilmalari' :
             language === 'ru' ? 'FIA Ридеры' :
             'FIA Readers'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <Card key={platform.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-3">{platform.name}</CardTitle>
                  <p className="text-gray-600 mb-4">
                    {platform.description[language]}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">
                      {language === 'uz' ? 'Xususiyatlar:' :
                       language === 'ru' ? 'Особенности:' :
                       'Features:'}
                    </h4>
                    <ul className="space-y-1">
                      {platform.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature[language]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'O\'qish vaqti:' :
                         language === 'ru' ? 'Время чтения:' :
                         'Read Time:'}
                      </span>
                      <span className="font-medium">{platform.specifications.readTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Xotira:' :
                         language === 'ru' ? 'Память:' :
                         'Storage:'}
                      </span>
                      <span className="font-medium">{platform.specifications.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Ulanish:' :
                         language === 'ru' ? 'Подключение:' :
                         'Connectivity:'}
                      </span>
                      <span className="font-medium">{platform.specifications.connectivity}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Test Cards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'uz' ? 'Mavjud Test Kartalari' :
             language === 'ru' ? 'Доступные Тест-Карты' :
             'Available Test Cards'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testCards.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={card.image}
                      alt={card.category[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-4">
                    {card.category[language]}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {card.tests.map((test, testIndex) => (
                      <Badge key={testIndex} variant="secondary">
                        {test}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}