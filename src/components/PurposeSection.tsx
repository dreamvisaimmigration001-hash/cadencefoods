import React from 'react';

export const PurposeSection: React.FC = () => {
  return (
    <section id="purpose" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#181A1E] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
            01 / OUR PURPOSE
          </span>
          <span className="h-[1px] w-12 bg-[#D1CAC0]" />
        </div>

        {/* Editorial Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Display Statement */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#111215] leading-[1.05] text-balance">
              SCALE, QUALITY, AND OPPORTUNITY FOR LOCAL FOOD.
            </h2>
            <div className="mt-8 pt-8 border-t border-[#E5E0D8]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#786F66] mb-2">
                THE CADENCE COMMITMENT
              </div>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                Toronto-built infrastructure designed to dismantle the barriers separating independent artisanal food makers from supermarket shelves and national distribution networks.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Highlight Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-lg sm:text-xl text-[#3D3A36] leading-relaxed font-normal">
              <p>
                Large multi-nationals dominate the food market, often sidelining brilliant local producers simply because they lack the scale and infrastructure to compete.
              </p>
              <p className="font-semibold text-[#181A1E]">
                Cadence Foods was established to fill that void.
              </p>
              <p>
                We are a modern food manufacturing partner designed to give local producers the economic advantage they need to thrive.
              </p>
              <p className="text-[#181A1E]">
                We make it accessible and profitable for them to compete directly against the largest players.
              </p>
            </div>

            {/* Visual Highlighted Pull-Statement */}
            <div className="relative p-6 sm:p-8 bg-[#F3EFE8] border-l-4 border-[#C25737]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C25737] block mb-2">
                MISSION STATEMENT
              </span>
              <p className="text-2xl sm:text-3xl font-display font-bold text-[#111215] italic leading-tight">
                “We are here to make a difference.”
              </p>
              <p className="mt-3 text-sm text-[#6E665C]">
                By democratizing industrial-grade manufacturing, GFSI quality systems, and procurement power for local producers.
              </p>
            </div>

            {/* Architectural Trust Points */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E5E0D8] text-sm">
              <div>
                <span className="text-2xl font-display font-bold text-[#111215] block">100%</span>
                <span className="text-xs text-[#6E665C]">Dedicated to independent & local brand expansion</span>
              </div>
              <div>
                <span className="text-2xl font-display font-bold text-[#111215] block">GFSI</span>
                <span className="text-xs text-neutral-600">Standardized quality assurance and batch traceability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
