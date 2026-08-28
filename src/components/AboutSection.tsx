import React from 'react';
import {
  Palette,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Download,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  WHAT_I_DO,
  RECRUITER_HIGHLIGHTS,
} from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResumeModal,
}) => {
  const getWhatIDoIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-7 h-7 text-[#171717]" />;
      case 'code':
        return <Code2 className="w-7 h-7 text-[#171717]" />;
      case 'cpu':
        return <Cpu className="w-7 h-7 text-[#171717]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#171717]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#D9D9D9] border-t border-[#171717]/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
              GET TO KNOW ME
            </span>
            <span className="h-[2px] w-16 bg-[#FFB82E]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
              ABOUT ME
            </h2>
            <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
              ABOUT ME
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#171717] font-body flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFB82E]" />
            <span>I'm Tharshini SK, UI/UX Designer & Engineering Graduate</span>
          </h3>

          <p className="text-sm sm:text-base text-[#171717] leading-relaxed max-w-4xl font-medium pt-1">
            {PERSONAL_INFO.aboutIntro}
          </p>
        </div>

        {/* WHAT I DO SECTION - 3 Yellow Circular Icons with Structured Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#171717]/20 pb-3">
            <h3 className="font-display text-3xl sm:text-4xl text-[#171717] font-bold uppercase tracking-wide">
              WHAT I DO<span className="text-[#FFB82E]">?</span>
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717]/70 font-body">
              Core Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_I_DO.map((item, index) => (
              <div
                key={item.id}
                id={`what-i-do-card-${index}`}
                className="group bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FFB82E] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative top yellow accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFB82E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  {/* Yellow Circular Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-[#FFB82E] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {getWhatIDoIcon(item.icon)}
                  </div>

                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#171717] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB82E] mr-1.5" />
                  <span>Industry Ready Skill</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECRUITER HIGHLIGHTS - 6 Realistic Profile Highlights */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#171717]/20 pb-3">
            <h3 className="font-display text-3xl sm:text-4xl text-[#171717] font-bold uppercase tracking-wide">
              RECRUITER HIGHLIGHTS
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717]/70 font-body">
              Verified Academic & Project Metrics
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {RECRUITER_HIGHLIGHTS.map((hl, idx) => (
              <div
                key={idx}
                id={`recruiter-stat-${idx}`}
                className="group bg-[#171717] p-5 rounded-xl text-center shadow-md hover:bg-[#252525] transition-all duration-300 border-b-4 border-[#FFB82E] flex flex-col items-center justify-center space-y-2 hover:-translate-y-1"
              >
                {/* Yellow stat circle/box */}
                <div className="w-14 h-14 rounded-full bg-[#FFB82E] text-[#171717] flex items-center justify-center font-display text-xl sm:text-2xl font-black tracking-tight shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {hl.stat}
                </div>

                <span className="font-display text-white text-base font-bold tracking-wide uppercase leading-tight pt-1">
                  {hl.label}
                </span>

                {hl.sublabel && (
                  <span className="text-[10px] text-[#FFB82E] font-medium tracking-wider uppercase font-body">
                    {hl.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Recruitment Callout Banner */}
        <div className="bg-[#FFB82E] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border-2 border-[#171717]">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <GraduationCap className="w-5 h-5 text-[#171717]" />
              <span className="font-display text-lg font-bold text-[#171717] uppercase tracking-wider">
                ENGINEERING & DESIGN PROFILE
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#171717]/90 font-body">
              Seeking opportunities in UI/UX Design, Product Design, and Frontend Development.
            </p>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 bg-[#171717] hover:bg-[#252525] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4 text-[#FFB82E]" />
            <span>VIEW COMPLETE RESUME</span>
          </button>
        </div>
      </div>
    </section>
  );
};
