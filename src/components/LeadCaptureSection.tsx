import React, { useState, useEffect } from 'react';
import { normalizeDigits, isValidIranianMobile, formatIranianMobile, formatToman } from '../utils/phone';
import { LocalizedLeadFormData, ServicePackage } from '../types';
import { THREE_PACKAGES } from '../data/content';
import { ArrowRight, CheckCircle2, User, Phone, Briefcase, Globe, Clock, Copy, Check, Tag } from 'lucide-react';

interface LeadCaptureSectionProps {
  selectedPackage?: ServicePackage | null;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ selectedPackage }) => {
  const [formData, setFormData] = useState<LocalizedLeadFormData>({
    fullName: '',
    mobileNumber: '',
    businessName: '',
    websiteOrInstagram: '',
    selectedService: selectedPackage ? selectedPackage.name : THREE_PACKAGES[0].name,
    projectDetails: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedData, setSubmittedData] = useState<LocalizedLeadFormData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        selectedService: selectedPackage.name
      }));
    }
  }, [selectedPackage]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const normalized = normalizeDigits(e.target.value);
    setFormData({ ...formData, mobileNumber: normalized });
    if (errors.mobileNumber) {
      setErrors({ ...errors, mobileNumber: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanMobile = normalizeDigits(formData.mobileNumber).replace(/[\s\-\(\)]/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Please enter your mobile number';
    } else if (!isValidIranianMobile(cleanMobile)) {
      newErrors.mobileNumber = 'Please enter a valid mobile number (e.g. 0912 XXX XXXX)';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or shop name';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please briefly tell us about your project or current page';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const normalizedMobile = formatIranianMobile(cleanMobile);
    const finalData = { ...formData, mobileNumber: normalizedMobile };
    setSubmittedData(finalData);

    const subject = encodeURIComponent(`Project Inquiry: ${finalData.selectedService} (${finalData.businessName})`);
    const body = encodeURIComponent(
      `Full name: ${finalData.fullName}\n` +
      `Mobile number: ${finalData.mobileNumber}\n` +
      `Business name: ${finalData.businessName}\n` +
      `Website or Instagram: ${finalData.websiteOrInstagram || 'None'}\n` +
      `Selected service: ${finalData.selectedService}\n\n` +
      `Project details:\n${finalData.projectDetails}`
    );

    window.location.href = `mailto:forurmah@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyDetails = () => {
    if (!submittedData) return;
    const text =
      `Full name: ${submittedData.fullName}\n` +
      `Mobile: ${submittedData.mobileNumber}\n` +
      `Business: ${submittedData.businessName}\n` +
      `Website/Instagram: ${submittedData.websiteOrInstagram || 'None'}\n` +
      `Service: ${submittedData.selectedService}\n` +
      `Project: ${submittedData.projectDetails}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="bg-[#E2DFD8] py-20 sm:py-28 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-mono text-[#23374D] uppercase tracking-widest font-semibold">
            GET IN TOUCH
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-normal tracking-tight text-[#1C1C1C] [text-wrap:balance]">
            Request a Call
          </h2>
          <p className="text-[#5C5854] text-sm sm:text-base leading-relaxed">
            Tell us about your business. We will review your page and schedule a 30-minute discovery call in Tehran time (Asia/Tehran).
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-[#D5D0C7] bg-white p-7 sm:p-10 shadow-sm text-left">
          
          {!submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Selected Package Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#1C1C1C] flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#23374D]" />
                  <span>Selected Package</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {THREE_PACKAGES.map((pkg) => {
                    const isSelected = formData.selectedService === pkg.name;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedService: pkg.name })}
                        className={`p-3.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#23374D] border-[#23374D] text-white font-medium shadow-sm'
                            : 'bg-[#F5F2EB] border-[#DCD8CF] text-[#5C5854] hover:border-[#23374D]/40'
                        }`}
                      >
                        <div className={`font-semibold ${isSelected ? 'text-white' : 'text-[#1C1C1C]'}`}>
                          {pkg.name}
                        </div>
                        <div className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-[#E7E4DE]' : 'text-[#23374D]'}`}>
                          {formatToman(pkg.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. Full name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1C1C1C]">
                    Full name <span className="text-[#23374D]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#68645F] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Negin Karimi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] text-sm text-[#1C1C1C] placeholder-[#68645F]/60 focus:border-[#23374D] focus:outline-none transition-colors"
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-700">{errors.fullName}</p>}
                </div>

                {/* 2. Mobile number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1C1C1C]">
                    Mobile number <span className="text-[#23374D]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#68645F] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="0912 XXX XXXX"
                      value={formData.mobileNumber}
                      onChange={handleMobileChange}
                      dir="ltr"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] text-sm font-mono text-[#1C1C1C] placeholder-[#68645F]/60 focus:border-[#23374D] focus:outline-none transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-[#68645F]">
                    Accepts 09... and +98... formats
                  </span>
                  {errors.mobileNumber && <p className="text-xs text-red-700">{errors.mobileNumber}</p>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 3. Business name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1C1C1C]">
                    Business name <span className="text-[#23374D]">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-[#68645F] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Negin Boutique"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] text-sm text-[#1C1C1C] placeholder-[#68645F]/60 focus:border-[#23374D] focus:outline-none transition-colors"
                    />
                  </div>
                  {errors.businessName && <p className="text-xs text-red-700">{errors.businessName}</p>}
                </div>

                {/* 4. Website or Instagram page (Optional) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#1C1C1C]">
                      Website or Instagram page
                    </label>
                    <span className="text-[11px] text-[#68645F]">Optional</span>
                  </div>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-[#68645F] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. instagram.com/yourshop"
                      value={formData.websiteOrInstagram}
                      onChange={(e) => setFormData({ ...formData, websiteOrInstagram: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] text-sm text-[#1C1C1C] placeholder-[#68645F]/60 focus:border-[#23374D] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

              </div>

              {/* 5. Tell us about your project */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#1C1C1C]">
                  Tell us about your project <span className="text-[#23374D]">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you sell, what you want to improve, or any questions about the package..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full p-4 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] text-sm text-[#1C1C1C] placeholder-[#68645F]/60 focus:border-[#23374D] focus:outline-none transition-colors"
                />
                {errors.projectDetails && <p className="text-xs text-red-700">{errors.projectDetails}</p>}
              </div>

              {/* Action Bar */}
              <div className="pt-2 border-t border-[#DCD8CF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#5C5854]">
                  <Clock className="w-3.5 h-3.5 text-[#23374D] shrink-0" />
                  <span>Calls held in Tehran time (Asia/Tehran)</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-medium text-white bg-[#23374D] hover:bg-[#182736] rounded-full transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23374D]/20"
                >
                  <span>Request a call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </form>
          ) : (
            /* Clear Confirmation State */
            <div className="space-y-5 text-left">
              <div className="p-5 rounded-xl bg-[#F2EFE9] border border-[#D5D0C7] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#23374D] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-serif text-xl font-normal text-[#1C1C1C]">
                    Inquiry Prepared for {submittedData.fullName}
                  </h3>
                  <p className="text-xs text-[#5C5854]">
                    Your email app has been opened with your inquiry details. You can also copy the summary below to send it directly.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F6F2] border border-[#D5D0C7] space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-[#EAE6DF] pb-1.5">
                  <span className="text-[#68645F]">Full name:</span>
                  <span className="text-[#1C1C1C] font-semibold">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE6DF] pb-1.5">
                  <span className="text-[#68645F]">Mobile:</span>
                  <span className="text-[#23374D] font-semibold">{submittedData.mobileNumber}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE6DF] pb-1.5">
                  <span className="text-[#68645F]">Business:</span>
                  <span className="text-[#1C1C1C] font-semibold">{submittedData.businessName}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE6DF] pb-1.5">
                  <span className="text-[#68645F]">Website/Instagram:</span>
                  <span className="text-[#1C1C1C]">{submittedData.websiteOrInstagram || 'None'}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE6DF] pb-1.5">
                  <span className="text-[#68645F]">Package:</span>
                  <span className="text-[#23374D] font-semibold">{submittedData.selectedService}</span>
                </div>
                <div className="pt-1 text-[#1C1C1C] font-sans">
                  <span className="text-[#68645F] font-mono block text-xs mb-1">Details:</span>
                  {submittedData.projectDetails}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D5D0C7] bg-white hover:bg-[#F2EFE9] text-xs font-medium text-[#1C1C1C] flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5 text-[#68645F]" />}
                  <span>{copied ? 'Copied' : 'Copy inquiry details'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="text-xs text-[#5C5854] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                >
                  ← Edit details or send another inquiry
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
