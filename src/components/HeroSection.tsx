import React, { useRef } from 'react';
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Camera,
  Upload,
  RotateCcw,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenResumeModal,
}) => {
  const { profilePhoto, setCustomPhoto, resetToDefault, isCustom } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto(file);
    }
  };

  const quickOrbitButtons = [
    { id: 'home', letter: 'H', label: 'Home' },
    { id: 'about', letter: 'U', label: 'UI/UX & About' },
    { id: 'resume', letter: 'R', label: 'Resume' },
    { id: 'portfolio', letter: 'P', label: 'Portfolio' },
    { id: 'contact', letter: 'C', label: 'Contact' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-10 sm:pt-14 pb-8 px-6 sm:px-12 lg:px-16 xl:px-20 bg-[#D9D9D9] text-[#171717] overflow-hidden"
    >
      {/* Right Edge Solid Yellow Accent Line from design spec */}
      <div className="absolute top-0 right-0 h-full w-[16px] sm:w-[20px] bg-[#FFB82E] pointer-events-none z-10" />

      <div className="w-full max-w-6xl mx-auto flex-grow flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          {/* Left 60% Hero Text Container */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <p className="text-[#FFB82E] font-black tracking-[0.3em] text-xs sm:text-sm mb-2 uppercase">
              HI THERE!
            </p>

            <h1 className="font-display text-[65px] sm:text-[85px] lg:text-[100px] leading-[0.85] font-black tracking-tighter uppercase mb-4 select-none text-[#171717]">
              I'M <br />
              THARSHINI
            </h1>

            <p className="text-lg sm:text-xl font-bold tracking-tight opacity-80 uppercase mb-4 text-[#171717]">
              UI/UX DESIGNER / ENGINEERING GRADUATE
            </p>

            {/* Solid Yellow Brutalist Accent Box */}
            <div className="bg-[#FFB82E] inline-block self-start px-4 py-2 mb-6 shadow-sm">
              <p className="text-xs sm:text-sm font-black uppercase tracking-tighter text-[#171717]">
                READY TO CREATE USER-CENTERED EXPERIENCES
              </p>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#555555] mb-8 font-medium">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-more-about-btn"
                onClick={() => onNavigate('about')}
                className="bg-[#171717] text-[#FFB82E] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center shadow-lg active:scale-95 cursor-pointer"
              >
                <span>More about me</span>
                <span className="ml-3 text-lg font-bold">→</span>
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="bg-white hover:bg-[#E6E6E6] text-[#171717] px-6 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center shadow-md border border-black/10 active:scale-95 cursor-pointer space-x-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right 40% Geometric Portrait Orbit */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Concentric Geometric Rings */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] xl:w-[460px] xl:h-[460px] border-[1px] border-black/10 rounded-full pointer-events-none" />
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] xl:w-[440px] xl:h-[440px] border-[2px] border-dashed border-[#FFB82E]/40 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />

            {/* Central Round Image with White Border */}
            <div className="relative group w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] xl:w-[380px] xl:h-[380px] rounded-full border-[8px] sm:border-[10px] border-white shadow-2xl overflow-hidden z-10 bg-gray-300">
              <img
                src={profilePhoto}
                alt="Tharshini SK"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Photo Change / Real Photo Upload Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-[#FFB82E] hover:bg-white text-[#171717] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  title="Upload exact original photo from device"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Choose Real Photo</span>
                </button>
                <p className="text-[10px] text-white/90 font-medium mt-2 max-w-[200px]">
                  Select your original picture without any edits
                </p>
                {isCustom && (
                  <button
                    type="button"
                    onClick={resetToDefault}
                    className="mt-2 text-[10px] text-white/70 hover:text-white underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Reset default</span>
                  </button>
                )}
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Floating Quick Upload Badge (Mobile/Desktop friendly) */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 bg-[#171717] hover:bg-[#FFB82E] text-white hover:text-[#171717] border-2 border-white px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-lg flex items-center space-x-1.5 transition-all cursor-pointer sm:flex"
              title="Click to select your exact original photo"
            >
              <Camera className="w-3 h-3 text-[#FFB82E] group-hover:text-[#171717]" />
              <span>{isCustom ? 'Change Photo' : 'Upload Real Photo'}</span>
            </button>

            {/* Vertical Stack of Brutalist Orbit Letter/Icon Buttons */}
            <div className="absolute -right-2 sm:-right-6 xl:-right-10 top-1/2 -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4 z-20">
              {quickOrbitButtons.map((btn, idx) => (
                <button
                  key={btn.id}
                  id={`hero-orbit-btn-${btn.id}`}
                  onClick={() => onNavigate(btn.id)}
                  title={btn.label}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display text-base sm:text-lg font-bold shadow-md cursor-pointer transition-all duration-200 ${
                    idx === 0
                      ? 'bg-[#171717] text-[#FFB82E] hover:scale-110'
                      : 'bg-white text-[#171717] hover:bg-[#FFB82E] hover:scale-110'
                  }`}
                  aria-label={btn.label}
                >
                  {btn.letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Metric & Social Bar from Spec */}
      <div className="w-full max-w-6xl mx-auto border-t border-black/10 px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/40 backdrop-blur-xs rounded-2xl mt-8 shadow-xs">
        {/* Metric Triplet */}
        <div className="flex items-center space-x-8 sm:space-x-12">
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-black leading-none text-[#171717]">8.5</p>
            <p className="text-[10px] uppercase font-bold text-gray-600 tracking-tighter mt-0.5">
              CGPA
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-black leading-none uppercase text-[#171717]">
              UI/UX
            </p>
            <p className="text-[10px] uppercase font-bold text-gray-600 tracking-tighter mt-0.5">
              Focus
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-black leading-none uppercase text-[#171717]">
              FIGMA
            </p>
            <p className="text-[10px] uppercase font-bold text-gray-600 tracking-tighter mt-0.5">
              Primary Tool
            </p>
          </div>
        </div>

        {/* Right Get In Touch Icons */}
        <div className="flex items-center space-x-4">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
            Get in touch
          </p>
          <div className="flex space-x-2">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-black/15 bg-white flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs"
              title="LinkedIn"
            >
              Li
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-black/15 bg-white flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs"
              title="GitHub"
            >
              Gh
            </a>
            <a
              href={PERSONAL_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-black/15 bg-white flex items-center justify-center text-xs font-bold hover:bg-[#FFB82E] hover:text-[#171717] hover:border-black transition-all cursor-pointer shadow-xs"
              title="Compose Email (Gmail)"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-black/15 bg-white flex items-center justify-center text-xs font-bold hover:bg-[#25D366] hover:text-white hover:border-black transition-all cursor-pointer shadow-xs"
              title="WhatsApp Chat (+91 6369260277)"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

