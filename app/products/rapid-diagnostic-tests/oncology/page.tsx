
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useLanguage } from '@/contexts/LanguageContext';

import { ArrowLeft } from 'lucide-react';



export default function Oncology() {

  const { t, language } = useLanguage();



  // Oncology tests data with translations

  const oncologyTests = [

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Strip', ru: 'Полоска', en: 'Strip' },

      

      name: { uz: 'AFP Tezkor Test Chizig\'i', ru: 'AFP Экспресс-тест Полоска', en: 'AFP Rapid Test Strip' },

      packSize: '50 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'AFP Tezkor Test Kasseta', ru: 'AFP Экспресс-тест Кассета', en: 'AFP Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'CEA Tezkor Test Kasseta', ru: 'CEA Экспресс-тест Кассета', en: 'CEA Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Strip', ru: 'Полоска', en: 'Strip' },

      name: { uz: 'FOB Tezkor Test Chizig\'i', ru: 'FOB Экспресс-тест Полоска', en: 'FOB Rapid Test Strip' },

      packSize: '20 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Strip', ru: 'Полоска', en: 'Strip' },

      name: { uz: 'FOB Tezkor Test Chizig\'i (O\'z-o\'zini tekshirish)', ru: 'FOB Экспресс-тест Полоска (Самотестирование)', en: 'FOB Rapid Test Strip (Self-Testing)' },

      packSize: '1 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'FOB Tezkor Test Kasseta', ru: 'FOB Экспресс-тест Кассета', en: 'FOB Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'FOB Tezkor Test Kasseta (O\'z-o\'zini tekshirish)', ru: 'FOB Экспресс-тест Кассета (Самотестирование)', en: 'FOB Rapid Test Cassette (Self-Testing)' },

      packSize: '1 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'FOB/Transferrin Tezkor Test Kasseta', ru: 'FOB/Трансферрин Экспресс-тест Кассета', en: 'FOB/Transferrin Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Strip', ru: 'Полоска', en: 'Strip' },

      name: { uz: 'PSA Tezkor Test Chizig\'i', ru: 'PSA Экспресс-тест Полоска', en: 'PSA Rapid Test Strip' },

      packSize: '50 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'PSA Tezkor Test Kasseta', ru: 'PSA Экспресс-тест Кассета', en: 'PSA Rapid Test Cassette' },

      packSize: '10/25 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'PSA Tezkor Test Kasseta', ru: 'PSA Экспресс-тест Кассета', en: 'PSA Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'CA15-3 Tezkor Test Kasseta', ru: 'CA15-3 Экспресс-тест Кассета', en: 'CA15-3 Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Najas', ru: 'Кал', en: 'Feces' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'Laktoferrin Tezkor Test Kasseta', ru: 'Лактоферрин Экспресс-тест Кассета', en: 'Lactoferrin Rapid Test Cassette' },

      packSize: '10 T'

    },

    {

      specimen: { uz: 'Butun qon/Zardob/Plazma', ru: 'Цельная кровь/Сыворотка/Плазма', en: 'WB/S/P' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'Ferritin Tezkor Test Kasseta', ru: 'Ферритин Экспресс-тест Кассета', en: 'Ferritin Rapid Test Cassette' },

      packSize: '25 T'

    },

    {

      specimen: { uz: 'Siydik', ru: 'Моча', en: 'Urine' },

      format: { uz: 'Kasseta', ru: 'Кассета', en: 'Cassette' },

      name: { uz: 'Siydik pufagi o\'smasi antigeni Tezkor Test Kasseta', ru: 'Антиген опухоли мочевого пузыря Экспресс-тест Кассета', en: 'Bladder Tumor Antigen Rapid Test Cassette' },

      packSize: '25 T'

    }

  ];



  const getTableHeaders = () => {

    switch (language) {

      case 'uz':

        return {

          specimen: 'Namuna',

          format: 'Format',

          name: 'Mahsulot nomi',

          packSize: 'Qadoq hajmi'

        };

      case 'ru':

        return {

          specimen: 'Образец',

          format: 'Формат',

          name: 'Название продукта',

          packSize: 'Размер упаковки'

        };

      default:

        return {

          specimen: 'Specimen',

          format: 'Format',

          name: 'Product Name',

          packSize: 'Pack Size'

        };

    }

  };



  const headers = getTableHeaders();



  return (

    <div className="py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}

        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">

          <Link href="/products" className="hover:text-blue-600">

            {t('products')}

          </Link>

          <span>/</span>

          <Link href="/products/rapid-diagnostic-tests" className="hover:text-blue-600">

            {language === 'uz' ? 'Tezkor diagnostika' : 

             language === 'ru' ? 'Экспресс-диагностика' : 

             'Rapid Diagnostic'}

          </Link>

          <span>/</span>

          <span className="text-gray-900">

            {language === 'uz' ? 'Onkologiya' :

             language === 'ru' ? 'Онкология' :

             'Oncology'}

          </span>

        </div>



        {/* Back Button */}

        <Button

          asChild

          variant="outline"

          className="mb-8 hover:bg-blue-50 hover:border-blue-300 transition-colors"

        >

          <Link href="/products/rapid-diagnostic-tests">

            <ArrowLeft className="mr-2 w-4 h-4" />

            {t('back')}

          </Link>

        </Button>



        {/* Header */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

            {language === 'uz' ? 'Onkologiya testlari' :

             language === 'ru' ? 'Онкологические тесты' :

             'Oncology Tests'}

          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">

            {language === 'uz' ? 'Saraton kasalliklarini erta aniqlash uchun professional onkomarkerlar' :

             language === 'ru' ? 'Профессиональные онкомаркеры для раннего выявления онкологических заболеваний' :

             'Professional tumor markers for early detection of cancer diseases'}

          </p>

        </div>



        {/* Oncology Tests Table */}

        <Card className="overflow-hidden shadow-lg">

          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">

            <CardTitle className="text-2xl text-center text-gray-800">

              {language === 'uz' ? 'Onkologiya testlari katalogi' :

               language === 'ru' ? 'Каталог онкологических тестов' :

               'Oncology Tests Catalog'}

            </CardTitle>

          </CardHeader>

          <CardContent className="p-0">

            {/* Desktop Table */}

            <div className="hidden md:block overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">

                      {headers.specimen}

                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">

                      {headers.format}

                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">

                      {headers.code}

                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">

                      {headers.name}

                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">

                      {headers.packSize}

                    </th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-gray-200">

                  {oncologyTests.map((test, index) => (

                    <tr 

                      key={test.code} 

                      className={`hover:bg-blue-50 transition-colors duration-200 ${

                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'

                      }`}

                    >

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">

                        {test.specimen[language]}

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">

                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">

                          {test.format[language]}

                        </span>

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-orange-600 font-semibold">

                        {test.code}

                      </td>

                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">

                        {test.name[language]}

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-900">

                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">

                          {test.packSize}

                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>



            {/* Mobile Cards */}

            <div className="md:hidden space-y-4 p-4">

              {oncologyTests.map((test, index) => (

                <Card key={test.code} className="border border-gray-200 hover:shadow-md transition-shadow duration-200">

                  <CardContent className="p-4">

                    <div className="space-y-3">

                      <div className="flex justify-between items-start">

                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">

                          {test.name[language]}

                        </h3>

                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">

                          {test.packSize}

                        </span>

                      </div>

                      

                      <div className="grid grid-cols-2 gap-3 text-xs">

                        <div>

                          <span className="text-gray-500 font-medium">{headers.specimen}:</span>

                          <p className="text-gray-900 mt-1">{test.specimen[language]}</p>

                        </div>

                        <div>

                          <span className="text-gray-500 font-medium">{headers.format}:</span>

                          <p className="mt-1">

                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">

                              {test.format[language]}

                            </span>

                          </p>

                        </div>

                      </div>

                      

                      <div className="pt-2 border-t border-gray-100">

                        <span className="text-gray-500 font-medium text-xs">{headers.code}:</span>

                        <p className="font-mono text-orange-600 font-semibold text-sm mt-1">{test.code}</p>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              ))}

            </div>

          </CardContent>

        </Card>

      </div>

    </div>

  );

}