import React, { useState } from 'react';
import { MATERIALS } from '../data/chairData';
import { useImageSlots } from '../context/ImageSlotContext';
import { SlotImageUploader } from './SlotImageUploader';
import { TiltContainer } from './TiltContainer';
import { TreePine, Hammer, Sparkles, Shield, Check, ZoomIn, Info } from 'lucide-react';

export const MaterialCraftLab: React.FC = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('mat-ash');
  const { getSlotImage } = useImageSlots();

  const currentMaterial = MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS[0];
  const matSlotId = `mat_sample_${selectedMaterialId}`;
  const matSampleUrl = getSlotImage(matSlotId, '');

  const manufacturingSteps = [
    { num: '01', title: 'Lumber Selection', desc: 'FSC European Ash with straight, uninterrupted annular growth rings.' },
    { num: '02', title: 'Steam Plasticization', desc: 'Saturated steam chamber at 100°C for 90 min before jig bending.' },
    { num: '03', title: 'Mortise CNC Milling', desc: 'Precision blind mortises (15×40mm) cut with ±0.2mm tolerance.' },
    { num: '04', title: 'Hand Shaping (Kanna)', desc: 'Organic chamfers planed with Japanese hand tools for tactile softness.' },
    { num: '05', title: 'Organic Hardwax Oil', desc: '3-stage plant-based oil rub enhancing natural open pore grain.' },
    { num: '06', title: 'Upholstery Tailoring', desc: 'Double French seams encasing dual-density multi-zone foam core.' }
  ];

  return (
    <section id="materials" className="py-24 border-b border-[#221F1A]/15 bg-[#E4DFD3]/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            05
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Materiality & Craft Details
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-4">
          Material Atmosphere & Honest Craft
        </h2>
        <p className="text-base text-[#5B564C] max-w-2xl mb-10 leading-relaxed">
          "The chair carries the memory of the Fellah through material, posture, craft, and connection to the earth." A tactile material board honoring traditional joinery and raw, unadorned surfaces.
        </p>

        {/* Swatch Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {MATERIALS.map((mat) => {
            const isSelected = selectedMaterialId === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#EDE9E0] border-[#8A4E28] ring-2 ring-[#8A4E28]/20 shadow-xs'
                    : 'bg-[#E4DFD3] border-[#221F1A]/15 hover:bg-[#EDE9E0]/80'
                }`}
              >
                {/* Swatch Color Bar */}
                <div
                  className="w-full h-14 rounded-lg mb-3 shadow-inner border border-black/10 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: mat.colorHex }}
                >
                  <div
                    className="absolute right-0 top-0 bottom-0 w-1/3 opacity-50"
                    style={{ backgroundColor: mat.accentHex }}
                  />
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-[#221F1A] shadow">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
                <h4 className="font-serif-fraunces text-sm font-medium text-[#221F1A] truncate mb-1">
                  {mat.name.split('(')[0]}
                </h4>
                <p className="font-mono-plex text-[10px] text-[#5B564C] uppercase tracking-wider">
                  {mat.origin.split(',')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Material Inspector Card */}
        <div className="p-8 bg-[#EDE9E0] border border-[#221F1A]/15 rounded-2xl shadow-xs mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Material Character & Uploaded Sample */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase tracking-wider block">
                  Selected Material Specification
                </span>
                <SlotImageUploader
                  slotId={matSlotId}
                  slotLabel={`${currentMaterial.name.split('(')[0]} Photo`}
                  variant="compact"
                />
              </div>

              <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-3">
                {currentMaterial.name}
              </h3>

              {matSampleUrl && (
                <TiltContainer className="mb-4 w-full h-44" maxTilt={6} scale={1.015}>
                  <div className="w-full h-full rounded-xl overflow-hidden border border-[#221F1A]/15 bg-white/50">
                    <img
                      src={matSampleUrl}
                      alt={currentMaterial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TiltContainer>
              )}

              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-mono-plex text-[10px] uppercase tracking-wider text-[#5B564C] block mb-1">
                    Tactility & Surface Texture:
                  </span>
                  <p className="text-xs text-[#221F1A] leading-relaxed bg-[#E4DFD3] p-3 rounded-xl border border-[#221F1A]/10">
                    {currentMaterial.tactility}
                  </p>
                </div>

                <div>
                  <span className="font-mono-plex text-[10px] uppercase tracking-wider text-[#5B564C] block mb-1">
                    Symbolic & Conceptual Meaning:
                  </span>
                  <p className="text-xs text-[#6B3B1D] font-serif-fraunces italic leading-relaxed bg-[#E4DFD3] p-3 rounded-xl border border-[#221F1A]/10">
                    "{currentMaterial.meaning}"
                  </p>
                </div>

                <div>
                  <span className="font-mono-plex text-[10px] uppercase tracking-wider text-[#5B564C] block mb-1">
                    Fabrication Technique:
                  </span>
                  <p className="text-xs text-[#221F1A] leading-relaxed">
                    {currentMaterial.technique}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Properties & Sustainability */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-[#E4DFD3] p-5 rounded-2xl border border-[#221F1A]/10">
                <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase tracking-wider block mb-3">
                  Laboratory Test Parameters
                </span>
                <div className="space-y-2.5">
                  {currentMaterial.details.map((det, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-mono-plex pb-2 border-b border-[#221F1A]/10 last:border-0 last:pb-0">
                      <span className="text-[#5B564C]">{det.split(':')[0]}</span>
                      <span className="font-bold text-[#221F1A]">{det.split(':')[1] || det}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#E4DFD3] p-5 rounded-2xl border border-[#221F1A]/10">
                <span className="font-mono-plex text-xs font-semibold text-[#10B981] uppercase tracking-wider block mb-2">
                  Environmental & Sourcing Ethics
                </span>
                <p className="text-xs text-[#221F1A] font-mono-plex leading-relaxed">
                  {currentMaterial.sustainability}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Sequence Steps */}
        <div className="pt-8 border-t border-[#221F1A]/15">
          <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-6">
            Workshop Fabrication Sequence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {manufacturingSteps.map((st) => (
              <div key={st.num} className="p-5 bg-[#EDE9E0] border border-[#221F1A]/10 rounded-xl">
                <span className="font-mono-plex text-xs font-bold text-[#8A4E28] block mb-1">
                  STAGE {st.num}
                </span>
                <h4 className="font-serif-fraunces text-base font-medium text-[#221F1A] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-[#5B564C] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
