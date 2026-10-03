import React from 'react';
import { TWO_EXAMPLE_PROJECTS } from '../data/content';
import { MapPin, ArrowRight } from 'lucide-react';

export const ExampleProjects: React.FC = () => {
  return (
    <section id="examples" className="bg-[#E7E4DE] py-20 sm:py-28 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="text-xs font-mono text-[#23374D] uppercase tracking-widest font-semibold">
            REPRESENTATIVE WORK
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-normal tracking-tight text-[#1C1C1C] [text-wrap:balance]">
            Two Example Projects
          </h2>
          <p className="text-[#5C5854] text-base leading-relaxed">
            Practical examples showing how a simple mobile page helps customers find what they need and place inquiries without delay.
          </p>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {TWO_EXAMPLE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[#D5D0C7] bg-[#F2EFE9] p-8 sm:p-10 flex flex-col justify-between hover:border-[#23374D]/30 transition-all group shadow-sm"
            >
              <div className="space-y-5">
                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#23374D] font-semibold">{project.projectTypeLabel}</span>
                  <span className="text-[#D5D0C7]">·</span>
                  <span className="text-[#1C1C1C] flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#23374D]" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-[#D5D0C7]">·</span>
                  <span className="text-[#68645F]">{project.categoryLabel}</span>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1C1C1C] group-hover:text-[#23374D] transition-colors [text-wrap:balance]">
                  {project.headline}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#5C5854] leading-relaxed">
                  {project.summary}
                </p>

                {/* Problem & Solution Box */}
                <div className="space-y-3 p-5 rounded-xl bg-white border border-[#D8D4CD] text-xs">
                  <div>
                    <span className="font-semibold text-[#1C1C1C]">Before: </span>
                    <span className="text-[#5C5854]">{project.challenge}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-[#23374D]">The Solution: </span>
                    <span className="text-[#1C1C1C]">{project.solution}</span>
                  </div>
                </div>
              </div>

              {/* Representative Persona Footer */}
              <div className="pt-6 mt-6 border-t border-[#D8D4CD] flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#1C1C1C]">{project.representativeContact}</div>
                  <div className="text-[#68645F]">{project.role}, {project.businessName}</div>
                </div>

                <a
                  href="#contact"
                  className="text-[#23374D] hover:text-[#182736] font-medium inline-flex items-center gap-1"
                >
                  <span>Request a call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
