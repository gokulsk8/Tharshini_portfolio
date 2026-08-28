import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Loader2,
  ZoomIn,
  ZoomOut,
  FileCheck,
} from 'lucide-react';
import { generateAndDownloadResumePDF, openResumeInNewTab } from '../utils/generateResumePDF';
import {
  PERSONAL_INFO,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenInNewTab = () => {
    openResumeInNewTab();
  };

  const handleDownloadPDF = () => {
    try {
      setIsGeneratingPDF(true);
      generateAndDownloadResumePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setTimeout(() => {
        setIsGeneratingPDF(false);
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#E6E6E6] rounded-2xl shadow-2xl overflow-hidden border-4 border-[#171717] my-4 flex flex-col max-h-[94vh]"
      >
        {/* Top Control Toolbar */}
        <div className="bg-[#171717] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b-4 border-[#FFB82E] shrink-0 print:hidden select-none">
          <div className="flex items-center space-x-2.5">
            <span className="w-3 h-3 bg-[#FFB82E] rounded-full animate-pulse" />
            <div>
              <h3 className="font-display text-lg sm:text-xl text-white font-black tracking-wider uppercase">
                THARSHINI SK — OFFICIAL RESUME
              </h3>
              <p className="text-[10px] text-[#FFB82E] font-bold uppercase tracking-widest hidden sm:block">
                DR. MCET (8.5 CGPA) • B.E. ECE
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Zoom Controls for previewing */}
            <div className="hidden md:flex items-center space-x-1 bg-[#252525] rounded-lg px-2 py-1 border border-white/10 text-white text-xs font-bold">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(75, prev - 10))}
                className="p-1 hover:text-[#FFB82E] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 text-[11px] font-mono">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
                className="p-1 hover:text-[#FFB82E] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Open in New Tab button */}
            <button
              onClick={handleOpenInNewTab}
              className="inline-flex items-center space-x-1.5 px-3 py-2 bg-[#252525] hover:bg-[#333333] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/10"
              title="Open Resume PDF in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#FFB82E]" />
              <span className="hidden sm:inline">Open in Tab</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-2 bg-[#252525] hover:bg-[#333333] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/10"
              title="Print via Browser"
            >
              <Printer className="w-3.5 h-3.5 text-[#FFB82E]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Direct PDF Download button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFB82E] hover:bg-[#ffa90a] active:scale-95 text-[#171717] rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-50"
              title="Download direct PDF file"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#252525] hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Stage */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 flex justify-center bg-[#525659]/10">
          {/* Exact A4 Standard Resume Sheet matching the physical resume */}
          <div
            id="printable-resume-content"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full max-w-[750px] bg-white text-[#171717] shadow-xl border border-gray-300 rounded-xs p-6 sm:p-10 font-sans print:p-0 print:border-none print:shadow-none print:transform-none select-text text-left leading-normal"
          >
            {/* ================= RESUME HEADER ================= */}
            <div className="text-center space-y-1.5 pb-4 border-b border-black">
              <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                THARSHINI SK
              </h1>
              
              <div className="text-xs sm:text-[13px] text-black flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span>
                  <strong>Email:</strong>{' '}
                  <a
                    href={PERSONAL_INFO.gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 hover:underline"
                    title="Send Email via Gmail"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </span>
                <span>|</span>
                <span>
                  <strong>Phone:</strong> {PERSONAL_INFO.phone}
                </span>
              </div>

              <div className="text-xs sm:text-[13px] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-0.5">
                <span>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    https://www.linkedin.com/in/tharshini-sk-0b40862b9
                  </a>
                </span>
                <span>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    https://github.com/Tharshinisk
                  </a>
                </span>
              </div>
            </div>

            {/* ================= OBJECTIVE ================= */}
            <div className="mt-4 space-y-1">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Objective:
              </h2>
              <p className="text-xs sm:text-[12.5px] text-gray-900 leading-relaxed text-justify">
                Seeking an opportunity to apply my skills in circuit design, embedded systems, software design and communication networks to develop practical industry experience. Aiming to apply academic knowledge to real-world challenges and support impactful engineering initiatives.
              </p>
            </div>

            {/* ================= AREA OF INTEREST ================= */}
            <div className="mt-4 space-y-1 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Area of Interest:
              </h2>
              <ol className="list-decimal list-inside text-xs sm:text-[12.5px] text-gray-900 pl-2 space-y-0.5">
                <li>VLSI design</li>
                <li>Embedded System</li>
              </ol>
            </div>

            {/* ================= EDUCATION ================= */}
            <div className="mt-4 space-y-2 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Education:
              </h2>
              
              <div className="space-y-2 text-xs sm:text-[12.5px] text-gray-900 pl-1">
                <div>
                  <p className="font-semibold text-black">
                    Bachelor of Engineering <span className="font-normal">| Dr. Mahalingam College of Engineering and Technology, Pollachi.</span>
                  </p>
                  <p className="text-gray-800">May 2026 | CGPA – 8.5%</p>
                </div>

                <div>
                  <p className="font-semibold text-black">
                    HSC <span className="font-normal">| Saratha Matric Higher Secondary School – Modachur</span>
                  </p>
                  <p className="text-gray-800">May, 2023 | 86%</p>
                </div>

                <div>
                  <p className="font-semibold text-black">
                    SSLC <span className="font-normal">| Saratha Matric Higher Secondary School - Modachur</span>
                  </p>
                  <p className="text-gray-800">March, 2021</p>
                </div>
              </div>
            </div>

            {/* ================= SKILLS ================= */}
            <div className="mt-4 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2 mb-2">
                Skills:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[12.5px] text-gray-900 pl-1">
                {/* Technical Skills */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-black underline decoration-1 underline-offset-2">
                    Technical Skills:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>
                      <strong>Programming Languages:</strong> C, Java
                    </li>
                    <li>
                      <strong>Web Technologies:</strong> HTML, CSS, JavaScript
                    </li>
                    <li>
                      <strong>Circuit Design:</strong> Analog Design, Layout Creation, Circuit Simulation.
                    </li>
                    <li>
                      <strong>Tools & Technologies:</strong> MATLAB, ADS Software, Figma, MULTISIM
                    </li>
                  </ul>
                </div>

                {/* Soft Skills */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-black underline decoration-1 underline-offset-2">
                    Soft Skills:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>
                      <strong>Communication:</strong> Good at verbal and written
                    </li>
                    <li>
                      <strong>Leadership Skills:</strong> Strong team coordination
                    </li>
                    <li>
                      <strong>Quick learner:</strong> Adaptive to new environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= PROJECTS ================= */}
            <div className="mt-4 space-y-2 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Projects:
              </h2>

              <div className="space-y-2 text-xs sm:text-[12.5px] text-gray-900 pl-1">
                <div>
                  <h3 className="font-bold text-black">
                    Reverse Engineering Project Bluetooth Speaker:
                  </h3>
                  <ul className="list-disc list-inside pl-2">
                    <li>
                      It helps understand the internal components such as the Bluetooth module, amplifier, battery, and speaker driver.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-black">
                    Automatic Railway Gate Control System:
                  </h3>
                  <ul className="list-disc list-inside pl-2">
                    <li>
                      An Automatic railway gate control system uses sensors and a microcontroller to detect an approaching train and automatically close the gate. After the train passes, the gate opens automatically, reducing accidents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= INTERNSHIPS ================= */}
            <div className="mt-4 space-y-1.5 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Internships:
              </h2>

              <div className="text-xs sm:text-[12.5px] text-gray-900 pl-1 space-y-1">
                <div className="flex items-center justify-between font-semibold text-black">
                  <span>Profenna Infotech – Web Development</span>
                  <span>[6 June, 2025 – 20 June, 2025]</span>
                </div>
                <ul className="list-disc list-inside pl-2 space-y-0.5">
                  <li>Learned practical web development during internship</li>
                  <li>Built a simple project using HTML and CSS</li>
                </ul>
              </div>
            </div>

            {/* ================= CERTIFICATIONS ================= */}
            <div className="mt-4 space-y-1 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Certifications:
              </h2>

              <ul className="list-disc list-inside text-xs sm:text-[12.5px] text-gray-900 pl-2 space-y-0.5">
                <li>Certification in Linguaskill and secured B1 grade</li>
                <li>Certification in Codsoft UI/UX design</li>
              </ul>
            </div>

            {/* ================= ACHIEVEMENTS ================= */}
            <div className="mt-4 space-y-1 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Achievements:
              </h2>

              <ul className="list-disc list-inside text-xs sm:text-[12.5px] text-gray-900 pl-2 space-y-0.5">
                <li>
                  Participated in TANCAM’s Hackathon for Tamil Nadu Women in Science and Engineering (TNWISE 2025), Hosur.
                </li>
              </ul>
            </div>

            {/* ================= EXTRACURRICULAR ACTIVITIES ================= */}
            <div className="mt-4 space-y-1 border-t border-black pt-2">
              <h2 className="text-xs sm:text-sm font-bold text-black uppercase underline decoration-1 underline-offset-2">
                Extracurricular Activities:
              </h2>

              <ul className="list-disc list-inside text-xs sm:text-[12.5px] text-gray-900 pl-2 space-y-0.5">
                <li>Member of National Service Scheme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


