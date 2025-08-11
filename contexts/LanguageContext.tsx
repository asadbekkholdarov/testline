'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  uz: {
    // Navigation
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    products: 'Mahsulotlar',
    news: 'Yangiliklar',
    contact: 'Aloqa',

    // Home Page
    heroTitle: 'NAM BIOTEST MCHJ',
    heroDescription:
      "NAM BIOTEST MCHJ — bu O‘zbekiston Respublikasi, Namangan shahrida joylashgan, in-vitro diagnostika (IVD) sohasiga ixtisoslashgan biotexnologiya kompaniyasi. 2018-yilda tashkil etilgan kompaniyamiz “Sog‘lom va xavfsiz hayot uchun innovatsiyalar” shiorini o‘z oldiga maqsad qilib qo‘ygan bo‘lib, ilmiy-tadqiqot va sanoat ishlab chiqarish uchun bir nechta IVD texnologiya platformalarini ishlab chiqdi.",
    whyTestline: 'Nega Testline?',
    whyTestlineDesc:
      'Bizning mahsulotlarimiz eng yuqori sifat standartlariga javob beradi va jahon bozorida tanilgan.',
    qualityTitle: 'Yuqori sifat',
    qualityDesc:
      'Barcha mahsulotlar xalqaro standartlarga muvofiq ishlab chiqariladi',
    innovationTitle: 'Innovatsiya',
    innovationDesc: 'Zamonaviy texnologiyalar va yangi yechimlar',
    supportTitle: 'Texnik yordam',
    supportDesc: '24/7 professional texnik yordam xizmati',

    // About Page
    aboutTitle: 'Testline haqida',
    aboutContent:
      "Testline - tibbiy diagnostika sohasidagi yetakchi kompaniya. Biz 10 yildan ortiq vaqt davomida sog'liqni saqlash tizimiga yuqori sifatli tibbiy test va diagnostika vositalarini yetkazib beramiz. Bizning missiyamiz - har bir bemorga aniq va ishonchli diagnostika xizmatini taqdim etish orqali sog'liqni saqlash sifatini oshirishdir.",

    // Products Page
    productsTitle: 'Mahsulotlar',
    productsSubtitle: 'Testline kompaniyasining mahsulotlari',
    allProducts: 'Barcha mahsulotlar',
    express: 'Ekspress',
    poct: 'POCT',
    blood: 'Qon',
    productDetails: 'Mahsulot tafsilotlari',
    back: 'Orqaga',
    category: 'Kategoriya',

    // Contact Page
    contactTitle: "Biz bilan bog'laning",
    contactForm: 'Aloqa formasi',
    name: 'Ism',
    email: 'Email',
    subject: 'Mavzu',
    message: 'Xabar',
    send: 'Yuborish',
    location: 'Bizning manzil',
    contactSuccess: 'Xabaringiz muvaffaqiyatli yuborildi!',

    // News Page
    newsTitle: 'Yangiliklar',
    newsContent:
      "Yangiliklar sahifasi hozirda tayyorlanmoqda. Tez orada sizga eng so'nggi yangiliklar va ma'lumotlarni taqdim etamiz.",
    readMore: "Batafsil o'qish",

    // About Page - Mission & Vision
    mission: 'Missiya',
    vision: 'Vizyon',
    missionText:
      "Har bir bemor uchun aniq va ishonchli diagnostika xizmatini taqdim etish orqali sog'liqni saqlash sifatini oshirish. Biz tibbiy diagnostika sohasida innovatsion yechimlar yaratib, sog'liqni saqlash tizimini yanada samarali qilishga intilamiz.",
    visionText:
      "Jahon miqyosida tibbiy diagnostika yechimlarining yetakchi ta'minotchisi bo'lish, sog'liqni saqlashni yanada qulay va samarali qilish. Biz texnologiya va innovatsiyalar orqali tibbiy xizmatlarni har bir kishi uchun ochiq qilishni maqsad qilamiz.",

    // Licenses
    licensesTitle: 'Litsenziyalar va sertifikatlar',
    licensesDesc:
      'Bizning mahsulotlarimiz xalqaro standartlarga muvofiq sertifikatlangan',

    // Footer
    footerCopyright: 'Barcha huquqlar himoyalangan',

    // Validation
    nameRequired: 'Ism kiritish shart',
    emailRequired: 'Email kiritish shart',
    emailInvalid: "Email formati noto'g'ri",
    subjectRequired: 'Mavzu kiritish shart',
    messageRequired: 'Xabar kiritish shart',
    phone: 'Telefon',
    address: 'Manzil',
    workingHours: 'Ish vaqti',
    contactEmail: 'nambiotest@gmail.com',
    contactPhone: '+998 91 352 74 74',
    contactAddress: '"NAM BIOTEST" MCHJ, O\'zbekiston Respublikasi, Namangan shahar, Davlatobod tumani, Tadbirkor MFY, Yoshlar ko\'chasi, 89-uy.',
    contactWorkingHours: 'Dushanba - Juma: 8:00 - 17:00',
    sending: 'Yuborilmoqda...',
    happyClients: 'Mamnun mijozlar',
    happyClientsValue: '1000+',
    yearsOfExperience: 'Tajriba yillari',
    yearsOfExperienceValue: '10+',
    countriesServed: "Xizmat ko'rsatilgan davlatlar",
    countriesServedValue: '5',
    livesImproved: 'Ishlab chiqarish hajmi',
    livesImprovedValue: '5 mln',
    readyToGetStarted: 'Boshlashga tayyormisiz?',
    ctaDescription:
      "Mahsulot va xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning",
    productNotFound: 'Mahsulot topilmadi',
    description: 'Tavsif',
    interestedInProduct: 'Bu mahsulot sizni qiziqtirdimi?',
    callNow: "Hozir qo'ng'iroq qiling",
    sendEmail: 'Email yuborish',
    samplePreparation: 'Namunani tayyorlash',
    samplePreparationDesc: 'Steril uskunalar yordamida namunani oling',
    performTest: 'Testni amalga oshirish',
    performTestDesc: "Namunani test kassettasiga qo'ying",
    readResults: "Natijani o'qish",
    readResultsDesc: "15 daqiqadan so'ng natijani o'qing",
    contactSubtitle:
      'Mahsulotlarimiz yoki xizmatlarimiz bo‘yicha har qanday savollar uchun biz bilan bog‘laning.',
    contacttitle: "Biz bilan bog'laning",
    newsSubtitle: 'Testline kompaniyasining so‘nggi yangiliklari',
    viewDetails: 'Batafsil ko‘rish',
    viewMore: 'Batafsil ko‘rish',
    timelineTitle: 'Kompaniya Tarixi',
    timelineDesc: "So'nggi 5 yildagi asosiy bosqichlarimiz.",
    timeline2020Title: 'Boshlanish',
    timeline2020Desc:
      'Testline kompaniyasi tashkil etildi va birinchi mahsulotlar ishlab chiqarildi.',
    timeline2021Title: 'Innovatsion mahsulotlar',
    timeline2021Desc: 'Yangi innovatsion tibbiy testlar bozorga chiqarildi.',
    timeline2022Title: 'Xalqaro hamkorlik',
    timeline2022Desc: "Xalqaro hamkorlik va eksport yo'lga qo'yildi.",
    timeline2023Title: 'Sifat sertifikatlari',
    timeline2023Desc:
      "Mahsulotlarimiz xalqaro sifat sertifikatlariga ega bo'ldi.",
    timeline2024Title: 'Raqamli rivojlanish',
    timeline2024Desc:
      'Raqamli texnologiyalar joriy qilindi va onlayn xizmatlar kengaytirildi.',
    timeline2025Title: 'Kelajak sari',
    timeline2025Desc:
      'Yangi bozorlarga chiqish va mahsulotlar assortimentini kengaytirish rejalashtirilmoqda.',
  },
  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    products: 'Продукты',
    news: 'Новости',
    contact: 'Контакты',

    // Home Page
    heroTitle: 'NAM BIOTEST OOO',
    heroDescription:
      'ООО «NAM BIOTEST» — биотехнологическая компания, расположенная в городе Наманган, Республика Узбекистан, специализирующаяся на in-vitro диагностике (IVD). Основанная в 2018 году, компания следует миссии «Инновации ради здоровой и безопасной жизни», разрабатывая несколько технологических платформ IVD для научных исследований и промышленного производства.',
    whyTestline: 'Почему Testline?',
    whyTestlineDesc:
      'Наша продукция соответствует самым высоким стандартам качества и признана на мировом рынке.',
    qualityTitle: 'Высокое качество',
    qualityDesc:
      'Все продукты производятся в соответствии с международными стандартами',
    innovationTitle: 'Инновации',
    innovationDesc: 'Современные технологии и новые решения',
    supportTitle: 'Техническая поддержка',
    supportDesc: 'Профессиональная техническая поддержка 24/7',

    // About Page
    aboutTitle: 'О компании Testline',
    aboutContent:
      'Testline - ведущая компания в области медицинской диагностики. Мы уже более 10 лет поставляем в систему здравоохранения высококачественные медицинские тесты и диагностические средства. Наша миссия - повышение качества здравоохранения путем предоставления точных и надежных диагностических услуг каждому пациенту.',

    // Products Page
    productsTitle: 'Продукты',
    productsSubtitle: 'Продукты Testline',
    allProducts: 'Все продукты',
    express: 'Экспресс',
    poct: 'POCT',
    blood: 'Кровь',
    productDetails: 'Детали продукта',
    back: 'Назад',
    category: 'Категория',

    // Contact Page
    contactTitle: 'Свяжитесь с нами',
    contactForm: 'Форма обратной связи',
    name: 'Имя',
    email: 'Email',
    subject: 'Тема',
    message: 'Сообщение',
    send: 'Отправить',
    location: 'Наш адрес',
    contactSuccess: 'Ваше сообщение успешно отправлено!',

    // News Page
    newsTitle: 'Новости',
    newsContent:
      'Страница новостей в настоящее время готовится. Скоро мы предоставим вам самые свежие новости и информацию.',
    readMore: 'Читать далее',

    // About Page - Mission & Vision
    mission: 'Миссия',
    vision: 'Видение',
    missionText:
      'Повышение качества здравоохранения путем предоставления точных и надежных диагностических услуг каждому пациенту. Мы стремимся создавать инновационные решения в области медицинской диагностики, делая систему здравоохранения более эффективной.',
    visionText:
      'Стать ведущим поставщиком решений медицинской диагностики в мире, делая здравоохранение более доступным и эффективным. Мы стремимся сделать медицинские услуги доступными для каждого человека через технологии и инновации.',

    // Licenses
    licensesTitle: 'Лицензии и сертификаты',
    licensesDesc:
      'Наша продукция сертифицирована в соответствии с международными стандартами',

    // Footer
    footerCopyright: 'Все права защищены',

    // Validation
    nameRequired: 'Имя обязательно',
    emailRequired: 'Email обязателен',
    emailInvalid: 'Неверный формат email',
    subjectRequired: 'Тема обязательна',
    messageRequired: 'Сообщение обязательно',
    phone: 'Телефон',
    address: 'Адрес',
    workingHours: 'Время работы',
    contactEmail: 'nambiotest@gmail.com',
    contactPhone: '+998 91 352 74 74',
    contactAddress: 'ООО "NAM BIOTEST", Республика Узбекистан, город Наманган, Давлатободский район, Тадбиркор СГМ, ул. Ёшлар, дом 89.',
    contactWorkingHours: 'Пн - Пт: 8:00 - 17:00',
    sending: 'Отправка...',
    happyClients: 'Довольные клиенты',
    happyClientsValue: '1000+',
    yearsOfExperience: 'Годы опыта',
    yearsOfExperienceValue: '10+',
    countriesServed: 'Страны обслуживания',
    countriesServedValue: '5',
    livesImproved: 'ежемесячное производство',
    livesImprovedValue: '5 M',
    readyToGetStarted: 'Готовы начать?',
    ctaDescription:
      'Свяжитесь с нами, чтобы узнать больше о наших продуктах и услугах',
    productNotFound: 'Продукт не найден',
    description: 'Описание',
    interestedInProduct: 'Заинтересованы в этом продукте?',
    callNow: 'Позвонить сейчас',
    sendEmail: 'Отправить email',
    samplePreparation: 'Подготовка образца',
    samplePreparationDesc: 'Возьмите образец с помощью стерильных инструментов',
    performTest: 'Проведение теста',
    performTestDesc: 'Поместите образец в тестовую кассету',
    readResults: 'Чтение результата',
    readResultsDesc: 'Прочитайте результат через 15 минут',
    contactSubtitle:
      'Свяжитесь с нами по любым вопросам о наших продуктах или услугах.',
    contacttitle: 'Контакты',
    newsSubtitle: 'Новости и события Testline',
    viewDetails: 'Подробнее',
    viewMore: 'Подробнее',
    timelineTitle: 'История компании',
    timelineDesc: 'Ключевые этапы за последние 5 лет.',
    timeline2020Title: 'Начало',
    timeline2020Desc:
      'Компания Testline была основана и выпустила первые продукты.',
    timeline2021Title: 'Инновационные продукты',
    timeline2021Desc:
      'На рынок выведены новые инновационные медицинские тесты.',
    timeline2022Title: 'Международное сотрудничество',
    timeline2022Desc: 'Налажено международное сотрудничество и экспорт.',
    timeline2023Title: 'Сертификаты качества',
    timeline2023Desc:
      'Наши продукты получили международные сертификаты качества.',
    timeline2024Title: 'Цифровое развитие',
    timeline2024Desc:
      'Внедрены цифровые технологии и расширены онлайн-сервисы.',
    timeline2025Title: 'В будущее',
    timeline2025Desc:
      'Планируется выход на новые рынки и расширение ассортимента продуктов.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    news: 'News',
    contact: 'Contact Us',

    // Home Page
    heroTitle: 'NAM BIOTEST LLC',
    heroDescription:
      'NAM BIOTEST LLC is a biotechnology company based in Namangan, Republic of Uzbekistan, specializing in in-vitro diagnostics (IVD). Since its establishment in 2018, our company has been driven by the mission “Innovations for a Healthy and Secure Life”, developing multiple IVD technology platforms for both research and large-scale manufacturing.',
    whyTestline: 'Why Testline?',
    whyTestlineDesc:
      'Our products meet the highest quality standards and are recognized in the global market.',
    qualityTitle: 'High Quality',
    qualityDesc:
      'All products are manufactured according to international standards',
    innovationTitle: 'Innovation',
    innovationDesc: 'Modern technologies and new solutions',
    supportTitle: 'Technical Support',
    supportDesc: 'Professional technical support 24/7',

    // About Page
    aboutTitle: 'About Testline',
    aboutContent:
      'Testline is a leading company in the field of medical diagnostics. We have been delivering high-quality medical tests and diagnostic tools to the healthcare system for over 10 years. Our mission is to improve healthcare quality by providing accurate and reliable diagnostic services to every patient.',

    // Products Page
    productsTitle: 'Products',
    productsSubtitle: 'Products of Testline',
    allProducts: 'All Products',
    express: 'Express',
    poct: 'POCT',
    blood: 'Blood',
    productDetails: 'Product Details',
    back: 'Back',
    category: 'Category',

    // Contact Page
    contactTitle: 'Contact Us',
    contactForm: 'Contact Form',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    location: 'Our Location',
    contactSuccess: 'Your message has been sent successfully!',

    // News Page
    newsTitle: 'News',
    newsContent:
      'The news page is currently being prepared. We will soon provide you with the latest news and information.',
    readMore: 'Read More',

    // About Page - Mission & Vision
    mission: 'Mission',
    vision: 'Vision',
    missionText:
      'To improve healthcare quality by providing accurate and reliable diagnostic services to every patient. We strive to create innovative solutions in medical diagnostics, making the healthcare system more effective.',
    visionText:
      'To be the leading provider of medical diagnostic solutions globally, making healthcare more accessible and effective. We aim to make medical services accessible to everyone through technology and innovation.',

    // Licenses
    licensesTitle: 'Licenses and Certificates',
    licensesDesc:
      'Our products are certified according to international standards',

    // Footer
    footerCopyright: 'All rights reserved',

    // Validation
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Invalid email format',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    phone: 'Phone',
    address: 'Address',
    workingHours: 'Working Hours',
    contactEmail: 'nambiotest@gmail.com',
    contactPhone: '+998 91 352 74 74',
     contactAddress: '"NAM BIOTEST" LLC, 89 Yoshlar Street, Tadbirkor Neighborhood, Davlatabad District, Namangan City, Republic of Uzbekistan',
    contactWorkingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    sending: 'Sending...',
    happyClients: 'Happy Clients',
    happyClientsValue: '1000+',
    yearsOfExperience: 'Years of Experience',
    yearsOfExperienceValue: '10+',
    countriesServed: 'Countries Served',
    countriesServedValue: '5',
    livesImproved: 'Lives Improved',
    livesImprovedValue: '50k+',
    readyToGetStarted: 'Ready to Get Started?',
    ctaDescription:
      'Contact us today to learn more about our products and services',
    productNotFound: 'Product not found',
    description: 'Description',
    interestedInProduct: 'Interested in this product?',
    callNow: 'Call Now',
    sendEmail: 'Send Email',
    samplePreparation: 'Sample Preparation',
    samplePreparationDesc: 'Collect the sample using sterile instruments',
    performTest: 'Perform the Test',
    performTestDesc: 'Place the sample in the test cassette',
    readResults: 'Read Results',
    readResultsDesc: 'Read the result after 15 minutes',
    contactSubtitle:
      'Get in touch with us for any questions about our products or services',
    contacttitle: 'Contact us',
    newsSubtitle: 'News and events about Testline',
    viewDetails: 'View Details',
    viewMore: 'View More',
    timelineTitle: 'Company Timeline',
    timelineDesc: 'Key milestones from the last 5 years.',
    timeline2020Title: 'Foundation',
    timeline2020Desc: 'Testline was founded and launched its first products.',
    timeline2021Title: 'Innovative Products',
    timeline2021Desc:
      'New innovative medical tests were introduced to the market.',
    timeline2022Title: 'International Collaboration',
    timeline2022Desc:
      'Established international partnerships and began exports.',
    timeline2023Title: 'Quality Certifications',
    timeline2023Desc:
      'Our products received international quality certifications.',
    timeline2024Title: 'Digital Growth',
    timeline2024Desc:
      'Implemented digital technologies and expanded online services.',
    timeline2025Title: 'Looking Ahead',
    timeline2025Desc:
      'Plans to enter new markets and expand the product range.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['uz', 'ru', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)[Language]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
