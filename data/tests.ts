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
      uz: "HIV va Hepatit B/C ni bir vaqtda aniqlash uchun kombinatsiyalashgan test. Bu xromatografik immunoanaliz bo'lib, yuqori aniqlik va tezkor natija beradi. Skrining usuli sifatida ishlatiladi.",
      ru: "Комбинированный тест для одновременного обнаружения ВИЧ и гепатита B/C. Это хроматографический иммуноанализ, обеспечивающий высокую точность и быстрый результат. Используется как скрининговый метод.",
      en: "Combined test for simultaneous detection of HIV and Hepatitis B/C. This is a chromatographic immunoassay providing high accuracy and rapid results. Used as a screening method."
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
    name: "HAV IgM Test",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit A virusiga qarshi IgM antikorlarini sifatli aniqlash uchun tezkor test. Bu tez va ishonchli xromatografik immunoanaliz bo'lib, qon serumi, plazma yoki to'liq qonda HAV IgM antikorlarini aniqlaydi.",
      ru: "Экспресс-тест HAV IgM используется для качественного выявления антител к вирусу гепатита А в сыворотке, плазме или цельной крови человека. Это быстрый хроматографический иммуноанализ.",
      en: "HAV IgM Rapid Test is used for qualitative detection of antibodies to Hepatitis A virus in human serum, plasma or whole blood. This is a fast chromatographic immunoassay."
    },
    specifications: {
      sensitivity: "100%",
      specificity: "100%",
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
      uz: "Hepatit B - bu Hepatit B virusi (HBV) tomonidan kelib chiqadigan jigar viral infeksiyasi. HBsAg tezkor test inson qonida HBV yuzaki antigenini tez va qulay skrining qilish uchun mo'ljallangan. Ijobiy natija joriy infeksiya mavjudligini ko'rsatadi.",
      ru: "Гепатит B – это вирусная инфекция печени, вызываемая вирусом гепатита B (HBV). Экспресс-тест HBsAg предназначен для быстрого и удобного скрининга поверхностного антигена HBV в крови человека. Положительный результат указывает на наличие текущей инфекции.",
      en: "Hepatitis B is a viral liver infection caused by Hepatitis B virus (HBV). HBsAg Rapid Test is designed for quick and convenient screening of HBV surface antigen in human blood. A positive result indicates the presence of current infection."
    },
    specifications: {
      sensitivity: "100%",
      specificity: "99.80%",
      time: "15-30 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HBsAg_casseta_1.jpg", "/images/tests/HBsAg_casseta_2.jpg"]
  },
  {
    id: "hbsag-strip",
    name: "HBsAg Strip",
    category: "infectious-diseases",
    description: {
      uz: "Hepatit B yuzaki antigenini aniqlash uchun strip formati test. Oddiy va tezkor foydalanish uchun mo'ljallangan. Xromatografik immunologik analiz prinsipi asosida ishlaydi.",
      ru: "Тест в формате полоски для обнаружения поверхностного антигена гепатита B. Предназначен для простого и быстрого использования. Работает на принципе хроматографического иммунологического анализа.",
      en: "Strip format test for detecting Hepatitis B surface antigen. Designed for simple and rapid use. Works on the principle of chromatographic immunological analysis."
    },
    specifications: {
      sensitivity: "100%",
      specificity: "99.80%",
      time: "15-30 min",
      sampleType: "Serum/Plasma"
    },
    images: ["/images/tests/HBsAg_strip_1.jpg", "/images/tests/HBsAg_strip_2.jpg"]
  },
  {
    id: "hcv-test",
    name: "HCV Test",
    category: "infectious-diseases",
    description: {
      uz: "Anti-HCV tezkor test Hepatit C virusi (HCV) ga qarshi antikorlarni inson serumi, plazma yoki to'liq qonida sifatli aniqlash uchun mo'ljallangan. Bu tez va qulay xromatografik immunoanaliz bo'lib, virus antikorlarini bir vaqtda aniqlash imkonini beradi.",
      ru: "Экспресс-тест Anti-HCV предназначен для качественного определения антител к вирусу гепатита C (HCV) в сыворотке, плазме или цельной крови человека. Это быстрый и удобный хроматографический иммуноанализ, который позволяет одновременно выявить наличие антител к вирусу.",
      en: "Anti-HCV Rapid Test is designed for qualitative determination of antibodies to Hepatitis C virus (HCV) in human serum, plasma or whole blood. This is a fast and convenient chromatographic immunoassay that allows simultaneous detection of virus antibodies."
    },
    specifications: {
      sensitivity: "99.40%",
      specificity: "99.80%",
      time: "15-30 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HCV_1.jpg", "/images/tests/HCV_2.jpg"]
  },
  {
    id: "hcv-strip",
    name: "HCV Strip",
    category: "infectious-diseases",
    description: {
      uz: "Anti-HCV strip formati test Hepatit C virusi antikorlarini aniqlash uchun ishlatiladi. Xromatografik immunologik analiz prinsipi asosida ishlaydi. Oson foydalanish va tezkor natija beradi.",
      ru: "Anti-HCV тест в формате полоски используется для обнаружения антител к вирусу гепатита C. Работает на принципе хроматографического иммунологического анализа. Простое использование и быстрый результат.",
      en: "Anti-HCV strip format test is used for detecting antibodies to Hepatitis C virus. Works on the principle of chromatographic immunological analysis. Easy to use with rapid results."
    },
    specifications: {
      sensitivity: "99.40%",
      specificity: "99.80%",
      time: "15-30 min",
      sampleType: "Serum/Plasma"
    },
    images: ["/images/tests/HCV_STRIP_1.jpg", "/images/tests/HCV_STRIP_2.jpg"]
  },
  {
    id: "hiv-test",
    name: "HIV 1/2 Test",
    category: "infectious-diseases",
    description: {
      uz: "Anti-HIV 1/2 tezkor test - Inson immunonokislik virusi (HIV) ga qarshi antikorlarni aniqlash uchun ekspress-test. Bu test inson qonida (serum, plazma yoki to'liq qon) HIV-1 va HIV-2 ga qarshi antikorlarni sifatli aniqlash uchun ishlatiladi. Bu tez va ishonchli xromatografik immunoanaliz.",
      ru: "Anti-HIV 1/2 Rapid Test – Экспресс-тест на антитела к вирусу иммунодефицита человека (ВИЧ). Экспресс-тест Anti-HIV 1/2 используется для качественного определения антител к ВИЧ-1 и ВИЧ-2 в крови (сыворотке, плазме или цельной крови) человека. Это быстрый и надежный хроматографический иммуноанализ.",
      en: "Anti-HIV 1/2 Rapid Test – Rapid test for antibodies to Human Immunodeficiency Virus (HIV). The Anti-HIV 1/2 Rapid Test is used for qualitative determination of antibodies to HIV-1 and HIV-2 in human blood (serum, plasma or whole blood). This is a fast and reliable chromatographic immunoassay."
    },
    specifications: {
      sensitivity: "100%",
      specificity: "100%",
      time: "15-30 min",
      sampleType: "Serum/Plasma/Whole Blood"
    },
    images: ["/images/tests/HIV1.2_1.jpg", "/images/tests/HIV1.2_2.jpg"]
  },
  {
    id: "hp-ab-test",
    name: "H. Pylori AB Test",
    category: "gastrointestinal-fecal",
    description: {
      uz: "H.pylori Ab tezkor test - Helikobakter pilori antikorlariga test. Bu test inson qoni, serumi yoki plazmasida Helicobacter pylori (H.pylori) ga qarshi antikorlarni (IgG, IgM va IgA) sifatli aniqlash uchun mo'ljallangan. Bu lateral xromatografik immunoanaliz bo'lib, skrining usuli va H.pylori infeksiyasini tashxislashda yordamchi vosita sifatida ishlatiladi.",
      ru: "H.pylori Ab Экспресс-тест – тест на антитела к Helicobacter pylori. H.pylori Ab Экспресс-тест предназначен для качественного определения антител (IgG, IgM и IgA) к Helicobacter pylori (H.pylori) в крови, сыворотке или плазме человека. Это латеральный хроматографический иммуноанализ, используемый в качестве скринингового метода и вспомогательного средства в диагностике инфекции H.pylori.",
      en: "H.pylori Ab Rapid Test – test for antibodies to Helicobacter pylori. The H.pylori Ab Rapid Test is designed for qualitative determination of antibodies (IgG, IgM and IgA) to Helicobacter pylori (H.pylori) in human blood, serum or plasma. This is a lateral chromatographic immunoassay used as a screening method and auxiliary tool in diagnosing H.pylori infection."
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
      uz: "H.pylori Ag tezkor test inson najasida Helicobacter pylori (H.pylori) antigenlarini sifatli aniqlash uchun mo'ljallangan. Bu lateral xromatografik immunoanaliz bo'lib, skrining usuli va H.pylori infeksiyasini tashxislashda yordamchi vosita sifatida ishlatiladi.",
      ru: "H.pylori Ag Экспресс-тест предназначен для качественного выявления антигенов Helicobacter pylori (H.pylori) в кале человека. Это латеральный хроматографический иммуноанализ, используемый как скрининговый метод и вспомогательное средство в диагностике инфекции H.pylori.",
      en: "H.pylori Ag Rapid Test is designed for qualitative detection of Helicobacter pylori (H.pylori) antigens in human stool. This is a lateral chromatographic immunoassay used as a screening method and auxiliary tool in diagnosing H.pylori infection."
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
      uz: "Anti-TP (sifilis) tezkor test - sifilisni aniqlash uchun test. Anti-TP tezkor test inson to'liq qoni, serumi yoki plazmasida sifilisni sifatli aniqlash uchun ishlatiladi. Bu ishonchli xromatografik immunoanaliz bo'lib, tashxisning yuqori aniqligini ta'minlaydi.",
      ru: "Anti-TP (сифилис) Экспресс-тест – тест для выявления сифилиса. Экспресс-тест Anti-TP используется для качественного определения сифилиса в цельной крови, сыворотке или плазме человека. Это надежный хроматографический иммуноанализ, который обеспечивает высокую точность диагностики.",
      en: "Anti-TP (Syphilis) Rapid Test – test for syphilis detection. The Anti-TP Rapid Test is used for qualitative determination of syphilis in human whole blood, serum or plasma. This is a reliable chromatographic immunoassay that ensures high diagnostic accuracy."
    },
    specifications: {
      sensitivity: "100%",
      specificity: "99.7%",
      time: "15-30 min",
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