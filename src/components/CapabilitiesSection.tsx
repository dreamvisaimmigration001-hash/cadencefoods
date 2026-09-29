import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { CADENCE_ASSETS } from '../constants/companyAssets';

interface CapabilityItem {
  id: string;
  num: string;
  category: string;
  headline: string;
  description: string;
  imgSrc: string;
  variant: 'copacking' | 'procurement' | 'foodsafety' | 'machinery';
  badge?: string;
  highlights: string[];
}

const capabilities: CapabilityItem[] = [
  {
    id: 'copacker',
    num: '01',
    category: 'CO-PACKER',
    headline: 'YOUR PRODUCT. OUR PRODUCTION POWER.',
    description:
      'We take your product idea from concept to production-ready. We produce private label products for retailers and food producers. Bring your own recipe, or work with our team to develop something new.',
    imgSrc: CADENCE_ASSETS.factoryPhoto,
    variant: 'copacking',
    highlights: [
      'Turnkey private label co-packing at our Toronto plant',
      'Scalable batch runs & flexible packaging',
      'Precise temperature-controlled manufacturing',
      'Continuous quality monitoring & filling lines'
    ]
  },
  {
    id: 'procurement',
    num: '02',
    category: 'PROCUREMENT & RECIPE DEVELOPMENT',
    headline: 'FROM INGREDIENTS TO A FINISHED RECIPE.',
    description:
      'We source ingredients and packaging through our supplier network, including imported ingredients, helping bring your product concept to reality.',
    imgSrc: CADENCE_ASSETS.ingredientsSourcing,
    variant: 'procurement',
    highlights: [
      'Extensive domestic & imported ingredient network',
      'Commercial formulation & recipe scaling',
      'Packaging material sourcing & validation',
      'Bulk purchasing economics passed to local producers'
    ]
  },
  {
    id: 'food-safety',
    num: '03',
    category: 'FOOD SAFETY',
    headline: 'QUALITY YOU CAN BUILD ON.',
    description:
      'We are a GFSI certified facility employing the highest standards in product quality and control.',
    imgSrc: CADENCE_ASSETS.productionLine,
    variant: 'foodsafety',
    badge: 'GFSI CERTIFIED',
    highlights: [
      'GFSI benchmarked facility standard',
      'Rigorous HACCP & critical control protocols',
      'End-to-end lot tracing and testing',
      'Audit-ready documentation for tier-1 retailers'
    ]
  },
  {
    id: 'co-investment',
    num: '04',
    category: 'CO-INVESTMENT OPPORTUNITY',
    headline: 'THE RIGHT EQUIPMENT FOR THE RIGHT IDEA.',
    description:
      'If a special process requires specialized equipment, we offer the option to source new equipment to meet your needs.',
    imgSrc: CADENCE_ASSETS.machineryPackaging,
    variant: 'machinery',
    badge: 'CO-INVESTMENT MODEL',
    highlights: [
      'Capital partnership for specialized machinery',
      'Tailored engineering to proprietary processes',
      'Shared growth risk and aligned incentives',
      'Overcomes capital expenditure hurdles'
    ]
  }
];

interface CapabilitiesSectionProps {
  onSelectInquiry: (category: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectInquiry }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCap = capabilities[activeIdx];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#F3EFE8] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D8D2C7]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
                CAPABILITIES
              </span>
              <span className="h-[1px] w-12 bg-[#C25737]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111215]">
              FROM IDEA TO PRODUCTION.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base sm:text-lg text-[#5A544D] max-w-md font-normal">
            One partner. From concept and ingredients to production and food safety.
          </p>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Capability List */}
          <div className="col-span-6 flex flex-col justify-between space-y-3">
            {capabilities.map((cap, index) => {
              const isActive = index === activeIdx;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveIdx(index)}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`p-6 transition-all duration-300 cursor-pointer border text-left ${
                    isActive
                      ? 'bg-[#FBF9F5] border-[#181A1E] shadow-sm translate-x-2'
                      : 'bg-[#EAE4DA]/50 border-transparent hover:bg-[#EAE4DA] hover:border-[#D1CAC0]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#C25737]">
                        {cap.num}
                      </span>
                      <span className="text-xs font-mono tracking-widest text-[#6B635A] uppercase">
                        {cap.category}
                      </span>
                    </div>

                    {cap.badge && (
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 bg-[#C25737] text-white">
                        {cap.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111215] mb-2 leading-snug">
                    {cap.headline}
                  </h3>

                  <p className="text-sm text-[#4A453F] leading-relaxed line-clamp-3">
                    {cap.description}
                  </p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#E5E0D8] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#C25737] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Active Capability Spotlight</span>
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectInquiry(cap.category);
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#111215] hover:text-[#C25737] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        Inquire about {cap.category}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage & Detailed Spec Panel */}
          <div className="col-span-6 flex flex-col border border-[#181A1E] bg-[#111215] overflow-hidden text-[#FBF9F5] relative shadow-xl">
            {/* Visual Panel Display with Authentic Company Photo & Fallback */}
            <div className="h-80 sm:h-96 w-full relative">
              <ImageWithFallback
                src={activeCap.imgSrc}
                alt={activeCap.headline}
                fallbackVariant={activeCap.variant}
                aspectClassName="h-full w-full"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#111215]/85 px-2.5 py-1 text-neutral-200 backdrop-blur-sm border border-neutral-700">
                  STAGE: {activeCap.num} / {activeCap.category}
                </span>
                {activeCap.badge && (
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#C25737] px-2 py-1 text-white font-bold">
                    {activeCap.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Spec & Highlight Details */}
            <div className="p-8 flex-1 flex flex-col justify-between bg-[#181A1E] border-t border-neutral-800">
              <div>
                <h4 className="text-2xl font-bold font-display text-white mb-3">
                  {activeCap.headline}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                  {activeCap.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeCap.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#C25737] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Cadence Foods Facility · Toronto, ON M6N 2V7, Canada
                </span>
                <button
                  onClick={() => onSelectInquiry(activeCap.category)}
                  className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>DISCUSS YOUR PRODUCT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="lg:hidden space-y-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="border border-[#D1CAC0] bg-[#FBF9F5] overflow-hidden shadow-sm"
            >
              {/* Visual Frame */}
              <div className="h-64 w-full relative">
                <ImageWithFallback
                  src={cap.imgSrc}
                  alt={cap.headline}
                  fallbackVariant={cap.variant}
                  aspectClassName="h-full w-full"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#111215]/85 px-2 py-0.5 text-neutral-200">
                    {cap.num} · {cap.category}
                  </span>
                  {cap.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase bg-[#C25737] px-2 py-0.5 text-white">
                      {cap.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-display text-[#111215] mb-3">
                  {cap.headline}
                </h3>
                <p className="text-sm text-[#4A453F] leading-relaxed mb-5">
                  {cap.description}
                </p>

                <div className="space-y-2 mb-6">
                  {cap.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3D3A36]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C25737] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectInquiry(cap.category)}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C25737] hover:bg-[#AA4729] transition-all flex items-center justify-center gap-2"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
