export interface Product {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'express' | 'poct' | 'blood';
  image: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const products: Product[] = [
  {
    id: "covid-19-rapid-test",
    title: {
      uz: "COVID-19 tezkor test",
      ru: "COVID-19 экспресс тест",
      en: "COVID-19 Rapid Test"
    },
    category: "express",
    image: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "COVID-19 ni aniqlash uchun yuqori aniqlikdagi tezkor test. Natija 15 daqiqada tayyor bo'ladi. Oson foydalanish va ishonchli natija.",
      ru: "Высокоточный экспресс-тест для обнаружения COVID-19. Результат готов через 15 минут. Простое использование и надежный результат.",
      en: "High-accuracy rapid test for COVID-19 detection. Result ready in 15 minutes. Easy to use and reliable results."
    }
  },
  {
    id: "glucose-meter",
    title: {
      uz: "Glyukometr",
      ru: "Глюкометр",
      en: "Glucose Meter"
    },
    category: "poct",
    image: "https://images.pexels.com/photos/6823554/pexels-photo-6823554.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Qon shakarini o'lchash uchun zamonaviy glyukometr. Aniq natija va oson foydalanish. Diabetik bemorlar uchun zarur.",
      ru: "Современный глюкометр для измерения уровня сахара в крови. Точный результат и простое использование. Необходим для диабетиков.",
      en: "Modern glucose meter for blood sugar measurement. Accurate results and easy to use. Essential for diabetic patients."
    }
  },
  {
    id: "blood-pressure-monitor",
    title: {
      uz: "Qon bosimi o'lchagich",
      ru: "Тонометр",
      en: "Blood Pressure Monitor"
    },
    category: "blood",
    image: "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Avtomatik qon bosimi o'lchagich. Yuqori aniqlik va oson foydalanish. Kattalar uchun mo'ljallangan.",
      ru: "Автоматический тонометр. Высокая точность и простое использование. Предназначен для взрослых.",
      en: "Automatic blood pressure monitor. High accuracy and easy to use. Designed for adults."
    }
  },
  {
    id: "pregnancy-test",
    title: {
      uz: "Homiladorlik testi",
      ru: "Тест на беременность",
      en: "Pregnancy Test"
    },
    category: "express",
    image: "https://images.pexels.com/photos/7088395/pexels-photo-7088395.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Homiladorlikni aniqlash uchun tezkor test. 99% aniqlik va 3 daqiqada natija. Oson foydalanish.",
      ru: "Экспресс-тест для определения беременности. 99% точность и результат за 3 минуты. Простое использование.",
      en: "Rapid test for pregnancy detection. 99% accuracy and result in 3 minutes. Easy to use."
    }
  },
  {
    id: "cholesterol-test",
    title: {
      uz: "Xolesterin testi",
      ru: "Тест на холестерин",
      en: "Cholesterol Test"
    },
    category: "poct",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Xolesterin darajasini aniqlash uchun test. Yurak-qon tomir kasalliklari riskini baholashda yordam beradi.",
      ru: "Тест для определения уровня холестерина. Помогает оценить риск сердечно-сосудистых заболеваний.",
      en: "Test for cholesterol level determination. Helps assess cardiovascular disease risk."
    }
  },
  {
    id: "hemoglobin-test",
    title: {
      uz: "Gemoglobin testi",
      ru: "Тест на гемоглобин",
      en: "Hemoglobin Test"
    },
    category: "blood",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Qondagi gemoglobin darajasini aniqlash uchun test. Kamqonlik va boshqa kasalliklarni aniqlashda yordam beradi.",
      ru: "Тест для определения уровня гемоглобина в крови. Помогает выявить анемию и другие заболевания.",
      en: "Test for blood hemoglobin level determination. Helps detect anemia and other conditions."
    }
  },
  {
    id: "flu-test",
    title: {
      uz: "Gripp testi",
      ru: "Тест на грипп",
      en: "Flu Test"
    },
    category: "express",
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Gripp virusini aniqlash uchun tezkor test. A va B turidagi grippni aniqlaydi. Natija 10 daqiqada tayyor.",
      ru: "Экспресс-тест для обнаружения вируса гриппа. Определяет грипп типа A и B. Результат готов через 10 минут.",
      en: "Rapid test for flu virus detection. Detects influenza A and B types. Result ready in 10 minutes."
    }
  },
  {
    id: "urine-analyzer",
    title: {
      uz: "Siydik analizatori",
      ru: "Анализатор мочи",
      en: "Urine Analyzer"
    },
    category: "poct",
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      uz: "Siydik analizini avtomatik amalga oshiruvchi qurilma. Bir nechta parametrni bir vaqtda o'lchaydi.",
      ru: "Устройство для автоматического анализа мочи. Измеряет несколько параметров одновременно.",
      en: "Automatic urine analysis device. Measures multiple parameters simultaneously."
    }
  }
];