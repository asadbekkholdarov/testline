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
  }
];

export const getGastrointestinalTestById = (id: string): GastrointestinalTest | undefined => {
  return gastrointestinalTests.find(test => test.id === id);
};

export const getAllGastrointestinalTests = (): GastrointestinalTest[] => {
  return gastrointestinalTests;
};