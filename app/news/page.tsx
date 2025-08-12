'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarDays,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllNewsItems } from '@/data/news';

export default function News() {
  const { t, language } = useLanguage();
  const [allNewsItems, setAllNewsItems] = useState<any[]>([]);

  useEffect(() => {
    // Load all news items
    setAllNewsItems(getAllNewsItems());
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('newsTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('newsSubtitle')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNewsItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.mainImage}
                  alt={item.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">
                    {item.category[language]}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        {item.readTime.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {item.excerpt[language]}
                  </p>

                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {t('readMore')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {allNewsItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              {language === 'uz' ? 'Hozircha yangiliklar yo\'q' :
               language === 'ru' ? 'Пока нет новостей' :
               'No news available yet'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}