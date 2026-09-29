import React from 'react';
import { ArrowRight, Wrench, Shield, TrendingUp, Cpu } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface CoInvestmentFeatureProps {
  onTalkToTeam: () => void;
}

export const CoInvestmentFeature: React.FC<CoInvestmentFeatureProps> = ({ onTalkToTeam }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
            CAPITAL & MACHINERY CO-INVESTMENT
          </span>
          <span className="h-[1px] w-12 bg-[#C25737]" />
        </div>

        {/* Editorial Container */}
        <div className="border border-[#181A1E] bg-[#181A1E] text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#C25737] text-white text-xs font-mono font-bold uppercase tracking-wider mb-6">
                PROPRIETARY PROCESS PARTNERSHIP
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 leading-[1.05] text-balance">
                HAVE A PROCESS THAT NEEDS SOMETHING SPECIAL?
              </h2>

              <p className="text-lg sm:text-xl text-[#E5DFD5] leading-relaxed mb-8 font-light">
                “If there is a special process that requires specialized equipment, we offer the option to source new equipment to meet your needs.”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-700 mb-10 text-sm">
                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Custom Tooling & Toolpaths</span>
                    <span className="text-xs text-neutral-400">Custom thermal jackets, aseptic dosing, micro-filtration, or specialized bottling heads.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Shared Capex Burden</span>
                    <span className="text-xs text-neutral-400">Eliminates crippling upfront capital machinery purchases so you can reinvest in brand distribution.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Full Facility Integration</span>
                    <span className="text-xs text-neutral-400">Machinery is installed, calibrated, and maintained by our certified engineers in Toronto.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">GFSI Audited Calibration</span>
                    <span className="text-xs text-neutral-400">Every new piece of machinery is immediately incorporated into our GFSI food safety management protocols.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onTalkToTeam}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#181A1E] bg-[#FBF9F5] hover:bg-white active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>TALK TO OUR TEAM</span>
                <ArrowRight className="w-4 h-4 text-[#C25737]" />
              </button>
            </div>
          </div>

          {/* Right Column: Industrial Machinery Photographic Visual */}
          <div className="lg:col-span-5 relative bg-[#111215] border-t lg:border-t-0 lg:border-l border-neutral-800 min-h-[350px] lg:min-h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Specialized industrial food processing equipment and machinery"
              fallbackVariant="machinery"
              aspectClassName="h-full w-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#181A1E]/80 backdrop-blur-md px-3 py-1.5 border border-neutral-700 text-[10px] font-mono tracking-widest text-[#E5DFD5]">
              CO-INVESTMENT ARCHITECTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
