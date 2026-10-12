export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  heroStatement: string;
  heroSubtext: string;
  status: {
    available: boolean;
    text: string;
    location: string;
  };
  terminalLines: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    telegram: string;
  };
}

export const profileData: ProfileData = {
  name: "Akbarjonov Shamshod",
  role: "Portfolio",
  tagline: "Akbarjonov Shamshod Portfoliosi | Dasturchi",
  heroStatement: "Foydalanuvchi uchun qulay interfeyslarni loyihalashtiraman va ishonchli dasturiy tizimlarni yarataman.",
  heroSubtext: "JavaScript, React, zamonaviy CSS, Python hamda C++ dasturlash tillari orqali zamonaviy veb-saytlar va algoritmik yechimlar ishlab chiqaman.",
  status: {
    available: true,
    text: "Yangi loyihalar uchun ochiq",
    location: "O'zbekiston",
  },
  terminalLines: [
    "shamshod.init()",
    "→ texnologiyalar: JavaScript + React + CSS + Python + C++",
    "→ yo'nalish: zamonaviy veb-dasturlar va algoritmik tizimlar",
    "→ holat: yangi murakkab vazifalarni bajarishga tayyor"
  ],
  contact: {
    email: "akbarjonov.shamshod@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    telegram: "https://t.me",
  }
};
