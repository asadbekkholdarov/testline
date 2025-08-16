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
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Dipstiki",
      ru: "TESTLINE hCG Экспресс-тест на беременность Дипстик",
      en: "TESTLINE hCG Pregnancy Rapid Test Dipstick"
    },
    description: {
      uz: "TESTLINE hCG Homiladorlik Tezkor Test Dipstiki - bu siydikda inson xorion gonadotropinini (hCG) sifatli aniqlash uchun tezkor xromatografik immunoanaliz bo'lib, homiladorlikni erta aniqlashda yordam beradi. Test professional va uy sharoitida foydalanish uchun mo'ljallangan.",
      ru: "TESTLINE hCG Экспресс-тест на беременность Дипстик - это быстрый хроматографический иммуноанализ для качественного обнаружения хорионического гонадотропина человека (hCG) в моче для раннего выявления беременности. Тест предназначен для профессионального использования и использования в домашних условиях.",
      en: "The TESTLINE hCG Pregnancy Rapid Test Dipstick is a rapid chromatographic immunoassay for the qualitative detection of human chorionic gonadotropin (hCG) in urine to aid in the early detection of pregnancy. The test is intended for professional and over-the-counter use."
    },
    features: {
      uz: [
        "3-5 daqiqada tezkor natijalar",
        "Oson foydalanish, botirib o'qish formati",
        "Erta homiladorlikni aniqlash uchun yuqori sezuvchanlik",
        "Aniq va ishonchli natijalar",
        "Professional va uy sharoitida foydalanish uchun mos"
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
    "id": "fsh-rapid-test-cassette",
    "name": "TESTLINE FSH Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE FSH Tezkor Test Kasseta",
      "ru": "TESTLINE FSH Экспресс-тест Кассета",
      "en": "TESTLINE FSH Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE FSH Tezkor Test Kasseta - bu tuxumdon faoliyati va menopauza holatini baholashga yordam berish uchun zardob, plazma yoki siydik namunalarida follikulni rag'batlantiruvchi gormonni (FSH) sifatli aniqlash uchun tezkor xromatografik immunoanalizdir.",
      "ru": "TESTLINE FSH Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения фолликулостимулирующего гормона (ФСГ) в образцах сыворотки, плазмы или мочи для помощи в оценке функции яичников и статуса менопаузы.",
      "en": "The TESTLINE FSH Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of follicle-stimulating hormone (FSH) in serum, plasma, or urine samples to aid in the evaluation of ovarian function and menopause status."
    },
    "features": {
      "uz": [
        "10 daqiqa ichida tez natijalar",
        "Foydalanish oson, maxsus jihozlar talab qilinmaydi",
        "Yuqori aniqlik va ishonchlilik",
        "Klinik va uy sharoitida foydalanish uchun mos"
      ],
      "ru": [
        "Быстрые результаты в течение 10 минут",
        "Прост в использовании, не требует специального оборудования",
        "Высокая точность и надежность",
        "Подходит для клинического и домашнего использования"
      ],
      "en": [
        "Fast results within 10 minutes",
        "Easy to use, no special equipment required",
        "High accuracy and reliability",
        "Suitable for clinical and home use"
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
        "uz": "Zardob / Plazma / Siydik",
        "ru": "Сыворотка / Плазма / Моча",
        "en": "Serum / Plasma / Urine"
      },
      "readingTime": {
        "uz": "10 daqiqa",
        "ru": "10 минут",
        "en": "10 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 T"
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
    "image": "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  
  {
    "id": "toxo-igg-igm-test-cassette",
    "name": "TESTLINE Toxo IgG/IgM Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Toxo IgG/IgM Tezkor Test Kasseta",
      "ru": "TESTLINE Toxo IgG/IgM Экспресс-тест Кассета",
      "en": "TESTLINE Toxo IgG/IgM Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Toxo IgG/IgM Tezkor Test Kasseta - bu butun qon, zardob yoki plazmadagi Toxoplasma gondii ga qarshi IgG va IgM antitanachalarini sifatli aniqlash va farqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test o'tkir yoki o'tmishdagi toksoplazmozni diagnostikasida yordam berish va immun holatni baholash, ayniqsa homilador ayollar va immuniteti zaiflashgan bemorlarda professional in vitro diagnostika maqsadida mo'ljallangan.",
      "ru": "TESTLINE Toxo IgG/IgM Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения и дифференциации антител IgG и IgM к Toxoplasma gondii в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве in vitro диагностики для помощи в диагностике острого или прошлого токсоплазмоза и для оценки иммунного статуса, особенно у беременных женщин и пациентов с ослабленным иммунитетом.",
      "en": "The TESTLINE Toxo IgG/IgM Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection and differentiation of IgG and IgM antibodies to Toxoplasma gondii in whole blood, serum, or plasma. This test is intended for professional in vitro diagnostic use to aid in the diagnosis of acute or past toxoplasmosis and to assess immune status, particularly in pregnant women and immunocompromised patients."
    },
    "features": {
      "uz": [
        "IgG va IgM antitanachalarini aniqlaydi",
        "Yaqinda o'tgan infeksiyadan o'tmishdagi infeksiyani farqlaydi",
        "10–15 daqiqada oson foydalanish va natijalar",
        "Yuqori sezgirlik va o'ziga xoslik",
        "Butun qon, zardob yoki plazma namunalari uchun mos"
      ],
      "ru": [
        "Обнаруживает антитела как IgG, так и IgM",
        "Дифференцирует недавнюю инфекцию от прошлой",
        "Простота использования с результатами за 10–15 минут",
        "Высокая чувствительность и специфичность",
        "Подходит для образцов цельной крови, сыворотки или плазмы"
      ],
      "en": [
        "Detects both IgG and IgM antibodies",
        "Differentiates recent from past infection",
        "Easy to use with results in 10–15 minutes",
        "High sensitivity and specificity",
        "Suitable for whole blood, serum, or plasma specimens"
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
        "uz": "WB/S/P",
        "ru": "ЦК/С/П",
        "en": "WB/S/P"
      },
      "readingTime": {
        "uz": "10–15 daqiqa",
        "ru": "10–15 минут",
        "en": "10–15 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 T"
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
    "image": "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    "id": "chlamydia-gonorrhea-test-cassette",
    "name": "TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Chlamydia/Gonorrhea Tezkor Test Kasseta",
      "ru": "TESTLINE Chlamydia/Gonorrhea Экспресс-тест Кассета",
      "en": "TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Chlamydia/Gonorrhea Tezkor Test Kasseta - bu ayol bachadon bo'yni surtmasi, erkak siydik chiqarish kanalidan surtma yoki siydik namunalarida Chlamydia trachomatis va Neisseria gonorrhoeae antigenlarini sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test C. trachomatis va N. gonorrhoeae infeksiyalarini diagnostikasida yordam berish uchun professional in vitro diagnostika maqsadida mo'ljallangan.",
      "ru": "TESTLINE Chlamydia/Gonorrhea Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антигенов Chlamydia trachomatis и Neisseria gonorrhoeae в мазках из шейки матки у женщин, мазках из уретры у мужчин или образцах мочи. Этот тест предназначен для профессионального использования в качестве in vitro диагностики для помощи в диагностике инфекций C. trachomatis и N. gonorrhoeae.",
      "en": "The TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Chlamydia trachomatis and Neisseria gonorrhoeae antigens in female cervical swab, male urethral swab, or urine specimens. This test is intended for professional in vitro diagnostic use to aid in the diagnosis of C. trachomatis and N. gonorrhoeae infections."
    },
    "features": {
      "uz": [
        "Bitta testda ham C. trachomatis, ham N. gonorrhoeae antigenlarini aniqlaydi",
        "Surtma va siydik namunalari uchun mos",
        "Natijalar 15 daqiqada chiqadi",
        "Bajarish oson, maxsus jihozlar talab qilinmaydi",
        "Yuqori sezgirlik va o'ziga xoslik"
      ],
      "ru": [
        "Обнаруживает антигены C. trachomatis и N. gonorrhoeae в одном тесте",
        "Подходит для мазков и образцов мочи",
        "Результаты за 15 минут",
        "Прост в использовании, не требует специального оборудования",
        "Высокая чувствительность и специфичность"
      ],
      "en": [
        "Detects both C. trachomatis and N. gonorrhoeae antigens in a single test",
        "Suitable for swab and urine specimens",
        "Results in 15 minutes",
        "Simple to perform, no specialized equipment required",
        "High sensitivity and specificity"
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
        "uz": "Surtma/Siydik",
        "ru": "Мазок/Моча",
        "en": "Swab/Urine"
      },
      "readingTime": {
        "uz": "15 daqiqa",
        "ru": "15 минут",
        "en": "15 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 T"
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
    "image": "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  }

 ,{
    "id": "toxo-igg-igm-test-cassette",
    "name": "TESTLINE Toxo IgG/IgM Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Toxo IgG/IgM Tezkor Test Kasseta",
      "ru": "TESTLINE Toxo IgG/IgM Экспресс-тест Кассета",
      "en": "TESTLINE Toxo IgG/IgM Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Toxo IgG/IgM Tezkor Test Kasseta - bu butun qon, zardob yoki plazmadagi Toxoplasma gondii ga qarshi IgG va IgM antitanachalarini sifatli aniqlash va farqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test o'tkir yoki o'tmishdagi toksoplazmozni diagnostikasida yordam berish va immun holatni baholash, ayniqsa homilador ayollar va immuniteti zaiflashgan bemorlarda professional in vitro diagnostika maqsadida mo'ljallangan.",
      "ru": "TESTLINE Toxo IgG/IgM Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения и дифференциации антител IgG и IgM к Toxoplasma gondii в цельной крови, сыворотке или плазме. Этот тест предназначен для профессионального использования в качестве in vitro диагностики для помощи в диагностике острого или прошлого токсоплазмоза и для оценки иммунного статуса, особенно у беременных женщин и пациентов с ослабленным иммунитетом.",
      "en": "The TESTLINE Toxo IgG/IgM Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection and differentiation of IgG and IgM antibodies to Toxoplasma gondii in whole blood, serum, or plasma. This test is intended for professional in vitro diagnostic use to aid in the diagnosis of acute or past toxoplasmosis and to assess immune status, particularly in pregnant women and immunocompromised patients."
    },
    "features": {
      "uz": [
        "IgG va IgM antitanachalarini aniqlaydi",
        "Yaqinda o'tgan infeksiyadan o'tmishdagi infeksiyani farqlaydi",
        "10–15 daqiqada oson foydalanish va natijalar",
        "Yuqori sezgirlik va o'ziga xoslik",
        "Butun qon, zardob yoki plazma namunalari uchun mos"
      ],
      "ru": [
        "Обнаруживает антитела как IgG, так и IgM",
        "Дифференцирует недавнюю инфекцию от прошлой",
        "Простота использования с результатами за 10–15 минут",
        "Высокая чувствительность и специфичность",
        "Подходит для образцов цельной крови, сыворотки или плазмы"
      ],
      "en": [
        "Detects both IgG and IgM antibodies",
        "Differentiates recent from past infection",
        "Easy to use with results in 10–15 minutes",
        "High sensitivity and specificity",
        "Suitable for whole blood, serum, or plasma specimens"
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
        "uz": "WB/S/P",
        "ru": "ЦК/С/П",
        "en": "WB/S/P"
      },
      "readingTime": {
        "uz": "10–15 daqiqa",
        "ru": "10–15 минут",
        "en": "10–15 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 T"
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
    "image": "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    "id": "chlamydia-gonorrhea-test-cassette",
    "name": "TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette",
    "title": {
      "uz": "TESTLINE Chlamydia/Gonorrhea Tezkor Test Kasseta",
      "ru": "TESTLINE Chlamydia/Gonorrhea Экспресс-тест Кассета",
      "en": "TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette"
    },
    "description": {
      "uz": "TESTLINE Chlamydia/Gonorrhea Tezkor Test Kasseta - bu ayol bachadon bo'yni surtmasi, erkak siydik chiqarish kanalidan surtma yoki siydik namunalarida Chlamydia trachomatis va Neisseria gonorrhoeae antigenlarini sifatli aniqlash uchun tezkor xromatografik immunoanalizdir. Ushbu test C. trachomatis va N. gonorrhoeae infeksiyalarini diagnostikasida yordam berish uchun professional in vitro diagnostika maqsadida mo'ljallangan.",
      "ru": "TESTLINE Chlamydia/Gonorrhea Экспресс-тест Кассета - это быстрый хроматографический иммуноанализ для качественного обнаружения антигенов Chlamydia trachomatis и Neisseria gonorrhoeae в мазках из шейки матки у женщин, мазках из уретры у мужчин или образцах мочи. Этот тест предназначен для профессионального использования в качестве in vitro диагностики для помощи в диагностике инфекций C. trachomatis и N. gonorrhoeae.",
      "en": "The TESTLINE Chlamydia/Gonorrhea Rapid Test Cassette is a rapid chromatographic immunoassay for the qualitative detection of Chlamydia trachomatis and Neisseria gonorrhoeae antigens in female cervical swab, male urethral swab, or urine specimens. This test is intended for professional in vitro diagnostic use to aid in the diagnosis of C. trachomatis and N. gonorrhoeae infections."
    },
    "features": {
      "uz": [
        "Bitta testda ham C. trachomatis, ham N. gonorrhoeae antigenlarini aniqlaydi",
        "Surtma va siydik namunalari uchun mos",
        "Natijalar 15 daqiqada chiqadi",
        "Bajarish oson, maxsus jihozlar talab qilinmaydi",
        "Yuqori sezgirlik va o'ziga xoslik"
      ],
      "ru": [
        "Обнаруживает антигены C. trachomatis и N. gonorrhoeae в одном тесте",
        "Подходит для мазков и образцов мочи",
        "Результаты за 15 минут",
        "Прост в использовании, не требует специального оборудования",
        "Высокая чувствительность и специфичность"
      ],
      "en": [
        "Detects both C. trachomatis and N. gonorrhoeae antigens in a single test",
        "Suitable for swab and urine specimens",
        "Results in 15 minutes",
        "Simple to perform, no specialized equipment required",
        "High sensitivity and specificity"
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
        "uz": "Surtma/Siydik",
        "ru": "Мазок/Моча",
        "en": "Swab/Urine"
      },
      "readingTime": {
        "uz": "15 daqiqa",
        "ru": "15 минут",
        "en": "15 minutes"
      },
      "packSizes": {
        "uz": "25 T",
        "ru": "25 T",
        "en": "25 T"
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
    "image": "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const getMaternalChildTestById = (id: string): MaternalChildTest | undefined => {
  return maternalChildTests.find(test => test.id === id);
};

export const getAllMaternalChildTests = (): MaternalChildTest[] => {
  return maternalChildTests;
};