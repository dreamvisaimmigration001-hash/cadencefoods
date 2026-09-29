import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  producerInput: string;
  cadenceOutput: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'IDEA',
    tagline: 'Bring us your product concept.',
    summary:
      'Whether you are an established chef with a cult-favorite chili crunch, an artisanal hot sauce maker, or a retailer seeking custom private label lines, we begin with your flavor, vision, and commercial goals.',
    deliverables: [
      'Initial feasibility assessment',
      'Target cost-of-goods (COGS) model',
      'Manufacturing pathway roadmap',
      'Regulatory & packaging classification'
    ],
    producerInput: 'Your culinary recipe, sample batches, and target retail shelf price.',
    cadenceOutput: 'Commercialization feasibility brief and preliminary batch trial estimate.'
  },
  {
    num: '02',
    title: 'DEVELOP',
    tagline: 'Recipe development, sourcing, packaging, and production planning.',
    summary:
      'Our food scientists and procurement specialists translate artisanal kitchen recipes into scalable formulas without losing flavor integrity, while locking down reliable ingredient suppliers and packaging.',
    deliverables: [
      'Batch scaling & thermal profile optimization',
      'Ingredient procurement & bulk pricing',
      'Packaging container & closure sourcing',
      'Shelf-life testing & nutritional analysis'
    ],
    producerInput: 'Sensory feedback on pilot batch samples and brand artwork guidelines.',
    cadenceOutput: 'Production-ready spec sheet, supplier contracts, and validated formula.'
  },
  {
    num: '03',
    title: 'PRODUCE',
    tagline: 'Move from concept to production-ready manufacturing.',
    summary:
      'Production goes live in our GFSI certified Toronto facility. Every batch runs through calibrated mixing, filling, capping, and rigorous lot testing to meet strict retail compliance.',
    deliverables: [
      'First commercial production run',
      'HACCP critical control verification',
      'Finished product quality release testing',
      'Case-packed & palletized inventory'
    ],
    producerInput: 'Purchase order sign-off and packaging film/label approvals.',
    cadenceOutput: 'Retail-ready, certified, packaged cases ready for dispatch.'
  },
  {
    num: '04',
    title: 'SCALE',
    tagline: 'Build the infrastructure and capacity needed to grow.',
    summary:
      'As sales accelerate across provincial and national accounts, Cadence scales capacity with you. Need specialized automation or custom thermal lines? Our co-investment option ensures machinery never bottlenecks your ambition.',
    deliverables: [
      'High-volume continuous scheduling',
      'Co-investment in specialized equipment',
      'Improved volume economics & margin growth',
      'Distribution-ready cross-dock logistics'
    ],
    producerInput: 'Forecasted demand and distribution partner pipeline.',
    cadenceOutput: 'Unconstrained manufacturing muscle to dominate supermarket categories.'
  }
];

interface ProcessSectionProps {
  onStartConversation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartConversation }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E5E0D8]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
                04 / THE JOURNEY
              </span>
              <span className="h-[1px] w-12 bg-[#C25737]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111215]">
              FROM IDEA TO SHELF.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base sm:text-lg text-[#5A544D] max-w-md font-normal">
            A clear, dependable progression from your initial kitchen recipe to national supermarket distribution.
          </p>
        </div>

        {/* Horizontal Process Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 text-left transition-all duration-300 border cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#181A1E] text-white border-[#181A1E] shadow-md'
                    : 'bg-[#F3EFE8] text-[#181A1E] border-[#E5E0D8] hover:border-[#C25737]'
                }`}
              >
                {/* Step indicator top line */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-bold tracking-widest ${
                      isCurrent ? 'text-[#C25737]' : 'text-[#7D756C]'
                    }`}
                  >
                    STEP {step.num}
                  </span>
                  {idx < 3 && (
                    <ArrowRight
                      className={`w-4 h-4 hidden lg:block ${
                        isCurrent ? 'text-[#C25737]' : 'text-[#AFA79D]'
                      }`}
                    />
                  )}
                </div>

                <h3 className="text-2xl font-bold font-display tracking-tight mb-2">
                  {step.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isCurrent ? 'text-neutral-300' : 'text-[#5C554E]'
                  }`}
                >
                  {step.tagline}
                </p>

                {isCurrent && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#181A1E] rotate-45 hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector */}
        <div className="p-8 sm:p-10 bg-[#F3EFE8] border border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-display font-bold text-[#C25737]">
                  {steps[activeStep].num}
                </span>
                <span className="text-xl font-display font-bold text-[#111215]">
                  — {steps[activeStep].title}: {steps[activeStep].tagline}
                </span>
              </div>

              <p className="text-base sm:text-lg text-[#3D3A36] leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="pt-4 border-t border-[#DED7CD] space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-[#786F66]">
                  Key Deliverables in Step {steps[activeStep].num}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2B2926]">
                      <Check className="w-4 h-4 text-[#C25737] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Input vs Cadence Output Grid */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:border-l lg:border-[#DED7CD] lg:pl-10">
              <div className="space-y-4">
                <div className="p-5 bg-[#FBF9F5] border border-[#E5E0D8]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#786F66] block mb-1">
                    What You Provide:
                  </span>
                  <p className="text-sm font-medium text-[#181A1E]">
                    {steps[activeStep].producerInput}
                  </p>
                </div>

                <div className="p-5 bg-[#181A1E] text-white border border-[#181A1E]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25737] block mb-1">
                    What Cadence Delivers:
                  </span>
                  <p className="text-sm font-medium text-[#E5DFD5]">
                    {steps[activeStep].cadenceOutput}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-[#786F66]">
                  Toronto Facility · GFSI Benchmarked
                </span>
                <button
                  onClick={onStartConversation}
                  className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] transition-all cursor-pointer"
                >
                  START AT STEP {steps[activeStep].num}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
