export interface MaternalChildTest {
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

export const maternalChildTests: MaternalChildTest[] = [
  {
    id: "hcg-pregnancy-dipstick",
    name: "TESTLINE hCG Pregnancy Rapid Test Dipstick",
    title: {
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Dipstik",
      ru: "TESTLINE hCG Экспресс-тест на беременность Дипстик",
      en: "TESTLINE hCG Pregnancy Rapid Test Dipstick"
    },
    description: {
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Dipstik - bu siydikda inson xorion gonadotropinini (hCG) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, homiladorlikni erta aniqlashda yordam beradi. Test professional va uy sharoitida foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE hCG Экспресс-тест на беременность Дипстик - это быстрый хроматографический иммуноанализ для качественного обнаружения хорионического гонадотропина человека (hCG) в моче для раннего выявления беременности. Тест предназначен для профессионального использования и использования в домашних условиях.",
      en: "The TESTLINE hCG Pregnancy Rapid Test Dipstick is a rapid chromatographic immunoassay for the qualitative detection of human chorionic gonadotropin (hCG) in urine to aid in the early detection of pregnancy. The test is intended for professional and over-the-counter use."
    },
    features: {
      uz: [
        "3-5 daqiqada tez natijalar",
        "Oson foydalanish, botirib o'qish formati",
        "Erta homiladorlikni aniqlash uchun yuqori sezgirlik",
        "Aniq va ishonchli natijalar",
        "Professional va uy foydalanishi uchun mos"
      ],
      ru: [
        "Быстрые результаты за 3-5 минут",
        "Простое использование, формат погружения и чтения",
        "Высокая чувствительность для раннего выявления беременности",
        "Четкие и надежные результаты",
        "Подходит для профессионального и домашнего использования"
      ],
      en: [
        "Fast results in 3–5 minutes",
        "Easy to use, dip-and-read format",
        "High sensitivity for early pregnancy detection",
        "Clear and reliable results",
        "Suitable for professional and home use"
      ]
    },
    specifications: {
      principle: {
        uz: "Xromatografik immunoanaliz",
        ru: "Хроматографический иммуноанализ",
        en: "Chromatographic Immunoassay"
      },
      format: {
        uz: "Dipstik",
        ru: "Дипстик",
        en: "Dipstick"
      },
      specimen: {
        uz: "Siydik",
        ru: "Моча",
        en: "Urine"
      },
      readingTime: {
        uz: "3-5 daqiqa",
        ru: "3-5 минут",
        en: "3–5 minutes"
      },
      packSizes: {
        uz: "50T, 100T",
        ru: "50T, 100T",
        en: "50T, 100T"
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
    image: "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
 
];

export const getMaternalChildTestById = (id: string): MaternalChildTest | undefined => {
  return maternalChildTests.find(test => test.id === id);
};

export const getAllMaternalChildTests = (): MaternalChildTest[] => {
  return maternalChildTests;
};