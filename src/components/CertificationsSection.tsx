import React from 'react';
import {
  Award,
  Trophy,
  CheckCircle2,
  MapPin,
  Calendar,
} from 'lucide-react';
import {
  CERTIFICATIONS_DATA,
  ACHIEVEMENTS_DATA,
} from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#D9D9D9] border-t border-[#171717]/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* CERTIFICATIONS HEADER & CARDS */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
                CREDENTIALS & VALIDATION
              </span>
              <span className="h-[2px] w-16 bg-[#FFB82E]" />
            </div>

            <div className="relative">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
                CERTIFICATIONS
              </h2>
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
                CERTIFICATIONS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <div
                key={index}
                id={`cert-card-${index}`}
                className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-[#FFB82E] flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#FFB82E] flex items-center justify-center shadow-md">
                      <Award className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 bg-[#171717] text-[#FFB82E] text-xs font-black uppercase rounded-full tracking-wider">
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-[#171717] font-bold uppercase tracking-wide">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold text-[#FFB82E] bg-[#171717] px-2 py-0.5 rounded inline-block mt-1 uppercase font-body">
                      {cert.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] font-body leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#171717] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB82E]" />
                    <span>Verified Assessment</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">ID: VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div id="achievements" className="space-y-8 pt-8 border-t border-[#171717]/20">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
                HACKATHON PARTICIPATION
              </span>
              <span className="h-[2px] w-16 bg-[#FFB82E]" />
            </div>

            <div className="relative">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
                ACHIEVEMENTS
              </h2>
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
                ACHIEVEMENTS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {ACHIEVEMENTS_DATA.map((ach, index) => (
              <div
                key={index}
                id={`achievement-card-${index}`}
                className="bg-[#171717] text-white p-8 rounded-2xl shadow-xl border-t-4 border-[#FFB82E] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFB82E] text-[#171717] flex items-center justify-center shadow-md">
                      <Trophy className="w-5 h-5" />
                    </div>

                    <span className="px-3 py-1 bg-white/10 text-[#FFB82E] text-xs font-bold uppercase tracking-wider rounded-md border border-[#FFB82E]/30">
                      Hackathon Participant
                    </span>

                    <span className="flex items-center gap-1 text-xs text-gray-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ach.year}</span>
                    </span>

                    <span className="flex items-center gap-1 text-xs text-gray-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#FFB82E]" />
                      <span>{ach.location}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-white font-bold uppercase tracking-wide">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-bold text-[#FFB82E] uppercase font-body">
                    {ach.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="shrink-0 bg-[#252525] p-4 rounded-xl border border-white/10 text-center">
                  <span className="block font-display text-3xl text-[#FFB82E] font-black">
                    TNWISE
                  </span>
                  <span className="block text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-0.5">
                    Hosur • 2025
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
