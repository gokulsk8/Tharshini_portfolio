import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Eye,
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  if (!project) return null;

  const caseStudySteps = [
    { num: '01', title: 'PROBLEM', desc: project.caseStudyData?.problem },
    { num: '02', title: 'USER NEED', desc: project.caseStudyData?.userNeed },
    { num: '03', title: 'USER FLOW', flow: project.caseStudyData?.userFlow },
    { num: '04', title: 'WIREFRAMES', desc: project.caseStudyData?.wireframes },
    { num: '05', title: 'UI DESIGN', desc: project.caseStudyData?.uiDesign },
    { num: '06', title: 'PROTOTYPE', desc: project.caseStudyData?.prototype },
    { num: '07', title: 'LEARNINGS', list: project.caseStudyData?.learnings },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-4xl bg-[#D9D9D9] rounded-2xl shadow-2xl overflow-hidden border-4 border-[#171717] my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="bg-[#171717] px-6 py-4 sm:py-5 flex items-center justify-between border-b-4 border-[#FFB82E] shrink-0">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-[#FFB82E] rounded-full animate-pulse" />
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#FFB82E] uppercase tracking-wider font-body">
                {project.categoryLabel}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            id="close-case-study-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#252525] hover:bg-[#FFB82E] text-white hover:text-[#171717] flex items-center justify-center transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 relative rounded-xl overflow-hidden shadow-lg border-2 border-[#171717] bg-[#171717]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#171717]/90 text-[#FFB82E] text-[10px] font-bold px-2.5 py-1 rounded">
                Verified Academic Project
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 bg-[#FFB82E] text-[#171717] text-xs font-extrabold uppercase rounded-full tracking-wider">
                {project.category}
              </span>

              <h4 className="font-display text-2xl sm:text-3xl text-[#171717] font-bold uppercase leading-tight">
                {project.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-body">
                {project.fullDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-white text-[#171717] text-[11px] font-bold uppercase rounded border border-[#171717]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* IF UI/UX CASE STUDY: SHOW 7-STEP CASE STUDY BREAKDOWN */}
          {project.isCaseStudy && project.caseStudyData && (
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#171717] space-y-6">
              <div className="flex items-center justify-between border-b border-[#171717]/20 pb-3">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-[#171717]" />
                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    UI/UX CASE STUDY FRAMEWORK
                  </h4>
                </div>
                <span className="text-[10px] bg-[#FFB82E] text-[#171717] font-bold px-2 py-1 rounded uppercase">
                  7-Step Process
                </span>
              </div>

              {/* Step Navigator */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {caseStudySteps.map((step, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStepTab(sIdx)}
                    className={`py-2 px-2 rounded-lg text-center font-body text-xs font-bold transition-all duration-200 border ${
                      activeStepTab === sIdx
                        ? 'bg-[#171717] text-[#FFB82E] border-[#171717] shadow-sm'
                        : 'bg-[#E6E6E6] text-[#171717] border-[#171717]/10 hover:bg-[#FFB82E]/40'
                    }`}
                  >
                    <span className="block font-display text-sm leading-none">{step.num}</span>
                    <span className="block text-[9px] uppercase tracking-wider mt-0.5 truncate">
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Step Detail Content Card */}
              <div className="bg-[#E6E6E6] p-6 rounded-xl border border-[#171717]/20 relative">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#FFB82E] text-[#171717] font-display text-base font-black flex items-center justify-center shadow-sm">
                    {caseStudySteps[activeStepTab].num}
                  </span>
                  <h5 className="font-display text-xl sm:text-2xl text-[#171717] font-bold uppercase">
                    {caseStudySteps[activeStepTab].title}
                  </h5>
                </div>

                {caseStudySteps[activeStepTab].desc && (
                  <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-body">
                    {caseStudySteps[activeStepTab].desc}
                  </p>
                )}

                {caseStudySteps[activeStepTab].flow && (
                  <div className="space-y-2 mt-2">
                    {caseStudySteps[activeStepTab].flow?.map((fItem, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-[#171717]/10 text-xs font-semibold text-[#171717]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#171717] text-[#FFB82E] text-[10px] font-bold flex items-center justify-center shrink-0">
                          {fIdx + 1}
                        </span>
                        <span>{fItem}</span>
                      </div>
                    ))}
                  </div>
                )}

                {caseStudySteps[activeStepTab].list && (
                  <div className="space-y-2 mt-2">
                    {caseStudySteps[activeStepTab].list?.map((lItem, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-start space-x-2 bg-white p-3 rounded-lg border border-[#171717]/10 text-xs text-[#171717]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FFB82E] shrink-0 mt-0.5" />
                        <span>{lItem}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Design Screens Placeholder Notice as specified in prompt */}
              <div className="p-4 bg-[#FFB82E]/20 border-2 border-dashed border-[#FFB82E] rounded-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#171717] uppercase tracking-wider">
                    FIGMA SCREENS READY
                  </span>
                  <p className="text-[11px] text-[#555555]">
                    Comprehensive prototype screens and UI assets structured for interactive portfolio demonstrations.
                  </p>
                </div>
                <span className="text-[10px] bg-[#171717] text-white px-2.5 py-1 rounded font-bold uppercase">
                  Figma File
                </span>
              </div>
            </div>
          )}

          {/* IF TECHNICAL PROJECT (Railway / Bluetooth Speaker / Web): SHOW SYSTEM FLOW & HARDWARE COMPONENTS */}
          {project.technicalDetails && (
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#171717] space-y-6">
              <div className="flex items-center justify-between border-b border-[#171717]/20 pb-3">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-[#171717]" />
                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    ENGINEERING & SYSTEM ARCHITECTURE
                  </h4>
                </div>
                <span className="text-[10px] bg-[#171717] text-[#FFB82E] font-bold px-2 py-1 rounded uppercase">
                  Technical Breakdown
                </span>
              </div>

              {/* Concept Flow */}
              {project.technicalDetails.systemFlow && (
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171717] font-body flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFB82E]" />
                    <span>System Workflow & Logic:</span>
                  </span>

                  <div className="space-y-2">
                    {project.technicalDetails.systemFlow.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start space-x-3 bg-[#E6E6E6] p-3 rounded-lg border border-[#171717]/10"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#FFB82E] text-[#171717] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <p className="text-xs text-[#171717] font-medium font-body leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Component breakdown */}
              {project.technicalDetails.components && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171717] font-body flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFB82E]" />
                    <span>Key Hardware & Software Modules:</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.technicalDetails.components.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 bg-[#E6E6E6] rounded-lg border border-[#171717]/10 space-y-1"
                      >
                        <div className="font-display text-base text-[#171717] font-bold uppercase">
                          {comp.name}
                        </div>
                        <p className="text-[11px] text-[#555555] font-body leading-snug">
                          {comp.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {project.technicalDetails.toolsUsed && (
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#171717] uppercase tracking-wider mr-2">
                    Tools Used:
                  </span>
                  {project.technicalDetails.toolsUsed.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-[#171717] text-[#FFB82E] text-xs font-bold uppercase rounded-md tracking-wider"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#171717] px-6 py-4 flex items-center justify-between border-t-2 border-[#171717]/20 shrink-0">
          <span className="text-[11px] text-gray-400 uppercase font-semibold">
            Tharshini SK • Engineering & Design Portfolio
          </span>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#FFB82E] hover:bg-white text-[#171717] text-xs font-bold uppercase rounded-md shadow transition-all duration-200"
          >
            CLOSE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};
