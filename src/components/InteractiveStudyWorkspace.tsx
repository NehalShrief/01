import React, { useState } from 'react';
import {
  DIMENSIONS,
  ANATOMY_MAPPINGS,
  FORM_EVOLUTION_STAGES,
  TECHNICAL_HOTSPOTS
} from '../data/chairData';
import {
  SideElevationSvg,
  FrontElevationSvg,
  TopPlanSvg,
  SectionCutawaySvg
} from './ChairSvgDrawings';
import { FormEvolutionSvg } from './FormEvolutionSvg';
import { AnatomyErgonomicsSvg } from './AnatomyErgonomicsSvg';
import { OrthographicStudyPlate } from './OrthographicStudyPlate';
import {
  Layers,
  Activity,
  Compass,
  Sliders,
  Maximize2,
  Info,
  ChevronRight,
  Eye,
  Crosshair,
  Sparkles,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const InteractiveStudyWorkspace: React.FC = () => {
  // Primary Tab State
  const [activeTab, setActiveTab] = useState<'evolution' | 'ergonomics' | 'blueprint'>('evolution');

  // Form Evolution State
  const [evolutionStep, setEvolutionStep] = useState<number>(4);
  const [showWireframe, setShowWireframe] = useState<boolean>(true);

  // Ergonomics State
  const [selectedAnatomyId, setSelectedAnatomyId] = useState<string>('spine-torso');
  const [showPressureMap, setShowPressureMap] = useState<boolean>(false);
  const [showLoadPaths, setShowLoadPaths] = useState<boolean>(false);

  // Blueprint State
  const [blueprintView, setBlueprintView] = useState<'master' | 'side' | 'front' | 'top' | 'section'>('master');
  const [isBlueprintTheme, setIsBlueprintTheme] = useState<boolean>(true);
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>('hs-spine-curve');

  const currentAnatomy = ANATOMY_MAPPINGS.find((a) => a.id === selectedAnatomyId) || ANATOMY_MAPPINGS[0];
  const currentStage = FORM_EVOLUTION_STAGES.find((s) => s.step === evolutionStep) || FORM_EVOLUTION_STAGES[3];
  const currentHotspot = TECHNICAL_HOTSPOTS.find((h) => h.id === activeHotspotId) || TECHNICAL_HOTSPOTS[0];

  return (
    <section id="workspace" className="py-24 border-b border-[#221F1A]/15 bg-[#EDE9E0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Chapter Numeral Badge */}
        <div className="inline-flex items-center gap-3.5 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#221F1A] flex items-center justify-center font-mono-plex text-sm font-semibold">
            02
          </div>
          <div className="w-10 h-px bg-[#221F1A]" />
          <span className="font-mono-plex text-xs tracking-[0.18em] uppercase text-[#5B564C] font-medium">
            Interactive Technical Study
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-serif-fraunces text-3xl sm:text-5xl font-medium tracking-tight text-[#221F1A] mb-3">
              From Geometric Mass to a Sittable Line
            </h2>
            <p className="text-base text-[#5B564C] max-w-xl">
              An interactive CAD and anatomical workspace. Toggle between massing evolution, ergonomic mapping, and workshop orthographics.
            </p>
          </div>

          {/* Primary Workspace Navigation Switcher */}
          <div className="flex items-center bg-[#E4DFD3] p-1.5 rounded-xl border border-[#221F1A]/15 shadow-xs">
            <button
              onClick={() => setActiveTab('evolution')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono-plex text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'evolution'
                  ? 'bg-[#8A4E28] text-[#EDE9E0] shadow-xs'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Form Evolution</span>
            </button>
            <button
              onClick={() => setActiveTab('ergonomics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono-plex text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'ergonomics'
                  ? 'bg-[#8A4E28] text-[#EDE9E0] shadow-xs'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Ergonomic Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono-plex text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'blueprint'
                  ? 'bg-[#243B4A] text-[#C9D8DE] shadow-xs'
                  : 'text-[#5B564C] hover:text-[#221F1A]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Technical Drawings</span>
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            TAB 1: FORM FINDING & MASSING EVOLUTION
        ------------------------------------------------------------- */}
        {activeTab === 'evolution' && (
          <div className="border border-[#221F1A]/15 rounded-2xl bg-[#E4DFD3]/60 overflow-hidden shadow-sm">
            {/* Control Bar */}
            <div className="p-5 bg-[#E4DFD3] border-b border-[#221F1A]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono-plex text-xs uppercase font-semibold text-[#8A4E28]">
                  Evolution Phase: Stage 0{evolutionStep} of 04
                </span>
                <span className="text-xs text-[#5B564C] font-mono-plex">({currentStage.phase})</span>
              </div>

              {/* Step Buttons */}
              <div className="flex items-center gap-1.5 bg-[#EDE9E0] p-1 rounded-lg border border-[#221F1A]/10">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setEvolutionStep(step)}
                    className={`px-3 py-1 font-mono-plex text-xs rounded transition-all ${
                      evolutionStep === step
                        ? 'bg-[#8A4E28] text-[#EDE9E0] font-semibold'
                        : 'text-[#5B564C] hover:text-[#221F1A]'
                    }`}
                  >
                    0{step}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Stage Canvas & Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Canvas - Displays the Actual 1:1 Orthographic Technical Study Plate Photo with Interactive Dynamic Overlays */}
              <div className="lg:col-span-7 p-6 paper-grid flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#221F1A]/10">
                {evolutionStep === 4 ? (
                  <OrthographicStudyPlate />
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <FormEvolutionSvg stage={evolutionStep} showWireframe={showWireframe} />
                  </div>
                )}
              </div>

              {/* Right Analysis Panel */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#EDE9E0]/80">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase tracking-wider">
                      Stage 0{currentStage.step} Breakdown
                    </span>
                    <span className="font-arabic text-base text-[#8A4E28] font-bold">
                      {evolutionStep === 1 && 'الكتل الهندسية الأولى'}
                      {evolutionStep === 2 && 'نموذج الكتل المنحنية'}
                      {evolutionStep === 3 && 'هيكل الخطوط والأسطح'}
                      {evolutionStep === 4 && 'النموذج النهائي المصنع (ثابت)'}
                    </span>
                  </div>

                  <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-1">
                    {currentStage.title}
                  </h3>
                  <p className="font-mono-plex text-xs text-[#8A4E28] mb-4">{currentStage.subtitle}</p>

                  <p className="text-sm text-[#5B564C] leading-relaxed mb-6">
                    {currentStage.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] font-semibold">
                      Geometric Massing Parameters:
                    </span>
                    {currentStage.geometricAnalysis.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#221F1A] font-mono-plex bg-[#E4DFD3]/80 p-2 rounded border border-[#221F1A]/5">
                        <ChevronRight className="w-3.5 h-3.5 text-[#8A4E28] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#221F1A]/10">
                  <div className="flex items-center justify-between text-xs font-mono-plex">
                    <span className="text-[#5B564C]">Sculptural Synthesis:</span>
                    <span className="text-[#8A4E28] font-semibold">Nahdet Misr Logic</span>
                  </div>
                  <p className="text-xs text-[#5B564C] mt-1 italic">
                    "{currentStage.sculpturalInspiration}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            TAB 2: ERGONOMIC PROFILE & ANATOMY MAPPING
        ------------------------------------------------------------- */}
        {activeTab === 'ergonomics' && (
          <div className="border border-[#221F1A]/15 rounded-2xl bg-[#E4DFD3]/60 overflow-hidden shadow-sm">
            {/* Control Bar */}
            <div className="p-5 bg-[#E4DFD3] border-b border-[#221F1A]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono-plex text-xs uppercase font-semibold text-[#8A4E28]">
                  Human Anatomy to Furniture Mapping
                </span>
              </div>

              {/* Overlays Toggles */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPressureMap(!showPressureMap)}
                  className={`px-3 py-1.5 rounded text-xs font-mono-plex flex items-center gap-1.5 transition-all ${
                    showPressureMap
                      ? 'bg-[#EF4444] text-white font-medium shadow-xs'
                      : 'bg-[#EDE9E0] text-[#5B564C] border border-[#221F1A]/10 hover:text-[#221F1A]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Pressure Distribution</span>
                </button>
                <button
                  onClick={() => setShowLoadPaths(!showLoadPaths)}
                  className={`px-3 py-1.5 rounded text-xs font-mono-plex flex items-center gap-1.5 transition-all ${
                    showLoadPaths
                      ? 'bg-[#3B82F6] text-white font-medium shadow-xs'
                      : 'bg-[#EDE9E0] text-[#5B564C] border border-[#221F1A]/10 hover:text-[#221F1A]'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Load Vectors</span>
                </button>
              </div>
            </div>

            {/* Main Ergonomics Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Anatomical Visualizer */}
              <div className="lg:col-span-7 p-6 paper-grid flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#221F1A]/10">
                <AnatomyErgonomicsSvg
                  selectedMappingId={selectedAnatomyId}
                  onSelectMapping={setSelectedAnatomyId}
                  showAngles={true}
                />
              </div>

              {/* Right Anatomical Mapping Details */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#EDE9E0]/80">
                <div>
                  <span className="font-mono-plex text-xs font-semibold text-[#8A4E28] uppercase tracking-wider block mb-2">
                    Anatomy-to-Furniture Translation
                  </span>

                  {/* Component Buttons List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {ANATOMY_MAPPINGS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedAnatomyId(m.id)}
                        className={`px-2.5 py-1 rounded text-xs font-mono-plex transition-all ${
                          selectedAnatomyId === m.id
                            ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                            : 'bg-[#E4DFD3] text-[#5B564C] hover:bg-[#D8D2C4]'
                        }`}
                      >
                        {m.humanAnatomy.split('/')[0]}
                      </button>
                    ))}
                  </div>

                  <h3 className="font-serif-fraunces text-2xl font-medium text-[#221F1A] mb-1">
                    {currentAnatomy.chairComponent}
                  </h3>
                  <div className="font-arabic text-base text-[#8A4E28] font-bold mb-4">
                    {currentAnatomy.chairComponentArabic}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-[#E4DFD3] p-3.5 rounded-xl border border-[#221F1A]/10">
                      <span className="font-mono-plex text-[10px] text-[#8A4E28] uppercase font-bold block mb-1">
                        Sculptural Genesis
                      </span>
                      <p className="text-xs text-[#221F1A] leading-relaxed">
                        {currentAnatomy.designTranslation}
                      </p>
                    </div>

                    <div className="bg-[#E4DFD3] p-3.5 rounded-xl border border-[#221F1A]/10">
                      <span className="font-mono-plex text-[10px] text-[#3B82F6] uppercase font-bold block mb-1">
                        Ergonomic & Biomechanical Outcome
                      </span>
                      <p className="text-xs text-[#221F1A] leading-relaxed">
                        {currentAnatomy.ergonomicOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Ergonomic Constants */}
                <div className="pt-4 border-t border-[#221F1A]/10 grid grid-cols-2 gap-3 text-xs font-mono-plex">
                  <div>
                    <span className="text-[#5B564C] block">Back Angle:</span>
                    <span className="text-[#221F1A] font-bold">112° Recline</span>
                  </div>
                  <div>
                    <span className="text-[#5B564C] block">Seat Angle:</span>
                    <span className="text-[#221F1A] font-bold">7° Pelvic Pitch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            TAB 3: TECHNICAL DRAWINGS & BLUEPRINTS
        ------------------------------------------------------------- */}
        {activeTab === 'blueprint' && (
          <div
            className={`border rounded-2xl overflow-hidden shadow-md transition-colors duration-300 ${
              isBlueprintTheme
                ? 'border-[#243B4A] blueprint-grid text-[#C9D8DE]'
                : 'border-[#221F1A]/15 bg-[#EDE9E0] text-[#221F1A]'
            }`}
          >
            {/* Blueprint Header */}
            <div
              className={`p-4 border-b flex flex-wrap items-center justify-between gap-4 ${
                isBlueprintTheme
                  ? 'bg-[#1B2C38] border-[#243B4A]'
                  : 'bg-[#E4DFD3] border-[#221F1A]/10'
              }`}
            >
              {/* Title and View Selectors */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#64B5F6]" />
                  <span className="font-mono-plex text-xs font-semibold uppercase tracking-wider">
                    Orthographic CAD Projection · Plate 05
                  </span>
                </div>
              </div>

              {/* View Switchers */}
              <div className="flex items-center gap-1.5 font-mono-plex text-xs">
                <button
                  onClick={() => setBlueprintView('master')}
                  className={`px-3 py-1 rounded transition-all ${
                    blueprintView === 'master'
                      ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                      : 'bg-black/20 text-[#C9D8DE] hover:bg-black/40'
                  }`}
                >
                  4-View Master Plate
                </button>
                <button
                  onClick={() => setBlueprintView('side')}
                  className={`px-3 py-1 rounded transition-all ${
                    blueprintView === 'side'
                      ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                      : 'bg-black/20 text-[#C9D8DE] hover:bg-black/40'
                  }`}
                >
                  Side Elevation (112°)
                </button>
                <button
                  onClick={() => setBlueprintView('front')}
                  className={`px-3 py-1 rounded transition-all ${
                    blueprintView === 'front'
                      ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                      : 'bg-black/20 text-[#C9D8DE] hover:bg-black/40'
                  }`}
                >
                  Front (620mm)
                </button>
                <button
                  onClick={() => setBlueprintView('top')}
                  className={`px-3 py-1 rounded transition-all ${
                    blueprintView === 'top'
                      ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                      : 'bg-black/20 text-[#C9D8DE] hover:bg-black/40'
                  }`}
                >
                  Top Plan (700mm)
                </button>
                <button
                  onClick={() => setBlueprintView('section')}
                  className={`px-3 py-1 rounded transition-all ${
                    blueprintView === 'section'
                      ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                      : 'bg-black/20 text-[#C9D8DE] hover:bg-black/40'
                  }`}
                >
                  Section A-A (Joinery)
                </button>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center gap-2 font-mono-plex text-xs">
                <button
                  onClick={() => setIsBlueprintTheme(!isBlueprintTheme)}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs transition-all"
                >
                  {isBlueprintTheme ? 'Paper Mode' : 'Blueprint Mode'}
                </button>
              </div>
            </div>

            {/* Blueprint Drawing Viewport */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Vector Drawing */}
              <div className="lg:col-span-8 p-6 flex items-center justify-center min-h-[500px] border-b lg:border-b-0 lg:border-r border-white/10 relative">
                {blueprintView === 'master' && (
                  <div className="w-full">
                    <OrthographicStudyPlate
                      showDimensionsDefault={showDimensions}
                      onSelectHotspot={(id) => {
                        if (id === 'hs-front-headrest') setActiveHotspotId('hs-headrest-tenon');
                        else if (id === 'hs-front-armrest') setActiveHotspotId('hs-arm-lap');
                        else if (id === 'hs-side-recline') setActiveHotspotId('hs-spine-curve');
                        else if (id === 'hs-side-seat') setActiveHotspotId('hs-pelvic-pitch');
                        else if (id === 'hs-section-tectonics') setActiveHotspotId('hs-seat-corner');
                      }}
                    />
                  </div>
                )}
                {blueprintView === 'side' && (
                  <SideElevationSvg
                    blueprintMode={isBlueprintTheme}
                    showDimensions={showDimensions}
                    activeHotspotId={activeHotspotId}
                    onClickHotspot={(id) => setActiveHotspotId(id)}
                  />
                )}
                {blueprintView === 'front' && (
                  <FrontElevationSvg
                    blueprintMode={isBlueprintTheme}
                    showDimensions={showDimensions}
                  />
                )}
                {blueprintView === 'top' && (
                  <TopPlanSvg
                    blueprintMode={isBlueprintTheme}
                    showDimensions={showDimensions}
                  />
                )}
                {blueprintView === 'section' && (
                  <SectionCutawaySvg
                    blueprintMode={isBlueprintTheme}
                  />
                )}

                {/* Hotspot Indicator Guide */}
                <div className="absolute bottom-3 left-4 font-mono-plex text-[10px] opacity-75">
                  Click pulsing orange nodes on diagrams to inspect specific workshop joinery & dimensional details.
                </div>
              </div>

              {/* Right Hotspot Detail & Dimension Registry */}
              <div className={`lg:col-span-4 p-6 flex flex-col justify-between ${isBlueprintTheme ? 'bg-[#121F29]/80' : 'bg-[#E4DFD3]/80'}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-plex text-xs uppercase tracking-wider text-[#64B5F6] font-semibold">
                      Workshop Inspection
                    </span>
                    <span className="font-arabic text-sm text-[#C59B27] font-bold">
                      تفاصيل التصنيع والمقاسات
                    </span>
                  </div>

                  <h4 className="font-serif-fraunces text-xl font-medium mb-1">
                    {currentHotspot.title}
                  </h4>
                  <div className="font-arabic text-sm text-[#64B5F6] mb-3">
                    {currentHotspot.titleArabic}
                  </div>

                  <p className="text-xs leading-relaxed opacity-85 mb-4">
                    {currentHotspot.fullDetail}
                  </p>

                  <div className="p-3 rounded-lg bg-black/20 border border-white/10 font-mono-plex text-[11px] mb-6">
                    <span className="text-[#64B5F6] block mb-1 font-semibold">SPECIFICATION:</span>
                    <span>{currentHotspot.technicalSpec}</span>
                  </div>

                  {/* Hotspots Quick Switcher */}
                  <span className="block font-mono-plex text-[10px] uppercase tracking-wider opacity-60 mb-2">
                    Select Detail Hotspot:
                  </span>
                  <div className="space-y-1.5">
                    {TECHNICAL_HOTSPOTS.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setActiveHotspotId(h.id)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs font-mono-plex flex items-center justify-between transition-all ${
                          activeHotspotId === h.id
                            ? 'bg-[#64B5F6] text-[#121F29] font-bold'
                            : 'bg-white/5 hover:bg-white/10 opacity-80'
                        }`}
                      >
                        <span className="truncate">{h.title}</span>
                        <span className="text-[10px] uppercase opacity-70 ml-2">{h.category}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Dimension Summary */}
                <div className="pt-4 mt-6 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono-plex opacity-80">
                  <div>OH: 1080 mm</div>
                  <div>SH: 460 mm</div>
                  <div>OD: 700 mm</div>
                  <div>OW: 620 mm</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
