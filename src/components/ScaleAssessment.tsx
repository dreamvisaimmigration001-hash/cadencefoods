import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface StageOption {
  id: string;
  label: string;
  volume: string;
  description: string;
  cadenceMatch: string;
  equipmentFocus: string;
  timeToShelf: string;
}

const stages: StageOption[] = [
  {
    id: 'pilot',
    label: 'Artisan / Small Batch',
    volume: '500 – 2,500 units / run',
    description: 'Transitioning out of commissary kitchens or small rented restaurant spaces into licensed food manufacturing.',
    cadenceMatch: 'Pilot formulation refinement, label compliance verification, initial GFSI test run, flexible minimum order quantities (MOQ).',
    equipmentFocus: 'Agitated kettle blending, precision manual/semi-auto filling, shelf-life verification.',
    timeToShelf: '4 – 8 Weeks'
  },
  {
    id: 'growth',
    label: 'Emerging Regional Brand',
    volume: '3,000 – 15,000 units / run',
    description: 'Supplying independent grocers, specialty retail, farmer markets, and regional distributors; facing capacity bottlenecks.',
    cadenceMatch: 'Bulk ingredient procurement economics, automated jar/bottle filling, thermal pasteurization, palletized freight.',
    equipmentFocus: 'Automated inline piston filler, continuous capper, tamper-evident neck bander, automated lot code inkjet.',
    timeToShelf: '6 – 10 Weeks'
  },
  {
    id: 'commercial',
    label: 'National Scale & Private Label',
    volume: '20,000 – 100,000+ units / run',
    description: 'Supplying major Canadian supermarkets, food service distributors, or national private label accounts.',
    cadenceMatch: 'Dedicated production shifts, co-investment machinery partnership, volume raw ingredient contracts, full GFSI audit documentation.',
    equipmentFocus: 'High-speed automated packaging lines, high-shear emulsification, automated case packing and robotic palletizing.',
    timeToShelf: 'Continuous Scheduled Runs'
  }
];

interface ProductType {
  id: string;
  name: string;
  formats: string;
}

const productTypes: ProductType[] = [
  { id: 'sauces', name: 'Sauces, Condiments & Marinades', formats: 'Glass jars, squeeze bottles, retail jugs, bulk food service pails' },
  { id: 'dry', name: 'Dry Blends, Rubs & Spices', formats: 'Stand-up barrier pouches, composite cans, shaker jars, bulk bags' },
  { id: 'liquids', name: 'Beverages, Syrups & Functional Liquids', formats: 'Glass & PET bottles, RTD cans, bag-in-box, aseptic drums' },
  { id: 'prepared', name: 'Specialty & Prepared Formulations', formats: 'Deli containers, vacuum pouches, specialized custom barrier packaging' }
];

interface ScaleAssessmentProps {
  onSelectPlan: (stage: string, product: string, volume: string) => void;
}

export const ScaleAssessment: React.FC<ScaleAssessmentProps> = ({ onSelectPlan }) => {
  const [selectedStage, setSelectedStage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const currentStage = stages[selectedStage];
  const currentProduct = productTypes[selectedProduct];

  return (
    <section className="py-24 sm:py-32 bg-[#F3EFE8] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              INTERACTIVE ASSESSMENT
            </span>
            <span className="h-[1px] w-12 bg-[#C25737]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#111215] mb-4 text-balance">
            WHERE ARE YOU IN YOUR SCALING JOURNEY?
          </h2>
          <p className="text-base sm:text-lg text-[#5A544D]">
            Select your current volume and product category to see how Cadence equips you with the infrastructure to compete against multinational brands.
          </p>
        </div>

        {/* Step 1: Select Current Stage */}
        <div className="mb-10">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#786F66] mb-3">
            Step 1: Select Your Current or Target Run Volume
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stages.map((stage, idx) => {
              const isSelected = idx === selectedStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(idx)}
                  className={`p-6 text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181A1E] text-white border-[#181A1E] shadow-md scale-[1.01]'
                      : 'bg-[#FBF9F5] text-[#181A1E] border-[#DED7CD] hover:border-[#181A1E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono tracking-widest font-bold uppercase text-[#C25737]">
                      {stage.volume}
                    </span>
                    {isSelected && <Sparkles className="w-4 h-4 text-[#C25737]" />}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-2">{stage.label}</h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-[#605850]'}`}>
                    {stage.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Product Category */}
        <div className="mb-12">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#786F66] mb-3">
            Step 2: Select Product Format
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {productTypes.map((item, idx) => {
              const isSelected = idx === selectedProduct;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedProduct(idx)}
                  className={`p-4 text-left border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FBF9F5] border-[#C25737] shadow-sm ring-1 ring-[#C25737]'
                      : 'bg-[#EAE4DA]/60 border-[#DED7CD] hover:bg-[#EAE4DA]'
                  }`}
                >
                  <div className="font-bold text-sm text-[#111215] mb-1">{item.name}</div>
                  <div className="text-[11px] text-[#6E665C] line-clamp-2">{item.formats}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Scaling Output Card */}
        <div className="p-8 sm:p-10 bg-[#181A1E] text-[#FBF9F5] border border-neutral-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#C25737] block mb-1">
                TAILORED CADENCE PATHWAY
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {currentStage.label} · {currentProduct.name}
              </h3>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-xs text-neutral-400 block font-mono">TARGET RUN</span>
                <span className="text-white font-bold">{currentStage.volume}</span>
              </div>
              <div className="h-8 w-[1px] bg-neutral-800" />
              <div>
                <span className="text-xs text-neutral-400 block font-mono">TIMELINE</span>
                <span className="text-[#C25737] font-bold">{currentStage.timeToShelf}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                Cadence Infrastructure Advantage
              </h4>
              <p className="text-base text-[#DCD6CC] leading-relaxed">
                {currentStage.cadenceMatch}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#88A895]">
                <Check className="w-4 h-4 text-[#C25737]" />
                <span>GFSI Certified facility compliance guaranteed from day one.</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                Equipment & Production Line Focus
              </h4>
              <p className="text-base text-[#DCD6CC] leading-relaxed">
                {currentStage.equipmentFocus}
              </p>
              <div className="pt-2 text-xs text-neutral-400">
                Packaging capabilities: <span className="text-neutral-200">{currentProduct.formats}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 font-mono">
              Facility: Toronto, ON M6N 2V7, Canada · Private Label & Custom Co-Packing
            </div>
            <button
              onClick={() =>
                onSelectPlan(currentStage.label, currentProduct.name, currentStage.volume)
              }
              className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>APPLY THIS PROFILE TO INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
