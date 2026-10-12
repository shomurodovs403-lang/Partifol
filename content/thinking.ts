export interface Principle {
  id: string;
  title: string;
  stance: string;
  description: string;
}

export interface WorkflowStage {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const principles: Principle[] = [
  {
    id: "p1",
    title: "Oddiylik",
    stance: "Ortiqcha murakkablik — og'irlik. Tizimlarni iloji boricha sodda va tushunarli yarataman.",
    description: "Har bir ortiqcha qatlamning o'z narxi bor. Hech kim tushunmaydigan chalkash koddan ko'ra, har qanday dasturchi oson o'qiy oladigan toza kodni afzal bilaman."
  },
  {
    id: "p2",
    title: "Tezkorlik",
    stance: "Tezlik — eng muhim xususiyat. Foydalanuvchilar har bir millisekundni his qilishadi.",
    description: "Sahifa yuklanishini tezlashtirishdan tortib, so'rovlarni optimallashtirishgacha bo'lgan har bir jarayonda unumdorlikni asosiy talab deb bilaman."
  },
  {
    id: "p3",
    title: "Masshtablilik",
    stance: "Kelajakni ko'zlab loyihalashtir, ammo bugun uchun qur.",
    description: "Tizimlarni kelajakda erkin kengayadigan qilib arxitektura qilaman, ortiqcha va foydasiz murakkablashtirishdan qochaman."
  },
  {
    id: "p4",
    title: "Qo'llab-quvvatlash",
    stance: "Kod yozilgandan ko'ra ko'proq o'qiladi.",
    description: "Aniq struktura, tushunarli nomlash va modullilik tizimlarning uzoq muddat barqaror ishlashini ta'minlaydi."
  },
  {
    id: "p5",
    title: "Mahsulot Fikrlashi",
    stance: "Kod — insonlar ehtiyojini qondirish vositasi.",
    description: "Shunchaki buyruqlarni bajarmayman. Foydalanuvchi qulayligi (UX) uchun eng yaxshi yechimlarni taklif qilaman va maqsadga mos ishlayman."
  }
];

export const workflow: WorkflowStage[] = [
  {
    stepNumber: "01",
    title: "G'oya",
    subtitle: "Muammo va Maqsad",
    description: "Biror qator kod yozishdan oldin biznes muammosi va asosiy talablarni chuqur tushunish.",
    deliverables: ["Talablar hujjati", "Muvaffaqiyat mezonlari"]
  },
  {
    stepNumber: "02",
    title: "Tadqiqot",
    subtitle: "Tahlil",
    description: "Texnik imkoniyatlar, cheklovlar va foydalanuvchi ehtiyojlarini o'rganish.",
    deliverables: ["Texnik tahlil", "Texnologiyalar rejasi"]
  },
  {
    stepNumber: "03",
    title: "UX Dizayn",
    subtitle: "Struktura",
    description: "Foydalanuvchi yo'lini chizish va interfeys strukturasini belgilash.",
    deliverables: ["Foydalanuvchi oqimi", "Boshlang'ich maketlar"]
  },
  {
    stepNumber: "04",
    title: "Arxitektura",
    subtitle: "Tizim Dizayni",
    description: "Ma'lumotlar bazasi tuzilishi, API shartnomalari va tizim xaritasini ishlab chiqish.",
    deliverables: ["Ma'lumotlar modeli", "API spesifikatsiyasi", "Tizim diagrammasi"]
  },
  {
    stepNumber: "05",
    title: "Dasturlash",
    subtitle: "Amalga oshirish",
    description: "Frontend interfeyslar va backend xizmatlarini bosqichma-bosqich ishlab chiqish.",
    deliverables: ["Komponentlar bazasi", "Asosiy xizmatlar", "Integratsiya"]
  },
  {
    stepNumber: "06",
    title: "Testlash",
    subtitle: "Sifat kafolati",
    description: "Dasturning xatosiz va barqaror ishlashini sinovdan o'tkazish.",
    deliverables: ["Test natijalari", "Xatoliklarni tuzatish", "Tezlik auditi"]
  },
  {
    stepNumber: "07",
    title: "Ishga tushirish",
    subtitle: "Reliz",
    description: "Mahsulotni ishlab chiqarish (production) serverlariga muvaffaqiyatli joylash.",
    deliverables: ["CI/CD Quvuri", "Monitoring", "Production nashri"]
  },
  {
    stepNumber: "08",
    title: "Rivojlantirish",
    subtitle: "Takomillashtirish",
    description: "Foydalanuvchilar fikr-mulohazalarini to'plash va tizimni yanada takomillashtirish.",
    deliverables: ["Tahliliy hisobot", "Yangi imkoniyatlar"]
  }
];
