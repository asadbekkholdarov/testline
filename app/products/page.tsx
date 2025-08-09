'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';

export default function Products() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('allProducts') },
    { 
      id: 'rapid-diagnostic', 
      label: language === 'uz' ? 'Tezkor diagnostika testlari' : 
             language === 'ru' ? 'Экспресс-диагностические тесты' : 
             'Rapid Diagnostic Tests'
    },
    { id: 'poct-fia', label: 'POCT FIA Platform' },
    { 
      id: 'blood-glucose', 
      label: language === 'uz' ? 'Qon shakarini nazorat qilish' :
             language === 'ru' ? 'Мониторинг глюкозы крови' :
             'Blood Glucose Monitoring'
    },
  ];

  // For now, show all products regardless of filter
  // In the future, you can implement filtering based on the new categories
  const filteredProducts = products;

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'express':
        return t('express');
      case 'poct':
        return t('poct');
      case 'blood':
        return t('blood');
      default:
        return category;
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('productsTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            {category.id === 'all' ? (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`transition-all duration-200 
      ${
        activeFilter === category.id
          ? 'bg-blue-600 text-white'
          : 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white'
      }
    `}
              >
                {category.label}
              </Button>
            ) : (
              <Button
                key={category.id}
                asChild
                className="border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Link href={`/products/${category.id === 'rapid-diagnostic' ? 'rapid-diagnostic-tests' : 
                                        category.id === 'poct-fia' ? 'poct-fia-platform' : 
                                        'blood-glucose-monitoring'}`}>
                  {category.label}
                </Link>
              </Button>
            )}
          ))}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <Link href="/products/rapid-diagnostic-tests">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Rapid Diagnostic Tests"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {language === 'uz' ? 'Tezkor diagnostika testlari' : 
                   language === 'ru' ? 'Экспресс-диагностические тесты' : 
                   'Rapid Diagnostic Tests'}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'uz' ? 'Turli kasalliklarni tez va aniq aniqlash uchun zamonaviy testlar' :
                   language === 'ru' ? 'Современные тесты для быстрого и точного выявления различных заболеваний' :
                   'Modern tests for quick and accurate detection of various diseases'}
                </p>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  {t('viewDetails')}
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <Link href="/products/poct-fia-platform">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="POCT FIA Platform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  POCT FIA Platform
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'uz' ? 'Fluoressent immunoassay texnologiyasi asosidagi zamonaviy POCT platformasi' :
                   language === 'ru' ? 'Современная POCT платформа на основе технологии флуоресцентного иммуноанализа' :
                   'Advanced POCT platform based on Fluorescent Immunoassay technology'}
                </p>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  {t('viewDetails')}
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <Link href="/products/blood-glucose-monitoring">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Blood Glucose Monitoring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {language === 'uz' ? 'Qon shakarini nazorat qilish' :
                   language === 'ru' ? 'Мониторинг глюкозы крови' :
                   'Blood Glucose Monitoring'}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'uz' ? 'Diabetik bemorlar uchun zamonaviy glyukometrlar va aksessuarlar' :
                   language === 'ru' ? 'Современные глюкометры и аксессуары для диабетических пациентов' :
                   'Advanced glucometers and accessories for diabetic patients'}
                </p>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  {t('viewDetails')}
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Legacy Products Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'uz' ? 'Barcha mahsulotlar' :
             language === 'ru' ? 'Все продукты' :
             'All Products'}
          </h2>
          
          {/* Legacy Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: t('allProducts') },
              { id: 'express', label: t('express') },
              { id: 'poct', label: t('poct') },
              { id: 'blood', label: t('blood') },
            ].map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`transition-all duration-200 
      ${
        activeFilter === category.id
          ? 'bg-blue-600 text-white'
          : 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white'
      }
    `}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Legacy Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(activeFilter === 'all' ? products : products.filter((product) => product.category === activeFilter)).map((product) => (
              <Card
              key={category.id}
                className="group hover:shadow-lg transition-shadow duration-300"
            >
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.title[language]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90">
                        {getCategoryLabel(product.category)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {product.title[language]}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description[language]}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href={`/products/${product.id}`}>
                      {t('viewDetails')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {(activeFilter === 'all' ? products : products.filter((product) => product.category === activeFilter)).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
