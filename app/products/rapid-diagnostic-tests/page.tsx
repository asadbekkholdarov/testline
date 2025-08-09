'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function RapidDiagnosticTests() {
  const { t, language } = useLanguage();

  const subcategories = [
    {
      id: 'infectious-diseases',
      name: {
        uz: 'Yuqumli kasalliklar',
        ru: 'Инфекционные заболевания',
        en: 'Infectious Diseases'
      },
      description: {
        uz: 'Viruslar va bakteriyalarni aniqlash uchun testlar',
        ru: 'Тесты для обнаружения вирусов и бактерий',
        en: 'Tests for detecting viruses and bacteria'
      },
      image: 'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 12
    },
    {
      id: 'maternal-child-health',
      name: {
        uz: 'Ona va bola salomatligi',
        ru: 'Здоровье матери и ребенка',
        en: 'Maternal & Child Health'
      },
      description: {
        uz: 'Homiladorlik va bolalar uchun testlar',
        ru: 'Тесты для беременности и детей',
        en: 'Tests for pregnancy and children'
      },
      image: 'https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 8
    },
    {
      id: 'gastrointestinal-fecal',
      name: {
        uz: 'Oshqozon-ichak va najas',
        ru: 'Желудочно-кишечные и фекальные',
        en: 'Gastrointestinal & Fecal'
      },
      description: {
        uz: 'Hazm tizimi kasalliklarini aniqlash',
        ru: 'Обнаружение заболеваний пищеварительной системы',
        en: 'Detection of digestive system diseases'
      },
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 6
    },
    {
      id: 'cardiac-metabolic',
      name: {
        uz: 'Yurak va metabolik',
        ru: 'Сердечные и метаболические',
        en: 'Cardiac & Metabolic'
      },
      description: {
        uz: 'Yurak va metabolizm testlari',
        ru: 'Тесты сердца и метаболизма',
        en: 'Heart and metabolism tests'
      },
      image: 'https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 10
    },
    {
      id: 'oncology',
      name: {
        uz: 'Onkologiya',
        ru: 'Онкология',
        en: 'Oncology'
      },
      description: {
        uz: 'Saraton kasalliklarini aniqlash',
        ru: 'Обнаружение онкологических заболеваний',
        en: 'Cancer detection tests'
      },
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 5
    },
    {
      id: 'drug-of-abuse',
      name: {
        uz: 'Giyohvand moddalar',
        ru: 'Наркотические вещества',
        en: 'Drug of Abuse'
      },
      description: {
        uz: 'Giyohvand moddalarni aniqlash testlari',
        ru: 'Тесты на обнаружение наркотических веществ',
        en: 'Drug detection tests'
      },
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 7
    },
    {
      id: 'others',
      name: {
        uz: 'Boshqalar',
        ru: 'Другие',
        en: 'Others'
      },
      description: {
        uz: 'Boshqa tibbiy testlar',
        ru: 'Другие медицинские тесты',
        en: 'Other medical tests'
      },
      image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800',
      productCount: 4
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
            {language === 'uz' ? 'Tezkor diagnostika testlari' : 
             language === 'ru' ? 'Экспресс-диагностические тесты' : 
             'Rapid Diagnostic Tests'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Turli kasalliklarni tez va aniq aniqlash uchun zamonaviy testlar' :
             language === 'ru' ? 'Современные тесты для быстрого и точного выявления различных заболеваний' :
             'Modern tests for quick and accurate detection of various diseases'}
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory) => (
            <Card
              key={subcategory.id}
              className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <Link href={`/products/rapid-diagnostic-tests/${subcategory.id}`}>
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={subcategory.image}
                      alt={subcategory.name[language]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90">
                        {subcategory.productCount} {language === 'uz' ? 'mahsulot' : language === 'ru' ? 'продуктов' : 'products'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {subcategory.name[language]}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {subcategory.description[language]}
                  </p>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {t('viewDetails')}
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}