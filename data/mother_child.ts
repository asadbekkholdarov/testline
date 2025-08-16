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
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Kassettasi - bu siydikda inson xorion gonadotropinini (hCG) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, homiladorlikni erta aniqlashda yordam beradi. Kassetta formati professional foydalanish uchun qulay va aniq natijalar beradi.",
      ru: "TESTLINE hCG Экспресс-тест на беременность Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения хорионического гонадотропина человека (hCG) в моче для раннего выявления беременности. Формат кассеты удобен для профессионального использования и дает точные результаты.",
      en: "The TESTLINE hCG Pregnancy Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of human chorionic gonadotropin (hCG) in urine to aid in the early detection of pregnancy. The cassette format is convenient for professional use and provides accurate results."
    },
    features: {
      uz: [
        "3-5 daqiqada tez natijalar",
        "Professional foydalanish uchun kassetta formati",
        "Erta homiladorlikni aniqlash uchun yuqori sezgirlik",
        "Aniq va ishonchli natijalar",
        "Oson talqin qilish"
      ],
      ru: [
        "Быстрые результаты за 3-5 минут",
        "Формат кассеты для профессионального использования",
        "Высокая чувствительность для раннего выявления беременности",
        "Четкие и надежные результаты",
        "Легкая интерпретация"
      ],
      en: [
        "Fast results in 3–5 minutes",
        "Cassette format for professional use",
        "High sensitivity for early pregnancy detection",
        "Clear and reliable results",
        "Easy interpretation"
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
        uz: "25T, 30T",
        ru: "25T, 30T",
        en: "25T, 30T"
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
      uz: "TESTLINE LH Ovulyatsiya Tezkor Test - bu siydikda lyuteinlashtiruvchi gormonni (LH) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, ovulyatsiya vaqtini bashorat qilishda yordam beradi. Test ayollarning eng maqbul homiladorlik davrini aniqlashda yordam beradi.",
      ru: "TESTLINE LH Экспресс-тест на овуляцию - это быстрый хроматографический иммуноанализ для качественного обнаружения лютеинизирующего гормона (LH) в моче для прогнозирования времени овуляции. Тест помогает женщинам определить наиболее благоприятный период для зачатия.",
      en: "The TESTLINE LH Ovulation Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of luteinizing hormone (LH) in urine to predict the time of ovulation. The test helps women identify their most fertile period for conception."
    },
    features: {
      uz: [
        "5 daqiqada tez natijalar",
        "Ovulyatsiyani aniq bashorat qilish",
        "Oson foydalanish va talqin qilish",
        "Yuqori aniqlik",
        "Uy sharoitida foydalanish uchun mos"
      ],
      ru: [
        "Быстрые результаты за 5 минут",
        "Точное прогнозирование овуляции",
        "Простое использование и интерпретация",
        "Высокая точность",
        "Подходит для домашнего использования"
      ],
      en: [
        "Fast results in 5 minutes",
        "Accurate ovulation prediction",
        "Easy to use and interpret",
        "High accuracy",
        "Suitable for home use"
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
        uz: "5T, 10T, 20T",
        ru: "5T, 10T, 20T",
        en: "5T, 10T, 20T"
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
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      uz: "TESTLINE FSH Menopauza Tezkor Test - bu siydikda follikul stimulyatsiyalovchi gormonni (FSH) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, menopauza holatini aniqlashda yordam beradi. Test ayollarning reproduktiv holatini baholashda yordam beradi.",
      ru: "TESTLINE FSH Экспресс-тест на менопаузу - это быстрый хроматографический иммуноанализ для качественного обнаружения фолликулостимулирующего гормона (FSH) в моче для определения состояния менопаузы. Тест помогает оценить репродуктивный статус женщин.",
      en: "The TESTLINE FSH Menopause Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of follicle stimulating hormone (FSH) in urine to determine menopause status. The test helps assess women's reproductive status."
    },
    features: {
      uz: [
        "10 daqiqada tez natijalar",
        "Menopauza holatini aniqlash",
        "Oson foydalanish va talqin qilish",
        "Ishonchli natijalar",
        "Uy sharoitida foydalanish uchun mos"
      ],
      ru: [
        "Быстрые результаты за 10 минут",
        "Определение состояния менопаузы",
        "Простое использование и интерпретация",
        "Надежные результаты",
        "Подходит для домашнего использования"
      ],
      en: [
        "Fast results in 10 minutes",
        "Menopause status determination",
        "Easy to use and interpret",
        "Reliable results",
        "Suitable for home use"
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
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "prolactin-test",
    name: "TESTLINE Prolactin Rapid Test",
    title: {
      uz: "TESTLINE Prolaktin Tezkor Test",
      ru: "TESTLINE Экспресс-тест на пролактин",
      en: "TESTLINE Prolactin Rapid Test"
    },
    description: {
      uz: "TESTLINE Prolaktin Tezkor Test - bu qon serumi yoki plazmasida prolaktin gormonini sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, reproduktiv tizim buzilishlarini tashxislashda yordam beradi. Test ayollarning gormon muvozanatini baholashda muhim ahamiyatga ega.",
      ru: "TESTLINE Экспресс-тест на пролактин - это быстрый хроматографический иммуноанализ для качественного обнаружения гормона пролактина в сыворотке или плазме крови для диагностики нарушений репродуктивной системы. Тест имеет важное значение для оценки гормонального баланса у женщин.",
      en: "The TESTLINE Prolactin Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of prolactin hormone in blood serum or plasma to diagnose reproductive system disorders. The test is important for assessing hormonal balance in women."
    },
    features: {
      uz: [
        "15 daqiqada tez natijalar",
        "Prolaktin darajasini aniqlash",
        "Professional foydalanish uchun mo'ljallangan",
        "Yuqori aniqlik",
        "Reproduktiv salomatlikni baholash"
      ],
      ru: [
        "Быстрые результаты за 15 минут",
        "Определение уровня пролактина",
        "Предназначен для профессионального использования",
        "Высокая точность",
        "Оценка репродуктивного здоровья"
      ],
      en: [
        "Fast results in 15 minutes",
        "Prolactin level determination",
        "Designed for professional use",
        "High accuracy",
        "Reproductive health assessment"
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
        uz: "Serum / Plazma",
        ru: "Сыворотка / Плазма",
        en: "Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
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
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "estradiol-test",
    name: "TESTLINE Estradiol Rapid Test",
    title: {
      uz: "TESTLINE Estradiol Tezkor Test",
      ru: "TESTLINE Экспресс-тест на эстрадиол",
      en: "TESTLINE Estradiol Rapid Test"
    },
    description: {
      uz: "TESTLINE Estradiol Tezkor Test - bu qon serumi yoki plazmasida estradiol gormonini sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, ayollarning reproduktiv salomatligini baholashda yordam beradi. Test gormon darajasini tez va aniq aniqlash imkonini beradi.",
      ru: "TESTLINE Экспресс-тест на эстрадиол - это быстрый хроматографический иммуноанализ для качественного обнаружения гормона эстрадиола в сыворотке или плазме крови для оценки репродуктивного здоровья женщин. Тест позволяет быстро и точно определить уровень гормона.",
      en: "The TESTLINE Estradiol Rapid Test is a rapid chromatographic immunoassay for the qualitative detection of estradiol hormone in blood serum or plasma to assess women's reproductive health. The test allows for quick and accurate hormone level determination."
    },
    features: {
      uz: [
        "15 daqiqada tez natijalar",
        "Estradiol darajasini aniqlash",
        "Professional foydalanish uchun mo'ljallangan",
        "Yuqori sezgirlik",
        "Reproduktiv salomatlikni monitoring qilish"
      ],
      ru: [
        "Быстрые результаты за 15 минут",
        "Определение уровня эстрадиола",
        "Предназначен для профессионального использования",
        "Высокая чувствительность",
        "Мониторинг репродуктивного здоровья"
      ],
      en: [
        "Fast results in 15 minutes",
        "Estradiol level determination",
        "Designed for professional use",
        "High sensitivity",
        "Reproductive health monitoring"
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
        uz: "Serum / Plazma",
        ru: "Сыворотка / Плазма",
        en: "Serum / Plasma"
      },
      readingTime: {
        uz: "15 daqiqa",
        ru: "15 минут",
        en: "15 minutes"
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
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const getMaternalChildTestById = (id: string): MaternalChildTest | undefined => {
  return maternalChildTests.find(test => test.id === id);
};

export const getAllMaternalChildTests = (): MaternalChildTest[] => {
  return maternalChildTests;
};