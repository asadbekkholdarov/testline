export interface NewsItem {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  excerpt: {
    uz: string;
    ru: string;
    en: string;
  };
  content: {
    uz: string;
    ru: string;
    en: string;
  };
  date: string;
  readTime: string;
  category: {
    uz: string;
    ru: string;
    en: string;
  };
  mainImage: string;
  images: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: "covid-19-test-launch",
    title: {
      uz: "Yangi COVID-19 tezkor test taqdim etildi",
      ru: "Представлен новый экспресс-тест на COVID-19",
      en: "New COVID-19 Rapid Test Available"
    },
    excerpt: {
      uz: "99.5% aniqlik bilan yangi COVID-19 tezkor testini taqdim etdik.",
      ru: "Мы представили новый экспресс-тест на COVID-19 с точностью 99,5%.",
      en: "We've introduced a new, more accurate COVID-19 rapid test with 99.5% accuracy."
    },
    content: {
      uz: "Testline kompaniyasi tibbiy diagnostika sohasidagi eng so'nggi yutuqlardan biri bo'lgan yangi COVID-19 tezkor testini bozorga taqdim etdi. Ushbu test 99.5% aniqlik ko'rsatkichi bilan ajralib turadi va natijani atigi 15 daqiqada beradi. Test ishlab chiqarishda eng zamonaviy texnologiyalar qo'llanilgan bo'lib, xalqaro sifat standartlariga to'liq javob beradi. Mahsulot CE va FDA sertifikatlariga ega bo'lib, dunyoning ko'plab mamlakatlarida foydalanish uchun ruxsat etilgan. Testning asosiy afzalliklari orasida oson foydalanish, yuqori aniqlik va tez natija olish imkoniyati mavjud.",
      ru: "Компания Testline представила новый экспресс-тест на COVID-19, который является одним из последних достижений в области медицинской диагностики. Этот тест отличается точностью 99,5% и дает результат всего за 15 минут. При производстве теста использованы самые современные технологии, и он полностью соответствует международным стандартам качества. Продукт имеет сертификаты CE и FDA и разрешен к использованию во многих странах мира. Среди основных преимуществ теста - простота использования, высокая точность и возможность быстрого получения результата.",
      en: "Testline has introduced a new COVID-19 rapid test, which is one of the latest achievements in medical diagnostics. This test stands out with 99.5% accuracy and provides results in just 15 minutes. The most advanced technologies were used in the production of the test, and it fully complies with international quality standards. The product has CE and FDA certificates and is approved for use in many countries around the world. Among the main advantages of the test are ease of use, high accuracy and the ability to quickly obtain results."
    },
    date: "2024-01-15",
    readTime: "3 min read",
    category: {
      uz: "Mahsulot taqdimoti",
      ru: "Запуск продукта",
      en: "Product Launch"
    },
    mainImage: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "central-asia-expansion",
    title: {
      uz: "Markaziy Osiyo bozorlariga kengayish",
      ru: "Расширение на рынки Центральной Азии",
      en: "Expansion to Central Asia Markets"
    },
    excerpt: {
      uz: "Testline o'z faoliyatini Markaziy Osiyo sog'liqni saqlash tizimlariga xizmat ko'rsatish uchun kengaytiryapti.",
      ru: "Testline расширяет свою деятельность для обслуживания систем здравоохранения Центральной Азии.",
      en: "Testline is expanding its operations to serve healthcare systems across Central Asia."
    },
    content: {
      uz: "Testline kompaniyasi o'zining strategik rivojlanish rejasi doirasida Markaziy Osiyo mintaqasidagi sog'liqni saqlash bozorlariga faol kirishni e'lon qildi. Ushbu kengayish loyihasi doirasida kompaniya Qozog'iston, Qirg'iziston, Tojikiston va Turkmaniston bozorlariga o'z mahsulotlarini yetkazib berishni rejalashtirmoqda. Mintaqadagi sog'liqni saqlash tizimlarining ehtiyojlarini chuqur o'rganish natijasida, Testline o'z mahsulot liniyasini mahalliy talablarga moslashtirishga qaror qildi. Kompaniya mahalliy distribyutorlar bilan hamkorlik qilish va mintaqaviy xizmat markazlarini ochish orqali mijozlarga eng yaxshi xizmatni taqdim etishni maqsad qilgan.",
      ru: "Компания Testline в рамках своего стратегического плана развития объявила об активном выходе на рынки здравоохранения Центральной Азии. В рамках этого проекта расширения компания планирует поставлять свою продукцию на рынки Казахстана, Кыргызстана, Таджикистана и Туркменистана. В результате глубокого изучения потребностей систем здравоохранения в регионе, Testline решила адаптировать свою продуктовую линейку к местным требованиям. Компания стремится предоставить клиентам лучший сервис через сотрудничество с местными дистрибьюторами и открытие региональных сервисных центров.",
      en: "Testline, as part of its strategic development plan, announced its active entry into the healthcare markets of Central Asia. As part of this expansion project, the company plans to supply its products to the markets of Kazakhstan, Kyrgyzstan, Tajikistan and Turkmenistan. As a result of in-depth study of the needs of healthcare systems in the region, Testline decided to adapt its product line to local requirements. The company aims to provide customers with the best service through cooperation with local distributors and opening regional service centers."
    },
    date: "2024-01-10",
    readTime: "5 min read",
    category: {
      uz: "Kompaniya yangiliklari",
      ru: "Новости компании",
      en: "Company News"
    },
    mainImage: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "hospital-partnerships",
    title: {
      uz: "Mahalliy shifoxonalar bilan hamkorlik",
      ru: "Партнерство с местными больницами",
      en: "Partnership with Local Hospitals"
    },
    excerpt: {
      uz: "Diagnostika imkoniyatlarini yaxshilash uchun yirik shifoxonalar bilan hamkorlik o'rnatdik.",
      ru: "Мы установили партнерские отношения с крупными больницами для улучшения диагностических возможностей.",
      en: "We've established partnerships with major hospitals to improve diagnostic accessibility."
    },
    content: {
      uz: "Testline kompaniyasi respublikaning yetakchi tibbiy muassasalari bilan strategik hamkorlik shartnomalarini imzoladi. Ushbu hamkorlik doirasida kompaniya shifoxonalarga zamonaviy diagnostika uskunalarini yetkazib berish, texnik xizmat ko'rsatish va mutaxassislarni o'qitish xizmatlarini taqdim etadi. Hamkorlik loyihasi doirasida 15 ta yirik shifoxona va tibbiy markaz bilan shartnomalar imzolangan. Bu hamkorlik natijasida bemorlar yanada sifatli va tezkor diagnostika xizmatlaridan foydalanish imkoniyatiga ega bo'ladilar. Kompaniya shuningdek, tibbiy xodimlar uchun muntazam treninglar va seminarlar tashkil etishni rejalashtirmoqda.",
      ru: "Компания Testline подписала договоры о стратегическом партнерстве с ведущими медицинскими учреждениями республики. В рамках этого партнерства компания предоставляет больницам современное диагностическое оборудование, техническое обслуживание и услуги по обучению специалистов. В рамках партнерского проекта подписаны договоры с 15 крупными больницами и медицинскими центрами. В результате этого партнерства пациенты получат доступ к более качественным и быстрым диагностическим услугам. Компания также планирует организовать регулярные тренинги и семинары для медицинского персонала.",
      en: "Testline has signed strategic partnership agreements with leading medical institutions of the republic. Within the framework of this partnership, the company provides hospitals with modern diagnostic equipment, technical service and specialist training services. As part of the partnership project, agreements have been signed with 15 major hospitals and medical centers. As a result of this partnership, patients will have access to higher quality and faster diagnostic services. The company also plans to organize regular trainings and seminars for medical staff."
    },
    date: "2024-01-05",
    readTime: "4 min read",
    category: {
      uz: "Hamkorlik",
      ru: "Партнерство",
      en: "Partnership"
    },
    mainImage: "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];

// Helper function to get all news items (including custom ones from localStorage if needed)
export function getAllNewsItems(): NewsItem[] {
  // In a real application, you might want to combine with items from localStorage
  // For now, just return the static items
  return newsItems;
}