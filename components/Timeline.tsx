import React from 'react';

const timelineData = {
  uz: [
    {
      year: '2018',
      title: 'Boshlanish',
      description:
        'NAM BIOTEST MCHJ tashkil etildi va in-vitro diagnostika sohasida faoliyat boshladi.',
    },
    {
      year: '2019',
      title: 'Birinchi litsenziya',
      description: 'Kompaniya o\'zining birinchi litsenziyasi asosida rasmiy faoliyatni boshladi.',
    },
    {
      year: '2020',
      title: 'COVID-19 ga qarshi hissa',
      description: 'O\'zbekistonda COVID-19 ekspress testlarini ishlab chiqargan birinchi mahalliy kompaniya sifatida pandemiyaga qarshi kurashga yordam berdi.',
    },
    {
      year: '2021',
      title: 'Milliy sertifikatlar (1-bosqich)',
      description: 'HBsAg Strip, HCV Strip, HIV Kasseta, TP Kasseta mahsulotlariga O\'zbekiston milliy sertifikatlari olindi.',
    },
    {
      year: '2022',
      title: 'Milliy sertifikatlar (2-bosqich)',
      description: 'HCV Kasseta, HBsAg Kasseta, H.Pylori Ab Kasseta, H.Pylori Ag Kasseta, HAV IgM Kasseta va boshqa ekspress testlarga milliy sertifikatlar olindi.',
    },
    {
      year: '2023',
      title: 'Xalqaro sifat sertifikatlari',
      description: 'Kompaniya ISO 9001 va ISO 13485 xalqaro sifat boshqaruv tizimi sertifikatlariga ega bo\'ldi.',
    },
    {
      year: '2024',
      title: 'Yangi imkoniyatlar',
      description: 'new.cooperation.uz mahalliy ishlab chiqaruvchilar platformasiga qo\'shildi va yangi turdagi tezkor diagnostik testlar ishlab chiqara boshladi.',
    },
    {
      year: '2025',
      title: 'FIA POCT platformasi va kengaytirilgan DOA testlari',
      description: 'Kompaniya o\'zining birinchi Immunoflyuorestsent FIA POCT platformasini ishga tushirdi va 80 dan ortiq turdagi giyohvandlik vositalarini aniqlash ekspress testlarini ishlab chiqara boshladi.',
    },
  ],
  ru: [
    {
      year: '2018',
      title: 'Основание',
      description:
        'Основано ООО «NAM BIOTEST», специализирующееся на in-vitro диагностике.',
    },
    {
      year: '2019',
      title: 'Первая лицензия',
      description: 'Начало официальной деятельности на основе первой производственной лицензии.',
    },
    {
      year: '2020',
      title: 'Вклад в борьбу с COVID-19',
      description: 'Признана первой локальной компанией в Узбекистане, производящей экспресс-тесты на COVID-19, и внесшей значительный вклад в борьбу с пандемией.',
    },
    {
      year: '2021',
      title: 'Национальные сертификаты (1-й этап)',
      description: 'Получены национальные сертификаты Республики Узбекистан на HBsAg Стрип, HCV Стрип, HIV Кассету и TP Кассету.',
    },
    {
      year: '2022',
      title: 'Национальные сертификаты (2-й этап)',
      description: 'Получены национальные сертификаты на HCV Кассету, HBsAg Кассету, H.Pylori Ab Кассету, H.Pylori Ag Кассету, HAV IgM Кассету и другие экспресс-тесты.',
    },
    {
      year: '2023',
      title: 'Международные сертификаты качества',
      description: 'Получены международные сертификаты систем менеджмента качества ISO 9001 и ISO 13485.',
    },
    {
      year: '2024',
      title: 'Новые возможности',
      description: 'Присоединились к платформе местных производителей new.cooperation.uz и начали выпуск расширенного ассортимента экспресс-диагностических тестов.',
    },
    {
      year: '2025',
      title: 'Платформа FIA POCT и расширенные тесты на наркотики',
      description: 'Запущена первая иммунофлуоресцентная платформа FIA POCT и начато производство более 80 видов экспресс-тестов для выявления наркотических веществ.',
    },
  ],
  en: [
    {
      year: '2018',
      title: 'Foundation',
      description: 'NAM BIOTEST LLC was founded, focusing on in-vitro diagnostics.',
    },
    {
      year: '2019',
      title: 'First License',
      description: 'Began official operations under the company\'s first manufacturing license.',
    },
    {
      year: '2020',
      title: 'Contribution Against COVID-19',
      description: 'Recognized as the first local company in Uzbekistan to manufacture COVID-19 rapid tests, contributing to the country\'s pandemic response.',
    },
    {
      year: '2021',
      title: 'National Certifications (Phase 1)',
      description: 'Received Uzbekistan national certifications for HBsAg Strips, HCV Strips, HIV Cassettes, and TP Cassettes.',
    },
    {
      year: '2022',
      title: 'National Certifications (Phase 2)',
      description: 'Received Uzbekistan national certifications for HCV Cassettes, HBsAg Cassettes, H.Pylori Ab Cassettes, H.Pylori Ag Cassettes, HAV IgM Cassettes, and other rapid tests.',
    },
    {
      year: '2023',
      title: 'International Quality Certifications',
      description: 'Achieved ISO 9001 and ISO 13485 international quality management system certifications.',
    },
    {
      year: '2024',
      title: 'New Opportunities',
      description: 'Joined the new.cooperation.uz local manufacturers platform and expanded production with more types of rapid diagnostic tests.',
    },
    {
      year: '2025',
      title: 'FIA POCT Platform & Expanded DOA Tests',
      description: 'Launched the company\'s first Immunofluorescence FIA POCT platform and began producing over 80 types of drug abuse rapid tests.',
    },
  ],
};

interface TimelineProps {
  language: 'uz' | 'ru' | 'en';
}

export default function Timeline({ language }: TimelineProps) {
  const data = timelineData[language] || timelineData.en;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Timeline container */}
        <div className="relative hidden lg:flex justify-between items-center border-t-2 border-gray-300">
          {data.map((item, idx) => (
            <div key={idx} className="relative w-1/8 text-center">
              {/* Dot */}
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />

              {/* Content */}
              <div
                className={`absolute w-40 ${
                  idx % 2 === 0 ? 'top-10' : 'bottom-10'
                } left-1/2 transform -translate-x-1/2`}
              >
                <h3 className="text-lg font-bold">{item.year}</h3>
                <h4 className="text-sm text-blue-600 font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Mobile Grid */}
        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-4 border-l-4 border-blue-600 rounded-md shadow-sm bg-gray-50"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-full mb-3"></div>
              <h3 className="text-lg font-bold">{item.year}</h3>
              <h4 className="text-sm text-blue-600 font-semibold">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}