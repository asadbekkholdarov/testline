export interface License {
  id: string;
  name: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
  issueDate: string;
  validUntil: string;
}

export const licenses: License[] = [
  {
    id: "anti-hcv",
    name: "Anti-HCV",
    description: {
      uz: "Gepatit C virusiga qarshi antikorlarni aniqlash uchun test sertifikati",
      ru: "Сертификат теста для обнаружения антител к вирусу гепатита C",
      en: "Certificate for Hepatitis C virus antibody detection test"
    },
    image: "/images/aboutus/anti-hcv.jpg",
    issueDate: "2023-01-15",
    validUntil: "2026-01-15"
  },
  {
    id: "hbsag-license",
    name: "HBsAg License",
    description: {
      uz: "Gepatit B yuzaki antigenini aniqlash uchun litsenziya",
      ru: "Лицензия для обнаружения поверхностного антигена гепатита B",
      en: "License for Hepatitis B surface antigen detection"
    },
    image: "/images/aboutus/hbsag.jpg",
    issueDate: "2023-02-20",
    validUntil: "2026-02-20"
  },
  {
    id: "iso-13485",
    name: "ISO 13485",
    description: {
      uz: "Tibbiy qurilmalar uchun sifat menejmenti tizimi sertifikati",
      ru: "Сертификат системы менеджмента качества для медицинских устройств",
      en: "Quality management system certificate for medical devices"
    },
    image: "/images/aboutus/iso13485.jpg",
    issueDate: "2023-03-10",
    validUntil: "2026-03-10"
  },
  {
    id: "iso-9001",
    name: "ISO 9001",
    description: {
      uz: "Sifat menejmenti tizimi sertifikati",
      ru: "Сертификат системы менеджмента качества",
      en: "Quality management system certificate"
    },
    image: "/images/aboutus/iso9001.jpg",
    issueDate: "2023-04-05",
    validUntil: "2026-04-05"
  },
  {
    id: "ce-marking",
    name: "CE Marking",
    description: {
      uz: "Yevropa Ittifoqi uchun muvofiqlik belgisi",
      ru: "Знак соответствия для Европейского Союза",
      en: "Conformity marking for European Union"
    },
    image: "/images/aboutus/ce-marking.jpg",
    issueDate: "2023-05-12",
    validUntil: "2028-05-12"
  },
  {
    id: "fda-approval",
    name: "FDA Approval",
    description: {
      uz: "AQSh Oziq-ovqat va dori vositalari boshqarmasi tasdiqi",
      ru: "Одобрение Управления по контролю за продуктами и лекарствами США",
      en: "US Food and Drug Administration approval"
    },
    image: "/images/aboutus/fda-approval.jpg",
    issueDate: "2023-06-18",
    validUntil: "2028-06-18"
  },
  {
    id: "covid-test-cert",
    name: "COVID-19 Test Certificate",
    description: {
      uz: "COVID-19 tezkor test sertifikati",
      ru: "Сертификат экспресс-теста на COVID-19",
      en: "COVID-19 rapid test certificate"
    },
    image: "/images/aboutus/covid-test-cert.jpg",
    issueDate: "2023-07-22",
    validUntil: "2026-07-22"
  },
  {
    id: "gmp-certificate",
    name: "GMP Certificate",
    description: {
      uz: "Yaxshi ishlab chiqarish amaliyoti sertifikati",
      ru: "Сертификат надлежащей производственной практики",
      en: "Good Manufacturing Practice certificate"
    },
    image: "/images/aboutus/gmp-certificate.jpg",
    issueDate: "2023-08-30",
    validUntil: "2026-08-30"
  },
  {
    id: "who-prequalification",
    name: "WHO Prequalification",
    description: {
      uz: "Jahon sog'liqni saqlash tashkiloti oldindan malakasi",
      ru: "Преквалификация Всемирной организации здравоохранения",
      en: "World Health Organization prequalification"
    },
    image: "/images/aboutus/who-prequalification.jpg",
    issueDate: "2023-09-15",
    validUntil: "2026-09-15"
  },
  {
    id: "laboratory-license",
    name: "Laboratory License",
    description: {
      uz: "Laboratoriya faoliyati uchun litsenziya",
      ru: "Лицензия на лабораторную деятельность",
      en: "Laboratory activity license"
    },
    image: "/images/aboutus/laboratory-license.jpg",
    issueDate: "2023-10-08",
    validUntil: "2026-10-08"
  }
];