'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Mail, Phone, Play, FileText, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, Product } from '@/data/products';

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailPageProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === params.id);
    setProduct(foundProduct || null);
  }, [params.id]);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {t('productNotFound')}
        </h1>
        <Button onClick={() => router.push('/products')}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t('back')}
        </Button>
      </div>
    );
  }

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

  // Sample instruction steps - in a real app, this would come from the product data
  const instructionSteps = [
    {
      step: 1,
      title: t('samplePreparation'),
      description: t('samplePreparationDesc'),
    },
    {
      step: 2,
      title: t('performTest'),
      description: t('performTestDesc'),
    },
    {
      step: 3,
      title: t('readResults'),
      description: t('readResultsDesc'),
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => router.push('/products')}
          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t('back')}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.title[language]}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-4 right-4">
              <Badge
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm"
              >
                {getCategoryLabel(product.category)}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.title[language]}
              </h1>
              <p className="text-lg text-gray-600">
                {t('category')}: {getCategoryLabel(product.category)}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {t('description')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description[language]}
              </p>
            </div>

            {/* Contact Section */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('interestedInProduct')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">{t('contactPhone')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">{t('contactEmail')}</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <a href="tel:+998913527474">{t('callNow')}</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-blue-300 hover:bg-blue-50"
                  >
                    <a href="mailto:sohibjon@testline.uz">{t('sendEmail')}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="instructions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="instructions"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {language === 'uz'
                ? "Ko'rsatmalar"
                : language === 'ru'
                ? 'Инструкции'
                : 'Instructions'}
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              {language === 'uz'
                ? 'Video'
                : language === 'ru'
                ? 'Видео'
                : 'Video'}
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {language === 'uz'
                ? 'Xususiyatlar'
                : language === 'ru'
                ? 'Характеристики'
                : 'Specifications'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="instructions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'uz'
                    ? "Foydalanish bo'yicha ko'rsatmalar"
                    : language === 'ru'
                    ? 'Инструкция по применению'
                    : 'Usage Instructions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {instructionSteps.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {instruction.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {instruction.title}
                        </h3>
                        <p className="text-gray-600">
                          {instruction.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Instruction Image */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === 'uz'
                      ? "Vizual ko'rsatma"
                      : language === 'ru'
                      ? 'Визуальная инструкция'
                      : 'Visual Guide'}
                  </h3>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Instruction diagram"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'uz'
                    ? "Video ko'rsatma"
                    : language === 'ru'
                    ? 'Видео инструкция'
                    : 'Video Tutorial'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* YouTube Video Embed */}
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Product demonstration video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Play className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {language === 'uz'
                            ? 'Video haqida'
                            : language === 'ru'
                            ? 'О видео'
                            : 'About this video'}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'uz'
                            ? "Ushbu video mahsulotdan to'g'ri foydalanish usulini ko'rsatadi va muhim xavfsizlik choralarini tushuntiradi."
                            : language === 'ru'
                            ? 'Это видео показывает правильное использование продукта и объясняет важные меры безопасности.'
                            : 'This video demonstrates proper product usage and explains important safety measures.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'uz'
                    ? 'Texnik xususiyatlar'
                    : language === 'ru'
                    ? 'Технические характеристики'
                    : 'Technical Specifications'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Aniqlik'
                          : language === 'ru'
                          ? 'Точность'
                          : 'Accuracy'}
                      </h4>
                      <p className="text-gray-600">99.5%</p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Natija vaqti'
                          : language === 'ru'
                          ? 'Время результата'
                          : 'Result Time'}
                      </h4>
                      <p className="text-gray-600">
                        15{' '}
                        {language === 'uz'
                          ? 'daqiqa'
                          : language === 'ru'
                          ? 'минут'
                          : 'minutes'}
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Saqlash harorati'
                          : language === 'ru'
                          ? 'Температура хранения'
                          : 'Storage Temperature'}
                      </h4>
                      <p className="text-gray-600">2-30°C</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Namuna turi'
                          : language === 'ru'
                          ? 'Тип образца'
                          : 'Sample Type'}
                      </h4>
                      <p className="text-gray-600">
                        {language === 'uz'
                          ? 'Qon, siydik'
                          : language === 'ru'
                          ? 'Кровь, моча'
                          : 'Blood, Urine'}
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Amal qilish muddati'
                          : language === 'ru'
                          ? 'Срок годности'
                          : 'Shelf Life'}
                      </h4>
                      <p className="text-gray-600">
                        24{' '}
                        {language === 'uz'
                          ? 'oy'
                          : language === 'ru'
                          ? 'месяца'
                          : 'months'}
                      </p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'uz'
                          ? 'Sertifikat'
                          : language === 'ru'
                          ? 'Сертификат'
                          : 'Certification'}
                      </h4>
                      <p className="text-gray-600">CE, FDA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
