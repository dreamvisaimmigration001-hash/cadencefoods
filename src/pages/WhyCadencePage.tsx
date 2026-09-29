import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WhyCadenceSection } from '../components/WhyCadenceSection';
import { ProcessSection } from '../components/ProcessSection';
import { PartnershipSection } from '../components/PartnershipSection';
import { CoInvestmentFeature } from '../components/CoInvestmentFeature';
import { PageId } from '../types';

interface WhyCadencePageProps {
  onNavigate: (page: PageId, category?: string, notes?: string) => void;
}

export const WhyCadencePage: React.FC<WhyCadencePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#111215] text-[#FBF9F5]">
      {/* Page Header */}
      <section className="py-16 sm:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C25737] uppercase">
              THE CADENCE ADVANTAGE
            </span>
            <span className="h-[1px] w-12 bg-neutral-700" />
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.0] mb-6 text-balance">
              BUILT FOR FOOD MAKERS WHO WANT TO GROW.
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
              We make it accessible and profitable for local producers to compete directly against the largest players.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cadence 4 Statements */}
      <WhyCadenceSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Horizontal Process: From Idea to Shelf */}
      <ProcessSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Partnership Emotional Core */}
      <PartnershipSection
        onStartConversation={() => onNavigate('contact')}
      />

      {/* Co-Investment Feature Spotlight */}
      <CoInvestmentFeature
        onTalkToTeam={() =>
          onNavigate(
            'contact',
            'Co-Investment / Equipment',
            'Inquiring about specialized machinery sourcing and co-investment.'
          )
        }
      />
    </div>
  );
};
