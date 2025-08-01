"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllNewsItems, NewsItem } from '@/data/news';

interface NewsDetailPageProps {
  params: { id: string };
}

export default function NewsDetail({ params }: NewsDetailPageProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const allItems = getAllNewsItems();
    const foundItem = allItems.find(item => item.id === params.id);
    setNewsItem(foundItem || null);
  }, [params.id]);

  if (!newsItem) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">News article not found</h1>
        <Button onClick={() => router.push('/news')}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t('back')}
        </Button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === newsItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? newsItem.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => router.push('/news')}
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t('back')}
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {newsItem.category[language]}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <CalendarDays className="w-4 h-4" />
                <span>{new Date(newsItem.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{newsItem.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {newsItem.title[language]}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {newsItem.excerpt[language]}
          </p>
        </div>

        {/* Image Carousel */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative">
            <div className="relative aspect-video">
              <Image
                src={newsItem.images[currentImageIndex]}
                alt={`${newsItem.title[language]} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              {newsItem.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {newsItem.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {newsItem.images.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            {newsItem.images.length > 1 && (
              <div className="p-4 bg-gray-50">
                <div className="flex space-x-2 overflow-x-auto">
                  {newsItem.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? 'border-blue-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {newsItem.content[language]}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation to other articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'uz' ? 'Boshqa yangiliklar' : language === 'ru' ? 'Другие новости' : 'Other News'}
              </h3>
              <Button asChild variant="outline">
                <a href="/news">
                  {language === 'uz' ? 'Barcha yangiliklar' : language === 'ru' ? 'Все новости' : 'All News'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}