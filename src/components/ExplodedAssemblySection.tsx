import React, { useState } from 'react';
import { ASSEMBLY_LAYERS } from '../data/chairData';
import { ExplodedAssemblySvg } from './ExplodedAssemblySvg';
import {
  Layers,
  Sliders,
  CheckCircle2,
  Cpu,
  Feather,
  Hammer,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const ExplodedAssemblySection: React.FC = () => {
  const [explosionValue, setExplosionValue] = useState<number>(0.75); // 0 to 1
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-1');

  const currentLayer = ASSEMBLY_LAYERS.find((l) => l.id === selectedLayerId) || ASSEMBLY_LAYERS[0];

  return (
    <section id="exploded" className="py-24 border-b border-[#221F1A]/15 bg-[#E4DFD3]/40">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            03
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Tectonic Assembly System
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-3">
              Exploded Isometric Architecture
            </h2>
            <p className="text-base text-[#5B564C] max-w-xl">
              An interactive layered deconstruction detailing the sequential assembly from solid wood skeleton to natural wool upholstery: <strong className="text-[#8A4E28]">Frame → Plywood → Foam → Fabric</strong>.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 bg-[#EDE9E0] p-1.5 rounded-xl border border-[#221F1A]/15 shadow-xs">
            <button
              onClick={() => setExplosionValue(0)}
              className={`px-3 py-1.5 rounded-lg font-mono-plex text-xs font-medium transition-all ${
                explosionValue === 0
                  ? 'bg-[#8A4E28] text-white'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              Assembled (0%)
            </button>
            <button
              onClick={() => setExplosionValue(0.5)}
              className={`px-3 py-1.5 rounded-lg font-mono-plex text-xs font-medium transition-all ${
                explosionValue === 0.5
                  ? 'bg-[#8A4E28] text-white'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              Semi-Exploded (50%)
            </button>
            <button
              onClick={() => setExplosionValue(1)}
              className={`px-3 py-1.5 rounded-lg font-mono-plex text-xs font-medium transition-all ${
                explosionValue === 1
                  ? 'bg-[#8A4E28] text-white'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              Full Exploded (100%)
            </button>
          </div>
        </div>

        {/* Interactive Workspace Container */}
        <div className="border border-[#221F1A]/15 rounded-2xl bg-[#EDE9E0] overflow-hidden shadow-sm">
          {/* Slider Controls Bar */}
          <div className="p-5 bg-[#E4DFD3] border-b border-[#221F1A]/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <span className="font-mono-plex text-xs uppercase font-semibold text-[#8A4E28] whitespace-nowrap">
                Explosion Depth:
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={explosionValue}
                onChange={(e) => setExplosionValue(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#D8D2C4] rounded-lg appearance-none cursor-pointer accent-[#8A4E28]"
              />
              <span className="font-mono-plex text-xs font-bold text-[#221F1A] w-12 text-right">
                {Math.round(explosionValue * 100)}%
              </span>
            </div>

            {/* Layer Selection Pills */}
            <div className="flex items-center gap-1.5">
              {ASSEMBLY_LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono-plex text-xs transition-all flex items-center gap-1.5 ${
                    selectedLayerId === layer.id
                      ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                      : 'bg-[#EDE9E0] text-[#5B564C] hover:text-[#221F1A]'
                  }`}
                >
                  <span className="opacity-70">{layer.stepNumber}</span>
                  <span className="hidden sm:inline">{layer.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Visualization & Layer Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Isometric SVG Drawing */}
            <div className="lg:col-span-7 p-6 paper-grid flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#221F1A]/10">
              <ExplodedAssemblySvg
                explosionProgress={explosionValue}
                selectedLayerId={selectedLayerId}
                onSelectLayer={setSelectedLayerId}
              />
            </div>

            {/* Layer Specifications Card */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#E4DFD3]/60">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase tracking-wider">
                    Layer {currentLayer.stepNumber} Specification
                  </span>
                  <span className="font-arabic text-base text-[#8A4E28] font-bold">
                    {currentLayer.nameArabic}
                  </span>
                </div>

                <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-3">
                  {currentLayer.name}
                </h3>

                <p className="text-sm text-[#5B564C] leading-relaxed mb-6">
                  {currentLayer.description}
                </p>

                {/* Specs Box */}
                <div className="space-y-3 mb-6 bg-[#EDE9E0] p-4 rounded-xl border border-[#221F1A]/10">
                  <div className="text-xs font-mono-plex">
                    <span className="text-[#5B564C] block mb-0.5">MATERIAL FORMULATION:</span>
                    <span className="text-[#221F1A] font-semibold">{currentLayer.material}</span>
                  </div>
                  {currentLayer.joineryType && (
                    <div className="text-xs font-mono-plex">
                      <span className="text-[#5B564C] block mb-0.5">JOINERY & FASTENING:</span>
                      <span className="text-[#8A4E28] font-semibold">{currentLayer.joineryType}</span>
                    </div>
                  )}
                </div>

                {/* Key Engineering Features */}
                <div className="space-y-2 mb-6">
                  <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] font-semibold">
                    Technical Specifications:
                  </span>
                  {currentLayer.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#221F1A] font-mono-plex">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A4E28] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manufacturing Sequence Breadcrumb */}
              <div className="pt-4 border-t border-[#221F1A]/10">
                <div className="flex items-center justify-between text-xs font-mono-plex text-[#5B564C] mb-2">
                  <span>Assembly Flow:</span>
                  <span className="text-[#8A4E28] font-bold">Step {currentLayer.stepNumber} of 04</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 h-2">
                  {ASSEMBLY_LAYERS.map((l) => (
                    <div
                      key={l.id}
                      className={`rounded-full transition-all ${
                        l.id === selectedLayerId ? 'bg-[#8A4E28]' : 'bg-[#D8D2C4]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
