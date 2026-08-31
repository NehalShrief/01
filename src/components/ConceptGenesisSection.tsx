import React, { useState } from 'react';
import { CHAIR_METADATA } from '../data/chairData';
import { useImageSlots } from '../context/ImageSlotContext';
import { SlotImageUploader } from './SlotImageUploader';
import { TiltContainer } from './TiltContainer';
import { Landmark, UserCheck, Scale, Sparkles, BookOpen, Quote, Shield, MoveUpRight, Image as ImageIcon } from 'lucide-react';

export const ConceptGenesisSection: React.FC = () => {
  const [activeConceptTab, setActiveConceptTab] = useState<'synthesis' | 'sculpture' | 'fellah'>('synthesis');
  const { getSlotImage } = useImageSlots();
  const sculptureStudyUrl = getSlotImage('concept_sculpture', '');

  return (
    <section id="concept" className="py-24 border-b border-[#221F1A]/15 bg-[#EDE9E0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            01
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Genesis & Philosophical Brief
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-6">
          Starting from a question, not a shape
        </h2>

        {/* Main Lede */}
        <p className="text-lg text-[#5B564C] leading-relaxed max-w-3xl mb-8">
          The design process began not with a silhouette, but with a question borrowed from Mahmoud Mokhtar’s 1926 masterpiece <em className="italic font-serif-fraunces text-[#8A4E28]">"Nahdet Misr"</em> (Egypt’s Renaissance): what does it mean to give monumental form a human purpose? The chair emerges from that exact tension between mass and gesture.
        </p>

        {/* Core Philosophical Quote Card */}
        <div className="my-10 p-8 rounded-2xl bg-[#E4DFD3]/80 border-l-4 border-[#8A4E28] border-y border-r border-[#221F1A]/10 shadow-xs relative overflow-hidden">
          <Quote className="w-12 h-12 text-[#8A4E28]/15 absolute -right-2 -bottom-2" />
          <p className="font-serif-fraunces italic font-light text-2xl sm:text-3xl text-[#6B3B1D] leading-snug mb-4">
            "Who is the real Egyptian? Who is the descendant of the pharaohs?"
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-plex text-[#5B564C]">
            <span>MAHMOUD MOKHTAR · 1926 · NAHDET MISR</span>
            <span className="font-arabic text-base text-[#8A4E28] font-bold">نهضة مصر ومفهوم الثبات الإنساني</span>
          </div>
        </div>

        {/* Concept Explorer Switcher */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-[#221F1A]/15 pb-3">
            <button
              onClick={() => setActiveConceptTab('synthesis')}
              className={`px-4 py-2 rounded-lg font-mono-plex text-xs tracking-wider uppercase font-semibold transition-all ${
                activeConceptTab === 'synthesis'
                  ? 'bg-[#8A4E28] text-[#EDE9E0] shadow-xs'
                  : 'bg-[#E4DFD3] text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              The Dual Synthesis (Pharaonic + Realist)
            </button>
            <button
              onClick={() => setActiveConceptTab('sculpture')}
              className={`px-4 py-2 rounded-lg font-mono-plex text-xs tracking-wider uppercase font-semibold transition-all ${
                activeConceptTab === 'sculpture'
                  ? 'bg-[#8A4E28] text-[#EDE9E0] shadow-xs'
                  : 'bg-[#E4DFD3] text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              The Sculpture: Nahdet Misr Logic
            </button>
            <button
              onClick={() => setActiveConceptTab('fellah')}
              className={`px-4 py-2 rounded-lg font-mono-plex text-xs tracking-wider uppercase font-semibold transition-all ${
                activeConceptTab === 'fellah'
                  ? 'bg-[#8A4E28] text-[#EDE9E0] shadow-xs'
                  : 'bg-[#E4DFD3] text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              Posture of the Fellah Extraction
            </button>
          </div>
        </div>

        {/* Tab 1: Dual Synthesis */}
        {activeConceptTab === 'synthesis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Pharaonic Monumental Mass */}
            <div className="p-7 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-plex text-xs font-semibold uppercase tracking-wider text-[#8A4E28]">
                    Influence Column (A)
                  </span>
                  <Landmark className="w-5 h-5 text-[#8A4E28]" />
                </div>
                <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-3">
                  Pharaonic Monumentality
                </h3>
                <p className="text-sm text-[#5B564C] leading-relaxed mb-4">
                  The frontal, columnar mass of ancient Egyptian stone monuments. Expressed through the upward vertical axis, grounded splayed legs, and an unyielding structural backbone that feels rooted to the earth.
                </p>
                <ul className="space-y-2 text-xs font-mono-plex text-[#221F1A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Nemes-like headdress crown (1080mm apex)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Columnar lower body with monolithic stillness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Solid Ash steam-bent continuous spine</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1A]/10 text-xs text-[#8A4E28] font-mono-plex font-medium">
                TRANSLATION: 40% MONUMENTAL PRESENCE
              </div>
            </div>

            {/* Right: European Academic Realist Gesture */}
            <div className="p-7 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-plex text-xs font-semibold uppercase tracking-wider text-[#8A4E28]">
                    Influence Column (B)
                  </span>
                  <UserCheck className="w-5 h-5 text-[#8A4E28]" />
                </div>
                <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-3">
                  European Realist Gesture
                </h3>
                <p className="text-sm text-[#5B564C] leading-relaxed mb-4">
                  The soft, introspective gesture of early-20th-century academic portraiture. Softens the monument with 112° spinal compliance, 7° pelvic cradle, hand-planed armrest hollows, and tactile woven textiles.
                </p>
                <ul className="space-y-2 text-xs font-mono-plex text-[#221F1A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Introspective protective armrest gesture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Draped linen textile language with open weave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28]" />
                    <span>Ergonomic lumbar support relieving disc pressure</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#221F1A]/10 text-xs text-[#8A4E28] font-mono-plex font-medium">
                TRANSLATION: 60% ERGONOMIC HUMAN REST
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sculpture Analysis */}
        {activeConceptTab === 'sculpture' && (
          <div className="p-7 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#221F1A]/10">
              <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase">
                SCULPTURAL TECTONICS ANALYSIS
              </span>
              <SlotImageUploader
                slotId="concept_sculpture"
                slotLabel="Sculpture Study"
                variant="compact"
              />
            </div>

            {sculptureStudyUrl && (
              <TiltContainer className="mb-6 w-full max-h-72" maxTilt={6} scale={1.015}>
                <div className="w-full h-full max-h-72 rounded-xl overflow-hidden border border-[#221F1A]/15 bg-[#EDE9E0]">
                  <img
                    src={sculptureStudyUrl}
                    alt="Nahdet Misr Sculpture Study"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TiltContainer>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-b md:border-b-0 md:border-r border-[#221F1A]/10 pb-4 md:pb-0 md:pr-4">
                <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase">01 · Stance Over Shape</span>
                <h4 className="font-serif-fraunces text-lg font-medium text-[#221F1A] my-2">The Upward Tension</h4>
                <p className="text-xs text-[#5B564C] leading-relaxed">
                  "Nahdet Misr" presents two figures rising together in a single upward gesture — a peasant woman and a rising sphinx. The composition is not decorative; it is deeply structural and physical.
                </p>
              </div>
              <div className="border-b md:border-b-0 md:border-r border-[#221F1A]/10 pb-4 md:pb-0 md:pr-4">
                <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase">02 · The Water Pot Apex</span>
                <h4 className="font-serif-fraunces text-lg font-medium text-[#221F1A] my-2">The Head-Vessel</h4>
                <p className="text-xs text-[#5B564C] leading-relaxed">
                  The cylindrical water urn resting atop the fellaha’s head provides the visual crowning moment. In the chair, this becomes the floating headrest cushion at 1080mm height.
                </p>
              </div>
              <div>
                <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase">03 · The Plinth Foundation</span>
                <h4 className="font-serif-fraunces text-lg font-medium text-[#221F1A] my-2">Ground Connection</h4>
                <p className="text-xs text-[#5B564C] leading-relaxed">
                  The monolithic granite base anchors the sculpture against Nile winds. The chair translates this into wide 700mm depth splayed rear legs that guarantee absolute seating stability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Posture of the Fellah */}
        {activeConceptTab === 'fellah' && (
          <div className="p-7 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl">
            <h4 className="font-serif-fraunces text-xl font-medium text-[#221F1A] mb-3">
              Derived from "On the Banks of the Nile"
            </h4>
            <p className="text-sm text-[#5B564C] leading-relaxed mb-6">
              The posture of the Fellah embodies quiet resilience and timeless dignity. We extracted 4 key posture vectors directly into the furniture system:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {CHAIR_METADATA.pillars.map((pillar, i) => (
                <div key={i} className="p-4 bg-[#EDE9E0] border border-[#221F1A]/10 rounded-xl">
                  <span className="font-mono-plex text-xs text-[#8A4E28] font-bold block mb-1">0{i + 1}</span>
                  <span className="font-serif-fraunces text-sm font-medium text-[#221F1A] block">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
