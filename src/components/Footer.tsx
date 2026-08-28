import React from 'react';
import {
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  ArrowUp,
  Heart,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-[#171717] text-white py-12 px-4 sm:px-8 lg:px-12 xl:px-16 border-t-4 border-[#FFB82E] relative select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Branding */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-3 h-3 bg-[#FFB82E] rounded-full" />
            <h2 className="font-display text-3xl font-black text-white uppercase tracking-wider">
              {PERSONAL_INFO.name}
            </h2>
          </div>

          <p className="font-display text-sm tracking-widest text-[#FFB82E] uppercase font-bold">
            UI/UX DESIGN • TECHNOLOGY • CONTINUOUS LEARNING
          </p>

          <p className="text-xs text-gray-400 font-body">
            © 2026 Tharshini SK • UI/UX Designer & Engineering Graduate
          </p>
        </div>

        {/* Social Icons & Back to top button */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#252525] hover:bg-[#FFB82E] text-white hover:text-[#171717] flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#252525] hover:bg-[#FFB82E] text-white hover:text-[#171717] flex items-center justify-center transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#252525] hover:bg-[#FFB82E] text-white hover:text-[#171717] flex items-center justify-center transition-all duration-200"
              aria-label="Compose Email via Gmail"
              title="Compose Email via Gmail"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#252525] hover:bg-[#25D366] text-white hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp (+91 6369260277)"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </div>

          <button
            onClick={onScrollToTop}
            className="group flex items-center space-x-2 py-2.5 px-4 rounded-full bg-[#252525] hover:bg-[#FFB82E] text-white hover:text-[#171717] text-xs font-bold uppercase tracking-wider transition-all duration-200"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
