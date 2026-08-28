import React from 'react';

interface RightRailNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const RightRailNav: React.FC<RightRailNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const railItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'resume', label: 'RESUME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'certifications', label: 'CREDENTIALS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <aside
      id="right-vertical-rail"
      className="hidden 2xl:flex fixed right-0 top-0 bottom-0 w-16 z-30 flex-col items-center justify-center space-y-10 bg-white/20 backdrop-blur-xs border-l border-black/5 select-none"
    >
      <div className="w-[1px] h-24 bg-black/20" />

      <div className="flex flex-col items-center space-y-8">
        {railItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <div
              key={item.id}
              className="relative group flex items-center justify-center cursor-pointer"
              onClick={() => onNavigate(item.id)}
            >
              {/* Tooltip on hover */}
              <div className="absolute right-8 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-150 bg-[#171717] text-[#FFB82E] text-[10px] font-black uppercase tracking-widest py-1 px-2.5 rounded shadow-lg whitespace-nowrap z-30">
                {item.label}
              </div>

              {/* Dot indicator */}
              <div
                id={`right-rail-dot-${item.id}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FFB82E] shadow-[0_0_8px_#FFB82E] scale-125'
                    : 'bg-black/15 group-hover:bg-black/40 group-hover:scale-110'
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="w-[1px] h-24 bg-black/20" />
    </aside>
  );
};

