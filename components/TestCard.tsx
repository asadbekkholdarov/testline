'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, Droplet } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Test } from '@/data/tests';

interface TestCardProps {
  test: Test;
}

export default function TestCard({ test }: TestCardProps) {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === test.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? test.images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={test.images[currentImageIndex]}
            alt={`${test.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Image Navigation for Multiple Images */}
          {test.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                {currentImageIndex + 1} / {test.images.length}
              </div>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-2 flex space-x-1">
                {test.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
            {test.name}
          </CardTitle>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {test.description[language]}
          </p>
          
          {/* Specifications */}
          <div className="space-y-2 mb-4">
            {test.specifications.sensitivity && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {language === 'uz' ? 'Sezgirlik:' : 
                   language === 'ru' ? 'Чувствительность:' : 
                   'Sensitivity:'}
                </span>
                <span className="font-medium">{test.specifications.sensitivity}</span>
              </div>
            )}
            {test.specifications.specificity && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {language === 'uz' ? 'Aniqlik:' : 
                   language === 'ru' ? 'Специфичность:' : 
                   'Specificity:'}
                </span>
                <span className="font-medium">{test.specifications.specificity}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {language === 'uz' ? 'Vaqt:' : 
                 language === 'ru' ? 'Время:' : 
                 'Time:'}
              </span>
              <span className="font-medium">{test.specifications.time}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <Droplet className="w-3 h-3 mr-1" />
                {language === 'uz' ? 'Namuna:' : 
                 language === 'ru' ? 'Образец:' : 
                 'Sample:'}
              </span>
              <span className="font-medium text-xs">{test.specifications.sampleType}</span>
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-auto">
          {language === 'uz' ? 'Batafsil' : 
           language === 'ru' ? 'Подробнее' : 
           'View Details'}
        </Button>
      </CardContent>
    </Card>
  );
}