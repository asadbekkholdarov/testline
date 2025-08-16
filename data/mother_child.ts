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
  {
    id: "hcg-pregnancy-cassette",
    name: "TESTLINE hCG Pregnancy Rapid Test Cassette",
    title: {
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Kassettasi",
      ru: "TESTLINE hCG Экспресс-тест на беременность Кассета",
      en: "TESTLINE hCG Pregnancy Rapid Test Cassette"
    },
    description: {
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Kassettasi - bu siydikda inson xorion gonadotropinini (hCG) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, homiladorlikni erta aniqlashda yordam beradi. Test professional va uy sharoitida foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE hCG Экспресс-тест на беременность Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения хорионического гонадотропина человека (hCG) в моче для раннего выявления беременности. Тест предназначен для профессионального использования и использования в домашних условиях.",
      en: "The TESTLINE hCG Pregnancy Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of human chorionic gonadotropin (hCG) in urine to aid in the early detection of pregnancy. The test is intended for professional and over-the-counter use."
    },
    features: {
      uz: [
        "3-5 daqiqada tez natijalar",
        "Oson foydalanish, kassetta formati",
        "Erta homiladorlikni aniqlash uchun yuqori sezgirlik",
        "Aniq va ishonchli natijalar",
        "Professional va uy foydalanishi uchun mos"
      ],
      ru: [
        "Быстрые результаты за 3-5 минут",
        "Простое использование, формат кассеты",
        "Высокая чувствительность для раннего выявления беременности",
        "Четкие и надежные результаты",
        "Подходит для профессионального и домашнего использования"
      ],
      en: [
        "Fast results in 3–5 minutes",
        "Easy to use, cassette format",
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
        uz: "Kassetta",
        ru: "Кассета",
        en: "Cassette"
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
  {
    id: "lh-ovulation-test",
    name: "TESTLINE LH Ovulation Rapid Test",
    title: {
      uz: "TESTLINE LH Ovulyatsiya Tezkor Test",
      ru: "TESTLINE LH Экспресс-тест на овуляцию",
      en: "TESTLINE LH Ovulation Rapid Test"
    },
    description: {
      uz: "TESTLINE LH Ovulyatsiya Tezkor Test - bu siydikda lyuteinlashtiruvchi gormonni (LH) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, ovulyatsiya vaqtini aniqlashda yordam beradi. Test reproduktiv salomatlikni kuzatish uchun mo'ljallangan.",
      ru: "TESTLINE LH Экспресс-тест на овуляцию - это быстрый хроматографический иммуноанализ для качественного обнаружения лютеинизирующего гормона (LH) в моче для определения времени овуляции. Тест предназначен для мониторинга репродуктивного здоровья.",
      en: "The TESTLINE LH Ovulation Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of luteinizing hormone (LH) in urine to aid in determining ovulation timing. The test is intended for reproductive health monitoring."
    },
    features: {
      uz: [
        "5 daqiqada tez natijalar",
        "Ovulyatsiya vaqtini aniq aniqlash",
        "Oson foydalanish va o'qish",
        "Yuqori aniqlik va ishonchlilik",
        "Reproduktiv rejalashtirish uchun ideal"
      ],
      ru: [
        "Быстрые результаты за 5 минут",
        "Точное определение времени овуляции",
        "Простое использование и чтение",
        "Высокая точность и надежность",
        "Идеально для планирования репродукции"
      ],
      en: [
        "Fast results in 5 minutes",
        "Accurate ovulation timing detection",
        "Easy to use and read",
        "High accuracy and reliability",
        "Ideal for reproductive planning"
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
        uz: "Siydik",
        ru: "Моча",
        en: "Urine"
      },
      readingTime: {
        uz: "5 daqiqa",
        ru: "5 минут",
        en: "5 minutes"
      },
      packSizes: {
        uz: "25T, 50T",
        ru: "25T, 50T",
        en: "25T, 50T"
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
  {
    id: "fsh-menopause-test",
    name: "TESTLINE FSH Menopause Rapid Test",
    title: {
      uz: "TESTLINE FSH Menopauza Tezkor Test",
      ru: "TESTLINE FSH Экспресс-тест на менопаузу",
      en: "TESTLINE FSH Menopause Rapid Test"
    },
    description: {
      uz: "TESTLINE FSH Menopauza Tezkor Test - bu siydikda follikul stimulyatsiyalovchi gormonni (FSH) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, menopauza holatini aniqlashda yordam beradi. Test ayollar reproduktiv salomatligini baholash uchun mo'ljallangan.",
      ru: "TESTLINE FSH Экспресс-тест на менопаузу - это быстрый хроматографический иммуноанализ для качественного обнаружения фолликулостимулирующего гормона (FSH) в моче для определения состояния менопаузы. Тест предназначен для оценки репродуктивного здоровья женщин.",
      en: "The TESTLINE FSH Menopause Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of follicle-stimulating hormone (FSH) in urine to aid in determining menopause status. The test is intended for women's reproductive health assessment."
    },
    features: {
      uz: [
        "10 daqiqada tez natijalar",
        "Menopauza holatini aniqlash",
        "Oson va qulay foydalanish",
        "Ishonchli va aniq natijalar",
        "Ayollar salomatligi uchun muhim"
      ],
      ru: [
        "Быстрые результаты за 10 минут",
        "Определение состояния менопаузы",
        "Простое и удобное использование",
        "Надежные и точные результаты",
        "Важно для женского здоровья"
      ],
      en: [
        "Fast results in 10 minutes",
        "Menopause status determination",
        "Simple and convenient use",
        "Reliable and accurate results",
        "Important for women's health"
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
        uz: "Siydik",
        ru: "Моча",
        en: "Urine"
      },
      readingTime: {
        uz: "10 daqiqa",
        ru: "10 минут",
        en: "10 minutes"
      },
      packSizes: {
        uz: "25T",
        ru: "25T",
        en: "25T"
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
  }
 
];

export const getMaternalChildTestById = (id: string): MaternalChildTest | undefined => {
  return maternalChildTests.find(test => test.id === id);
};

export const getAllMaternalChildTests = (): MaternalChildTest[] => {
  return maternalChildTests;
};