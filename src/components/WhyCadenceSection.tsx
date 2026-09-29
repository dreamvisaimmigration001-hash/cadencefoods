import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Statement {
  num: string;
  title: string;
  description: string;
  details: string;
}

const statements: Statement[] = [
  {
    num: '01',
    title: 'SCALE',
    description: 'Infrastructure that helps local producers compete at a larger level.',
    details: 'From pilot batching to commercial multi-thousand unit runs, we eliminate production bottlenecks and equip independent brands to satisfy wholesale and national grocery requirements.'
  },
  {
    num: '02',
    title: 'QUALITY',
    description: 'High standards throughout production and control.',
    details: 'GFSI benchmarked facility standards, stringent hazard controls, comprehensive batch traceability, and consistent organoleptic and microbiological validation.'
  },
  {
    num: '03',
    title: 'EXPERTISE',
    description: 'Support across sourcing, recipes, production, and specialized processes.',
    details: 'Bridging the culinary art of local recipes with modern food science, shelf-life stabilization, ingredient procurement, and turnkey packaging development.'
  },
  {
    num: '04',
    title: 'PARTNERSHIP',
    description: 'We work alongside producers to help turn ideas into successful products.',
    details: 'We do not view makers as transient accounts. We operate as your dedicated manufacturing arm, co-investing in equipment and championing your brand success.'
  }
];

interface WhyCadenceProps {
  onStartConversation: () => void;
}

export const WhyCadenceSection: React.FC<WhyCadenceProps> = ({ onStartConversation }) => {
  return (
    <section id="why-cadence" className="py-28 sm:py-36 bg-[#111215] text-[#FBF9F5] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
                03 / WHY CADENCE
              </span>
              <span className="h-[1px] w-12 bg-neutral-700" />
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#FBF9F5] leading-[1.0] text-balance">
              BUILT FOR FOOD MAKERS WHO WANT TO GROW.
            </h2>
          </div>
          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-normal">
              We make it accessible and profitable for local producers to compete directly against the largest players in the industry.
            </p>
          </div>
        </div>

        {/* 4 Large Editorial Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {statements.map((item) => (
            <div
              key={item.num}
              className="group relative pt-8 border-t border-neutral-800 hover:border-[#C25737] transition-all duration-300"
            >
              {/* Giant numeral accent */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-neutral-600 group-hover:text-[#C25737] transition-colors">
                  {item.num}
                </span>
                <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                  CADENCE PILLAR
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                {item.title}
              </h3>

              {/* Core statement */}
              <p className="text-xl sm:text-2xl text-[#E5DFD5] font-light leading-snug mb-5">
                {item.description}
              </p>

              {/* Detailed narrative */}
              <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner & Action */}
        <div className="mt-20 pt-10 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#C25737] block mb-1">
              TORONTO FOOD MANUFACTURING
            </span>
            <p className="text-lg font-display font-medium text-neutral-200">
              Ready to take your product from local kitchen to national shelf?
            </p>
          </div>

          <button
            onClick={onStartConversation}
            className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
