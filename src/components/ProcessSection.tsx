import React from 'react';
import { THREE_STEP_PROCESS } from '../data/content';
import { ArrowRight, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#E2DFD8] py-20 sm:py-28 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="text-xs font-mono text-[#23374D] uppercase tracking-widest font-semibold">
            THREE-STEP PROCESS
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-normal tracking-tight text-[#1C1C1C] [text-wrap:balance]">
            How We Work Together
          </h2>
          <p className="text-[#5C5854] text-base leading-relaxed">
            A straightforward process to design, review, and launch your mobile page in 10 to 14 days.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {THREE_STEP_PROCESS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[#D5D0C7] bg-white p-8 flex flex-col justify-between shadow-sm hover:border-[#23374D]/40 transition-colors group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-4">
                  <span className="font-serif text-2xl font-normal text-[#23374D]">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#68645F]">
                    <Clock className="w-3.5 h-3.5 text-[#23374D]" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#1C1C1C] group-hover:text-[#23374D] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C5854] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#EAE6DF] flex items-center text-xs text-[#68645F]">
                <span>Step {step.number} of 03</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Pill */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-medium text-white bg-[#23374D] hover:bg-[#182736] px-8 py-3.5 rounded-full transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23374D]/20 cursor-pointer"
          >
            <span>Request a call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
