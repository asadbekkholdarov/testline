export interface InfectiousTest {
  id: string;
  name: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  specifications: {
    principle: string;
    format: string;
    specimen: string;
    readingTime: string;
    packSizes: string;
    storageTemperature: string;
    shelfLife: string;
    sensitivity: string;
    specificity: string;
    accuracy: string;
    cutOff: string;
  };
  image: string;
}

export const infectiousTests: InfectiousTest[] = [
  {
    id: "hbsag-rapid-test",
    name: "TESTLINE HBsAg Rapid Test Cassette",
    title: {
      uz: "TESTLINE HBsAg Tezkor Test Kassettasi",
      ru: "TESTLINE HBsAg Экспресс-тест Кассета",
      en: "TESTLINE HBsAg Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE HBsAg Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada Gepatit B yuzaki antigenini (HBsAg) sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE HBsAg Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения поверхностного антигена гепатита B (HBsAg) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE HBsAg Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Hepatitis B Surface Antigen (HBsAg) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-HBSAG-C25), 30 T / Box (Cat. No.: TL-HBSAG-C30)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HBsAg_casseta_1.jpg"
  },
  {
    id: "anti-hcv-rapid-test",
    name: "TESTLINE Anti-HCV Rapid Test Cassette",
    title: {
      uz: "TESTLINE Anti-HCV Tezkor Test Kassettasi",
      ru: "TESTLINE Anti-HCV Экспресс-тест Кассета",
      en: "TESTLINE Anti-HCV Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE Anti-HCV Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE Anti-HCV Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу гепатита C (HCV) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE Anti-HCV Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Hepatitis C Virus (HCV) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-HCV-C25), 30 T / Box (Cat. No.: TL-HCV-C30)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HCV_1.jpg"
  }
  ,
  {
    id: "hbsag-rapid-test-strip",
    name: "TESTLINE HBsAg Rapid Test Strip",
    title: {
      uz: "TESTLINE HBsAg Tezkor Test Chizig'i",
      ru: "TESTLINE HBsAg Экспресс-тест Полоска",
      en: "TESTLINE HBsAg Rapid Test Strip"
    },
    description: {
      uz: "TESTLINE HBsAg Tezkor Test Chizig'i - bu to'liq qon, serum yoki plazmada Gepatit B yuzaki antigenini (HBsAg) sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE HBsAg Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения поверхностного антигена гепатита B (HBsAg) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE HBsAg Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of Hepatitis B Surface Antigen (HBsAg) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Strip",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "50 T / Box (Cat. No.: TL-HBSAG-S50), 80 T / Box (Cat. No.: TL-HBSAG-S80), 100 T / Box (Cat. No.: TL-HBSAG-S100)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HBsAg_strip_1.jpg"
  },
  {
    id: "anti-hcv-rapid-test-strip",
    name: "TESTLINE Anti-HCV Rapid Test Strip",
    title: {
      uz: "TESTLINE Anti-HCV Tezkor Test Chizig'i",
      ru: "TESTLINE Anti-HCV Экспресс-тест Полоска",
      en: "TESTLINE Anti-HCV Rapid Test Strip"
    },
    description: {
      uz: "TESTLINE Anti-HCV Tezkor Test Chizig'i - bu to'liq qon, serum yoki plazmada Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE Anti-HCV Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу гепатита C (HCV) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE Anti-HCV Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Hepatitis C Virus (HCV) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Strip",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "50 T / Box (Cat. No.: TL-HCV-S50), 80 T / Box (Cat. No.: TL-HCV-S80), 100 T / Box (Cat. No.: TL-HCV-S100)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HCV_STRIP_1.jpg"
  },
  {
    id: "hiv-12-ab-rapid-test-cassette",
    name: "TESTLINE HIV 1/2 Ab Rapid Test Cassette",
    title: {
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Kassettasi",
      ru: "TESTLINE HIV 1/2 Ab Экспресс-тест Кассета",
      en: "TESTLINE HIV 1/2 Ab Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE HIV 1/2 Ab Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу иммунодефицита человека типов 1 и 2 (HIV 1/2) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE HIV 1/2 Ab Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Human Immunodeficiency Virus types 1 and 2 (HIV 1/2) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-HIV12-C25), 30 T / Box (Cat. No.: TL-HIV12-C30)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HIV1.2_1.jpg"
  }
  ,
  {
    id: "hiv-12-ab-rapid-test-strip",
    name: "TESTLINE HIV 1/2 Ab Rapid Test Strip",
    title: {
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Chizig'i",
      ru: "TESTLINE HIV 1/2 Ab Экспресс-тест Полоска",
      en: "TESTLINE HIV 1/2 Ab Rapid Test Strip"
    },
    description: {
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Chizig'i - bu to'liq qon, serum yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE HIV 1/2 Ab Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу иммунодефицита человека типов 1 и 2 (HIV 1/2) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE HIV 1/2 Ab Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Human Immunodeficiency Virus types 1 and 2 (HIV 1/2) in whole blood, serum, or plasma."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Ob'ektiv natijalar",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Простая операция (требуется минимальное обучение)",
        "Объективные результаты",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Simple operation (minimal training required)",
        "Objective results",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Strip",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "50 T / Box (Cat. No.: TL-HIV12-S50), 80 T / Box (Cat. No.: TL-HIV12-S80), 100 T / Box (Cat. No.: TL-HIV12-S100)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HIV1.2_1.jpg"
  },
  {
    id: "hiv-12-ab-p24-ag-4th-gen-cassette",
    name: "TESTLINE HIV 1/2 Ab + p24 Ag (4th Generation) Rapid Test Cassette",
    title: {
      uz: "TESTLINE HIV 1/2 Ab + p24 Ag (4-avlod) Tezkor Test Kassettasi",
      ru: "TESTLINE HIV 1/2 Ab + p24 Ag (4-го поколения) Экспресс-тест Кассета",
      en: "TESTLINE HIV 1/2 Ab + p24 Ag (4th Generation) Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE HIV 1/2 Ab + p24 Ag (4-avlod) Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlar va p24 antigenini sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu 4-avlod test antikorlar va p24 antigenini bir vaqtda aniqlab, HIV infeksiyasini ertaroq aniqlash imkonini beradi.",
      ru: "TESTLINE HIV 1/2 Ab + p24 Ag (4-го поколения) Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу иммунодефицита человека типов 1 и 2 (HIV 1/2) и антигена p24 в цельной крови, сыворотке или плазме. Этот тест 4-го поколения позволяет более раннее обнаружение ВИЧ-инфекции путем одновременного выявления как антител, так и антигена p24.",
      en: "The TESTLINE HIV 1/2 Ab + p24 Ag (4th Generation) Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Human Immunodeficiency Virus types 1 and 2 (HIV 1/2) and the p24 antigen in whole blood, serum, or plasma. This 4th generation test allows earlier detection of HIV infection by simultaneously identifying both antibodies and the p24 antigen."
    },
    features: {
      uz: [
        "Tez (15–20 daqiqa)",
        "Antikorlar (HIV 1/2) va p24 antigenini aniqlaydi",
        "Faqat antikorlarni aniqlaydigan testlarga nisbatan ertaroq aniqlash",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15–20 минут)",
        "Обнаруживает как антитела (HIV 1/2), так и антиген p24",
        "Более раннее обнаружение по сравнению с тестами только на антитела",
        "Простая операция (требуется минимальное обучение)",
        "Высокая точность"
      ],
      en: [
        "Fast (15–20 minutes)",
        "Detects both antibodies (HIV 1/2) and p24 antigen",
        "Earlier detection compared to antibody-only tests",
        "Simple operation (minimal training required)",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15–20 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-HIV4G-C25)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HIV1.2_1.jpg"
  },
  {
    id: "hav-igm-rapid-test-cassette",
    name: "TESTLINE HAV IgM Rapid Test Cassette",
    title: {
      uz: "TESTLINE HAV IgM Tezkor Test Kassettasi",
      ru: "TESTLINE HAV IgM Экспресс-тест Кассета",
      en: "TESTLINE HAV IgM Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE HAV IgM Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada Gepatit A virusi (HAV) ga qarshi IgM antikorlarini sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test o'tkir yoki yaqinda sodir bo'lgan HAV infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE HAV IgM Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител IgM к вирусу гепатита A (HAV) в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике острой или недавней HAV-инфекции.",
      en: "The TESTLINE HAV IgM Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of IgM antibodies to Hepatitis A Virus (HAV) in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of acute or recent HAV infection."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Erta infeksiya tashxisi uchun HAV IgM antikorlarini aniqlaydi",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Обнаруживает антитела HAV IgM для диагностики ранней инфекции",
        "Простая операция (требуется минимальное обучение)",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Detects HAV IgM antibodies for early infection diagnosis",
        "Simple operation (minimal training required)",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-HAVIGM-C25), 30 T / Box (Cat. No.: TL-HAVIGM-C30)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/HAV_1.jpg"
  },
  {
    id: "anti-tp-rapid-test-cassette",
    name: "TESTLINE Anti-TP Rapid Test Cassette",
    title: {
      uz: "TESTLINE Anti-TP Tezkor Test Kassettasi",
      ru: "TESTLINE Anti-TP Экспресс-тест Кассета",
      en: "TESTLINE Anti-TP Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE Anti-TP Tezkor Test Kassettasi - bu to'liq qon, serum yoki plazmada sifilis qo'zg'atuvchisi bo'lgan Treponema pallidum (TP) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test sifilis infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE Anti-TP Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к Treponema pallidum (TP), возбудителю сифилиса, в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике сифилитической инфекции.",
      en: "The TESTLINE Anti-TP Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Treponema pallidum (TP), the causative agent of syphilis, in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of syphilis infection."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Treponema pallidum ga qarshi antikorlarni aniqlaydi",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Обнаруживает антитела к Treponema pallidum",
        "Простая операция (требуется минимальное обучение)",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Detects antibodies to Treponema pallidum",
        "Simple operation (minimal training required)",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Cassette",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "25 T / Box (Cat. No.: TL-TP-C25), 30 T / Box (Cat. No.: TL-TP-C30)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/TP_1.jpg"
  },
  {
    id: "anti-tp-rapid-test-strip",
    name: "TESTLINE Anti-TP Rapid Test Strip",
    title: {
      uz: "TESTLINE Anti-TP Tezkor Test Chizig'i",
      ru: "TESTLINE Anti-TP Экспресс-тест Полоска",
      en: "TESTLINE Anti-TP Rapid Test Strip"
    },
    description: {
      uz: "TESTLINE Anti-TP Tezkor Test Chizig'i - bu to'liq qon, serum yoki plazmada sifilis qo'zg'atuvchisi bo'lgan Treponema pallidum (TP) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test sifilis infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE Anti-TP Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к Treponema pallidum (TP), возбудителю сифилиса, в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике сифилитической инфекции.",
      en: "The TESTLINE Anti-TP Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Treponema pallidum (TP), the causative agent of syphilis, in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of syphilis infection."
    },
    features: {
      uz: [
        "Tez (15 daqiqa)",
        "Treponema pallidum ga qarshi antikorlarni aniqlaydi",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (15 минут)",
        "Обнаруживает антитела к Treponema pallidum",
        "Простая операция (требуется минимальное обучение)",
        "Высокая точность"
      ],
      en: [
        "Fast (15 minutes)",
        "Detects antibodies to Treponema pallidum",
        "Simple operation (minimal training required)",
        "High accuracy"
      ]
    },
    specifications: {
      principle: "Chromatographic Immunoassay",
      format: "Strip",
      specimen: "Whole Blood / Serum / Plasma",
      readingTime: "15 minutes",
      packSizes: "50 T / Box (Cat. No.: TL-TP-S50), 80 T / Box (Cat. No.: TL-TP-S80), 100 T / Box (Cat. No.: TL-TP-S100)",
      storageTemperature: "2–30 °C",
      shelfLife: "2 years",
      sensitivity: "—",
      specificity: "—",
      accuracy: "—",
      cutOff: "—"
    },
    image: "/images/tests/TP_1.jpg"
  }
];

export const getInfectiousTestById = (id: string): InfectiousTest | undefined => {
  return infectiousTests.find(test => test.id === id);
};

export const getAllInfectiousTests = (): InfectiousTest[] => {
  return infectiousTests;
};