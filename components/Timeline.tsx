import React from 'react';

const timelineData = {
  uz: [
    {
      year: '2020',
      title: 'Boshlanish',
      description:
        'Testline kompaniyasi tashkil etildi va birinchi mahsulotlar ishlab chiqarildi.',
    },
    {
      year: '2021',
      title: 'Innovatsion mahsulotlar',
      description: 'Yangi innovatsion tibbiy testlar bozorga chiqarildi.',
    },
    {
      year: '2022',
      title: 'Xalqaro hamkorlik',
      description: "Xalqaro hamkorlik va eksport yo'lga qo'yildi.",
    },
    {
      year: '2023',
      title: 'Sifat sertifikatlari',
      description: "Mahsulotlarimiz xalqaro sifat sertifikatlariga ega bo'ldi.",
    },
    {
      year: '2024',
      title: 'Raqamli rivojlanish',
      description:
        'Raqamli texnologiyalar joriy qilindi va onlayn xizmatlar kengaytirildi.',
    },
    {
      year: '2025',
      title: 'Kelajak sari',
      description:
        'Yangi bozorlarga chiqish va mahsulotlar assortimentini kengaytirish rejalashtirilmoqda.',
    },
  ],
  ru: [
    {
      year: '2020',
      title: 'Начало',
      description:
        'Компания Testline была основана и выпустила первые продукты.',
    },
    {
      year: '2021',
      title: 'Инновационные продукты',
      description: 'На рынок выведены новые инновационные медицинские тесты.',
    },
    {
      year: '2022',
      title: 'Международное сотрудничество',
      description: 'Налажено международное сотрудничество и экспорт.',
    },
    {
      year: '2023',
      title: 'Сертификаты качества',
      description: 'Наши продукты получили международные сертификаты качества.',
    },
    {
      year: '2024',
      title: 'Цифровое развитие',
      description: 'Внедрены цифровые технологии и расширены онлайн-сервисы.',
    },
    {
      year: '2025',
      title: 'В будущее',
      description:
        'Планируется выход на новые рынки и расширение ассортимента продуктов.',
    },
  ],
  en: [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Testline was founded and launched its first products.',
    },
    {
      year: '2021',
      title: 'Innovative Products',
      description:
        'New innovative medical tests were introduced to the market.',
    },
    {
      year: '2022',
      title: 'International Collaboration',
      description: 'Established international partnerships and began exports.',
    },
    {
      year: '2023',
      title: 'Quality Certifications',
      description:
        'Our products received international quality certifications.',
    },
    {
      year: '2024',
      title: 'Digital Growth',
      description:
        'Implemented digital technologies and expanded online services.',
    },
    {
      year: '2025',
      title: 'Looking Ahead',
      description: 'Plans to enter new markets and expand the product range.',
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
            <div key={idx} className="relative w-1/6 text-center">
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
