import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowRight,
  Download,
  Copy,
  Check,
  Send,
  MessageSquare,
  MessageCircle,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResumeModal,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submittedChannel, setSubmittedChannel] = useState<string>('WhatsApp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'UI/UX Design Full-Time',
    message: '',
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const buildFormattedMessage = () => {
    return `Hello Tharshini,

I'm reaching out regarding an opportunity:
• Name: ${formData.name || 'Recruiter'}
• Company: ${formData.company || 'Not specified'}
• Email: ${formData.email || 'Not specified'}
• Opportunity: ${formData.roleType}

Message:
${formData.message || 'I would like to discuss opportunities with you.'}`;
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = buildFormattedMessage();
    const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmittedChannel('WhatsApp');
    setFormSubmitted(true);
  };

  const handleSendSMS = () => {
    const text = buildFormattedMessage();
    const cleanPhone = PERSONAL_INFO.phone.replace(/\s+/g, '');
    const smsUrl = `sms:${cleanPhone}?&body=${encodeURIComponent(text)}`;
    window.location.href = smsUrl;
    setSubmittedChannel('SMS / Text Message');
    setFormSubmitted(true);
  };

  const handleSendEmail = () => {
    const text = buildFormattedMessage();
    const subject = `Opportunity Inquiry: ${formData.roleType} - ${formData.name || 'Recruiter'} (${formData.company || ''})`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSubmittedChannel('Gmail');
    setFormSubmitted(true);
  };

  const contactCards = [
    {
      id: 'whatsapp',
      label: 'WHATSAPP',
      value: PERSONAL_INFO.phone,
      display: '+91 6369260277',
      href: `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Tharshini, I saw your portfolio and would like to connect!")}`,
      buttonText: 'Chat on WhatsApp',
      icon: MessageCircle,
      subtitle: 'Instant WhatsApp Chat',
      isExternal: true,
    },
    {
      id: 'phone',
      label: 'PHONE & SMS',
      value: PERSONAL_INFO.phone,
      display: '+91 6369260277',
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      buttonText: 'Call / SMS',
      icon: Phone,
      isExternal: false,
    },
    {
      id: 'email',
      label: 'EMAIL',
      value: PERSONAL_INFO.email,
      display: PERSONAL_INFO.email,
      href: PERSONAL_INFO.gmailComposeUrl,
      buttonText: 'Open in Gmail',
      icon: Mail,
      isExternal: true,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: PERSONAL_INFO.linkedinUrl,
      display: PERSONAL_INFO.linkedin,
      href: PERSONAL_INFO.linkedinUrl,
      buttonText: 'Visit LinkedIn',
      icon: Linkedin,
      subtitle: 'Connect on LinkedIn',
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#D9D9D9] border-t border-[#171717]/10"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-[#FFB82E] rounded-sm rotate-45" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/80 font-body">
              GET IN TOUCH
            </span>
            <span className="h-[2px] w-16 bg-[#FFB82E]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#171717] font-black uppercase tracking-tight">
              CONTACT
            </h2>
            <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-stroke-charcoal opacity-15 font-black uppercase tracking-tight absolute -top-2 left-1 pointer-events-none select-none -z-10">
              CONTACT
            </div>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-[#171717] font-bold uppercase tracking-wide">
            FEEL FREE TO CONNECT
          </h3>

          <p className="text-sm sm:text-base text-[#171717] leading-relaxed max-w-2xl font-medium">
            Open to UI/UX, design and technology opportunities. Send messages directly to Tharshini's WhatsApp or SMS, or connect via Gmail and LinkedIn.
          </p>
        </div>

        {/* 4 Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((c) => {
            const Icon = c.icon;
            const isCopied = copiedField === c.id;

            return (
              <div
                key={c.id}
                id={`contact-channel-${c.id}`}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FFB82E] flex flex-col justify-between space-y-4 hover:-translate-y-1 group relative cursor-pointer"
                onClick={() => {
                  if (c.isExternal) {
                    window.open(c.href, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = c.href;
                  }
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#171717] text-[#FFB82E] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#FFB82E] group-hover:text-[#171717] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(c.value, c.id);
                      }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-[#FFB82E] text-[#171717] transition-colors shadow-xs"
                      title={`Copy ${c.label}`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div>
                    <span className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide block">
                      {c.label}
                    </span>
                    <p className="text-xs text-[#555555] font-mono break-all font-semibold mt-1">
                      {c.display}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <a
                    href={c.href}
                    target={c.isExternal ? '_blank' : undefined}
                    rel={c.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-[#171717] group-hover:text-[#171717] bg-gray-100 group-hover:bg-[#FFB82E] px-3 py-1.5 rounded-md uppercase tracking-wider flex items-center gap-1.5 transition-all w-full justify-center"
                  >
                    <span>{c.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large Black/Yellow Recruitment Banner & Quick Recruiter Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Large CTA Card */}
          <div className="lg:col-span-5 bg-[#171717] text-white p-8 sm:p-10 rounded-2xl shadow-2xl border-4 border-[#FFB82E] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FFB82E] text-[#171717] text-xs font-extrabold uppercase rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>READY FOR OPPORTUNITIES</span>
              </span>

              <h3 className="font-display text-4xl sm:text-5xl text-white font-black uppercase tracking-tight leading-none">
                LET'S CREATE SOMETHING IMPACTFUL.
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Available for UI/UX design roles, product design opportunities, engineering roles, and frontend positions.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/20">
              <a
                id="contact-cta-whatsapp-btn"
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Tharshini, I saw your portfolio and would like to discuss an opportunity!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display text-xl font-black uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                id="contact-cta-email-btn"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tharshinimoorth2006@gmail.com&su=Job%20Opportunity%20Inquiry%20-%20Tharshini%20SK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-[#FFB82E] hover:bg-white text-[#171717] font-display text-sm font-black uppercase tracking-wider rounded-xl shadow-md transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>COMPOSE IN GMAIL</span>
              </a>

              <button
                id="contact-download-resume-btn"
                onClick={onOpenResumeModal}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-[#252525] hover:bg-white/20 text-white font-body text-xs font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#FFB82E]" />
                <span>DOWNLOAD THARSHINI'S RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Direct Message / Recruiter Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-md border-2 border-[#171717]">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-[#171717] font-bold uppercase tracking-wide">
                    DIRECT MESSAGE
                  </h4>
                  <span className="text-[11px] font-semibold text-[#555555]">
                    Directs your inquiry to Tharshini's WhatsApp or SMS (+91 6369260277)
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Instant Delivery</span>
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-[#FFB82E]/20 border-2 border-[#FFB82E] rounded-xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#171717] text-[#FFB82E] flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h5 className="font-display text-2xl text-[#171717] font-bold uppercase">
                  MESSAGE READY IN {submittedChannel.toUpperCase()}!
                </h5>
                <p className="text-xs text-[#171717] font-medium max-w-md mx-auto">
                  Your message has been pre-formatted for <strong>{submittedChannel}</strong>. Simply click send in WhatsApp/SMS to dispatch directly to Tharshini.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-bold uppercase text-[#171717] underline hover:text-[#B8860B]"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendWhatsApp} className="space-y-4 font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-[#171717] tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HR Manager / Design Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-[#FFB82E] focus:outline-none text-xs bg-[#D9D9D9]/20 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-[#171717] tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tech Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-[#FFB82E] focus:outline-none text-xs bg-[#D9D9D9]/20 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-[#171717] tracking-wider">
                      Official Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-[#FFB82E] focus:outline-none text-xs bg-[#D9D9D9]/20 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-[#171717] tracking-wider">
                      Opportunity Type
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-[#FFB82E] focus:outline-none text-xs bg-white font-medium"
                    >
                      <option value="UI/UX Design Full-Time">UI/UX Design Full-Time</option>
                      <option value="UI/UX Internship">UI/UX Internship</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Full-Time Engineering">Full-Time Engineering Role</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-[#171717] tracking-wider">
                    Message / Job Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide details about the role or interview scheduling..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-[#FFB82E] focus:outline-none text-xs bg-[#D9D9D9]/20 font-medium resize-none"
                  />
                </div>

                {/* Dispatch Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>DIRECT MESSAGE VIA WHATSAPP</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleSendSMS}
                      className="py-2.5 px-3 bg-[#171717] hover:bg-[#252525] text-[#FFB82E] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-black/10"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Send as SMS / Text</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-[#171717] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-gray-300"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#171717]" />
                      <span>Send via Gmail</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
