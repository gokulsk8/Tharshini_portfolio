import {
  Project,
  EducationItem,
  ExperienceItem,
  SkillCategory,
  CertificationItem,
  AchievementItem,
  ProfileHighlight,
} from '../types';

import portraitImg from '../assets/images/tharshini_real_portrait_1787851730070.jpg';
import railwayImg from '../assets/images/railway_gate_diag_1787849114016.jpg';
import speakerImg from '../assets/images/speaker_breakdown_1787849138176.jpg';
import webInternImg from '../assets/images/web_intern_code_1787849163494.jpg';
import uiuxImg from '../assets/images/uiux_wireframe_ui_1787849182872.jpg';

export const PERSONAL_INFO = {
  name: 'THARSHINI SK',
  title: 'UI/UX DESIGNER / ENGINEERING GRADUATE',
  subtitle: 'READY TO CREATE USER-CENTERED EXPERIENCES',
  heroIntro:
    'Engineering graduate with an interest in UI/UX design, web technologies and creating simple, intuitive digital experiences.',
  aboutIntro:
    "I'm Tharshini SK, UI/UX Designer & Engineering Graduate with a growing interest in UI/UX design, web technologies and user-focused digital experiences. I enjoy combining creativity, technical understanding and problem-solving to create simple and meaningful interfaces.",
  profilePhoto: portraitImg,
  email: 'tharshinimoorth2006@gmail.com',
  gmailComposeUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=tharshinimoorth2006@gmail.com',
  phone: '+91 6369260277',
  whatsapp: '+91 6369260277',
  whatsappNumber: '916369260277',
  whatsappUrl: 'https://wa.me/916369260277',
  linkedin: 'tharshini-sk-0b40862b9',
  linkedinUrl: 'https://www.linkedin.com/in/tharshini-sk-0b40862b9',
  github: 'Tharshinisk',
  githubUrl: 'https://github.com/Tharshinisk',
  location: 'Tamil Nadu, India',
  targetRole: 'UI/UX Designer / Frontend Engineering / Graduate Engineer',
};

export const WHAT_I_DO = [
  {
    id: 'ui-ux',
    title: 'UI/UX DESIGN',
    description:
      'Creating clean and intuitive user interfaces with a focus on usability, hierarchy and visual consistency.',
    icon: 'palette',
  },
  {
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    description:
      'Experience with HTML, CSS and JavaScript, supported by practical web-development internship exposure.',
    icon: 'code',
  },
  {
    id: 'problem-solving',
    title: 'PROBLEM SOLVING',
    description:
      'Engineering background with experience working on technical projects involving embedded systems and reverse engineering.',
    icon: 'cpu',
  },
];

