'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  CheckCircle,
  Lightbulb,
  Headphones,
  ArrowRight,
  MoveRight,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { licenses } from '@/data/licenses';
import { products } from '@/data/products';

export default function Home() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: t('qualityTitle'),
      description: t('qualityDesc'),
    },
    {
      icon: Lightbulb,
      title: t('innovationTitle'),
      description: t('innovationDesc'),
    },
    {
      icon: Headphones,
      title: t('supportTitle'),
      description: t('supportDesc'),
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    'Mahsulot assortimentimizga kolloid oltin asosidagi ekspress testlar va immunoflyuorestsent POCT analizatorlar (FIA) kiradi. Ular laboratoriya, shifoxona va klinikalarda professional foydalanish uchun mo\'ljallangan.' :
            <div className="space-y-8">
                    'Наш ассортимент включает экспресс-тесты на основе коллоидного золота и иммунофлуоресцентные анализаторы POCT (FIA), предназначенные для профессионального использования в лабораториях, больницах и клиниках.' :
                    'Our product portfolio includes colloidal gold rapid tests and immunofluorescence POCT analyzers (FIA), designed for professional use in laboratories, hospitals, and clinics.'
                 language === 'ru' ? 'NAM BIOTEST' :
                 'NAM BIOTEST '}
              </h1>
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4">
                <p>
                    'Biz uchun sifat – bu hayot. Kompaniyamiz ISO 9001 va ISO 13485 sertifikatlariga ega bo\'lib, mahsulotlarimizning aksariyati O\'zbekiston milliy ro\'yxatidan o\'tgan. Ishlab chiqarish jarayonlari qat\'iy sifat nazorati tizimi asosida olib boriladi va yuqori sezuvchanlik, aniqlik hamda ishonchlilik kafolatlanadi.' :
                    'NAM BIOTEST MCHJ — bu O\'zbekiston Respublikasi, Namangan shahrida joylashgan, in-vitro diagnostika (IVD) sohasiga ixtisoslashgan biotexnologiya kompaniyasi. 2018-yilda tashkil etilgan kompaniyamiz ilmiy-tadqiqot va sanoat ishlab chiqarish uchun bir nechta IVD texnologiya platformalarini ishlab chiqdi.' :
                    'Мы рассматриваем качество как основу жизни. Компания имеет сертификаты ISO 9001 и ISO 13485, а также национальные регистрации Республики Узбекистан на большинство продукции. Все производственные процессы осуществляются в строгом соответствии с системами менеджмента качества, что обеспечивает высокую чувствительность, точность и надежность.' :
                    'We treat quality as life, holding ISO 9001 and ISO 13485 certifications, as well as Uzbekistan national registrations for the majority of our products. All manufacturing processes are conducted under strict quality management systems, ensuring high sensitivity, accuracy, and reliability.'
                    'NAM BIOTEST LLC is a biotechnology company based in Namangan, Republic of Uzbekistan, specializing in in-vitro diagnostics (IVD). Since its establishment in 2018, our company develops multiple IVD technology platforms for both research and large-scale manufacturing.'
                  }
                </p>
                <p>
                  {language === 'uz' ? 
                    'NAM BIOTEST mijozlarga raqobatbardosh mahsulotlar va professional xizmatlar taqdim etishga sodiqdir. Biz "Avvalo sifat, avvalo ishonch" tamoyiliga amal qilamiz va hamkorlarimiz bilan birgalikda sog\'lom kelajak barpo etishga intilamiz.' :
                   language === 'ru' ?
                    'NAM BIOTEST стремится предоставлять клиентам конкурентоспособные продукты и профессиональный сервис, придерживаясь принципа «Качество прежде всего, доверие прежде всего». Мы открыты для сотрудничества с партнёрами по всему миру и совместного создания здорового будущего.' :
                    'At NAM BIOTEST, we are committed to providing our customers with the most competitive products and professional service, upholding our principle of "Quality First, Credibility First." We look forward to working with partners worldwide to build a healthier future together.'
                  }
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/about">
                    {t('about')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">{t('contact')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-3xl"></div>
              <Image
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical diagnostic equipment"
                width={600}
                height={400}
                className="relative z-10 rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Testline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyTestline')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyTestlineDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('licensesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('licensesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licenses.slice(0, 3).map((license) => (
              <Link key={license.id} href="/about#licenses" className="group">
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center justify-center text-center">
                  <CardHeader>
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={license.image}
                        alt={license.name}
                        width={96}
                        height={96}
                        className="object-contain rounded-lg border"
                      />
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {license.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href="/about#licenses">
                {t('viewMore')}
                <MoveRight className="ml-3"></MoveRight>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('products')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('productsTitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <CardHeader>
                  <div className="w-full h-48 relative mb-4">
                    <Image
                      src={product.image}
                      alt={product.title.en}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {product.title.en}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <Button
                    asChild
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4"
                  >
                    <Link href={`/products/${product.id}`}>
                      {t('viewMore')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href="/products">
                {t('viewMore')}
                <MoveRight className="ml-3"></MoveRight>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('readyToGetStarted')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/contact">
              {t('contact')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
