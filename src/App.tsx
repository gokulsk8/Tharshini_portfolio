import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { RightRailNav } from './components/RightRailNav';
import { MobileNav } from './components/MobileNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'resume',
        'portfolio',
        'certifications',
        'achievements',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-[#D9D9D9] text-[#171717] flex flex-col font-body selection:bg-[#FFB82E] selection:text-[#171717]">
        {/* Mobile Top Navigation */}
        <MobileNav
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Desktop Left Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Desktop Right Navigation Icon Rail */}
        <RightRailNav
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Main Content Area (offset on desktop by the 170px sidebar and 2xl right rail) */}
        <main className="flex-1 lg:pl-[170px] 2xl:pr-16 w-full">
          {/* Hero Section */}
          <HeroSection
            onNavigate={handleNavigate}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* About Me Section */}
          <AboutSection
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* Resume & Skills Section */}
          <ResumeSection
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* Portfolio Showcase & Filters */}
          <PortfolioSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Certifications & Achievements */}
          <CertificationsSection />

          {/* Contact & Recruitment Outreach */}
          <ContactSection
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* Charcoal Footer */}
          <Footer onScrollToTop={handleScrollToTop} />
        </main>

        {/* Interactive Case Study & Project Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Printable Official Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ProfilePhotoProvider>
  );
}
