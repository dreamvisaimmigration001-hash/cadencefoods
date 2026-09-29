import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Factory, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { WhyCadenceSection } from '../components/WhyCadenceSection';
import { ProcessSection } from '../components/ProcessSection';
import { ScaleAssessment } from '../components/ScaleAssessment';
import { PartnershipSection } from '../components/PartnershipSection';
import { CoInvestmentFeature } from '../components/CoInvestmentFeature';
import { CADENCE_ASSETS } from '../constants/companyAssets';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId, category?: string, notes?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#111215] text-[#FBF9F5] overflow-hidden pt-28 pb-16">
        {/* Background Visual Photo Asset: The Official Cadence Foods Factory Photo */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={CADENCE_ASSETS.factoryPhoto}
            alt="Cadence Foods Toronto Food Manufacturing Facility"
            fallbackVariant="hero"
            aspectClassName="h-full w-full"
            className="h-full w-full opacity-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-[#111215]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pt-10 pb-8 flex flex-col justify-between">
          <div className="max-w-4xl">
            {/* Eyebrow & Ontario Made badge */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#C25737]" />
                <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E5DFD5]">
                  CADENCE FOODS INC. · TORONTO
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-neutral-700">
                <img
                  src={CADENCE_ASSETS.ontarioMade}
                  alt="Certified Ontario Made"
                  className="h-6 w-auto"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[11px] font-mono tracking-wider text-neutral-400">
                  ONTARIO MADE
                </span>
              </div>
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
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all cursor-pointer shadow-lg hover:shadow-orange-950/40 flex items-center justify-center gap-2"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('capabilities')}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FBF9F5] bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700 hover:border-neutral-500 transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>EXPLORE OUR CAPABILITIES</span>
                <ArrowUpRight className="w-4 h-4 text-[#C25737]" />
              </button>
            </div>
          </div>

          {/* Baseline Trust & Infrastructure Strip */}
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

      {/* Purpose Teaser Section */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#181A1E] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              OUR PURPOSE
            </span>
            <span className="h-[1px] w-12 bg-[#D1CAC0]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111215] leading-[1.05] text-balance">
                SCALE, QUALITY, AND OPPORTUNITY FOR LOCAL FOOD.
              </h2>
              <p className="mt-6 text-lg text-[#5A544D] leading-relaxed">
                “Large multi-nationals dominate the food market, often sidelining brilliant local producers simply because they lack the scale and infrastructure to compete. Cadence Foods was established to fill that void.”
              </p>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('purpose')}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#181A1E] hover:bg-[#C25737] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>READ OUR FULL STORY & PURPOSE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative p-6 sm:p-8 bg-[#F3EFE8] border-l-4 border-[#C25737]">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C25737] block mb-2">
                  THE CADENCE GUARANTEE
                </span>
                <p className="text-2xl sm:text-3xl font-display font-bold text-[#111215] italic leading-tight">
                  “We are here to make a difference.”
                </p>
                <p className="mt-3 text-sm text-[#6E665C]">
                  We make it accessible and profitable for local producers to compete directly against the largest players.
                </p>
              </div>

              {/* Official company photo preview */}
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src={CADENCE_ASSETS.ingredientsSourcing}
                  alt="Culinary ingredients and formulation"
                  fallbackVariant="procurement"
                  aspectClassName="aspect-4/3"
                />
                <ImageWithFallback
                  src={CADENCE_ASSETS.productionLine}
                  alt="Cadence Foods co-packing production line"
                  fallbackVariant="copacking"
                  aspectClassName="aspect-4/3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section Preview */}
      <CapabilitiesSection
        onSelectInquiry={(cat) => onNavigate('contact', cat)}
      />

      {/* Why Cadence Section */}
      <WhyCadenceSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Process Section */}
      <ProcessSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Interactive Scale Assessment */}
      <ScaleAssessment
        onSelectPlan={(stage, product, volume) => {
          onNavigate(
            'contact',
            'Co-Packing',
            `Selected Stage: ${stage} | Product: ${product} | Target Volume: ${volume}`
          );
        }}
      />

      {/* Partnership Section */}
      <PartnershipSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Co-Investment Feature */}
      <CoInvestmentFeature
        onTalkToTeam={() =>
          onNavigate(
            'contact',
            'Co-Investment / Equipment',
            'Inquiry regarding specialized machinery co-investment.'
          )
        }
      />
    </div>
  );
};
