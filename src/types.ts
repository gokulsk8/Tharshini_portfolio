export interface Project {
  id: string;
  title: string;
  category: 'UI/UX' | 'WEB' | 'TECHNICAL';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  isCaseStudy?: boolean;
  caseStudyData?: {
    problem: string;
    userNeed: string;
    userFlow: string[];
    wireframes: string;
    uiDesign: string;
    prototype: string;
    learnings: string[];
  };
  technicalDetails?: {
    systemFlow?: string[];
    components?: { name: string; role: string }[];
    toolsUsed?: string[];
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  details?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  organization: string;
  badge?: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  location: string;
  year: string;
  description: string;
}

export interface ProfileHighlight {
  stat: string;
  label: string;
  sublabel?: string;
}
