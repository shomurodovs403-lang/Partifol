export interface StackItem {
  name: string;
  level: string; // e.g., 'Advanced', 'Proficient', 'Familiar'
  category: 'Frontend' | 'Backend' | 'Data' | 'Infrastructure';
  enabled: boolean;
  notes?: string;
}

export const techStack: StackItem[] = [
  // Frontend
  { name: "JavaScript", level: "Advanced", category: "Frontend", enabled: true },
  { name: "React", level: "Advanced", category: "Frontend", enabled: true },
  { name: "CSS / Modern CSS", level: "Advanced", category: "Frontend", enabled: true },
  { name: "HTML5", level: "Advanced", category: "Frontend", enabled: true },
  { name: "Tailwind CSS", level: "Proficient", category: "Frontend", enabled: true },

  // Backend & Core Languages
  { name: "Python", level: "Advanced", category: "Backend", enabled: true },
  { name: "C++", level: "Proficient", category: "Backend", enabled: true },
  { name: "Node.js", level: "Proficient", category: "Backend", enabled: true },
  
  // Data
  { name: "Data Structures & Algorithms", level: "Proficient", category: "Data", enabled: true },
  { name: "SQL & Databases", level: "Proficient", category: "Data", enabled: true },

  // Infrastructure & Tooling
  { name: "Git & GitHub", level: "Advanced", category: "Infrastructure", enabled: true },
  { name: "VS Code & Modern Tooling", level: "Advanced", category: "Infrastructure", enabled: true },
];
