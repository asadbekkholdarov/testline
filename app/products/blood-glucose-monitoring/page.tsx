'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Smartphone, Droplet, Clock, Shield } from 'lucide-react';

export default function BloodGlucoseMonitoring() {
  const { t, language } = useLanguage();

  const glucometers = [
    {
      id: 'smart-glucose-pro',
      name: 'Smart Glucose Pro',
      description: {
        uz: 'Bluetooth ulanish va mobil ilova bilan zamonaviy glyukometr',
        ru: 'Современный глюкометр с Bluetooth подключением и мобильным приложением',
        en: 'Advanced glucometer with Bluetooth connectivity and mobile app'
      },
      image: 'https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { uz: 'Bluetooth 5.0', ru: 'Bluetooth 5.0', en: 'Bluetooth 5.0' },
        { uz: 'Mobil ilova', ru: 'Мобильное приложение', en: 'Mobile App' },
        { uz: '500 xotira', ru: '500 памяти', en: '500 Memory' },
        { uz: 'Ovozli ogohlantirish', ru: 'Голосовые уведомления', en: 'Voice Alerts' }
      ],
      specifications: {
        testTime: '5 seconds',
        sampleSize: '0.5 μL',
        range: '20-600 mg/dL',
        accuracy: '±15%'
      }
    },
    {
      id: 'glucose-basic',
      name: 'Glucose Basic',
      description: {
        uz: 'Oddiy va ishonchli glyukometr kundalik foydalanish uchun',
        ru: 'Простой и надежный глюкометр для ежедневного использования',
        en: 'Simple and reliable glucometer for daily use'
      },
      image: 'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { uz: 'Oson foydalanish', ru: 'Простое использование', en: 'Easy to Use' },
        { uz: '300 xotira', ru: '300 памяти', en: '300 Memory' },
        { uz: 'Katta ekran', ru: 'Большой экран', en: 'Large Display' },
        { uz: 'Avtomatik kodlash', ru: 'Автоматическое кодирование', en: 'Auto Coding' }
      ],
      specifications: {
        testTime: '8 seconds',
        sampleSize: '0.7 μL',
        range: '20-600 mg/dL',
        accuracy: '±20%'
      }
    }
  ];

  const testStrips = [
    {
      name: 'Glucose Test Strips Pro',
      compatibility: 'Smart Glucose Pro',
      quantity: '50 strips/box',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Glucose Test Strips Basic',
      compatibility: 'Glucose Basic',
      quantity: '50 strips/box',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const accessories = [
    {
      name: {
        uz: 'Lancetlar (30 dona)',
        ru: 'Ланцеты (30 шт)',
        en: 'Lancets (30 pcs)'
      },
      description: {
        uz: 'Steril lancetlar qon olish uchun',
        ru: 'Стерильные ланцеты для забора крови',
        en: 'Sterile lancets for blood sampling'
      },
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: {
        uz: 'Nazorat eritmalari',
        ru: 'Контрольные растворы',
        en: 'Control Solutions'
      },
      description: {
        uz: 'Glyukometr aniqligini tekshirish uchun',
        ru: 'Для проверки точности глюкометра',
        en: 'For checking glucometer accuracy'
      },
      image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            {language === 'uz' ? 'Qon shakarini nazorat qilish' :
             language === 'ru' ? 'Мониторинг глюкозы крови' :
             'Blood Glucose Monitoring'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Diabetik bemorlar uchun zamonaviy glyukometrlar va aksessuarlar' :
             language === 'ru' ? 'Современные глюкометры и аксессуары для диабетических пациентов' :
             'Advanced glucometers and accessories for diabetic patients'}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Tez natija' :
                 language === 'ru' ? 'Быстрый результат' :
                 'Fast Results'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? '5 soniyada natija' :
                 language === 'ru' ? 'Результат за 5 секунд' :
                 'Results in 5 seconds'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Kichik namuna' :
                 language === 'ru' ? 'Малый образец' :
                 'Small Sample'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? 'Faqat 0.5 μL qon' :
                 language === 'ru' ? 'Всего 0.5 μL крови' :
                 'Only 0.5 μL blood'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Smart ulanish' :
                 language === 'ru' ? 'Умное подключение' :
                 'Smart Connectivity'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? 'Bluetooth va mobil ilova' :
                 language === 'ru' ? 'Bluetooth и мобильное приложение' :
                 'Bluetooth and mobile app'}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'uz' ? 'Yuqori aniqlik' :
                 language === 'ru' ? 'Высокая точность' :
                 'High Accuracy'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'uz' ? '±15% aniqlik' :
                 language === 'ru' ? '±15% точность' :
                 '±15% accuracy'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Glucometers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'uz' ? 'Glyukometrlar' :
             language === 'ru' ? 'Глюкометры' :
             'Glucometers'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {glucometers.map((glucometer) => (
              <Card key={glucometer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={glucometer.image}
                      alt={glucometer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-3">{glucometer.name}</CardTitle>
                  <p className="text-gray-600 mb-4">
                    {glucometer.description[language]}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">
                      {language === 'uz' ? 'Xususiyatlar:' :
                       language === 'ru' ? 'Особенности:' :
                       'Features:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {glucometer.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature[language]}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Test vaqti:' :
                         language === 'ru' ? 'Время теста:' :
                         'Test Time:'}
                      </span>
                      <span className="font-medium">{glucometer.specifications.testTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Namuna hajmi:' :
                         language === 'ru' ? 'Размер образца:' :
                         'Sample Size:'}
                      </span>
                      <span className="font-medium">{glucometer.specifications.sampleSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Diapazon:' :
                         language === 'ru' ? 'Диапазон:' :
                         'Range:'}
                      </span>
                      <span className="font-medium">{glucometer.specifications.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Aniqlik:' :
                         language === 'ru' ? 'Точность:' :
                         'Accuracy:'}
                      </span>
                      <span className="font-medium">{glucometer.specifications.accuracy}</span>
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

        {/* Test Strips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'uz' ? 'Test Chiziqlari' :
             language === 'ru' ? 'Тест-полоски' :
             'Test Strips'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testStrips.map((strip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={strip.image}
                      alt={strip.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3">{strip.name}</CardTitle>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Mos keladi:' :
                         language === 'ru' ? 'Совместимость:' :
                         'Compatible with:'}
                      </span>
                      <span className="font-medium">{strip.compatibility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        {language === 'uz' ? 'Miqdor:' :
                         language === 'ru' ? 'Количество:' :
                         'Quantity:'}
                      </span>
                      <span className="font-medium">{strip.quantity}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accessories */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'uz' ? 'Aksessuarlar' :
             language === 'ru' ? 'Аксессуары' :
             'Accessories'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessories.map((accessory, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={accessory.image}
                      alt={accessory.name[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3">
                    {accessory.name[language]}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {accessory.description[language]}
                  </p>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}