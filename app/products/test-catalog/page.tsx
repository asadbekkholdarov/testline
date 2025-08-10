'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllTests, getTestsByCategory } from '@/data/tests';
import TestCard from '@/components/TestCard';
import { Button } from '@/components/ui/button';

export default function TestCatalog() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const allTests = getAllTests();
  
  const categories = [
    { id: 'all', label: language === 'uz' ? 'Barcha testlar' : language === 'ru' ? 'Все тесты' : 'All Tests' },
    { id: 'infectious-diseases', label: language === 'uz' ? 'Yuqumli kasalliklar' : language === 'ru' ? 'Инфекционные заболевания' : 'Infectious Diseases' },
    { id: 'gastrointestinal-fecal', label: language === 'uz' ? 'Oshqozon-ichak' : language === 'ru' ? 'Желудочно-кишечные' : 'Gastrointestinal' },
  ];

  const filteredTests = activeFilter === 'all' 
    ? allTests 
    : getTestsByCategory(activeFilter);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'uz' ? 'Test katalogi' : 
             language === 'ru' ? 'Каталог тестов' : 
             'Test Catalog'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'uz' ? 'Bizning barcha mavjud tibbiy testlarimiz to\'liq ma\'lumot bilan' :
             language === 'ru' ? 'Все наши доступные медицинские тесты с полной информацией' :
             'All our available medical tests with complete information'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredTests.length} {language === 'uz' ? 'Test mavjud' : language === 'ru' ? 'Тестов доступно' : 'Tests Available'}
            </h3>
            <p className="text-gray-600">
              {language === 'uz' ? 'Tez orada yangi testlar qo\'shiladi' :
               language === 'ru' ? 'Скоро будут добавлены новые тесты' :
               'More tests will be added soon'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}