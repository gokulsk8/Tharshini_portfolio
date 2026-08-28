import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Layers,
  Calendar,
  Building2,
  Award,
  Download,
  Eye,
  CheckCircle2,
  Check,
} from 'lucide-react';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  SKILLS_DATA,
} from '../data/portfolioData';
import { generateAndDownloadResumePDF } from '../utils/generateResumePDF';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDirectDownload = async () => {
    try {
      setDownloading(true);
      await generateAndDownloadResumePDF();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section
      id="resume"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#D9D9D9] border-t border-[#171717]/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
                EXPERIENCE & QUALIFICATIONS
              </span>
              <span className="h-[2px] w-16 bg-[#FFB82E]" />
            </div>

            <div className="relative">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
                RESUME
              </h2>
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
                RESUME
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="resume-section-preview-btn"
              onClick={onOpenResumeModal}
              className="inline-flex items-center space-x-2 px-5 py-3 bg-white hover:bg-gray-100 text-[#171717] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-[#171717]"
            >
              <Eye className="w-4 h-4 text-[#171717]" />
              <span>VIEW RESUME</span>
            </button>

            <button
              id="resume-section-download-btn"
              onClick={handleDirectDownload}
              disabled={downloading}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171717] hover:bg-[#252525] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-transparent hover:border-[#FFB82E]"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-[#FFB82E]" />
                  <span className="text-[#FFB82E]">DOWNLOADED!</span>
                </>
              ) : downloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#FFB82E] border-t-transparent rounded-full animate-spin" />
                  <span>GENERATING PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#FFB82E]" />
                  <span>DOWNLOAD PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Two Major Timeline Columns: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* EDUCATION TIMELINE (7 Cols on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-[#171717]">
              <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center text-[#FFB82E] shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-[#171717] font-bold uppercase tracking-wide">
                  EDUCATION
                </h3>
                <span className="text-[11px] font-semibold text-[#555555] uppercase tracking-wider font-body">
                  Academic Milestones
                </span>
              </div>
            </div>

            <div className="relative pl-6 space-y-6">
              {/* Vertical timeline connector line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#171717]/25" />

              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  id={`edu-item-${idx}`}
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#FFB82E]"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-[#171717] border-2 border-[#FFB82E] group-hover:scale-125 transition-transform duration-200" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#171717] text-[#FFB82E] text-[11px] font-bold uppercase rounded-md tracking-wider">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </span>

                    {edu.score && (
                      <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#FFB82E] text-[#171717] text-xs font-black uppercase rounded-md tracking-wider shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.score}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    {edu.degree}
                  </h4>

                  <p className="text-xs sm:text-sm font-semibold text-[#555555] font-body flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#171717]" />
                    <span>{edu.institution}</span>
                  </p>

                  {edu.details && (
                    <p className="text-xs text-[#555555] font-body mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE TIMELINE (5 Cols on large screens) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-[#171717]">
              <div className="w-10 h-10 rounded-full bg-[#FFB82E] flex items-center justify-center text-[#171717] shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-[#171717] font-bold uppercase tracking-wide">
                  EXPERIENCE
                </h3>
                <span className="text-[11px] font-semibold text-[#555555] uppercase tracking-wider font-body">
                  Internship Exposure
                </span>
              </div>
            </div>

            <div className="relative pl-6 space-y-6">
              {/* Vertical timeline connector line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#171717]/25" />

              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  id={`exp-item-${idx}`}
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#171717]"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-[#FFB82E] border-2 border-[#171717] group-hover:scale-125 transition-transform duration-200" />

                  <div className="mb-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#171717] text-[#FFB82E] text-[11px] font-bold uppercase rounded-md tracking-wider">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    {exp.role}
                  </h4>

                  <p className="text-xs sm:text-sm font-bold text-[#171717] font-body flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#FFB82E]" />
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-xs text-[#555555] font-body mt-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
                      {exp.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2 text-xs text-[#555555]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB82E] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS SECTION - Structured Yellow/Black Tags (No Fake Bars) */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 pb-3 border-b-2 border-[#171717]">
            <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center text-[#FFB82E] shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-[#171717] font-bold uppercase tracking-wide">
                TECHNICAL & DESIGN SKILLS
              </h3>
              <span className="text-[11px] font-semibold text-[#555555] uppercase tracking-wider font-body">
                Verified Skill Arsenal (No Inflated Bars)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.map((cat, idx) => (
              <div
                key={idx}
                id={`skill-category-${idx}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-[#FFB82E] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                      {cat.title}
                    </h4>
                    <span className="text-[10px] bg-[#171717] text-[#FFB82E] font-bold px-2 py-0.5 rounded">
                      {cat.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-block px-3 py-1.5 bg-[#E6E6E6] hover:bg-[#FFB82E] text-[#171717] font-body text-xs font-bold uppercase tracking-wide rounded-md transition-all duration-200 hover:scale-105 cursor-default border border-[#171717]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#555555] font-semibold">
                  <span>Verified</span>
                  <span className="w-2 h-2 rounded-full bg-[#FFB82E]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
