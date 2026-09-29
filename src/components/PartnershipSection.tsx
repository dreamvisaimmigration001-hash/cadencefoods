import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface PartnershipSectionProps {
  onStartConversation: () => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onStartConversation }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#161412] text-[#FBF9F5] overflow-hidden border-b border-neutral-800">
      {/* Background Photographic Image & Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80"
          alt="Artisan food maker and manufacturing partnership"
          fallbackVariant="partnership"
          aspectClassName="h-full w-full"
          className="h-full w-full opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111215] via-[#111215]/90 to-[#111215]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              THE CADENCE COMMITMENT
            </span>
            <span className="h-[1px] w-12 bg-neutral-600" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#FBF9F5] leading-[1.0] mb-8 text-balance">
            YOUR SUCCESS IS PART OF OUR PROCESS.
          </h2>

          {/* Core Guarantee Statement */}
          <div className="p-8 sm:p-10 bg-[#1E1C1A]/90 border border-neutral-700/80 mb-10 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#F5EDE0] leading-snug italic text-balance mb-6">
              “Our guarantee is simple: we provide every partner and every customer with our best and help them succeed.”
            </p>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl">
              We know that behind every independent food product is years of dedication, family heritage, and culinary passion. We treat your recipe with the same exacting respect you do in your own kitchen—amplified by commercial scale, strict GFSI food safety, and economic leverage.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={onStartConversation}
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 shadow-xl"
            >
              <span>PARTNER WITH CADENCE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="text-sm text-neutral-400 font-mono">
              Toronto Headquarters · Serving Canadian & Export Food Producers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
