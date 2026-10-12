export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  visualMockType: 'dashboard' | 'mobile' | 'terminal' | 'code';
  links?: {
    live?: string;
    github?: string;
  };
}

export interface FeaturedChapter {
  id: string;
  title: string;
  content: string;
  visualType: 'ui' | 'architecture' | 'schema' | 'api' | 'code';
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface FeaturedCaseStudy {
  id: string;
  title: string;
  overview: string;
  chapters: FeaturedChapter[];
}

export const selectedWork: Project[] = [
  {
    id: "project-1",
    title: "Interaktiv Veb Platforma",
    category: "Veb Ilova & Boshqaruv Paneli",
    role: "Frontend Dasturchi",
    stack: ["JavaScript", "React", "CSS3", "Tailwind CSS"],
    problem: "Foydalanuvchilar uchun qulay, tezkor va moslashuvchan boshqaruv panelini ishlab chiqish zarur edi.",
    solution: "React komponentlari, zamonaviy CSS animatsiyalari va toza kod arxitekturasi orqali intuitiv interfeys yaratildi.",
    result: "Foydalanuvchilar sahifada 40% tezroq harakatlanadigan qulay tizimga ega bo'ldi.",
    visualMockType: "dashboard",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: "project-2",
    title: "Ma'lumotlarni Qayta Ishlash Tizimi",
    category: "Avtomatlashtirish & Backend",
    role: "Python Dasturchi",
    stack: ["Python", "FastAPI", "SQLite", "API"],
    problem: "Katta hajmdagi ma'lumotlarni avtomatik tartiblash va tezkor hisoblash talab etildi.",
    solution: "Python yordamida ma'lumotlarni tahlil qiluvchi va API orqali uzatuvchi barqaror backend skriptlari yozildi.",
    result: "Qo'lda bajariladigan jarayonlar 80% ga qisqardi va hisoblashlar to'liq avtomatlashtirildi.",
    visualMockType: "mobile",
    links: {
      github: "https://github.com"
    }
  },
  {
    id: "project-3",
    title: "Yuqori Tezlikdagi Algoritmik Modul",
    category: "Tizimli Dasturlash",
    role: "C++ Dasturchi",
    stack: ["C++", "STL", "Algoritmlar", "Optimizatsiya"],
    problem: "Murakkab hisoblashlar va xotira bilan ishlashda maksimal tezlik va samaradorlikka erishish kerak edi.",
    solution: "C++ tilining zamonaviy standartlari va samarali ma'lumotlar tuzilmalari orqali tezkor hisoblash moduli tuzildi.",
    result: "Hisoblash tezligi sezilarli darajada oshdi va xotira sarfi minimal darajaga tushirildi.",
    visualMockType: "terminal"
  }
];

export const featuredCaseStudy: FeaturedCaseStudy = {
  id: "featured-1",
  title: "To'liq Tsiklli Zamonaviy Loyiha Tahlili",
  overview: "G'oyadan boshlab tayyor mahsulotgacha: foydalanuvchi interfeysini loyihalash, ma'lumotlar oqimi va tizimni birlashtirish jarayoni.",
  chapters: [
    {
      id: "ch-1",
      title: "Muammo",
      content: "Foydalanuvchilar uchun qiyin va sekin ishlaydigan tizim o'rniga engil va qulay veb-platforma yaratish vazifasi qo'yildi.",
      visualType: "ui"
    },
    {
      id: "ch-2",
      title: "Tahlil va Tadqiqot",
      content: "Foydalanuvchi talablari va texnik imkoniyatlar tahlil qilinib, JavaScript, React va Python asosiy vositalar sifatida tanlandi.",
      visualType: "ui"
    },
    {
      id: "ch-3",
      title: "UX / Foydalanuvchi Tajribasi",
      content: "Har bir sahifa elementining joylashuvi, kontrast ranglar va qulay harakatlanish strukturalari ishlab chiqildi.",
      visualType: "ui"
    },
    {
      id: "ch-4",
      title: "Frontend Ishlanmasi",
      content: "React komponentlarining qayta ishlatiluvchanligi ta'minlandi va CSS yordamida chiroyli silliq vizual effektlar berildi.",
      visualType: "code",
      codeSnippet: {
        language: "tsx",
        code: `// React UI Komponenti
export function DashboardView() {
  return (
    <div className="card-glass">
      <h3>Xush kelibsiz!</h3>
    </div>
  );
}`
      }
    },
    {
      id: "ch-5",
      title: "Backend va Ma'lumotlar",
      content: "Python API orqali ma'lumotlar xavfsiz va tezkor uzatildi, ma'lumotlar bazasi jadvallari tuzildi.",
      visualType: "schema",
      codeSnippet: {
        language: "sql",
        code: `-- Ma'lumotlar bazasi sxemasi
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);`
      }
    },
    {
      id: "ch-6",
      title: "Qiyinchiliklar va Yechim",
      content: "Katta hajmdagi ma'lumotlarni vizual ko'rsatishda kesh va optimallashtirilgan algoritmlar qo'llandi.",
      visualType: "architecture"
    },
    {
      id: "ch-7",
      title: "Natija va Xulosalar",
      content: "Loyiha belgilangan muddatda to'liq tayyor bo'ldi, barqaror ishladi va foydalanuvchilar ijobiy baholashdi.",
      visualType: "ui"
    }
  ]
};
