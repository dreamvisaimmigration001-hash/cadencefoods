import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialCategory?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCategory = '',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: initialCategory || 'Co-Packing',
    message: initialNotes || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[From Assessment]: ${initialNotes}` : initialNotes
      }));
    }
  }, [initialCategory, initialNotes]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.company.trim()) newErrors.company = 'Please enter your company or brand name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide some details about your product or project.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F3EFE8] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              07 / CONNECT WITH CADENCE
            </span>
            <span className="h-[1px] w-12 bg-[#C25737]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#111215] mb-4">
            LET'S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-lg sm:text-xl text-[#5A544D] leading-relaxed">
            Have a product idea, manufacturing requirement, or partnership opportunity? Let's start a conversation.
          </p>
        </div>

        {/* 2-Column Split: Facility Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Address & Contact Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 bg-[#FBF9F5] border border-[#E5E0D8] space-y-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#786F66] block mb-2">
                  HEADQUARTERS & MANUFACTURING FACILITY
                </span>
                <h3 className="text-2xl font-bold font-display text-[#111215] mb-2">
                  CADENCE FOODS INC.
                </h3>
                <div className="flex items-start gap-3 text-base text-[#3D3A36] leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#C25737] shrink-0 mt-1" />
                  <div>
                    Toronto, ON M6N 2V7<br />
                    Canada
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E0D8]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#786F66] block mb-2">
                  INQUIRIES
                </span>
                <div className="flex items-center gap-3 text-base text-[#111215]">
                  <Mail className="w-5 h-5 text-[#C25737] shrink-0" />
                  <a
                    href="mailto:hello@cadencefoods.com"
                    className="font-medium hover:text-[#C25737] transition-colors underline decoration-neutral-300 underline-offset-4"
                  >
                    hello@cadencefoods.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E0D8]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#786F66] block mb-2">
                  OPERATING STANDARDS
                </span>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  GFSI benchmarked facility · Clean-room blending · Temperature-controlled staging · Loading dock logistics for dry and reefer transport.
                </p>
              </div>
            </div>

            {/* Quick Consultation Promise */}
            <div className="p-6 bg-[#181A1E] text-white">
              <h4 className="text-sm font-bold font-display uppercase tracking-wider text-[#C25737] mb-2">
                CONFIDENTIALITY GUARANTEED
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All recipes, proprietary formulations, and business concepts are treated with strict confidentiality under mutual non-disclosure agreements before formula sharing.
              </p>
            </div>
          </div>

          {/* Right Column: Clean, High-End Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] p-8 sm:p-12 border border-[#E5E0D8] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#C25737]/10 text-[#C25737] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-[#111215]">
                  Inquiry Received.
                </h3>
                <p className="text-base text-[#5C554E] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#111215]">{formData.name}</span>. A member of our Toronto production and engineering team will review your project details and follow up within 24 business hours.
                </p>
                <div className="p-4 bg-[#F3EFE8] border border-[#E5E0D8] max-w-md mx-auto text-left text-xs font-mono text-[#5C554E] space-y-1">
                  <div>Company: <span className="text-[#111215] font-semibold">{formData.company}</span></div>
                  <div>Category: <span className="text-[#111215] font-semibold">{formData.category}</span></div>
                  <div>Direct: <span className="text-[#111215] font-semibold">{formData.email}</span></div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      category: 'Co-Packing',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#181A1E] border border-[#181A1E] hover:bg-[#181A1E] hover:text-white transition-colors cursor-pointer"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D8]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#786F66]">
                    PROJECT INQUIRY FORM
                  </span>
                  <span className="text-xs text-neutral-400">
                    * Required fields
                  </span>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#181A1E] focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#D1CAC0] focus:border-[#C25737]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                      Company / Brand *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Artisan Foods Co."
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#181A1E] focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500' : 'border-[#D1CAC0] focus:border-[#C25737]'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@artisanfoods.com"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#181A1E] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#D1CAC0] focus:border-[#C25737]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                      Phone Number <span className="text-[#888077] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (416) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-[#D1CAC0] focus:border-[#C25737] text-sm text-[#181A1E] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Category of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D1CAC0] focus:border-[#C25737] text-sm text-[#181A1E] focus:outline-none transition-colors"
                  >
                    <option value="Co-Packing">Co-Packing & Private Label Manufacturing</option>
                    <option value="Procurement & Recipe Development">Procurement & Recipe Scaling</option>
                    <option value="Food Safety & GFSI">Food Safety Certification & QA</option>
                    <option value="Co-Investment / Equipment">Specialized Equipment Co-Investment</option>
                    <option value="General Partnership">General Wholesale / Retail Partnership</option>
                  </select>
                </div>

                {/* Message / Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#181A1E] mb-2">
                    Tell Us About Your Product / Project *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current production setup, recipe type, target batch volume, retail targets, or any specialized equipment required..."
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#181A1E] focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#D1CAC0] focus:border-[#C25737]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <span>START A CONVERSATION</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-[11px] text-[#7A7268]">
                  By submitting, you agree to receive follow-up correspondence regarding food manufacturing from Cadence Foods Inc.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
