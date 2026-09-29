import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PageId } from '../types';
import { CADENCE_ASSETS } from '../constants/companyAssets';
import { CadenceLogo } from './CadenceLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111215] text-[#FBF9F5] border-t border-neutral-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Upper Footer: Logo, Wordmark & Core Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          <div className="lg:col-span-6 space-y-5">
            <button
              onClick={() => handleNav('home')}
              className="cursor-pointer text-left block"
            >
              <CadenceLogo className="h-10 w-auto" />
            </button>
            <p className="text-xl sm:text-2xl font-light text-[#E5DFD5] max-w-lg leading-relaxed">
              Scale, Quality, and Opportunity for Local Food.
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              FOOD MANUFACTURING & CO-PACKING · TORONTO, ONTARIO
            </p>

            <div className="pt-2 flex items-center gap-4">
              <img
                src={CADENCE_ASSETS.ontarioMade}
                alt="Certified Ontario Made"
                className="h-10 w-auto opacity-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs text-neutral-400 font-mono">
                Proudly supporting Ontario food makers & national expansion.
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C25737] block">
              PAGES
            </span>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('purpose')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Purpose
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('capabilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('why-cadence')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Cadence
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C25737] block">
              LOCATION & CONTACT
            </span>
            <div className="text-sm text-neutral-300 space-y-1">
              <div className="font-semibold text-white">Cadence Foods Inc.</div>
              <div>Toronto, ON M6N 2V7</div>
              <div>Canada</div>
            </div>
            <div className="pt-2">
              <a
                href="mailto:hello@cadencefoods.com"
                className="text-sm text-white hover:text-[#C25737] transition-colors underline decoration-neutral-700 underline-offset-4"
              >
                hello@cadencefoods.com
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyright & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © 2026 Cadence Foods Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>GFSI Certified Facility · Toronto</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
