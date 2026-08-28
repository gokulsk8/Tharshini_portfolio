import React from 'react';
import {
  Download,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  onOpenResumeModal,
}) => {
  const { profilePhoto } = useProfilePhoto();
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'resume', label: 'RESUME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <aside
      id="desktop-sidebar"
      className="hidden lg:flex flex-col w-[170px] shrink-0 fixed top-0 left-0 bottom-0 z-40 bg-[#FFB82E] shadow-2xl select-none"
    >
      {/* Top Header: 180px Dark Charcoal Rectangle with Circular Avatar */}
      <div className="h-[180px] bg-[#171717] flex flex-col items-center justify-center p-4 border-b-2 border-[#FFB82E]/30 shrink-0">
        <div
          className="w-24 h-24 rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-gray-400 cursor-pointer transition-transform hover:scale-105"
          onClick={() => onNavigate('home')}
        >
          <img
            src={profilePhoto}
            alt="Tharshini SK"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-3 text-[10px] text-white/60 tracking-[0.2em] font-bold uppercase">
          Tharshini SK
        </p>
      </div>

      {/* Navigation Panel */}
      <nav className="flex-1 bg-[#FFB82E] p-6 flex flex-col justify-between overflow-y-auto">
        <ul className="space-y-5 text-[11px] font-black uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`cursor-pointer transition-all duration-200 flex items-center ${
                  isActive
                    ? 'text-black font-black'
                    : 'text-black/40 hover:text-black'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black mr-3 shrink-0" />
                )}
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        {/* Footer Area with Resume CTA */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-[1px] h-10 bg-black/20" />
            <div className="text-[10px] leading-tight font-bold text-black/60 tracking-wider">
              PORTFOLIO <br /> RESUME
            </div>
          </div>

          <button
            id="sidebar-download-resume"
            onClick={onOpenResumeModal}
            className="w-full flex items-center justify-center space-x-1.5 py-2 px-2 bg-[#171717] hover:bg-black text-[#FFB82E] text-[10px] font-black uppercase tracking-wider rounded shadow-md transition-transform active:scale-95"
          >
            <Download className="w-3 h-3" />
            <span>RESUME</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

