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
  id: "namangan-illegal-inspections",
  title: {
    uz: "Namanganda tadbirkorlarga nisbatan 17 ta holatda noqonuniy tekshiruv o‘tkazilganligi aniqlandi",
    ru: "В Намангане выявлено 17 случаев незаконных проверок в отношении предпринимателей",
    en: "17 Cases of Illegal Inspections Against Entrepreneurs Identified in Namangan"
  },
  excerpt: {
    uz: "Namanganda o‘tkazilgan monitoring davomida 17 ta noqonuniy tekshiruv va 100 dan ortiq tartib buzilishi aniqlandi.",
    ru: "В ходе мониторинга в Намангане выявлено 17 незаконных проверок и более 100 нарушений порядка.",
    en: "Monitoring in Namangan revealed 17 illegal inspections and over 100 procedural violations."
  },
  content: {
    uz: "Biznes-ombudsman devoniga 2024-yilning 11 oyi davomida namanganlik tadbirkorlardan 300 ga yaqin murojaat kelib tushgan. Bu haqda viloyatda o‘tkazilgan press-tur davomida maʼlum qilindi, deya xabar beradi “Daryo” muxbiri Azizbek Abduvaliyev. Ushbu murojaatlar yuzasidan tadbirkorlarning huquqlarini himoya qilish bo‘yicha 150 ta taʼsir chorasi qo‘llangan. Tekshiruvlar qonuniyligi yuzasidan o‘tkazilgan monitoring doirasida nazorat organlari tomonidan 17 ta noqonuniy tekshiruv o‘tkazilganligi hamda 100 dan ortiq holatda tekshirishlar tartibi buzilganligi aniqlangan.\n\nQon tahlillari asosida turli kasalliklarni aniqlaydigan ekspress testlar yaqingacha mamlakatga chetdan olib kelingan. Biznes-ombudsman ko‘magi bilan mazkur loyiha Namanganda yo‘lga qo‘yilib, hozirda ushbu tibbiyot mahsulotlari viloyatda ishlab chiqarilmoqda. “Nam biotest” korxonasi joriy yili ekspress testlar yetkazib berish bo‘yicha 20 milliard so‘mlik shartnoma imzoladi. Shuningdek, ularni qo‘shni davlatlar va Rossiyada ro‘yxatdan o‘tkazish bo‘yicha dastlabki qadamlar qo‘yildi. Zargarlik o‘quv yurti va mahalliy zargarlar kooperatsiyasini tashkil etish uchun viloyatdagi texnikumlardan birining bino-inshootlaridan foydalanish yuzasidan taklif kiritilishi natijasida mazkur ko‘chmas mulk Namanganda ushbu yo‘nalishdagi yirik korxonalardan biri — “Gavhar” kompaniyaga berildi. Zargarlik buyumlari va esdalik sovg‘alari ishlab chiqarayotgan korxonada shu nom ostidagi brend yaratilib, Italiya, Turkiya va Germaniyaning zamonaviy texnologiyalari qo‘llanmoqda.",
    ru: "В течение 11 месяцев 2024 года в аппарат Бизнес-омбудсмена поступило около 300 обращений от предпринимателей Намангана. Об этом было сообщено во время пресс-тура в области, передает корреспондент «Дарё» Азизбек Абдувалиев. По этим обращениям было принято 150 мер по защите прав предпринимателей. В ходе мониторинга законности проверок установлено, что контролирующими органами проведено 17 незаконных проверок, а также в более чем 100 случаях были нарушены процедуры проверок.\n\nЭкспресс-тесты, определяющие различные заболевания на основе анализа крови, до недавнего времени завозились в страну из-за рубежа. При содействии Бизнес-омбудсмена этот проект был запущен в Намангане, и сейчас данная медицинская продукция производится в области. Компания «Nam biotest» в текущем году подписала контракт на поставку экспресс-тестов на сумму 20 миллиардов сумов. Кроме того, сделаны первые шаги по их регистрации в соседних странах и России. Для организации ювелирного учебного заведения и кооперации местных ювелиров было внесено предложение использовать здания и сооружения одного из техникумов области. В результате эта недвижимость была передана одной из крупных компаний региона в данной сфере — компании «Гавхар». На предприятии, производящем ювелирные изделия и сувениры, создан бренд под тем же названием, а также используются современные технологии Италии, Турции и Германии.",
    en: "During the first 11 months of 2024, the Office of the Business Ombudsman received about 300 appeals from entrepreneurs in Namangan. This was announced during a press tour in the region, reports “Daryo” correspondent Azizbek Abduvaliyev. As a result of these appeals, 150 measures were taken to protect the rights of entrepreneurs. Monitoring of the legality of inspections revealed that regulatory bodies conducted 17 illegal inspections and violated inspection procedures in more than 100 cases.\n\nRapid tests that detect various diseases based on blood analysis were, until recently, imported into the country from abroad. With the support of the Business Ombudsman, this project was launched in Namangan, and these medical products are now produced in the region. The company “Nam biotest” signed a 20 billion soum contract this year for the supply of rapid tests. In addition, initial steps have been taken to register them in neighboring countries and Russia. To establish a jewelry school and a cooperation network of local jewelers, a proposal was made to use the facilities of one of the region’s technical colleges. As a result, this property was transferred to one of the region’s major companies in this field — “Gavhar” company. The enterprise, which produces jewelry and souvenirs, has created a brand under the same name and uses modern technologies from Italy, Turkey, and Germany."
  },
  date: "2024-01-15",
  readTime: "6 min read",
  category: {
    uz: "Mahalliy yangiliklar",
    ru: "Местные новости",
    en: "Local News"
  },
  mainImage: "/news_blogs/first.jpg",
  images: [
    "/news_blogs/first.jpg",
    "/news_blogs/second.jpg",
    "/news_blogs/third.jpg"
  ]
}
,
  {
    id: "namangan-bio-test-2024-exhibition",
  title: {
    uz: "2024-yilda Namangan Bio Test korxonasi yirik ko‘rgazmada",
    ru: "В 2024 году компания Namangan Bio Test на крупной выставке",
    en: "Namangan Bio Test at a Major Exhibition in 2024"
  },
  excerpt: {
    uz: "Namangan Bio Test korxonasi 2024-yilda o‘tkazilgan yirik sanoat va innovatsiya ko‘rgazmasida faol ishtirok etdi. Ko‘rgazma davomida korxona o‘zining zamonaviy laboratoriya uskunalari, sifat va xavfsizlik standartlariga mos ishlab chiqarish jarayonlari, hamda yangi texnologiyalarga asoslangan mahsulotlarini keng jamoatchilik e’tiboriga havola qildi. Tashrif buyurgan mutaxassislar va hamkorlar bilan tajriba almashish, yangi hamkorlik shartnomalarini tuzish, va bozor imkoniyatlarini yanada kengaytirish bo‘yicha muhim kelishuvlar amalga oshirildi. Ushbu ishtirok korxonaning nafaqat mintaqaviy, balki xalqaro miqyosda ham o‘z mavqeini mustahkamlashiga xizmat qildi.",
    ru: "Компания Namangan Bio Test в 2024 году активно участвовала в крупной промышленной и инновационной выставке. На мероприятии компания представила современное лабораторное оборудование, производственные процессы, соответствующие стандартам качества и безопасности, а также продукцию, основанную на новых технологиях. Были проведены встречи с экспертами и партнёрами, заключены новые соглашения о сотрудничестве и расширении рыночных возможностей. Участие в выставке способствовало укреплению позиций компании не только на региональном, но и на международном уровне.",
    en: "In 2024, Namangan Bio Test actively participated in a major industrial and innovation exhibition. During the event, the company showcased modern laboratory equipment, production processes meeting quality and safety standards, and products based on new technologies. Meetings with experts and partners led to new cooperation agreements and expanded market opportunities. This participation strengthened the company’s position not only regionally but also internationally."
  },
  content: {
    uz: "Namangan Bio Test korxonasi 2024-yilda o‘tkazilgan yirik sanoat va innovatsiya ko‘rgazmasida faol ishtirok etdi. Ko‘rgazma davomida korxona o‘zining zamonaviy laboratoriya uskunalari, sifat va xavfsizlik standartlariga mos ishlab chiqarish jarayonlari, hamda yangi texnologiyalarga asoslangan mahsulotlarini keng jamoatchilik e’tiboriga havola qildi. Tashrif buyurgan mutaxassislar va hamkorlar bilan tajriba almashish, yangi hamkorlik shartnomalarini tuzish, va bozor imkoniyatlarini yanada kengaytirish bo‘yicha muhim kelishuvlar amalga oshirildi. Ushbu ishtirok korxonaning nafaqat mintaqaviy, balki xalqaro miqyosda ham o‘z mavqeini mustahkamlashiga xizmat qildi.",
    ru: "Компания Namangan Bio Test в 2024 году приняла активное участие в крупной промышленной и инновационной выставке. В ходе мероприятия были представлены современные лабораторные установки, производственные процессы, соответствующие международным стандартам качества и безопасности, а также инновационные продукты компании. В рамках выставки состоялись встречи с потенциальными партнёрами и специалистами отрасли, были подписаны новые соглашения о сотрудничестве, направленные на расширение рыночных возможностей. Это участие укрепило позиции компании как на региональном, так и на международном уровне.",
    en: "Namangan Bio Test took an active part in a major industrial and innovation exhibition in 2024. During the event, the company presented modern laboratory equipment, production processes in compliance with international quality and safety standards, and innovative products. The exhibition provided an opportunity to meet with industry experts and potential partners, resulting in new cooperation agreements aimed at expanding market opportunities. This participation has strengthened the company’s position both regionally and internationally."
  },
  date: "2024-01-05",
  readTime: "4 min read",
  category: {
    uz: "Ko‘rgazmalar",
    ru: "Выставки",
    en: "Exhibitions"
  },
    mainImage: "/news_blogs/exibition_1.jpg",
    images: [
      "/news_blogs/exibition_1.jpg","/news_blogs/exibition_2.jpg","/news_blogs/exibition_3.jpg","/news_blogs/exibition_4.jpg", "/news_blogs/exibition_5.jpg"
    ]
  }
];

// Helper function to get all news items (including custom ones from localStorage if needed)
export function getAllNewsItems(): NewsItem[] {
  // In a real application, you might want to combine with items from localStorage
  // For now, just return the static items
  return newsItems;
}