
export interface MetabalicTestInterface {
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


export const metobalicTests: MetabalicTestInterface[] = [
  {
    "id": "troponin-i-rapid-test-cassette",
    "name": "TESTLINE Troponin I Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Troponin I Tezkor Test Kasseta",
      "ru": "TESTLINE Troponin I Экспресс-тест Кассета",
      "en": "TESTLINE Troponin I Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Troponin I Tezkor Test Kasseta - bu butun qon, zardob yoki plazma namunalarida yurak Troponin I (cTnI) ni sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test miokard infarkti (MI) diagnostikasiga yordam berishga mo'ljallangan.",
      "ru": "TESTLINE Troponin I Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения сердечного тропонина I (cTnI) в образцах цельной крови, сыворотки или плазмы. Этот тест предназначен для помощи в диагностике инфаркта миокарда (ИМ).",
      "en": "The TESTLINE Troponin I Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of cardiac Troponin I (cTnI) in whole blood, serum, or plasma samples. This test is intended to aid in the diagnosis of myocardial infarction (MI)."
    },
    "features": {
      "uz": [
        "15 daqiqa ichida natijalar",
        "Foydalanish oson, maxsus jihozlar talab qilinmaydi",
        "cTnI uchun yuqori sezgirlik va o'ziga xoslik",
        "Favqulodda, klinik va laboratoriya sharoitida foydalanish uchun mos"
      ],
      "ru": [
        "Результаты в течение 15 минут",
        "Прост в использовании, не требует специального оборудования",
        "Высокая чувствительность и специфичность для cTnI",
        "Подходит для экстренного, клинического и лабораторного использования"
      ],
      "en": [
        "Results within 15 minutes",
        "Easy to use, no special equipment required",
        "High sensitivity and specificity for cTnI",
        "Suitable for emergency, clinical, and laboratory use"
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
    "image": "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRlc3R8ZW58MHx8MHx8fDA%3D"
  }
]

export const getMetobalictestinalTestById = (id: string): MetabalicTestInterface | undefined => {
  return metobalicTests.find(test => test.id === id);
};

export const getAllMetobalictestinalTests = (): MetabalicTestInterface[] => {
  return metobalicTests;
};
