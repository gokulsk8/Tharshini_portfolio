import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  FileText,
  Briefcase,
  Award,
  Trophy,
  Mail,
  Download,
  ChevronRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface MobileNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  onNavigate,
  onOpenResumeModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { profilePhoto } = useProfilePhoto();

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT ME', icon: User },
    { id: 'resume', label: 'RESUME', icon: FileText },
    { id: 'portfolio', label: 'PORTFOLIO', icon: Briefcase },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: Award },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  const handleItemClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-[#171717] border-b-4 border-[#FFB82E] shadow-lg">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Brand with circular photo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleItemClick('home')}
        >
          <div className="w-10 h-10 rounded-full border-2 border-[#FFB82E] p-0.5 bg-white overflow-hidden shadow">
            <img
              src={profilePhoto}
              alt="Tharshini SK"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="font-display text-white text-lg font-bold tracking-wider block leading-none">
              THARSHINI SK
            </span>
            <span className="text-[9px] text-[#FFB82E] font-semibold tracking-widest uppercase font-body">
              UI/UX DESIGNER
            </span>
          </div>
        </div>

        {/* Action button & Hamburger */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenResumeModal}
            className="px-3 py-1.5 bg-[#FFB82E] text-[#171717] text-[10px] font-extrabold uppercase rounded shadow flex items-center space-x-1"
          >
            <Download className="w-3 h-3" />
            <span>RESUME</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-[#252525] text-white hover:text-[#FFB82E] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer */}
      {isOpen && (
        <div className="bg-[#FFB82E] border-t-2 border-[#171717] px-4 py-6 shadow-2xl animate-fadeIn font-body select-none">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#171717] text-[#FFB82E] shadow-md'
                      : 'text-[#171717] hover:bg-[#171717]/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#171717]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#171717]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tharshinimoorth2006@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#171717] hover:text-[#B8860B]"
            >
              tharshinimoorth2006@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916369260277?text=Hi%20Tharshini%2C%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-bold"
              >
                WhatsApp
              </a>
              <span>•</span>
              <a href="tel:+916369260277" className="hover:underline">
                +91 6369260277
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
