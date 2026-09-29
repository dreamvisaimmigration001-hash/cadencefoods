import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ScaleAssessment } from '../components/ScaleAssessment';
import { CADENCE_ASSETS } from '../constants/companyAssets';
import { PageId } from '../types';

interface CapabilityDetail {
  id: string;
  num: string;
  category: string;
  headline: string;
  description: string;
  imgSrc: string;
  fallbackVariant: 'copacking' | 'procurement' | 'foodsafety' | 'machinery';
  badge?: string;
  bulletPoints: string[];
  specs: { label: string; value: string }[];
}

const detailedCapabilities: CapabilityDetail[] = [
  {
    id: 'copacker',
    num: '01',
    category: 'CO-PACKER',
    headline: 'YOUR PRODUCT. OUR PRODUCTION POWER.',
    description:
      'We take your product idea from concept to production-ready. We produce private label products for retailers and food producers. Bring your own recipe, or work with our team to develop something new.',
    imgSrc: CADENCE_ASSETS.factoryPhoto,
    fallbackVariant: 'copacking',
    bulletPoints: [
      'Turnkey private label co-packing at our Toronto manufacturing facility',
      'Flexible run sizes from pilot test batches to national volume',
      'Hot and cold fill capabilities for glass jars, squeeze bottles, and pouches',
      'Automated labeling, date coding, tamper seals, and case packaging'
    ],
    specs: [
      { label: 'Facility', value: 'Toronto, ON M6N 2V7, Canada' },
      { label: 'Filling Range', value: '50ml to 4000ml' },
      { label: 'Thermal Profile', value: 'Hot-fill, Ambient, Cold-hold' },
      { label: 'Certifications', value: 'GFSI Standard · Ontario Made' }
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
    fallbackVariant: 'procurement',
    bulletPoints: [
      'Global & domestic ingredient sourcing network for bulk spices, oils, and botanicals',
      'Commercial formulation assistance preserving culinary artisan flavor',
      'Shelf-life testing, pH stabilization, and nutritional analysis support',
      'Packaging material procurement: custom jars, closures, films, and shipper cartons'
    ],
    specs: [
      { label: 'Network Reach', value: 'Canadian & Global Suppliers' },
      { label: 'Compliance', value: 'Non-GMO, Organic, Kosher Sourcing' },
      { label: 'Formulation', value: 'Food Scientist Guided' },
      { label: 'Economics', value: 'Bulk Wholesale Pricing Passed-Through' }
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
    fallbackVariant: 'foodsafety',
    badge: 'GFSI CERTIFIED',
    bulletPoints: [
      'GFSI benchmarked facility standard audited for Tier-1 grocery chains',
      'Full preventative control plans & HACCP critical control point monitoring',
      'End-to-end lot tracing from raw agricultural receipt to pallet dispatch',
      'Cleanroom environmental sampling and microbiological product testing'
    ],
    specs: [
      { label: 'Certification', value: 'GFSI Benchmarked Facility' },
      { label: 'Audits', value: 'National Retailer Approved' },
      { label: 'Traceability', value: 'Digital Lot Tracking' },
      { label: 'QA Protocol', value: '100% Pre-release Testing' }
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
    fallbackVariant: 'machinery',
    badge: 'CO-INVESTMENT MODEL',
    bulletPoints: [
      'Capital equipment sourcing aligned with your proprietary production technique',
      'Custom tooling, specialized high-shear mixers, thermal coils, or automated capping',
      'Shared capital structure so you avoid huge upfront capital expenditures',
      'Integrated directly into our Toronto facility with ongoing maintenance included'
    ],
    specs: [
      { label: 'Model', value: 'Shared Capex / Co-Investment' },
      { label: 'Customization', value: 'Bespoke Tooling & Toolpaths' },
      { label: 'Integration', value: 'Calibrated to GFSI Standard' },
      { label: 'Outcome', value: 'Eliminates Capex Hurdles' }
    ]
  }
];

interface CapabilitiesPageProps {
  onNavigate: (page: PageId, category?: string, notes?: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = detailedCapabilities[activeTab];

  return (
    <div className="pt-28 pb-20 bg-[#FBF9F5] text-[#181A1E]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              OUR CAPABILITIES
            </span>
            <span className="h-[1px] w-12 bg-[#C25737]" />
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#111215] leading-[1.0] mb-6 text-balance">
              FROM IDEA TO PRODUCTION.
            </h1>
            <p className="text-xl sm:text-2xl text-[#5A544D] font-light leading-relaxed">
              One partner. From concept and ingredients to production and food safety.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Desktop Showcase */}
      <section className="py-16 sm:py-24 border-b border-[#E5E0D8] bg-[#F3EFE8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Capability Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {detailedCapabilities.map((cap, idx) => {
              const isSelected = idx === activeTab;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181A1E] text-white border-[#181A1E] shadow-md'
                      : 'bg-[#FBF9F5] text-[#181A1E] border-[#DED7CD] hover:border-[#C25737]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#C25737]">
                      {cap.num}
                    </span>
                    {cap.badge && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#C25737] text-white font-bold">
                        {cap.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base leading-snug line-clamp-2">
                    {cap.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Capability Deep-Dive View */}
          <div className="border border-[#181A1E] bg-[#111215] text-white overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Panel: Official Cadence Foods Imagery */}
            <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[500px]">
              <ImageWithFallback
                src={activeCap.imgSrc}
                alt={activeCap.headline}
                fallbackVariant={activeCap.fallbackVariant}
                aspectClassName="h-full w-full"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest uppercase bg-[#111215]/85 px-3 py-1 text-white border border-neutral-700">
                  {activeCap.num} // {activeCap.category}
                </span>
                {activeCap.badge && (
                  <span className="text-xs font-mono font-bold uppercase bg-[#C25737] px-3 py-1 text-white">
                    {activeCap.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Content & Specs */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#181A1E]">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#C25737] uppercase block mb-2">
                  CAPABILITY SPOTLIGHT
                </span>
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white mb-4 leading-tight">
                  {activeCap.headline}
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-light">
                  {activeCap.description}
                </p>

                {/* Key Bullet points */}
                <div className="space-y-3 mb-8">
                  {activeCap.bulletPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C25737] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Spec Table */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-neutral-800 text-xs">
                  {activeCap.specs.map((s, idx) => (
                    <div key={idx} className="p-3 bg-[#111215] border border-neutral-800">
                      <span className="text-neutral-500 font-mono block uppercase">{s.label}</span>
                      <span className="text-white font-medium">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-neutral-400">
                  Cadence Foods Inc. · Toronto, ON M6N 2V7, Canada
                </span>
                <button
                  onClick={() => onNavigate('contact', activeCap.category)}
                  className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>INQUIRE ABOUT {activeCap.category}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scale Assessment Tool */}
      <ScaleAssessment
        onSelectPlan={(stage, product, volume) => {
          onNavigate(
            'contact',
            'Co-Packing',
            `Selected Profile from Capabilities Page: Stage: ${stage} | Product: ${product} | Target Volume: ${volume}`
          );
        }}
      />
    </div>
  );
};
