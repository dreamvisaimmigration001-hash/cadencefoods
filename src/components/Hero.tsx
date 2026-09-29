import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Factory, Award } from 'lucide-react';
import { VisualAsset } from './VisualAssets';

interface HeroProps {
  onStartConversation: () => void;
  onExploreCapabilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartConversation,
  onExploreCapabilities,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#111215] text-[#FBF9F5] overflow-hidden pt-24 pb-16">
      {/* Background Visual Asset & Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <VisualAsset variant="hero" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/65 to-[#111215]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pt-10 pb-8 flex flex-col justify-between">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C25737]" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E5DFD5]">
              CADENCE FOODS INC. · TORONTO
            </p>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#FBF9F5] leading-[0.95] mb-8 text-balance">
            SCALE GREAT FOOD.
          </h1>

          {/* Secondary Headline / Supporting Copy */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#D1CAC0] font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Helping local food producers bring exceptional products to market with the scale, expertise, and infrastructure to compete.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-16">
            <button
              onClick={onStartConversation}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all cursor-pointer shadow-lg hover:shadow-orange-950/40 flex items-center justify-center gap-2"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreCapabilities}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FBF9F5] bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700 hover:border-neutral-500 transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>EXPLORE OUR CAPABILITIES</span>
              <ArrowDown className="w-4 h-4 text-[#C25737]" />
            </button>
          </div>
        </div>

        {/* Baseline Trust & Infrastructure Strip (No pill boxes, clean unboxed metadata) */}
        <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-400">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-neutral-200">GFSI Certified Standard</div>
              <div className="text-xs text-neutral-400">Audited food safety and quality control systems for national retail compliance.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Factory className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-neutral-200">Toronto Facility & Logistics</div>
              <div className="text-xs text-neutral-400">Toronto, ON M6N 2V7, Canada hub connecting local culinary craft to large-scale distribution.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-neutral-200">Turnkey Co-Packing & Co-Investment</div>
              <div className="text-xs text-neutral-400">From recipe refinement and procurement to specialized equipment sourcing.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
