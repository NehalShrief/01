import React, { useState } from 'react';
import { ITERATIONS } from '../data/chairData';
import { useImageSlots } from '../context/ImageSlotContext';
import { SlotImageUploader } from './SlotImageUploader';
import { TiltContainer } from './TiltContainer';
import {
  GitCommit,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

export const IterationChronicle: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>('Iteration 03');
  const { getSlotImage } = useImageSlots();
  const rearElevationImg = getSlotImage('iteration_rear', 'Gemini_Generated_Image_olzrw2olzrw2olzr.jpg');

  const currentIter = ITERATIONS.find((it) => it.version === selectedVersion) || ITERATIONS[2];

  return (
    <section id="iteration" className="py-24 border-b border-[#221F1A]/15 bg-[#EDE9E0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            04
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Design Evolution & Critique
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-4">
          What changed, and why
        </h2>
        <p className="text-base text-[#5B564C] max-w-2xl mb-10 leading-relaxed">
          Each revision was really a renegotiation between the two influences: how monumental could the frame stay before it stopped being a chair, and how soft could it get before it lost the architectural weight that made it interesting.
        </p>

        {/* Version Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ITERATIONS.map((iter) => {
            const isSelected = selectedVersion === iter.version;
            return (
              <button
                key={iter.version}
                onClick={() => setSelectedVersion(iter.version)}
                className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#E4DFD3] border-[#8A4E28] ring-2 ring-[#8A4E28]/20 shadow-xs'
                    : 'bg-[#EDE9E0] border-[#221F1A]/15 hover:border-[#8A4E28]/50 hover:bg-[#E4DFD3]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-plex text-xs font-bold text-[#8A4E28] uppercase">
                    {iter.code.split('—')[0]}
                  </span>
                  {iter.version === 'Iteration 03' && (
                    <span className="px-2 py-0.5 rounded-full bg-[#8A4E28] text-[#EDE9E0] font-mono-plex text-[10px] font-semibold">
                      FINAL PRODUCTION
                    </span>
                  )}
                </div>
                <h3 className="font-serif-fraunces text-lg font-medium text-[#221F1A] mb-1">
                  {iter.title}
                </h3>
                <p className="font-mono-plex text-xs text-[#5B564C]">{iter.verdict}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Iteration Breakdown Card */}
        <div className="p-8 bg-[#E4DFD3] border border-[#221F1A]/15 rounded-2xl shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Rear Structural Study Photo & Interactive Overlays */}
            <div className="lg:col-span-5 bg-[#EDE9E0] p-4 sm:p-5 rounded-2xl border border-[#221F1A]/10 flex flex-col items-center justify-center min-h-[360px] relative overflow-hidden group">
              {/* Actual Rear Perspective Photo */}
              <TiltContainer className="w-full max-w-[340px] aspect-square" maxTilt={8} scale={1.02}>
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/60 shadow-xs border border-[#221F1A]/10 flex items-center justify-center">
                  <img
                    src={rearElevationImg}
                    alt="THABET Chair — Rear A-Frame Structural Elevation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash')) {
                        target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85';
                      }
                    }}
                  />

                  {/* Top-Right Slot Uploader Action Pill */}
                  <div className="absolute top-2.5 right-2.5 z-30">
                    <SlotImageUploader
                      slotId="iteration_rear"
                      slotLabel="Rear Elevation"
                      variant="overlay"
                    />
                  </div>

                  {/* Dynamic Vector Diagnostics & Analytical Overlay */}
                  <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {/* Iteration 1 Profile (Too Upright 94° Diagnostic Overlay) */}
                    {selectedVersion === 'Iteration 01' && (
                      <g>
                        <rect x="0" y="0" width="340" height="340" fill="#EF4444" fillOpacity="0.08" />
                        {/* Vertical alignment line showing lack of taper */}
                        <line x1="120" y1="30" x2="120" y2="310" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="220" y1="30" x2="220" y2="310" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" />
                        {/* Warning Callout Box */}
                        <rect x="50" y="145" width="240" height="50" rx="8" fill="#221F1A" fillOpacity="0.9" />
                        <text x="170" y="167" fill="#FCA5A5" fontSize="10" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="bold">
                          DIAGNOSTIC: 94° RIGID RECTILINEAR
                        </text>
                        <text x="170" y="183" fill="#FFFFFF" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
                          Blocky rear posts · Zero lumbar taper
                        </text>
                      </g>
                    )}

                    {/* Iteration 2 Profile (Over-reclined 118° + Weak rear leg) */}
                    {selectedVersion === 'Iteration 02' && (
                      <g>
                        <rect x="0" y="0" width="340" height="340" fill="#F59E0B" fillOpacity="0.08" />
                        {/* Splayed line showing excessive cantilever */}
                        <line x1="170" y1="40" x2="90" y2="310" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="170" y1="40" x2="250" y2="310" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" />
                        {/* Warning Callout Box */}
                        <rect x="50" y="145" width="240" height="50" rx="8" fill="#221F1A" fillOpacity="0.9" />
                        <text x="170" y="167" fill="#FCD34D" fontSize="10" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="bold">
                          DIAGNOSTIC: 118° EXCESSIVE SPLAY
                        </text>
                        <text x="170" y="183" fill="#FFFFFF" fontSize="9.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
                          Over-cantilevered moment · Joint stress
                        </text>
                      </g>
                    )}

                    {/* Iteration 3 Profile (Golden 112° + 7° Seat + Resolved A-Frame) */}
                    {selectedVersion === 'Iteration 03' && (
                      <g>
                        {/* A-Frame centerline & load paths */}
                        <line x1="170" y1="20" x2="170" y2="320" stroke="#8A4E28" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                        {/* Headrest Span dimension line */}
                        <line x1="105" y1="45" x2="235" y2="45" stroke="#8A4E28" strokeWidth="1.2" />
                        <circle cx="105" cy="45" r="2" fill="#8A4E28" />
                        <circle cx="235" cy="45" r="2" fill="#8A4E28" />
                        {/* Horizontal Cross-Rail Interlock */}
                        <rect x="80" y="152" width="180" height="14" rx="2" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 2" />
                        {/* Splayed A-Frame Rake Vectors */}
                        <line x1="145" y1="65" x2="105" y2="310" stroke="#8A4E28" strokeWidth="1.5" />
                        <line x1="195" y1="65" x2="235" y2="310" stroke="#8A4E28" strokeWidth="1.5" />
                      </g>
                    )}
                  </svg>

                  {/* Static Badges on the Image */}
                  <div className="absolute top-2.5 left-2.5 z-20 bg-[#221F1A]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-white font-mono-plex text-[9px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A4E28] animate-pulse" />
                    <span>REAR ELEVATION · A-FRAME TECTONICS</span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 z-20 bg-[#EDE9E0]/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#221F1A]/15 text-[#221F1A] font-mono-plex text-[9px] font-bold">
                    {selectedVersion === 'Iteration 01' && 'V1 · 94° RIGID'}
                    {selectedVersion === 'Iteration 02' && 'V2 · 118° SPLAY'}
                    {selectedVersion === 'Iteration 03' && 'V3 · 112° GOLDEN RATIO'}
                  </div>
                </div>
              </TiltContainer>

              {/* Bottom Caption Pill */}
              <div className="mt-3 flex items-center justify-between w-full max-w-[340px] px-1 text-[11px] font-mono-plex text-[#5B564C]">
                <span>BW: 550mm Headrest</span>
                <span className="text-[#8A4E28] font-bold">Solid Walnut A-Frame</span>
              </div>
            </div>

            {/* Right: Critique & Technical Resolution */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono-plex text-[#8A4E28] font-bold uppercase mb-2">
                <span>Critical Assessment · {currentIter.version}</span>
              </div>

              <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-4">
                "{currentIter.verdict}"
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-[#EDE9E0] p-4 rounded-xl border border-[#221F1A]/10">
                  <span className="font-mono-plex text-xs text-[#EF4444] uppercase font-bold block mb-1">
                    Design Limitation Identified:
                  </span>
                  <p className="text-xs text-[#221F1A] leading-relaxed">
                    {currentIter.critique}
                  </p>
                </div>

                <div className="bg-[#EDE9E0] p-4 rounded-xl border border-[#221F1A]/10">
                  <span className="font-mono-plex text-xs text-[#10B981] uppercase font-bold block mb-1">
                    Workshop Engineering Resolution:
                  </span>
                  <p className="text-xs text-[#221F1A] leading-relaxed">
                    {currentIter.resolution}
                  </p>
                </div>
              </div>

              {/* Proportion Comparison Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#EDE9E0] rounded-xl border border-[#221F1A]/10 text-xs font-mono-plex">
                <div>
                  <span className="text-[#5B564C] block text-[10px] uppercase">Back Angle</span>
                  <span className="font-bold text-[#221F1A]">{currentIter.proportions.backAngle}</span>
                </div>
                <div>
                  <span className="text-[#5B564C] block text-[10px] uppercase">Seat Height</span>
                  <span className="font-bold text-[#221F1A]">{currentIter.proportions.seatHeight}</span>
                </div>
                <div>
                  <span className="text-[#5B564C] block text-[10px] uppercase">Stability Index</span>
                  <span className="font-bold text-[#8A4E28]">{currentIter.proportions.stabilityScore}% / 100%</span>
                </div>
                <div>
                  <span className="text-[#5B564C] block text-[10px] uppercase">Balance</span>
                  <span className="font-bold text-[#221F1A] text-[11px]">{currentIter.proportions.aestheticBalance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
