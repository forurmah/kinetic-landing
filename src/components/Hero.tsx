import React from 'react';
import { ArrowRight, Check, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#E7E4DE] py-16 sm:py-24 border-b border-[#D8D4CD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-[#1C1C1C] leading-[1.12] [text-wrap:balance]">
              Make it easier for customers to contact you.
            </h1>

            <p className="text-base sm:text-lg text-[#5C5854] leading-relaxed max-w-2xl font-normal">
              Simple landing pages and practical marketing improvements for small businesses and online stores in Iran.
            </p>

            {/* Practical Customer Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-sm text-[#222222]">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#DCD8CF] flex items-center justify-center text-[#23374D] shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Replace slow DM order taking</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#DCD8CF] flex items-center justify-center text-[#23374D] shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Fast mobile page loading</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#DCD8CF] flex items-center justify-center text-[#23374D] shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Clear photos, sizes, and toman prices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#DCD8CF] flex items-center justify-center text-[#23374D] shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Direct WhatsApp and call links</span>
              </div>
            </div>

            {/* Pill CTAs matching template */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-sm font-medium text-white bg-[#23374D] hover:bg-[#182736] rounded-full transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23374D]/20 cursor-pointer"
              >
                <span>Request a call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-7 py-4 text-sm font-medium text-[#1C1C1C] hover:text-[#23374D] bg-transparent hover:bg-[#DDD9D1] border border-[#23374D]/40 rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>View services</span>
              </a>
            </div>

            {/* Small supporting line */}
            <p className="text-xs text-[#68645F] pt-0.5 font-medium">
              One-time packages from 3,000,000 to 5,000,000 toman.
            </p>
          </div>

          {/* Right Column: Editorial Visual with Demo Preview Card (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="relative">
              
              {/* Editorial Portrait matching the template screenshot */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#D5D0C7] aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional consultation"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle gradient vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Embedded Understated Demo Preview Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#D8D4CD] rounded-xl p-4 shadow-xl text-left">
                  <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-2 mb-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#23374D]">
                      Demo preview
                    </span>
                    <span className="text-[11px] text-[#68645F]">
                      Mobile view
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-[#E7E4DE] flex items-center justify-center text-[#23374D]">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1C1C1C]">Negin Boutique</div>
                        <div className="text-[10px] text-[#68645F]">Tehran · 950,000 toman</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Open
                    </span>
                  </div>

                  {/* Non-interactive static visual button */}
                  <div className="mt-2.5 pt-2 border-t border-[#EAE6DF]">
                    <div className="w-full py-2 text-center text-xs font-medium text-white bg-[#23374D] rounded-full select-none">
                      Send an inquiry
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
