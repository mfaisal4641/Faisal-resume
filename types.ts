export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  points: string[];
}

export interface LanguageItem {
  name: string;
  proficiency: number; // e.g., 4 out of 5
  level: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  strengths: StrengthItem[];
  keyAchievements: AchievementItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  languages: LanguageItem[];
  skills: string[];
  interests: string[];
}
