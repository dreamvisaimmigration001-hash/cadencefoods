import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ShieldCheck, Truck } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CADENCE_ASSETS } from '../constants/companyAssets';

interface ContactPageProps {
  initialCategory?: string;
  initialNotes?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialCategory,
  initialNotes
}) => {
  return (
    <div className="pt-28 pb-20 bg-[#F3EFE8] text-[#181A1E]">
      {/* Contact Section Form & Direct Information */}
      <ContactSection
        initialCategory={initialCategory}
        initialNotes={initialNotes}
      />

      {/* Facility Logistics & Visit Information */}
      <section className="py-16 sm:py-24 bg-[#FBF9F5] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C25737]">
                FACILITY & LOGISTICS SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#111215]">
                Toronto Manufacturing & Logistics Hub
              </h2>
              <p className="text-base text-[#5A544D] leading-relaxed">
                Our plant in Toronto, ON M6N 2V7, Canada is equipped for raw material staging, temperature-sensitive ingredient storage, clean blending, automated bottling, and dedicated freight dock shipping.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="p-4 bg-[#F3EFE8] border border-[#E5E0D8] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#181A1E]">
                    <Truck className="w-4 h-4 text-[#C25737]" />
                    <span>Freight & Dock Hours</span>
                  </div>
                  <p className="text-[#6E665C]">
                    Monday – Friday: 07:00 – 16:30 EST. Accommodates standard 53ft trailers.
                  </p>
                </div>

                <div className="p-4 bg-[#F3EFE8] border border-[#E5E0D8] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#181A1E]">
                    <ShieldCheck className="w-4 h-4 text-[#C25737]" />
                    <span>GFSI Audit Readiness</span>
                  </div>
                  <p className="text-[#6E665C]">
                    Third-party auditor approved. Complete lot tracking and QA retention records.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#DED7CD] overflow-hidden shadow-md">
                <ImageWithFallback
                  src={CADENCE_ASSETS.factoryPhoto}
                  alt="Cadence Foods factory floor and logistics facility in Toronto, ON M6N 2V7, Canada"
                  fallbackVariant="copacking"
                  aspectClassName="aspect-16/10"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
