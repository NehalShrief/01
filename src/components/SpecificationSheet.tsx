import React, { useState } from 'react';
import { DIMENSIONS, CHAIR_METADATA } from '../data/chairData';
import { useImageSlots } from '../context/ImageSlotContext';
import { SlotImageUploader } from './SlotImageUploader';
import { TiltContainer } from './TiltContainer';
import { Download, FileText, Check, ShieldCheck, Printer, ExternalLink, Camera } from 'lucide-react';

export const SpecificationSheet: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const { getSlotImage } = useImageSlots();

  const specHeroUrl = getSlotImage('spec_hero', 'Gemini_Generated_Image_6jyu4q6jyu4q6jyu.jpg');
  const specJointUrl = getSlotImage('spec_joint', '');
  const specFabricUrl = getSlotImage('spec_fabric', '');

  const handlePrintOrExport = () => {
    window.print();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="specs" className="py-24 border-b border-[#221F1A]/15 bg-[#EDE9E0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            06
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Production Specifications & Renders
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-3">
              The Wren Chair, Finished
            </h2>
            <p className="text-base text-[#5B564C] max-w-xl">
              Complete engineering parameters, workshop fabrication schedules, and resolved architectural imagery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintOrExport}
              className="px-4 py-2.5 rounded-xl bg-[#8A4E28] hover:bg-[#6B3B1D] text-[#EDE9E0] font-mono-plex text-xs font-semibold flex items-center gap-2 shadow-xs transition-all hover:scale-102"
            >
              <Printer className="w-4 h-4" />
              <span>Print Specification Sheet</span>
            </button>
          </div>
        </div>

        {/* Product Imagery & Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          {/* Main Hero Shot Card */}
          <TiltContainer className="md:col-span-8 flex flex-col" maxTilt={5} scale={1.01}>
            <div className="w-full h-full bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[360px]">
              {/* Background In-situ Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={specHeroUrl}
                  alt="The Wren Chair in-situ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EDE9E0] via-[#EDE9E0]/80 to-transparent" />
              </div>

              {/* Top-Right Slot Uploader */}
              <div className="absolute top-4 right-4 z-20">
                <SlotImageUploader
                  slotId="spec_hero"
                  slotLabel="Context Render"
                  variant="overlay"
                />
              </div>

              <div className="flex items-center justify-between relative z-10 pr-28">
                <span className="font-mono-plex text-xs font-semibold uppercase tracking-wider text-[#8A4E28] bg-[#EDE9E0]/90 px-2.5 py-1 rounded-md border border-[#221F1A]/10">
                  01 · Architectural Context Study
                </span>
                <span className="font-arabic text-sm text-[#8A4E28] font-bold bg-[#EDE9E0]/90 px-2.5 py-0.5 rounded-md border border-[#221F1A]/10">ثابت في فضاء المعيشة</span>
              </div>

              <div className="my-8 relative z-10 max-w-lg">
                <h3 className="font-serif-fraunces text-3xl sm:text-4xl text-[#221F1A] font-medium mb-2">
                  THABET (ثابت)
                </h3>
                <p className="font-mono-plex text-xs text-[#5B564C] leading-relaxed">
                  Steam-bent solid ash frame in oiled walnut finish, paired with natural unbleached wool and linen upholstery. Photographed in natural side-light architectural room.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono-plex text-[#5B564C] pt-4 border-t border-[#221F1A]/10 relative z-10">
                <span>NATURAL WOOL · OATMEAL WEAVE</span>
                <span className="font-bold text-[#8A4E28]">8.4 KG TOTAL NET MASS</span>
              </div>
            </div>
          </TiltContainer>

          {/* Side Details Stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Joint Honesty Detail */}
            <TiltContainer className="flex-1 flex flex-col" maxTilt={6} scale={1.015}>
              <div className="w-full h-full p-6 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                {specJointUrl && (
                  <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity">
                    <img src={specJointUrl} alt="Joint Detail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#E4DFD3]/80" />
                  </div>
                )}
                <div className="relative z-10 flex items-center justify-between mb-1">
                  <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase block">
                    02 · Joint Honesty
                  </span>
                  <SlotImageUploader
                    slotId="spec_joint"
                    slotLabel="Joint Detail"
                    variant="compact"
                  />
                </div>
                <h4 className="font-serif-fraunces text-lg font-medium text-[#221F1A] mb-2 relative z-10">
                  Mortise & Tenon Shoulder
                </h4>
                <p className="text-xs text-[#5B564C] leading-relaxed relative z-10">
                  Hand-cut 3mm organic chamfers with visible grain continuity across armrest and leg junctions.
                </p>
              </div>
            </TiltContainer>

            {/* Tactile Drape Detail */}
            <TiltContainer className="flex-1 flex flex-col" maxTilt={6} scale={1.015}>
              <div className="w-full h-full p-6 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                {specFabricUrl && (
                  <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity">
                    <img src={specFabricUrl} alt="Fabric Detail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#E4DFD3]/80" />
                  </div>
                )}
                <div className="relative z-10 flex items-center justify-between mb-1">
                  <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase block">
                    03 · Tactile Drape
                  </span>
                  <SlotImageUploader
                    slotId="spec_fabric"
                    slotLabel="Fabric Detail"
                    variant="compact"
                  />
                </div>
                <h4 className="font-serif-fraunces text-lg font-medium text-[#221F1A] mb-2 relative z-10">
                  Double French Seams
                </h4>
                <p className="text-xs text-[#5B564C] leading-relaxed relative z-10">
                  Heavyweight natural wool and linen dobby weave with 65,000 Martindale contract rating.
                </p>
              </div>
            </TiltContainer>
          </div>
        </div>

        {/* Master Specifications Table */}
        <div className="bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl p-8 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#221F1A]/10">
            <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A]">
              Master Engineering Data Sheet
            </h3>
            <span className="font-mono-plex text-xs text-[#8A4E28] uppercase tracking-wider font-semibold">
              STANDARD ISO 7173 / BIFMA X5.1
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {DIMENSIONS.map((spec) => (
              <div
                key={spec.id}
                className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-[#221F1A]">{spec.name}</span>
                  {spec.nameArabic && (
                    <span className="font-arabic text-[11px] text-[#5B564C]">{spec.nameArabic}</span>
                  )}
                </div>
                <span className="font-bold text-sm text-[#8A4E28]">{spec.value}</span>
              </div>
            ))}

            {/* Additional Fabrication Specs */}
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Frame Construction</span>
              <span className="font-medium text-[#5B564C]">Steam-bent European White Ash</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Substrate Shell</span>
              <span className="font-medium text-[#5B564C]">12mm 9-Ply Baltic Birch</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Cushion Density</span>
              <span className="font-medium text-[#5B564C]">50 kg/m³ Base + 38 kg/m³ Topper</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Upholstery Material</span>
              <span className="font-medium text-[#5B564C]">100% Wool & Linen Blend</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Structural Joinery</span>
              <span className="font-medium text-[#5B564C]">Blind Mortise & Tenon + Dowels</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#221F1A]/10 text-xs font-mono-plex">
              <span className="font-semibold text-[#221F1A]">Net Product Weight</span>
              <span className="font-bold text-sm text-[#8A4E28]">8.4 kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Footer */}
      <footer className="mt-20 pt-16 border-t border-[#221F1A]/15 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-serif-fraunces italic font-light text-2xl sm:text-3xl text-[#6B3B1D] mb-4 leading-relaxed">
            "Design is deciding what to hold onto, one revision at a time."
          </p>
          <div className="font-arabic text-xl text-[#8A4E28] font-bold mb-6">
            التصميم هو اتخاذ القرار بما نحتفظ به، مراجعة تلو الأخرى.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono-plex text-[#5B564C] tracking-wider uppercase">
            <span>STUDIO CORTEX</span>
            <span>·</span>
            <span>THE WREN CHAIR (THABET / ثابت)</span>
            <span>·</span>
            <span>INDUSTRIAL DESIGN PORTFOLIO 2025</span>
          </div>
        </div>
      </footer>
    </section>
  );
};
