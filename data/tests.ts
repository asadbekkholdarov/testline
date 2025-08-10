export interface Test {
  id: string;
  name: string;
  category: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  specifications: {
    sensitivity?: string;
    specificity?: string;
    time: string;
    sampleType: string;
  };
  images: string[];
}

export const tests: Test[] = [
  {
    id: "combo-test",
    name: "COMBO Test",
    category: "infectious-diseases",
    description: {
      uz: "HIV va Hepatit B/C ni bir vaqtda aniqlash uchun kombinatsiyalashgan test. Yuqori aniqlik va tezkor natija beradi.",
      ru: "Комбинированный тест для одновременного обнаружения ВИЧ и гепатита B/C. Обеспечивает высокую точность и быстрый результат.",
      en: "Combined test for simultaneous detection of HIV and Hepatitis B/C. Provides high accuracy and rapid results."
    },
    specifications: {
      sensitivity: "99.5%",
      specificity: "99.8%",
      time: "15-20 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/COMBO_test.jpg"]
  },
  {
    id: "hav-test",
    name: "HAV Test",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit A virusiga qarshi antikorlarni aniqlash uchun test. Hepatit A infeksiyasini tashxislashda ishlatiladi.",
      ru: "Тест для обнаружения антител к вирусу гепатита А. Используется для диагностики инфекции гепатита А.",
      en: "Test for detecting antibodies to Hepatitis A virus. Used for diagnosing Hepatitis A infection."
    },
    specifications: {
      sensitivity: "98.2%",
      specificity: "99.1%",
      time: "15 min",
      sampleType: "Serum/Plasma"
    },
    images: ["/images/tests/HAV_1.jpg", "/images/tests/HAV_2.jpg"]
  },
  {
    id: "hbsag-cassette",
    name: "HBsAg Cassette",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit B yuzaki antigenini aniqlash uchun kasseta formati test. Hepatit B infeksiyasini erta aniqlashda ishlatiladi.",
      ru: "Тест в формате кассеты для обнаружения поверхностного антигена гепатита B. Используется для раннего выявления инфекции гепатита B.",
      en: "Cassette format test for detecting Hepatitis B surface antigen. Used for early detection of Hepatitis B infection."
    },
    specifications: {
      sensitivity: "99.0%",
      specificity: "99.5%",
      time: "15 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HBsAg_casseta_1.jpg", "/images/tests/HBsAg_casseta_2.jpg"]
  },
  {
    id: "hbsag-strip",
    name: "HBsAg Strip",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit B yuzaki antigenini aniqlash uchun strip formati test. Oddiy va tezkor foydalanish uchun mo'ljallangan.",
      ru: "Тест в формате полоски для обнаружения поверхностного антигена гепатита B. Предназначен для простого и быстрого использования.",
      en: "Strip format test for detecting Hepatitis B surface antigen. Designed for simple and rapid use."
    },
    specifications: {
      sensitivity: "98.8%",
      specificity: "99.2%",
      time: "15 min",
      sampleType: "Serum/Plasma"
    },
    images: ["/images/tests/HBsAg_strip_1.jpg", "/images/tests/HBsAg_strip_2.jpg"]
  },
  {
    id: "hcv-test",
    name: "HCV Test",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit C virusiga qarshi antikorlarni aniqlash uchun test. Hepatit C infeksiyasini tashxislashda ishlatiladi.",
      ru: "Тест для обнаружения антител к вирусу гепатита C. Используется для диагностики инфекции гепатита C.",
      en: "Test for detecting antibodies to Hepatitis C virus. Used for diagnosing Hepatitis C infection."
    },
    specifications: {
      sensitivity: "99.2%",
      specificity: "99.6%",
      time: "15 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HCV_1.jpg", "/images/tests/HCV_2.jpg"]
  },
  {
    id: "hcv-strip",
    name: "HCV Strip",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit C virusiga qarshi antikorlarni aniqlash uchun strip formati test. Oson foydalanish va tezkor natija.",
      ru: "Тест в формате полоски для обнаружения антител к вирусу гепатита C. Простое использование и быстрый результат.",
      en: "Strip format test for detecting antibodies to Hepatitis C virus. Easy to use with rapid results."
    },
    specifications: {
      sensitivity: "98.9%",
      specificity: "99.3%",
      time: "15 min",
      sampleType: "Serum/Plasma"
    },
    images: ["/images/tests/HCV_STRIP_1.jpg", "/images/tests/HCV_STRIP_2.jpg"]
  },
  {
    id: "hiv-test",
    name: "HIV 1/2 Test",
    category: "infectious-diseases",
    description: {
      uz: "HIV 1 va HIV 2 ga qarshi antikorlarni aniqlash uchun test. AIDS virusini erta tashxislashda ishlatiladi.",
      ru: "Тест для обнаружения антител к ВИЧ 1 и ВИЧ 2. Используется для ранней диагностики вируса СПИДа.",
      en: "Test for detecting antibodies to HIV 1 and HIV 2. Used for early diagnosis of AIDS virus."
    },
    specifications: {
      sensitivity: "99.8%",
      specificity: "99.9%",
      time: "15-20 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HIV1.2_1.jpg", "/images/tests/HIV1.2_2.jpg"]
  },
  {
    id: "hp-ab-test",
    name: "H. Pylori AB Test",
    category: "gastrointestinal-fecal",
    description: {
      uz: "Helikobakter pilori bakteriyasiga qarshi antikorlarni aniqlash uchun test. Oshqozon yarasi va gastritni tashxislashda yordam beradi.",
      ru: "Тест для обнаружения антител к бактерии Хеликобактер пилори. Помогает в диагностике язвы желудка и гастрита.",
      en: "Test for detecting antibodies to Helicobacter pylori bacteria. Helps in diagnosing stomach ulcers and gastritis."
    },
    specifications: {
      sensitivity: "96.5%",
      specificity: "97.8%",
      time: "10 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HP_AB_1.jpg", "/images/tests/HP_AB_2.jpg"]
  },
  {
    id: "hp-ag-test",
    name: "H. Pylori AG Test",
    category: "gastrointestinal-fecal",
    description: {
      uz: "Helikobakter pilori bakteriyasining antigenini aniqlash uchun test. Faol infeksiyani tashxislashda ishlatiladi.",
      ru: "Тест для обнаружения антигена бактерии Хеликобактер пилори. Используется для диагностики активной инфекции.",
      en: "Test for detecting Helicobacter pylori bacteria antigen. Used for diagnosing active infection."
    },
    specifications: {
      sensitivity: "95.2%",
      specificity: "96.8%",
      time: "10 min",
      sampleType: "Stool"
    },
    images: ["/images/tests/HP_AG_1.jpg", "/images/tests/HP_AG_2.jpg"]
  },
  {
    id: "tp-test",
    name: "TP Test (Syphilis)",
    category: "infectious-diseases",
    description: {
      uz: "Sifilis (Treponema pallidum) infeksiyasini aniqlash uchun test. Jinsiy yo'l bilan yuqadigan kasalliklarni tashxislashda ishlatiladi.",
      ru: "Тест для обнаружения инфекции сифилиса (Treponema pallidum). Используется для диагностики заболеваний, передающихся половым путем.",
      en: "Test for detecting Syphilis (Treponema pallidum) infection. Used for diagnosing sexually transmitted diseases."
    },
    specifications: {
      sensitivity: "98.5%",
      specificity: "99.2%",
      time: "15 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/TP_1.jpg", "/images/tests/TP_2.jpg"]
  }
];

export const getTestsByCategory = (category: string) => {
  return tests.filter(test => test.category === category);
};

export const getAllTests = () => {
  return tests;
};