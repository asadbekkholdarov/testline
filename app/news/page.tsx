'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllNewsItems } from '@/data/news';

export default function News() {
  const { t, language } = useLanguage();
  const [allNewsItems, setAllNewsItems] = useState<any[]>([]);

  useEffect(() => {
    // Load all news items including custom ones
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category[language]}
                  </span>
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
                      <span>{item.readTime.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {item.excerpt[language]}
                  </p>

                  <Button
                    asChild
                    className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href={`/news/${item.id}`}>
                      {t('readMore')} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
