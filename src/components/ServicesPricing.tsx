import React from 'react';
import { THREE_PACKAGES } from '../data/content';
import { formatToman } from '../utils/phone';
import { Check, ArrowRight } from 'lucide-react';
import { ServicePackage } from '../types';

interface ServicesPricingProps {
  onSelectService: (pkg: ServicePackage) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  const handleChooseService = (pkg: ServicePackage) => {
    onSelectService(pkg);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-[#E7E4DE] py-20 sm:py-28 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="text-xs font-mono text-[#23374D] uppercase tracking-widest font-semibold">
            PACKAGES & RATES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-normal tracking-tight text-[#1C1C1C] [text-wrap:balance]">
            Simple services. Clear prices.
          </h2>
          <p className="text-[#5C5854] text-base leading-relaxed">
            All packages are one-time projects, not monthly retainers. Choose the scope that fits your current business stage.
          </p>
        </div>

        {/* Exactly 3 One-Time Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch text-left">
          {THREE_PACKAGES.map((pkg, index) => {
            const isMiddleCard = index === 1;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                  isMiddleCard
                    ? 'bg-white border-[#23374D]/30 shadow-md ring-1 ring-[#23374D]/10'
                    : 'bg-[#F2EFE9] border-[#D5D0C7] hover:border-[#23374D]/30'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Header: Name, Price, Audience */}
                  <div className="space-y-2">
                    <div className="inline-block text-[11px] font-mono font-medium text-[#5C5854] bg-[#E7E4DE] px-2.5 py-0.5 rounded-full border border-[#D5D0C7]">
                      {pkg.engagementType}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1C1C1C]">
                      {pkg.name}
                    </h3>
                    <div className="text-2xl sm:text-[26px] font-medium text-[#1C1C1C] font-sans tracking-tight pt-1">
                      {formatToman(pkg.price)}
                    </div>
                    <p className="text-xs text-[#5C5854] leading-relaxed pt-1 min-h-[34px]">
                      {pkg.targetAudience}
                    </p>
                  </div>

                  {/* Includes Section */}
                  <div className="space-y-2.5 border-t border-[#DCD8CF] pt-5">
                    <div className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-wider font-mono">
                      Includes:
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#222222]">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#23374D] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes Section */}
                  {pkg.excludes && (
                    <div className="border-t border-[#DCD8CF] pt-3 text-[11px] text-[#68645F] italic">
                      {pkg.excludes}
                    </div>
                  )}

                </div>

                {/* Pill Action Button */}
                <div className="pt-6 mt-6 border-t border-[#DCD8CF]">
                  <button
                    type="button"
                    onClick={() => handleChooseService(pkg)}
                    className="w-full py-3.5 px-4 text-xs font-medium rounded-full bg-[#23374D] hover:bg-[#182736] text-white transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23374D]/20 active:scale-[0.99]"
                  >
                    <span>Choose this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Required Exclusions Note */}
        <div className="mt-12 p-5 rounded-xl bg-[#F0EDE7] border border-[#D5D0C7] text-left">
          <p className="text-xs text-[#5C5854]">
            <strong className="text-[#1C1C1C]">Note:</strong> Domain, hosting, advertising spend, and ongoing management are not included.
          </p>
        </div>

      </div>
    </section>
  );
};
