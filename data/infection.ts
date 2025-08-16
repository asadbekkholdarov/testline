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
    principle: {
      uz: string;
      ru: string;
      en: string;
    };
    format: {
      uz: string;
      ru: string;
      en: string;
    };
    specimen: {
      uz: string;
      ru: string;
      en: string;
    };
    readingTime: {
      uz: string;
      ru: string;
      en: string;
    };
    packSizes: {
      uz: string;
      ru: string;
      en: string;
    };
    storageTemperature: {
      uz: string;
      ru: string;
      en: string;
    };
    shelfLife: {
      uz: string;
      ru: string;
      en: string;
    };
    sensitivity: {
      uz: string;
      ru: string;
      en: string;
    };
    specificity: {
      uz: string;
      ru: string;
      en: string;
    };
    accuracy: {
      uz: string;
      ru: string;
      en: string;
    };
    cutOff: {
      uz: string;
      ru: string;
      en: string;
    };
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
      uz: "TESTLINE HBsAg Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit B yuzaki antigenini (HBsAg) sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Kassetta",
        ru: "Кассета",
        en: "Cassette"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "25 T / Quti, 30 T / Quti",
        ru: "25 Т / Коробка, 30 Т / Коробка",
        en: "25 T / Box , 30 T / Box "
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE Anti-HCV Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Kassetta",
        ru: "Кассета",
        en: "Cassette"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "25 T / Quti, 30 T / Quti",
        ru: "25 Т / Коробка, 30 Т / Коробка",
        en: "25 T / Box, 30 T / Box"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE HBsAg Tezkor Test Chizig'i - bu to'liq qon, zardob yoki plazmada Gepatit B yuzaki antigenini (HBsAg) sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Strip",
        ru: "Полоска",
        en: "Strip"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "50 T / Quti, 80 T / Quti, 100 T / Quti,",
        ru: "50 Т / Коробка, 80 Т / Коробка, 100 Т / Коробка ",
        en: "50 T / Box, 80 T / Box, 100 T / Box,"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE Anti-HCV Tezkor Test Chizig'i - bu to'liq qon, zardob yoki plazmada Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Strip",
        ru: "Полоска",
        en: "Strip"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "50 T / Quti, 80 T / Quti, 100 T / Quti",
        ru: "50 Т / Коробка, 80 Т / Коробка, 100 Т / Коробка",
        en: "50 T / Box, 80 T / Box, 100 T / Box"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Kassetta",
        ru: "Кассета",
        en: "Cassette"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "25 T / Quti, 30 T / Quti",
        ru: "25 Т / Коробка, 30 Т / Коробка",
        en: "25 T / Box, 30 T / Box"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE HIV 1/2 Ab Tezkor Test Chizig'i - bu to'liq qon, zardob yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz.",
      ru: "TESTLINE HIV 1/2 Ab Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу иммунодефицита человека типов 1 и 2 (HIV 1/2) в цельной крови, сыворотке или плазме.",
      en: "The TESTLINE HIV 1/2 Ab Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Human Immunodeficiency Virus types 1 and 2 (HIV 1/2) in whole blood, , or plasma."
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Chiziq",
        ru: "Полоска",
        en: "Strip"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
      },
      packSizes: {
        uz: "50 T / Quti, 80 T / Quti, 100 T / Quti)",
        ru: "50 Т / Коробка, 80 Т / Коробка, 100 Т / Коробка)",
        en: "50 T / Box, 80 T / Box, 100 T / Box)"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
      uz: "TESTLINE HIV 1/2 Ab + p24 Ag (4-avlod) Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlar va p24 antigenini sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu 4-avlod test antikorlar va p24 antigenini bir vaqtda aniqlab, HIV infeksiyasini ertaroq aniqlash imkonini beradi.",
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
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Kassetta",
        ru: "Кассета",
        en: "Cassette"
      },
      specimen: {
        uz: "To'liq qon / Zardob / Plazma",
        ru: "Цельная кровь / Сыворотка / Плазма",
        en: "Whole Blood / Serum / Plasma"
      },
      readingTime: {
        uz: "15–20 daqiqa",
        ru: "15–20 минут",
        en: "15–20 minutes"
      },
      packSizes: {
        uz: "25 T / Quti",
        ru: "25 Т / Коробка",
        en: "25 T / Box"
      },
      storageTemperature: {
        uz: "2–30 °C",
        ru: "2–30 °C",
        en: "2–30 °C"
      },
      shelfLife: {
        uz: "2 yil",
        ru: "2 года",
        en: "2 years"
      },
      sensitivity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      specificity: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      accuracy: {
        uz: "—",
        ru: "—",
        en: "—"
      },
      cutOff: {
        uz: "—",
        ru: "—",
        en: "—"
      }
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
    uz: "TESTLINE HAV IgM Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit A virusi (HAV) ga qarshi IgM antikorlarini sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test o'tkir yoki yaqinda sodir bo'lgan HAV infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
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
    principle: {
      uz: "Xromatografik immunoanaliz",
      ru: "Хроматографический иммуноанализ",
      en: "Chromatographic Immunoassay"
    },
    format: {
      uz: "Kassetta",
      ru: "Кассета",
      en: "Cassette"
    },
    specimen: {
      uz: "To'liq qon / Zardob / Plazma",
      ru: "Цельная кровь / Сыворотка / Плазма",
      en: "Whole Blood / Serum / Plasma"
    },
    readingTime: {
      uz: "15 daqiqa",
      ru: "15 минут",
      en: "15 minutes"
    },
    packSizes: {
      uz: "25 T / Quti, 30 T / Quti",
      ru: "25 Т / Коробка, 30 Т / Коробка",
      en: "25 T / Box, 30 T / Box"
    },
    storageTemperature: {
      uz: "2–30 °C",
      ru: "2–30 °C",
      en: "2–30 °C"
    },
    shelfLife: {
      uz: "2 yil",
      ru: "2 года",
      en: "2 years"
    },
    sensitivity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    specificity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    accuracy: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    cutOff: {
      uz: "—",
      ru: "—",
      en: "—"
    }
  },
  image: "/images/tests/HAV_1.jpg"
}
,
  {
  id: "anti-tp-rapid-test-cassette",
  name: "TESTLINE Anti-TP Rapid Test Cassette",
  title: {
    uz: "TESTLINE Anti-TP Tezkor Test Kassettasi",
    ru: "TESTLINE Anti-TP Экспресс-тест Кассета",
    en: "TESTLINE Anti-TP Rapid Test Cassette"
  },
  description: {
    uz: "TESTLINE Anti-TP Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada sifilis qo'zg'atuvchisi bo'lgan Treponema pallidum (TP) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test sifilis infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
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
    principle: {
      uz: "Xromatografik immunoanaliz",
      ru: "Хроматографический иммуноанализ",
      en: "Chromatographic Immunoassay"
    },
    format: {
      uz: "Kassetta",
      ru: "Кассета",
      en: "Cassette"
    },
    specimen: {
      uz: "To'liq qon / Zardob / Plazma",
      ru: "Цельная кровь / Сыворотка / Плазма",
      en: "Whole Blood / Serum / Plasma"
    },
    readingTime: {
      uz: "15 daqiqa",
      ru: "15 минут",
      en: "15 minutes"
    },
    packSizes: {
      uz: "25 T / Quti, 30 T / Quti",
      ru: "25 Т / Коробка, 30 Т / Коробка",
      en: "25 T / Box, 30 T / Box (Cat. No.: TL-TP-C30)"
    },
    storageTemperature: {
      uz: "2–30 °C",
      ru: "2–30 °C",
      en: "2–30 °C"
    },
    shelfLife: {
      uz: "2 yil",
      ru: "2 года",
      en: "2 years"
    },
    sensitivity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    specificity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    accuracy: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    cutOff: {
      uz: "—",
      ru: "—",
      en: "—"
    }
  },
  image: "/images/tests/TP_1.jpg"
}
,
{
  id: "anti-tp-rapid-test-strip",
  name: "TESTLINE Anti-TP Rapid Test Strip",
  title: {
    uz: "TESTLINE Anti-TP Tezkor Test Chizig'i",
    ru: "TESTLINE Anti-TP Экспресс-тест Полоска",
    en: "TESTLINE Anti-TP Rapid Test Strip"
  },
  description: {
    uz: "TESTLINE Anti-TP Tezkor Test Chizig'i - bu to'liq qon, zardob yoki plazmada sifilis qo'zg'atuvchisi bo'lgan Treponema pallidum (TP) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test sifilis infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
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
    principle: {
      uz: "Xromatografik immunoanaliz",
      ru: "Хроматографический иммуноанализ",
      en: "Chromatographic Immunoassay"
    },
    format: {
      uz: "Chiziq",
      ru: "Полоска",
      en: "Strip"
    },
    specimen: {
      uz: "To'liq qon / Zardob / Plazma",
      ru: "Цельная кровь / Сыворотка / Плазма",
      en: "Whole Blood / Serum / Plasma"
    },
    readingTime: {
      uz: "15 daqiqa",
      ru: "15 минут",
      en: "15 minutes"
    },
    packSizes: {
      uz: "50 T / Quti, 80 T / Quti, 100 T / Quti)",
      ru: "50 Т / Коробка, 80 Т / Коробка, 100 Т / Коробка)",
      en: "50 T / Box, 80 T / Box, 100 T / Box)"
    },
    storageTemperature: {
      uz: "2–30 °C",
      ru: "2–30 °C",
      en: "2–30 °C"
    },
    shelfLife: {
      uz: "2 yil",
      ru: "2 года",
      en: "2 years"
    },
    sensitivity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    specificity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    accuracy: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    cutOff: {
      uz: "—",
      ru: "—",
      en: "—"
    }
  },
  image: "/images/tests/TP_1.jpg"
}

  ,
{
  id: "h-pylori-ab-rapid-test-strip",
  name: "TESTLINE H. pylori Ab Rapid Test Strip",
  title: {
    uz: "TESTLINE H. pylori Ab Tezkor Test Chizig'i",
    ru: "TESTLINE H. pylori Ab Экспресс-тест Полоска",
    en: "TESTLINE H. pylori Ab Rapid Test Strip"
  },
  description: {
    uz: "TESTLINE H. pylori Ab Tezkor Test Chizig'i - bu to'liq qon, zardob yoki plazmada Helicobacter pylori ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test H. pylori infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
    ru: "TESTLINE H. pylori Ab Экспресс-тест Полоска - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к Helicobacter pylori в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике H. pylori инфекции.",
    en: "The TESTLINE H. pylori Ab Rapid Test Strip is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Helicobacter pylori in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of H. pylori infection."
  },
  features: {
    uz: [
      "Tez (15 daqiqa)",
      "Helicobacter pylori ga qarshi antikorlarni aniqlaydi",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    ru: [
      "Быстро (15 минут)",
      "Обнаруживает антитела к Helicobacter pylori",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    en: [
      "Fast (15 minutes)",
      "Detects antibodies to Helicobacter pylori",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  specifications: {
    principle: {
      uz: "Xromatografik immunoanaliz",
      ru: "Хроматографический иммуноанализ",
      en: "Chromatographic Immunoassay"
    },
    format: {
      uz: "Chiziq",
      ru: "Полоска",
      en: "Strip"
    },
    specimen: {
      uz: "To'liq qon / Zardob / Plazma",
      ru: "Цельная кровь / Сыворотка / Плазма",
      en: "Whole Blood / Serum / Plasma"
    },
    readingTime: {
      uz: "15 daqiqa",
      ru: "15 минут",
      en: "15 minutes"
    },
    packSizes: {
      uz: "50 T / Quti, 80 T / Quti, 100 T / Quti)",
      ru: "50 Т / Коробка, 80 Т / Коробка (Cat. No.: TL-HPYLORI-S80), 100 Т / Коробка)",
      en: "50 T / Box, 80 T / Box, 100 T / Box)"
    },
    storageTemperature: {
      uz: "2–30 °C",
      ru: "2–30 °C",
      en: "2–30 °C"
    },
    shelfLife: {
      uz: "2 yil",
      ru: "2 года",
      en: "2 years"
    },
    sensitivity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    specificity: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    accuracy: {
      uz: "—",
      ru: "—",
      en: "—"
    },
    cutOff: {
      uz: "—",
      ru: "—",
      en: "—"
    }
  },
  image: "/images/tests/HP_AB_1.jpg"
}
,
{
  "id": "hbv-5in1-rapid-test-cassette",
  "name": "TESTLINE HBV 5-in-1 Hepatitis B Virus Markers Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE HBV 5-in-1 Gepatit B Virus Markerlari Tezkor Test Kassettasi",
    "ru": "TESTLINE HBV 5-в-1 Маркеры вируса гепатита B Экспресс-тест Кассета",
    "en": "TESTLINE HBV 5-in-1 Hepatitis B Virus Markers Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE HBV 5-in-1 Gepatit B Virus Markerlari Tezkor Test Kassettasi - bu inson zardobi yoki plazmasida beshta Gepatit B virus markeri - HBsAg, HBsAb, HBeAg, HBeAb va HBcAb ni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu multipleks test Gepatit B infeksiyasi va immunitet holatini tashxislash va kuzatishda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
    "ru": "TESTLINE HBV 5-в-1 Маркеры вируса гепатита B Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения пяти маркеров вируса гепатита B - HBsAg, HBsAb, HBeAg, HBeAb и HBcAb - в сыворотке или плазме человека. Этот мультиплексный тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике и мониторинге инфекции гепатита B и статуса иммунитета.",
    "en": "The TESTLINE HBV 5-in-1 Hepatitis B Virus Markers Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of five Hepatitis B virus markers — HBsAg, HBsAb, HBeAg, HBeAb, and HBcAb — in human serum or plasma. This multiplex test is intended for professional use as an aid in the diagnosis and monitoring of Hepatitis B infection and immunity status."
  },
  "features": {
    "uz": [
      "Tez (15–20 daqiqa)",
      "5 ta HBV markerini bir vaqtda aniqlash",
      "Bitta testda keng qamrovli skrining",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстро (15–20 минут)",
      "Одновременное обнаружение 5 маркеров HBV",
      "Комплексный скрининг в одном тесте",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15–20 minutes)",
      "Simultaneous detection of 5 HBV markers",
      "Comprehensive screening in one test",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "Zardob / Plazma",
      "ru": "Сыворотка / Плазма",
      "en": "Serum / Plasma"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "20 T / Quti",
      "ru": "20 Т / Коробка",
      "en": "20 T / Box"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/HBsAg_casseta_1.jpg"
},
{
  "id": "hbsag-hcv-combo-rapid-test-cassette",
  "name": "TESTLINE HBsAg / HCV Combo Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE HBsAg / HCV Kombo Tezkor Test Kassettasi",
    "ru": "TESTLINE HBsAg / HCV Комбо Экспресс-тест Кассета",
    "en": "TESTLINE HBsAg / HCV Combo Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE HBsAg / HCV Kombo Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit B yuzaki antigenini (HBsAg) va Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu ikki tomonlama test Gepatit B va Gepatit C infeksiyalarini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
    "ru": "TESTLINE HBsAg / HCV Комбо Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения поверхностного антигена гепатита B (HBsAg) и антител к вирусу гепатита C (HCV) в цельной крови, сыворотке или плазме. Этот двойной тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике инфекций гепатита B и гепатита C.",
    "en": "The TESTLINE HBsAg / HCV Combo Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Hepatitis B Surface Antigen (HBsAg) and antibodies to Hepatitis C Virus (HCV) in whole blood, serum, or plasma. This dual test is intended for professional use as an aid in the diagnosis of Hepatitis B and Hepatitis C infections."
  },
  "features": {
    "uz": [
      "Tez (15–20 daqiqa)",
      "HBsAg va Anti-HCV antikorlarini bir vaqtda aniqlash",
      "Bitta namunadan ikkita natija",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстро (15–20 минут)",
      "Одновременное обнаружение HBsAg и антител Anti-HCV",
      "Два результата из одного образца",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15–20 minutes)",
      "Simultaneous detection of HBsAg and Anti-HCV antibodies",
      "Two results from one specimen",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "To'liq qon / Zardob / Plazma",
      "ru": "Цельная кровь / Сыворотка / Плазма",
      "en": "Whole Blood / Serum / Plasma"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/COMBO_test.jpg"
},
{
  "id": "hiv-12-oral-fluid-rapid-test",
  "name": "TESTLINE HIV 1/2 Rapid Test (Oral Fluid)",
  "title": {
    "uz": "TESTLINE HIV 1/2 Tezkor Test (Og'iz suyuqligi)",
    "ru": "TESTLINE HIV 1/2 Экспресс-тест (Ротовая жидкость)",
    "en": "TESTLINE HIV 1/2 Rapid Test (Oral Fluid)"
  },
  "description": {
    "uz": "TESTLINE HIV 1/2 Tezkor Test (Og'iz suyuqligi) - bu inson og'iz suyuqligi namunalarida Inson immunonokislik virusi 1 va 2 turlari (HIV 1/2) ga qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test oddiy, invaziv bo'lmagan namuna olish usuli yordamida HIV infeksiyasini tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
    "ru": "TESTLINE HIV 1/2 Экспресс-тест (Ротовая жидкость) - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к вирусу иммунодефицита человека типов 1 и 2 (HIV 1/2) в образцах ротовой жидкости человека. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике ВИЧ-инфекции с использованием простого, неинвазивного метода сбора образцов.",
    "en": "The TESTLINE HIV 1/2 Rapid Test (Oral Fluid) is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Human Immunodeficiency Virus types 1 and 2 (HIV 1/2) in human oral fluid specimens. This test is intended for professional use as an aid in the diagnosis of HIV infection using a simple, non-invasive sample collection method."
  },
  "features": {
    "uz": [
      "Tez (15–20 daqiqa)",
      "Invaziv bo'lmagan og'iz suyuqligi olish",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстро (15–20 минут)",
      "Неинвазивный сбор ротовой жидкости",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15–20 minutes)",
      "Non-invasive oral fluid collection",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "Og'iz suyuqligi/zardob",
      "ru": "Ротовая жидкость",
      "en": "Oral Fluid"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/HIV1.2_1.jpg"
},
{
  "id": "hbsag-hcv-tri-line-rapid-test-cassette",
  "name": "TESTLINE HBsAg / HCV Tri-line Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE HBsAg / HCV Uch-chiziqli Tezkor Test Kassettasi",
    "ru": "TESTLINE HBsAg / HCV Трёхлинейный Экспресс-тест Кассета",
    "en": "TESTLINE HBsAg / HCV Tri-line Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE HBsAg / HCV Uch-chiziqli Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit B yuzaki antigenini (HBsAg) va Gepatit C virusiga (HCV) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Uch-chiziqli format HBsAg va Anti-HCV uchun alohida natija chiziqlarini ko'rsatadi, bu bitta namunadan aniq talqin qilish imkonini beradi.",
    "ru": "TESTLINE HBsAg / HCV Трёхлинейный Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения поверхностного антигена гепатита B (HBsAg) и антител к вирусу гепатита C (HCV) в цельной крови, сыворотке или плазме. Трёхлинейный формат отображает отдельные линии результатов для HBsAg и Anti-HCV, обеспечивая четкую интерпретацию из одного образца.",
    "en": "The TESTLINE HBsAg / HCV Tri-line Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Hepatitis B Surface Antigen (HBsAg) and antibodies to Hepatitis C Virus (HCV) in whole blood, serum, or plasma. The tri-line format displays individual result lines for HBsAg and Anti-HCV, enabling clear interpretation from a single specimen."
  },
  "features": {
    "uz": [
      "Tez (15–20 daqiqa)",
      "HBsAg va Anti-HCV uchun alohida natijalar uchun uch-chiziqli format",
      "Bitta namunadan ikkita natija",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстро (15–20 минут)",
      "Трёхлинейный формат для отдельных результатов HBsAg и Anti-HCV",
      "Два результата из одного образца",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15–20 minutes)",
      "Tri-line format for separate HBsAg and Anti-HCV results",
      "Two results from one specimen",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "To'liq qon / Zardob / Plazma",
      "ru": "Цельная кровь / Сыворотка / Плазма",
      "en": "Whole Blood / Serum / Plasma"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/COMBO_test.jpg"
},
{
  "id": "hbsab-rapid-test-cassette",
  "name": "TESTLINE HBsAb Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE HBsAb Tezkor Test Kassettasi",
    "ru": "TESTLINE HBsAb Экспресс-тест Кассета",
    "en": "TESTLINE HBsAb Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE HBsAb Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Gepatit B yuzaki antigeniga (HBsAb) qarshi antikorlarni sifatli aniqlash uchun tezkor xromatografik immunoanaliz. Ushbu test Gepatit B virusiga (HBV) qarshi immunitetni aniqlashda yordam berish uchun professional foydalanish uchun mo'ljallangan, xoh emlash yoki o'tmishdagi infeksiyadan tuzalish natijasida bo'lsin.",
    "ru": "TESTLINE HBsAb Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к поверхностному антигену гепатита B (HBsAb) в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в определении иммунитета к вирусу гепатита B (HBV), будь то от вакцинации или выздоровления от прошлой инфекции.",
    "en": "The TESTLINE HBsAb Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Hepatitis B surface antigen (HBsAb) in whole blood, serum, or plasma. This test is intended for professional use as an aid in determining immunity to Hepatitis B virus (HBV), whether from vaccination or recovery from past infection."
  },
  "features": {
    "uz": [
      "Tez (15–20 daqiqa)",
      "HBV immunitetini ko'rsatuvchi antikorlarni aniqlaydi",
      "Emlashdan keyingi yoki infeksiyadan keyingi test uchun mos",
      "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстро (15–20 минут)",
      "Обнаруживает антитела, указывающие на иммунитет к HBV",
      "Подходит для тестирования после вакцинации или после инфекции",
      "Простая операция (требуется минимальное обучение)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15–20 minutes)",
      "Detects antibodies indicating HBV immunity",
      "Suitable for post-vaccination or post-infection testing",
      "Simple operation (minimal training required)",
      "High accuracy"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "To'liq qon / Zardob / Plazma",
      "ru": "Цельная кровь / Сыворотка / Плазма",
      "en": "Whole Blood / Serum / Plasma"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/HBsAg_casseta_1.jpg"
},
{
  "id": "human-brucella-igm-igg-rapid-test-cassette",
  "name": "TESTLINE Human Brucella IgM/IgG Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE Inson Brucella IgM/IgG Tezkor Test Kassettasi",
    "ru": "TESTLINE Человеческая Бруцелла IgM/IgG Экспресс-тест Кассета",
    "en": "TESTLINE Human Brucella IgM/IgG Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE Inson Brucella IgM/IgG Tezkor Test Kassettasi - bu to'liq qon, zardob yoki plazmada Brucella turlariga qarshi IgM va IgG antikorlarini sifatli aniqlash va farqlash uchun tezkor xromatografik immunoanaliz. Ushbu test brucellozni tashxislashda yordam berish uchun professional foydalanish uchun mo'ljallangan.",
    "ru": "TESTLINE Человеческая Бруцелла IgM/IgG Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения и дифференциации антител IgM и IgG к видам Brucella в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике бруцеллёза.",
    "en": "The TESTLINE Human Brucella IgM/IgG Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection and differentiation of IgM and IgG antibodies to Brucella species in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of brucellosis."
  },
  "features": {
    "uz": [
      "15–20 daqiqada tez natijalar",
      "IgM va IgG antikorlarini aniqlaydi",
      "Oddiy protsedura (minimal o'qitish talab qilinadi)",
      "O'tkir va surunkali infeksiya baholash uchun mos",
      "Yuqori aniqlik va ishonchlilik"
    ],
    "ru": [
      "Быстрые результаты за 15–20 минут",
      "Обнаруживает как антитела IgM, так и IgG",
      "Простая процедура (требуется минимальное обучение)",
      "Подходит для оценки как острой, так и хронической инфекции",
      "Высокая точность и надежность"
    ],
    "en": [
      "Fast results in 15–20 minutes",
      "Detects both IgM and IgG antibodies",
      "Simple procedure (minimal training required)",
      "Suitable for both acute and chronic infection assessment",
      "High accuracy and reliability"
    ]
  },
  "specifications": {
    "principle": {
      "uz": "Xromatografik immunoanaliz",
      "ru": "Хроматографический иммуноанализ",
      "en": "Chromatographic Immunoassay"
    },
    "format": {
      "uz": "Kasseta",
      "ru": "Кассета",
      "en": "Cassette"
    },
    "specimen": {
      "uz": "To'liq qon / Zardob / Plazma",
      "ru": "Цельная кровь / Сыворотка / Плазма",
      "en": "Whole Blood / Serum / Plasma"
    },
    "readingTime": {
      "uz": "15–20 daqiqa",
      "ru": "15–20 минут",
      "en": "15–20 minutes"
    },
    "packSizes": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "2 yil",
      "ru": "2 года",
      "en": "2 years"
    },
    "sensitivity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "specificity": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "accuracy": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    },
    "cutOff": {
      "uz": "—",
      "ru": "—",
      "en": "—"
    }
  },
  "image": "/images/tests/HBsAg_casseta_1.jpg"
}
];

export const getInfectiousTestById = (id: string): InfectiousTest | undefined => {
  return infectiousTests.find(test => test.id === id);
};

export const getAllInfectiousTests = (): InfectiousTest[] => {
  return infectiousTests;
};