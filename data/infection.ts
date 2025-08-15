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
];

export const getInfectiousTestById = (id: string): InfectiousTest | undefined => {
  return infectiousTests.find(test => test.id === id);
};

export const getAllInfectiousTests = (): InfectiousTest[] => {
  return infectiousTests;
};