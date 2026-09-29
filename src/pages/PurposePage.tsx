import React from 'react';
import { CheckCircle2, ShieldCheck, Factory } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CADENCE_ASSETS } from '../constants/companyAssets';
import { PageId } from '../types';

interface PurposePageProps {
  onNavigate: (page: PageId) => void;
}

export const PurposePage: React.FC<PurposePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] text-[#181A1E]">
      {/* Purpose Page Header */}
      <section className="py-16 sm:py-24 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
                ABOUT CADENCE FOODS
              </span>
              <span className="h-[1px] w-12 bg-[#C25737]" />
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-neutral-300">
              <img
                src={CADENCE_ASSETS.ontarioMade}
                alt="Ontario Made"
                className="h-6 w-auto"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-mono text-[#5C554E]">CERTIFIED ONTARIO MADE</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#111215] leading-[1.0] mb-8 text-balance">
              SCALE, QUALITY, AND OPPORTUNITY FOR LOCAL FOOD.
            </h1>
            <p className="text-xl sm:text-2xl text-[#5A544D] font-light leading-relaxed">
              We make it accessible and profitable for local producers to compete directly against the largest players.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Banner: The Official Cadence Foods Factory */}
      <section className="py-12 border-b border-[#E5E0D8] bg-[#F3EFE8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="relative overflow-hidden border border-[#DED7CD] shadow-lg">
            <ImageWithFallback
              src={CADENCE_ASSETS.factoryPhoto}
              alt="Cadence Foods official factory floor in Toronto, ON M6N 2V7, Canada"
              fallbackVariant="hero"
              aspectClassName="aspect-21/9 min-h-[380px]"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#111215]/90 backdrop-blur-md border border-neutral-700 max-w-xl text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#C25737] uppercase tracking-widest">
                  OFFICIAL PLANT PHOTO
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-xs font-mono text-neutral-300">TORONTO, ON M6N 2V7, CANADA</span>
              </div>
              <p className="text-sm font-medium text-neutral-200">
                Inside our commercial food processing and co-packing plant in Toronto, ON M6N 2V7, Canada. Built for scale, quality control, and local food expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Core Narrative */}
      <section className="py-20 sm:py-28 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: The Problem & The Mandate */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6 text-lg sm:text-xl text-[#3D3A36] leading-relaxed">
                <p className="text-2xl font-display font-bold text-[#111215] leading-snug">
                  Large multi-nationals dominate the food market, often sidelining brilliant local producers simply because they lack the scale and infrastructure to compete.
                </p>

                <div className="p-6 bg-[#F3EFE8] border-l-4 border-[#C25737]">
                  <p className="text-xl font-bold font-display text-[#111215]">
                    Cadence Foods was established to fill that void.
                  </p>
                </div>

                <p>
                  We are a modern food manufacturing partner designed to give local producers the economic advantage they need to thrive.
                </p>

                <p>
                  We make it accessible and profitable for them to compete directly against the largest players.
                </p>
              </div>

              {/* Highlight Statement */}
              <div className="p-8 bg-[#181A1E] text-white border border-neutral-800 shadow-md">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C25737] block mb-2">
                  OUR CORE BELIEF
                </span>
                <p className="text-3xl font-display font-bold text-white italic mb-4">
                  “We are here to make a difference.”
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Local food represents culinary craftsmanship and community vitality. We supply the commercial filling lines, bulk ingredient procurement, and certified food safety systems required to scale recipes for supermarkets and wholesale distributors.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Evidence & Strategic Advantages */}
            <div className="lg:col-span-6 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImageWithFallback
                  src={CADENCE_ASSETS.ingredientsSourcing}
                  alt="Quality ingredient sourcing"
                  fallbackVariant="procurement"
                  aspectClassName="aspect-square"
                />
                <ImageWithFallback
                  src={CADENCE_ASSETS.productionLine}
                  alt="Cadence Foods production filling"
                  fallbackVariant="copacking"
                  aspectClassName="aspect-square"
                />
              </div>

              {/* Economic Advantages Breakdown */}
              <div className="p-8 bg-[#F3EFE8] border border-[#E5E0D8] space-y-6">
                <h3 className="text-xl font-bold font-display text-[#111215]">
                  How We Level The Playing Field:
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#181A1E]">Bulk Sourcing Economics</div>
                      <div className="text-xs text-[#5C554E]">Access to wholesale pricing on oils, spices, packaging glass, and barrier pouches usually reserved for conglomerates.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#181A1E]">Turnkey GFSI Audits</div>
                      <div className="text-xs text-[#5C554E]">Overcome the high compliance cost of building your own facility; our Toronto plant is pre-certified for national grocer standards.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C25737] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-[#181A1E]">Co-Investment in Equipment</div>
                      <div className="text-xs text-[#5C554E]">Need specialized equipment for a proprietary recipe? We partner and co-invest so capital equipment never holds you back.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Location Callout */}
      <section className="py-20 bg-[#111215] text-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C25737]">
                HEADQUARTERS & MANUFACTURING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Located in the heart of Toronto's food ecosystem.
              </h2>
              <p className="text-neutral-300 text-base max-w-2xl leading-relaxed">
                Operating out of Toronto, ON M6N 2V7, Canada, Cadence Foods connects local food producers with immediate highway freight access, Ontario distribution hubs, and cold-chain logistics.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={() => onNavigate('capabilities')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#181A1E] bg-[#FBF9F5] hover:bg-white transition-all text-center cursor-pointer"
              >
                VIEW OUR CAPABILITIES
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C25737] hover:bg-[#AA4729] transition-all text-center cursor-pointer"
              >
                START A CONVERSATION
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
