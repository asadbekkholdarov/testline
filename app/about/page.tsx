'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Globe, Heart, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Timeline from '@/components/Timeline';

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Award,
      label: t('yearsOfExperience'),
      value: t('yearsOfExperienceValue'),
    },
    {
      icon: Globe,
      label: t('countriesServed'),
      value: t('countriesServedValue'),
    },
    { icon: Heart, label: t('livesImproved'), value: t('livesImprovedValue') },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'uz' ? 'NAM BIOTEST MCHJ haqida' :
                 language === 'ru' ? 'О компании ООО «NAM BIOTEST»' :
                 'About NAM BIOTEST LLC'}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'uz' ? 
                  'NAM BIOTEST MCHJ — bu O\'zbekiston Respublikasi, Namangan shahrida joylashgan, in-vitro diagnostika (IVD) sohasiga ixtisoslashgan biotexnologiya kompaniyasi. 2018-yilda tashkil etilgan kompaniyamiz "Sog\'lom va xavfsiz hayot uchun innovatsiyalar" shiorini o\'z oldiga maqsad qilib qo\'ygan bo\'lib, ilmiy-tadqiqot va sanoat ishlab chiqarish uchun bir nechta IVD texnologiya platformalarini ishlab chiqdi.' :
                 language === 'ru' ?
                  'ООО «NAM BIOTEST» — биотехнологическая компания, расположенная в городе Наманган, Республика Узбекистан, специализирующаяся на in-vitro диагностике (IVD). Основанная в 2018 году, компания следует миссии «Инновации ради здоровой и безопасной жизни», разрабатывая несколько технологических платформ IVD для научных исследований и промышленного производства.' :
                  'NAM BIOTEST LLC is a biotechnology company based in Namangan, Republic of Uzbekistan, specializing in in-vitro diagnostics (IVD). Since its establishment in 2018, our company has been driven by the mission "Innovations for a Healthy and Secure Life", developing multiple IVD technology platforms for both research and large-scale manufacturing.'
                }
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical laboratory"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-lg text-gray-600 leading-relaxed space-y-5">
              <p>
                {language === 'uz' ? 'Biz 100 dan ortiq diagnostik parametrlarni ishlab chiqaramiz, jumladan:' :
                 language === 'ru' ? 'Мы выпускаем более 100 диагностических параметров, охватывающих:' :
                 'We produce over 100 diagnostic parameters, covering a wide range of applications, including:'}
              </p>
              
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                <li>{language === 'uz' ? 'Yurak-qon tomir kasalliklari' : language === 'ru' ? 'Сердечно-сосудистые заболевания' : 'Cardiovascular diseases'}</li>
                <li>{language === 'uz' ? 'Jigar va ovqat hazm qilish tizimi kasalliklari' : language === 'ru' ? 'Заболевания печени и ЖКТ' : 'Liver and gastrointestinal diseases'}</li>
                <li>{language === 'uz' ? 'Yuqumli kasalliklar' : language === 'ru' ? 'Инфекционные заболевания' : 'Infectious diseases'}</li>
                <li>{language === 'uz' ? 'Yallig\'lanish ko\'rsatkichlari' : language === 'ru' ? 'Воспалительные маркеры' : 'Inflammatory markers'}</li>
                <li>{language === 'uz' ? 'Giyohvandlik vositalarini aniqlash' : language === 'ru' ? 'Выявление наркотических веществ' : 'Drug abuse detection'}</li>
                <li>{language === 'uz' ? 'Boshqa ko\'plab klinik yo\'nalishlar' : language === 'ru' ? 'И многие другие области медицины' : 'And many other clinical fields'}</li>
              </ul>
              
              <p>
                {language === 'uz' ? 
                  'Mahsulot assortimentimizga kolloid oltin asosidagi ekspress testlar va immunoflyuorestsent POCT analizatorlar (FIA) kiradi. Ular laboratoriya, shifoxona va klinikalarda professional foydalanish uchun mo\'ljallangan.' :
                 language === 'ru' ?
                  'Наш ассортимент включает экспресс-тесты на основе коллоидного золота и иммунофлуоресцентные анализаторы POCT (FIA), предназначенные для профессионального использования в лабораториях, больницах и клиниках.' :
                  'Our product portfolio includes colloidal gold rapid tests and immunofluorescence POCT analyzers (FIA), designed for professional use in laboratories, hospitals, and clinics.'
                }
              </p>
              
              <p>
                {language === 'uz' ? 
                  'Biz uchun sifat – bu hayot. Kompaniyamiz ISO 9001 va ISO 13485 sertifikatlariga ega bo\'lib, mahsulotlarimizning aksariyati O\'zbekiston milliy ro\'yxatidan o\'tgan. Ishlab chiqarish jarayonlari qat\'iy sifat nazorati tizimi asosida olib boriladi va yuqori sezuvchanlik, aniqlik hamda ishonchlilik kafolatlanadi.' :
                 language === 'ru' ?
                  'Мы рассматриваем качество как основу жизни. Компания имеет сертификаты ISO 9001 и ISO 13485, а также национальные регистрации Республики Узбекистан на большинство продукции. Все производственные процессы осуществляются в строгом соответствии с системами менеджмента качества, что обеспечивает высокую чувствительность, точность и надежность.' :
                  'We treat quality as life, holding ISO 9001 and ISO 13485 certifications, as well as Uzbekistan national registrations for the majority of our products. All manufacturing processes are conducted under strict quality management systems, ensuring high sensitivity, accuracy, and reliability.'
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="py-20">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6">
          {t('timelineTitle')}
        </h2>
        <br />
        <div className="py-20">
          <Timeline language={language} />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'uz' ? 'Missiya va Maqsadlar' :
               language === 'ru' ? 'Миссия и Видение' :
               'Mission & Vision'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-blue-600 mr-3" />
                    {language === 'uz' ? 'Missiya' :
                     language === 'ru' ? 'Миссия' :
                     'Mission'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {language === 'uz' ? 'Har bir bemor uchun aniq, tezkor va ishonchli diagnostika xizmatlarini taqdim etish orqali sog\'liqni saqlash sifatini oshirish. Biz tibbiy diagnostika sohasida innovatsion texnologiyalar va ilg\'or yechimlar yaratib, sog\'liqni saqlash tizimini yanada samarali qilishga intilamiz.' :
                     language === 'ru' ? 'Повышать качество здравоохранения, предоставляя точные, быстрые и надежные диагностические услуги для каждого пациента. Мы стремимся создавать инновационные технологии и передовые решения в области медицинской диагностики, делая систему здравоохранения более эффективной.' :
                     'To enhance the quality of healthcare by providing accurate, rapid, and reliable diagnostic services for every patient. We strive to create innovative technologies and advanced solutions in medical diagnostics to make healthcare systems more efficient.'}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-blue-600 mr-3" />
                    {language === 'uz' ? 'Maqsadlar' :
                     language === 'ru' ? 'Видение' :
                     'Vision'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {language === 'uz' ? 'Jahon miqyosida tibbiy diagnostika yechimlarining yetakchi ishlab chiqaruvchisi va yetkazib beruvchisi bo\'lish. Biz sog\'liqni saqlashni har bir inson uchun qulay, tezkor va samarali qilishga intilamiz. Zamonaviy texnologiyalar va innovatsiyalar orqali diagnostika xizmatlarini yanada ommalashtirishni maqsad qilamiz.' :
                     language === 'ru' ? 'Стать мировым лидером в производстве и поставке медицинских диагностических решений. Наша цель — сделать здравоохранение доступным, быстрым и эффективным для каждого человека, расширяя возможности диагностики с помощью современных технологий и инноваций.' :
                     'To become a global leader in manufacturing and delivering medical diagnostic solutions. Our goal is to make healthcare accessible, fast, and effective for everyone, expanding the reach of diagnostic services through modern technology and innovation.'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'uz' ? 'Sertifikatlar' :
               language === 'ru' ? 'Сертификаты' :
               'Certifications'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'uz' ? 'Bizning mahsulotlarimiz O\'zbekiston milliy talablari va xalqaro standartlarga to\'liq muvofiq ravishda litsenziyalangan va sertifikatlangan.' :
               language === 'ru' ? 'Наша продукция имеет лицензии и сертифицирована в полном соответствии с национальными требованиями Узбекистана и международными стандартами.' :
               'Our products are fully licensed and certified in compliance with Uzbekistan national requirements and international standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/HBs_Ag_Cassette.jpg"
                    alt="HBs Ag Cassette Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/anti_tp.jpg"
                    alt="Anti TP Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  Anti TP
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hbs_ag_hcv.jpg"
                    alt="HBs Ag HCV Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag HCV
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hav_igm.jpg"
                    alt="HAV IgM Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HAV IgM
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hbs_ag_strip.jpg"
                    alt="HBs Ag Strip Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HBs Ag Strip
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hcv_cassette.jpg"
                    alt="HCV Cassette Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HCV Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hcv_strip.jpg"
                    alt="HCV Strip Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HCV Strip
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hp_ag_cassette.jpg"
                    alt="HP Ag Cassette Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HP Ag Cassette
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/iso_13485.jpg"
                    alt="ISO 13485 Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  ISO 13485
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/iso_9001.jpg"
                    alt="ISO 9001 Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  ISO 9001
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hiv_1.2.jpg"
                    alt="HIV 1.2 Certificate"
                    width={400}
                    height={600}
                    className="max-w-none group-hover:scale-105 transition-transform duration-300 rotate-[270deg]"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  HIV 1.2
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-full h-[500px] relative mb-4 overflow-visible rounded-lg flex items-center justify-center">
                  <Image
                    src="/certifications/images/hp_ab_cassette.jpg"
                    alt="HP Ab Cassette Certificate"
                    width={400}
                    height={600}