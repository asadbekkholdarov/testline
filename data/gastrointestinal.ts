export interface GastrointestinalTest {
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

export const gastrointestinalTests: GastrointestinalTest[] = [
  {
    id: "h-pylori-ag-fecal",
    name: "TESTLINE H. pylori Ag Rapid Test Cassette (Fecal)",
    title: {
      uz: "TESTLINE H. pylori Ag Tezkor Test Kasseta (Najas)",
      ru: "TESTLINE H. pylori Ag Экспресс-тест Кассета (Фекальный)",
      en: "TESTLINE H. pylori Ag Rapid Test Cassette (Fecal)"
    },
    description: {
      uz: "TESTLINE H. pylori Ag Tezkor Test Kasseta (Najas) - bu inson najas namunalarida Helicobacter pylori antigenini sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, oshqozon-ichak traktidagi H. pylori infeksiyasini diagnostikasida yordam berish maqsadida professional foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE H. pylori Ag Экспресс-тест Кассета (Фекальный) - это быстрый хроматографический иммуноанализ для качественного обнаружения антигена Helicobacter pylori в образцах кала человека. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике инфекции H. pylori в желудочно-кишечном тракте.",
      en: "The TESTLINE H. pylori Ag Rapid Test Cassette (Fecal) is a rapid chromatographic immunoassay for the qualitative detection of Helicobacter pylori antigen in human fecal specimens. This test is intended for professional use as an aid in the diagnosis of H. pylori infection in the gastrointestinal tract."
    },
    features: {
      uz: [
        "Tez (10-15 daqiqa)",
        "Najas namunalaridan bevosita Helicobacter pylori antigenini aniqlaydi",
        "Invaziv bo'lmagan namuna olish",
        "Oddiy operatsiya (minimal o'qitish talab qilinadi)",
        "Yuqori aniqlik"
      ],
      ru: [
        "Быстро (10-15 минут)",
        "Обнаруживает антиген Helicobacter pylori непосредственно из образцов кала",
        "Неинвазивный сбор образцов",
        "Простая операция (требуется минимальное обучение)",
        "Высокая точность"
      ],
      en: [
        "Fast (10–15 minutes)",
        "Detects Helicobacter pylori antigen directly from stool samples",
        "Non-invasive specimen collection",
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
        uz: "Kasseta",
        ru: "Кассета",
        en: "Cassette"
      },
      specimen: {
        uz: "Najas",
        ru: "Кал",
        en: "Feces"
      },
      readingTime: {
        uz: "10-15 daqiqa",
        ru: "10-15 минут",
        en: "10–15 minutes"
      },
      packSizes: {
        uz: "20 T / Quti (Cat. No.: TL-HPYLORIAG-C20), 25 T / Quti (Cat. No.: TL-HPYLORIAG-C25)",
        ru: "20 T / Коробка (Cat. No.: TL-HPYLORIAG-C20), 25 T / Коробка (Cat. No.: TL-HPYLORIAG-C25)",
        en: "20 T / Box (Cat. No.: TL-HPYLORIAG-C20), 25 T / Box (Cat. No.: TL-HPYLORIAG-C25)"
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
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
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
  }, 
  {
  "id": "h-pylori-ab-rapid-test-cassette",
  "name": "TESTLINE H. pylori Ab Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE H. pylori Ab Tezkor Test Kasseta",
    "ru": "TESTLINE H. pylori Ab Экспресс-тест Кассета",
    "en": "TESTLINE H. pylori Ab Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE H. pylori Ab Tezkor Test Kasseta - bu butun qon, zardob yoki plazmadagi Helicobacter pylori ga qarshi antitanachalarni sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test H. pylori infeksiyasini diagnostikasida yordam berish uchun professional foydalanishga mo'ljallangan.",
    "ru": "TESTLINE H. pylori Ab Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антител к Helicobacter pylori в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве вспомогательного средства в диагностике инфекции H. pylori.",
    "en": "The TESTLINE H. pylori Ab Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of antibodies to Helicobacter pylori in whole blood, serum, or plasma. This test is intended for professional use as an aid in the diagnosis of H. pylori infection."
  },
  "features": {
    "uz": [
      "Tez (15 daqiqa)",
      "Helicobacter pylori ga qarshi antitanachalarni aniqlaydi",
      "Oddiy operatsiya (minimal o'qitish talab etiladi)",
      "Yuqori aniqlik"
    ],
    "ru": [
      "Быстрый (15 минут)",
      "Обнаруживает антитела к Helicobacter pylori",
      "Простое использование (требуется минимальная подготовка)",
      "Высокая точность"
    ],
    "en": [
      "Fast (15 minutes)",
      "Detects antibodies to Helicobacter pylori",
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
      "uz": "Butun qon / Zardob / Plazma",
      "ru": "Цельная кровь / Сыворотка / Плазма",
      "en": "Whole Blood / Serum / Plasma"
    },
    "readingTime": {
      "uz": "15 daqiqa",
      "ru": "15 минут",
      "en": "15 minutes"
    },
    "packSizes": {
      "uz": "25 T / Quti (Kat. raqami: TL-HPYLORI-C25), 30 T / Quti (Kat. raqami: TL-HPYLORI-C30)",
      "ru": "25 Т / Коробка (Кат. №: TL-HPYLORI-C25), 30 Т / Коробка (Кат. №: TL-HPYLORI-C30)",
      "en": "25 T / Box (Cat. No.: TL-HPYLORI-C25), 30 T / Box (Cat. No.: TL-HPYLORI-C30)"
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
  "image": "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRlc3R8ZW58MHx8MHx8fDA%3D"
  }, 
   {
    "id": "giardia-lamblia-rapid-test-cassette",
    "name": "TESTLINE Giardia lamblia Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Giardia lamblia Tezkor Test Kasseta",
      "ru": "TESTLINE Giardia lamblia Экспресс-тест Кассета",
      "en": "TESTLINE Giardia lamblia Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Giardia lamblia Tezkor Test Kasseta - bu inson najas namunalarida Giardia lamblia antigenlarini sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. U giardioz diagnostikasiga yordam berishga mo'ljallangan.",
      "ru": "TESTLINE Giardia lamblia Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антигенов Giardia lamblia в образцах кала человека. Он предназначен для помощи в диагностике лямблиоза.",
      "en": "The TESTLINE Giardia lamblia Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Giardia lamblia antigens in human fecal specimens. It is intended to assist in the diagnosis of giardiasis."
    },
    "features": {
      "uz": [
        "10 daqiqa ichida tez natijalar",
        "Foydalanish oson, maxsus jihozlar talab qilinmaydi",
        "Yuqori sezgirlik va o'ziga xoslik",
        "Klinik va laboratoriya sharoitida foydalanish uchun mos"
      ],
      "ru": [
        "Быстрые результаты в течение 10 минут",
        "Прост в использовании, не требует специального оборудования",
        "Высокая чувствительность и специфичность",
        "Подходит для клинического и лабораторного использования"
      ],
      "en": [
        "Fast results within 10 minutes",
        "Easy to use, no special equipment required",
        "High sensitivity and specificity",
        "Suitable for clinical and laboratory use"
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
        "uz": "Najas",
        "ru": "Кал",
        "en": "Feces"
      },
      "readingTime": {
        "uz": "10 daqiqa",
        "ru": "10 минут",
        "en": "10 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 Tests"
      },
      "storageTemperature": {
        "uz": "2–30 °C",
        "ru": "2–30 °C",
        "en": "2–30 °C"
      },
      "shelfLife": {
        "uz": "24 oy",
        "ru": "24 месяца",
        "en": "24 months"
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
    "image": "https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb29kJTIwdGVzdHxlbnwwfHwwfHx8MA%3D%3D"
  },
   {
  "id": "clostridium-difficile-toxin-a-b-combo-rapid-test-cassette",
  "name": "TESTLINE Clostridium difficile Toxin A + Toxin B Combo Rapid Test Cassette",
  "title": {
    "uz": "TESTLINE Clostridium difficile A Toksini + B Toksini Kombinatsiyalangan Tezkor Test Kasseta",
    "ru": "TESTLINE Clostridium difficile Токсин A + Токсин B Комбинированный Экспресс-тест Кассета",
    "en": "TESTLINE Clostridium difficile Toxin A + Toxin B Combo Rapid Test Cassette"
  },
  "description": {
    "uz": "TESTLINE Clostridium difficile A Toksini + B Toksini Kombinatsiyalangan Tezkor Test Kasseta - bu inson najas namunalarida Clostridium difficile A va B toksinlarini sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. U Clostridium difficile infeksiyasini (CDI) diagnostikasida yordam berishga mo'ljallangan.",
    "ru": "TESTLINE Clostridium difficile Токсин A + Токсин B Комбинированный Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения токсинов A и B Clostridium difficile в образцах кала человека. Он предназначен для помощи в диагностике инфекции Clostridium difficile (CDI).",
    "en": "The TESTLINE Clostridium difficile Toxin A + Toxin B Combo Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Clostridium difficile toxins A and B in human fecal specimens. It is intended to assist in the diagnosis of Clostridium difficile infection (CDI)."
  },
  "features": {
    "uz": [
      "10 daqiqa ichida tez natijalar",
      "Foydalanish oson, maxsus jihozlar talab qilinmaydi",
      "Bir vaqtning o'zida ham A Toksinni, ham B Toksinni aniqlaydi",
      "Yuqori sezgirlik va o'ziga xoslik",
      "Klinik va laboratoriya sharoitida foydalanish uchun mos"
    ],
    "ru": [
      "Быстрые результаты в течение 10 минут",
      "Прост в использовании, не требует специального оборудования",
      "Одновременно обнаруживает как Токсин А, так и Токсин В",
      "Высокая чувствительность и специфичность",
      "Подходит для клинического и лабораторного использования"
    ],
    "en": [
      "Fast results within 10 minutes",
      "Easy to use, no special equipment required",
      "Detects both Toxin A and Toxin B simultaneously",
      "High sensitivity and specificity",
      "Suitable for clinical and laboratory use"
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
      "uz": "Najas",
      "ru": "Кал",
      "en": "Feces"
    },
    "readingTime": {
      "uz": "10 daqiqa",
      "ru": "10 минут",
      "en": "10 minutes"
    },
    "packSizes": {
      "uz": "20 T",
      "ru": "20 T",
      "en": "20 Tests"
    },
    "storageTemperature": {
      "uz": "2–30 °C",
      "ru": "2–30 °C",
      "en": "2–30 °C"
    },
    "shelfLife": {
      "uz": "24 oy",
      "ru": "24 месяца",
      "en": "24 months"
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
  "image": "https://plus.unsplash.com/premium_photo-1673354481077-d00e39ebd3d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1lZGljYWwlMjB0ZXN0fGVufDB8fDB8fHww"
}
];

export const getGastrointestinalTestById = (id: string): GastrointestinalTest | undefined => {
  return gastrointestinalTests.find(test => test.id === id);
};

export const getAllGastrointestinalTests = (): GastrointestinalTest[] => {
  return gastrointestinalTests;
};