import React, { useState } from 'react';
import { THREE_FAQS } from '../data/content';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#E7E4DE] py-20 sm:py-28 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="text-xs font-mono text-[#23374D] uppercase tracking-widest font-semibold">
            COMMON QUESTIONS
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-normal tracking-tight text-[#1C1C1C] [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5C5854] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Practical answers about our turnaround time, packages, and discovery calls.
          </p>
        </div>

        {/* 3 Short FAQs */}
        <div className="space-y-3.5">
          {THREE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D5D0C7] bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1C1C] group-hover:text-[#23374D] transition-colors">
                    {faq.question}
                  </h3>

                  <div className={`p-1.5 rounded-full bg-[#E7E4DE] text-[#68645F] group-hover:text-[#1C1C1C] transition-transform ${isOpen ? 'rotate-180 text-[#23374D]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#5C5854] leading-relaxed border-t border-[#EAE6DF] mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt linking to #contact */}
        <div className="mt-12 text-center text-xs text-[#5C5854] flex flex-col sm:flex-row items-center justify-center gap-1.5">
          <span>Have a question about your business?</span>
          <a
            href="#contact"
            className="text-[#23374D] hover:text-[#182736] font-medium inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request a call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