export const RECRUITER_HIGHLIGHTS: ProfileHighlight[] = [
  {
    stat: 'B.E.',
    label: 'Engineering Graduate',
    sublabel: 'ECE / MCET',
  },
  {
    stat: '8.5',
    label: 'CGPA',
    sublabel: 'Academic Standing',
  },
  {
    stat: 'UI/UX',
    label: 'Design Focus',
    sublabel: 'User-Centered',
  },
  {
    stat: 'Figma',
    label: 'Design Tool',
    sublabel: 'Wireframes & UI',
  },
  {
    stat: '2025',
    label: 'Web Dev Internship',
    sublabel: 'Profenna Infotech',
  },
  {
    stat: 'TNWISE',
    label: 'Hackathon Participant',
    sublabel: 'TANCAM 2025',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    period: 'May 2026',
    score: 'CGPA: 8.5',
    details: 'Focusing on electronics, embedded systems, software problem solving, and digital design.',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Saratha Matric Higher Secondary School — Modachur',
    period: 'May 2023',
    score: '86%',
    details: 'Higher Secondary education with mathematics and science stream foundation.',
  },
  {
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Saratha Matric Higher Secondary School — Modachur',
    period: 'March 2021',
    details: 'Completed secondary education with solid academic foundations.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Web Development Intern',
    company: 'Profenna Infotech',
    period: '06 June 2025 – 20 June 2025',
    description:
      'Learned practical web development during the internship and built a simple project using HTML and CSS.',
    highlights: [
      'Gained hands-on exposure to structural web layouts with semantic HTML5.',
      'Implemented clean styling, layout alignments, and responsive design concepts with CSS3.',
      'Collaborated on building a functional web showcase project.',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'UI/UX',
    skills: ['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping', 'User Flow', 'Design Hierarchy'],
  },
  {
    title: 'WEB',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Layouts'],
  },
  {
    title: 'PROGRAMMING',
    skills: ['C', 'Java', 'Data Structures Basics', 'Algorithm Logic'],
  },
  {
    title: 'TOOLS',
    skills: ['Figma', 'MATLAB', 'ADS Software', 'MULTISIM', 'VS Code'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-railway-gate',
    title: 'AUTOMATIC RAILWAY GATE CONTROL SYSTEM',
    category: 'TECHNICAL',
    categoryLabel: 'Technical / Embedded Systems',
    shortDescription:
      'An automatic railway gate control system using sensors and microcontroller to detect approaching trains and close/open barriers automatically.',
    fullDescription:
      'An automatic railway gate control system uses sensors and a microcontroller to detect an approaching train and automatically close the gate. After the train passes, the gate opens automatically, helping reduce accidents at unmanned level crossings.',
    image: railwayImg,
    tags: ['Microcontroller', 'IR Sensors', 'Automation', 'Embedded Systems', 'Safety Design'],
    technicalDetails: {
      systemFlow: [
        'TRAIN DETECTION: Infrared / ultrasonic sensor detects train approaching 1km away',
        'SIGNAL PROCESSING: Microcontroller receives signal and triggers warning buzzer & LED',
        'GATE AUTOMATION: Motorized servo drops the safety boom barrier',
        'DEPARTURE SENSOR: Secondary sensor detects train clearance',
        'GATE REOPENING: Barrier lifts automatically to resume normal road traffic flow',
      ],
      components: [
        { name: 'IR / Ultrasonic Sensors', role: 'Track train approach and clear departure' },
        { name: 'Microcontroller Circuit', role: 'Executes control logic and input signal processing' },
        { name: 'Servo Motor Driver', role: 'Mechanically lowers and raises boom gates' },
        { name: 'Audio/Visual Warning Array', role: 'Provides warning beeps and LED indicators' },
      ],
      toolsUsed: ['Embedded C', 'Microcontroller Kit', 'MULTISIM', 'Circuit Simulation'],
    },
  },
  {
    id: 'project-bluetooth-speaker',
    title: 'BLUETOOTH SPEAKER — REVERSE ENGINEERING',
    category: 'TECHNICAL',
    categoryLabel: 'Technical / Reverse Engineering',
    shortDescription:
      'In-depth study and component breakdown of a modern portable Bluetooth speaker system.',
    fullDescription:
      'A project focused on understanding the internal components of a Bluetooth speaker, including the Bluetooth module, amplifier, battery and speaker driver. Analyzed signal processing, audio fidelity, and power management architecture.',
    image: speakerImg,
    tags: ['Reverse Engineering', 'Bluetooth Module', 'Class-D Amplifier', 'Power Management', 'Audio Electronics'],
    technicalDetails: {
      systemFlow: [
        'RF INPUT: Bluetooth module receives digital audio stream from paired smartphone',
        'DAC CONVERSION: Digital audio decoded and converted to analog audio signal',
        'POWER AMPLIFICATION: Class-D amplifier boosts signal with high energy efficiency',
        'ACOUSTIC TRANSLATION: Dynamic speaker driver and passive radiator produce sound waves',
        'POWER REGULATION: Lithium-ion battery unit with BMS circuit provides stable voltage',
      ],
      components: [
        { name: 'Bluetooth 5.0 Module SoC', role: 'Wireless RF signal reception & pairing' },
        { name: 'Class-D Audio Amplifier IC', role: 'High-efficiency low-distortion signal boost' },
        { name: 'Lithium-ion Battery & BMS', role: 'Rechargeable power supply and overvoltage protection' },
        { name: 'Dynamic Speaker Driver & Radiator', role: 'Acoustic reproduction and bass enhancement' },
      ],
      toolsUsed: ['Hardware Disassembly', 'MULTISIM', 'Oscilloscope Analysis', 'Schematic Mapping'],
    },
  },
  {
    id: 'project-web-internship',
    title: 'WEB DEVELOPMENT INTERNSHIP PROJECT',
    category: 'WEB',
    categoryLabel: 'Web / Frontend Practice',
    shortDescription:
      'Practical web development at Profenna Infotech creating structured, responsive web layouts using HTML5 and CSS3.',
    fullDescription:
      'Practical web development experience at Profenna Infotech, including building a clean, responsive project using semantic HTML and custom CSS. Focused on visual hierarchy, cross-device responsiveness, and clean code formatting.',
    image: webInternImg,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Internship'],
    technicalDetails: {
      systemFlow: [
        'REQUIREMENTS REVIEW: Reviewed layout wireframes and typography standards',
        'SEMANTIC HTML: Built document tree using modern header, nav, main, section, footer tags',
        'CSS STYLING: Applied CSS Flexbox and Grid layouts for desktop and mobile screens',
        'INTERACTIVITY: Added JavaScript handlers for interactive UI elements',
      ],
      toolsUsed: ['HTML5', 'CSS3', 'JavaScript', 'VS Code', 'Chrome DevTools'],
    },
  },
  {
    id: 'project-uiux-design',
    title: 'CAMPUS COMPANION — UI/UX CASE STUDY',
    category: 'UI/UX',
    categoryLabel: 'UI/UX Design / Figma',
    shortDescription:
      'A structured UI/UX case study and design system for a student-centered digital experience and campus workflow.',
    fullDescription:
      'Comprehensive UI/UX design project showcasing user-centered methodology: Problem Identification, User Needs, User Flow mapping, Low-Fidelity Wireframing, High-Fidelity UI Design, Prototyping, and Design Learnings.',
    image: uiuxImg,
    tags: ['Figma', 'UI/UX Case Study', 'Wireframing', 'Prototyping', 'User Flow', 'Design System'],
    isCaseStudy: true,
    caseStudyData: {
      problem:
        'College students face fragmented information across timetables, event circulars, campus announcements, and project deadlines, leading to missed updates and cognitive overload.',
      userNeed:
        'A unified, intuitive mobile experience that consolidates academic schedules, campus notices, and quick task reminders into a single glanceable dashboard with high visual contrast.',
      userFlow: [
        'Onboarding & Department Selection',
        'Personalized Daily Schedule & Announcements Dashboard',
        'Interactive Course Modules & Resource Hub',
        'Quick Task & Project Deadline Planner',
        'Profile & Notification Center',
      ],
      wireframes:
        'Created paper and low-fidelity digital wireframes in Figma to test navigation hierarchy, thumbs-reach zones, and key information density before visual skinning.',
      uiDesign:
        'Constructed high-fidelity components adopting strict 8pt grid, high-contrast typography pairing, accessible color contrast tokens (yellow #FFB82E & charcoal #171717), and clear interactive affordances.',
      prototype:
        'Connected interactive Figma frames with smooth slide-over transitions, micro-interactions for button presses, and seamless modal sheets for detail views.',
      learnings: [
        'Importance of user flow mapping before committing to visual styling.',
        'Maintaining consistent typography scale significantly improves reading comfort.',
        'Designing for accessibility (WCAG AA contrast) benefits all users in various lighting conditions.',
      ],
    },
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'CODSOFT',
    organization: 'CodSoft Internship & Certification',
    badge: 'UI/UX Design Certification',
    description:
      'Completed comprehensive certification in UI/UX Design covering user research, interface principles, Figma wireframing, and interactive prototyping.',
  },
  {
    title: 'LINGUASKILL',
    organization: 'Cambridge English Assessment',
    badge: 'B1 Grade Level',
    description:
      'Official English language proficiency certification evaluating professional communication, reading comprehension, and conversational fluency.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'TNWISE 2025 HACKATHON',
    organization: "TANCAM's Hackathon for Tamil Nadu Women in Science and Engineering",
    location: 'Hosur, Tamil Nadu',
    year: '2025',
    description:
      "Participated in TANCAM's Hackathon for Tamil Nadu Women in Science and Engineering (TNWISE 2025) at Hosur, collaborating on innovative technical solutions under competitive time constraints.",
  },
];

export const WHY_THARSHINI_CARDS = [
  {
    title: 'DESIGN + TECHNOLOGY',
    subtitle: 'Interdisciplinary Edge',
    description:
      'Combines engineering foundation with UI/UX and web-development interests, bridging the gap between design vision and technical implementation feasibility.',
    icon: 'layers',
  },
  {
    title: 'QUICK LEARNER',
    subtitle: 'High Agility',
    description:
      'Adaptive to new environments, design systems, and software tools. Eager to master emerging industry workflows and contribute immediately to team velocity.',
    icon: 'zap',
  },
  {
    title: 'TEAM CONTRIBUTOR',
    subtitle: 'Collaborative Mindset',
    description:
      'Strong communication, active listening, and team-coordination skills proven through hackathons, group engineering projects, and internship collaborations.',
    icon: 'users',
  },
];
