'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getInfectiousTestById, InfectiousTest } from '@/data/infection';

interface TestDetailPageProps {
  params: { id: string };
}

export default function TestDetail({ params }: TestDetailPageProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [test, setTest] = useState<InfectiousTest | null>(null);

  useEffect(() => {
    const foundTest = getInfectiousTestById(params.id);
    setTest(foundTest || null);
  }, [params.id]);

  if (!test) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'uz' ? 'Test topilmadi' :
           language === 'ru' ? 'Тест не найден' :
           'Test not found'}
        </h1>
        <Button onClick={() => router.push('/products/rapid-diagnostic-tests/infectious-diseases')}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t('back')}
        </Button>
      </div>
    );
  }

  const getSpecificationLabel = (key: string) => {
    const labels = {
      principle: {
        uz: 'Prinsipi',
        ru: 'Принцип',
        en: 'Principle'
      },
      format: {
        uz: 'Format',
        ru: 'Формат',
        en: 'Format'
      },
      specimen: {
        uz: 'Namuna',
        ru: 'Образец',
        en: 'Specimen'
      },
      readingTime: {
        uz: 'O\'qish vaqti',
        ru: 'Время чтения',
        en: 'Reading Time'
      },
      packSizes: {
        uz: 'Qadoq o\'lchamlari',
        ru: 'Размеры упаковки',
        en: 'Pack Sizes'
      },
      storageTemperature: {
        uz: 'Saqlash harorati',
        ru: 'Температура хранения',
        en: 'Storage Temperature'
      },
      shelfLife: {
        uz: 'Saqlash muddati',
        ru: 'Срок годности',
        en: 'Shelf Life'
      },
      sensitivity: {
        uz: 'Sezgirlik',
        ru: 'Чувствительность',
        en: 'Sensitivity'
      },
      specificity: {
        uz: 'Aniqlik',
        ru: 'Специфичность',
        en: 'Specificity'
      },
      accuracy: {
        uz: 'Aniqlik',
        ru: 'Точность',
        en: 'Accuracy'
      },
      cutOff: {
        uz: 'Kesish nuqtasi',
        ru: 'Точка отсечения',
        en: 'Cut-Off'
      }
    };
    return labels[key as keyof typeof labels]?.[language] || key;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => router.push('/products/rapid-diagnostic-tests/infectious-diseases')}
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
                src={test.image}
                alt={test.title[language]}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {test.title[language]}
              </h1>
              <p className="text-lg text-gray-600">
                {test.name}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {t('description')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {test.description[language]}
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
                    <a href="mailto:nambiotest@gmail.com">{t('sendEmail')}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'uz' ? 'Mahsulot xususiyatlari' :
               language === 'ru' ? 'Особенности продукта' :
               'Product Features'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {test.features[language].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Product Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'uz' ? 'Mahsulot spetsifikatsiyalari' :
               language === 'ru' ? 'Спецификации продукта' :
               'Product Specifications'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  {Object.entries(test.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-300">
                      <td className="border-r border-gray-300 px-4 py-3 bg-gray-50 font-medium text-gray-900">
                        {getSpecificationLabel(key)}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}