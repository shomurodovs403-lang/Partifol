export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  company: string;
  type: 'Work' | 'Freelance' | 'Internship' | 'Personal' | 'Open Source';
  description: string;
}

export const timelineData: TimelineEntry[] = [
  {
    id: "t1",
    year: "2023 - Hozirgacha",
    title: "Dasturchi / Web Developer",
    company: "Mustaqil Loyihalar",
    type: "Work",
    description: "Zamonaviy React, JavaScript va Python yordamida veb-ilovalar yaratish, API integratsiyalari va tizim arxitekturasini ishlab chiqish."
  },
  {
    id: "t2",
    year: "2022 - 2023",
    title: "Frontend Dasturchi",
    company: "Frilans Loyihalar",
    type: "Freelance",
    description: "Foydalanuvchi interfeyslarini (UI/UX) CSS va React orqali moslashuvchan, chiroyli va qulay formatda yaratish."
  },
  {
    id: "t3",
    year: "2021 - 2022",
    title: "Dasturlash Asoslari & Algoritmlar",
    company: "Amaliyot va Ta'lim",
    type: "Personal",
    description: "C++ va Python dasturlash tillarida ma'lumotlar tuzilmalari, algoritmlar va murakkab hisoblash masalalarini o'rganish."
  }
];

export const currentlyExploring = [
  "Algoritmik Murakkab Tizimlar",
  "Sun'iy Intellekt va LLM Vositalari",
  "Zamonaviy Web Texnologiyalar",
  "Yuqori Samaradorlikdagi C++ Tizimlari"
];
