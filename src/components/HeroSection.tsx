import React, { useState } from 'react';
import { CHAIR_METADATA } from '../data/chairData';
import { SideElevationSvg, FrontElevationSvg, TopPlanSvg } from './ChairSvgDrawings';
import { SlotImageUploader } from './SlotImageUploader';
import { useImageSlots } from '../context/ImageSlotContext';
import { TiltContainer } from './TiltContainer';
import {
  ArrowDown,
  Layers,
  Compass,
  Maximize2,
  Ruler,
  Tag,
  Info,
  CheckCircle2,
  Sparkles,
  Eye,
  Camera,
  UploadCloud
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeHeroView, setActiveHeroView] = useState<'photo' | 'side' | 'front' | 'top'>('photo');
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const { getSlotImage } = useImageSlots();
 const contextPhotoUrl = 'https://i.ibb.co/gMHxZ5Nw/Gemini-Generated-Image-fdaimdfdaimdfdai.jpg';
  const sideProfileUrl = getSlotImage('hero_side', '');
  const frontViewUrl = getSlotImage('hero_front', '');
  const topPlanUrl = getSlotImage('hero_top', '');

  const activeSlotId =
    activeHeroView === 'photo'
      ? 'hero_context'
      : activeHeroView === 'side'
      ? 'hero_side'
      : activeHeroView === 'front'
      ? 'hero_front'
      : 'hero_top';

  const activeSlotLabel =
    activeHeroView === 'photo'
      ? 'Context Photo'
      : activeHeroView === 'side'
      ? 'Side Profile'
      : activeHeroView === 'front'
      ? 'Front View'
      : 'To lan';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hotspots = [
    {
      id: 'backrest-top',
      x: '49%',
      y: '22%',
      label: 'Backrest Top Rail',
      spec: 'Solid Ash Apex',
      description: 'Steam-bent solid ash upper timber rail with continuous grain anchoring cervical neck ergonomics.'
    },
    {
      id: 'interlocking-spoke',
      x: '45%',
      y: '57%',
      label: 'Interlocking Spoke System',
      spec: 'X-Joinery Junction',
      description: 'Precision interlocked timber spoke array distributing dynamic thoracic and lateral torque loads.'
    },
    {
      id: 'organic-bevel',
      x: '57%',
      y: '60%',
      label: 'Organic Bevel & Wool Cushion',
      spec: '3mm Chamfer · Oatmeal Weave',
      description: 'Hand-planed 3mm tactile edge chamfers paired with dual-density unbleached wool & linen upholstery.'
    },
    {
      id: 'rear-leg-taper',
      x: '34%',
      y: '68%',
      label: 'Rear Leg Taper',
      spec: '48 mm Compound Taper',
      description: 'Solid ash rear leg transitioning from 48mm section at seat chassis to provide monumental cantilevering support.'
    },
    {
      id: 'cyclic-stress',
      x: '23%',
      y: '83%',
      label: 'Cyclic Stress Test Node',
      spec: '>3,500 N BIFMA Node',
      description: 'Structural joint testing node verified under BIFMA X5.1 dynamic cyclic loading with zero joint fatigue.'
    },
    {
      id: 'leg-splay',
      x: '64%',
      y: '87%',
      label: 'Leg Taper & Splay',
      spec: '50.8 mm Ground Guide',
      description: 'Slanted lower leg stance splayed outward with felt-lined brass floor protection glide.'
    }
  ];

  return (
    <header id="hero" className="pt-24 pb-16 border-b border-[#221F1A]/15 relative overflow-hidden bg-gradient-to-b from-[#EDE9E0] to-[#E4DFD3]/40">
      {/* Background Subtle Watermark */}
      <div className="absolute right-6 top-16 text-[#221F1A]/[0.03] font-serif-fraunces hidden md:block md:text-[180px] lg:text-[260px] font-bold select-none pointer-events-none leading-none">
        THABET
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Eyebrow and Arabic Callout */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-plex text-xs tracking-[0.2em] uppercase font-semibold text-[#8A4E28]">
              Portfolio entry — No. 01
            </span>
            <span className="w-8 h-px bg-[#8A4E28]/40" />
            <span className="font-mono-plex text-xs text-[#5B564C] tracking-widest">
              2025 – 2026 ARCHIVE
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#E4DFD3] border border-[#221F1A]/10 px-3 py-1 rounded-full">
            <span className="font-arabic text-lg font-bold text-[#8A4E28] leading-none">ثابت</span>
            <span className="font-mono-plex text-[11px] text-[#5B564C] tracking-wider uppercase">THABET CHAIR</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h1 className="font-serif-fraunces text-4xl sm:text-6xl lg:text-8xl font-normal tracking-tight text-[#221F1A] leading-[0.95]">
            The Wren <br />
            <em className="italic font-light text-[#8A4E28]">Chair</em>
          </h1>
        </div>

        {/* Subtitle / Philosophy */}
        <p className="text-base md:text-xl text-[#5B564C] max-w-2xl font-normal leading-relaxed mb-10">
          A single-form lounge chair built on a question borrowed from a 1926 monument: what happens when ancient Egyptian monumental mass is asked to hold a living, resting human body.
        </p>

        {/* Specification pill bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#E4DFD3]/80 border border-[#221F1A]/15 rounded-xl shadow-xs mb-10">
          <div>
            <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] mb-1">
              Category
            </span>
            <span className="font-medium text-sm text-[#221F1A]">Lounge Chair</span>
          </div>
          <div>
            <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] mb-1">
              Primary Material
            </span>
            <span className="font-medium text-sm text-[#221F1A]">Steam-Bent Ash / Walnut</span>
          </div>
          <div>
            <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] mb-1">
              Weight & Balance
            </span>
            <span className="font-medium text-sm text-[#221F1A]">8.4 kg · 40/60 Balance</span>
          </div>
          <div>
            <span className="block font-mono-plex text-[11px] uppercase tracking-wider text-[#5B564C] mb-1">
              Envelope (W×D×H)
            </span>
            <span className="font-medium text-sm text-[#221F1A]">620 × 700 × 1080 mm</span>
          </div>
        </div>

        {/* Interactive Hero Showcase View */}
        <div className="relative border border-[#221F1A]/15 rounded-2xl bg-[#EDE9E0] overflow-hidden shadow-sm">
          {/* Header Controls Bar */}
          <div className="px-5 py-3.5 bg-[#E4DFD3] border-b border-[#221F1A]/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8A4E28]" />
              <span className="font-mono-plex text-xs uppercase tracking-wider font-semibold text-[#221F1A]">
                {activeHeroView === 'photo'
                  ? 'Architectural Context Study · 1:1 In-Situ Scale'
                  : 'Orthographic CAD Blueprints · 1:1 Scale Projections'}
              </span>
            </div>

            {/* View Switcher Tabs & Upload Trigger */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-[#EDE9E0] p-1 rounded-lg border border-[#221F1A]/10 text-xs font-mono-plex">
                <button
                  onClick={() => setActiveHeroView('photo')}
                  className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
                    activeHeroView === 'photo'
                      ? 'bg-[#8A4E28] text-[#EDE9E0] font-medium shadow-xs'
                      : 'text-[#5B564C] hover:text-[#221F1A]'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Context Photo</span>
                </button>
                <button
                  onClick={() => setActiveHeroView('side')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeHeroView === 'side'
                      ? 'bg-[#8A4E28] text-[#EDE9E0] font-medium shadow-xs'
                      : 'text-[#5B564C] hover:text-[#221F1A]'
                  }`}
                >
                  Side Profile (112°)
                </button>
                <button
                  onClick={() => setActiveHeroView('front')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeHeroView === 'front'
                      ? 'bg-[#8A4E28] text-[#EDE9E0] font-medium shadow-xs'
                      : 'text-[#5B564C] hover:text-[#221F1A]'
                  }`}
                >
                  Front View (620mm)
                </button>
                <button
                  onClick={() => setActiveHeroView('top')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeHeroView === 'top'
                      ? 'bg-[#8A4E28] text-[#EDE9E0] font-medium shadow-xs'
                      : 'text-[#5B564C] hover:text-[#221F1A]'
                  }`}
                >
                  Top Plan (700mm)
                </button>
              </div>

              {/* Upload button for active view slot */}
              <SlotImageUploader
                slotId={activeSlotId}
                slotLabel={activeSlotLabel}
                variant="compact"
              />
            </div>
          </div>

          {/* Canvas / Photo Render Area */}
          <div className="relative min-h-[520px] sm:min-h-[580px] p-4 sm:p-6 flex items-center justify-center paper-grid overflow-hidden">
            {activeHeroView === 'photo' && (
              <TiltContainer className="w-full max-w-2xl" maxTilt={7} scale={1.015}>
                <div className="relative aspect-square w-full select-none rounded-xl overflow-hidden border border-[#221F1A]/20 bg-[#221F1A]/5 shadow-md">
                  {/* Real In-Situ Photo */}
                  <img
                    src={contextPhotoUrl}
                    alt="The Wren Chair in-situ architectural context with resting posture"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash')) {
                        target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85';
                      }
                    }}
                  />

                    {/* Top-Left Slot Uploader Action Pill */}
                    <div className="absolute top-3 left-3 z-30">
                      <SlotImageUploader
                        slotId="hero_context"
                        slotLabel="Context Photo"
                        variant="overlay"
                      />
                    </div>

                    {/* Subtle Blueprint Grid Accent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221F1A]/60 via-transparent to-[#221F1A]/20 pointer-events-none rounded-xl" />

                  {/* Dynamic Dimension Overlays & CAD Guideline Vectors */}
                  {showDimensions && (
                    <svg
                      viewBox="0 0 1000 1000"
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <marker id="dim-arrow-hero" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                          <path d="M 0 2 L 8 5 L 0 8 z" fill="#EDE9E0" />
                        </marker>
                        <marker id="dim-arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                          <path d="M 0 2 L 8 5 L 0 8 z" fill="#F59E0B" />
                        </marker>
                      </defs>

                      {/* 1500 mm Overall Height Scale Reference (Right Outer Margin) */}
                      <g className="transition-opacity duration-300">
                        {/* Top Apex Witness Line */}
                        <line x1="530" y1="218" x2="930" y2="218" stroke="#EDE9E0" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.75" />
                        {/* Bottom Ground Witness Line */}
                        <line x1="660" y1="890" x2="930" y2="890" stroke="#EDE9E0" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.75" />
                        {/* Right Vertical Dimension Line with Arrows */}
                        <line x1="910" y1="228" x2="910" y2="880" stroke="#EDE9E0" strokeWidth="1.5" markerStart="url(#dim-arrow-hero)" markerEnd="url(#dim-arrow-hero)" />
                        
                        {/* Overall Height Badge */}
                        <rect x="800" y="540" width="180" height="26" rx="6" fill="#221F1A" fillOpacity="0.9" stroke="#EDE9E0" strokeWidth="1" />
                        <text x="890" y="557" fill="#EDE9E0" fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="bold">
                          1500 mm SCALE REF
                        </text>
                      </g>

                      {/* 113.2° Recline Profile Arc (Between Vertical Plumb and Backward Rake Spine) */}
                      <g className="transition-opacity duration-300">
                        {/* Vertical Reference Plum Line */}
                        <line x1="390" y1="220" x2="390" y2="670" stroke="#EDE9E0" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.65" />
                        {/* Backward Rake Vector Line */}
                        <line x1="390" y1="220" x2="275" y2="680" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
                        {/* Measured Arc between Vertical and Rake */}
                        <path d="M 390 380 A 160 160 0 0 1 345 425" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        {/* 113.2° Angle Badge */}
                        <rect x="235" y="445" width="135" height="26" rx="6" fill="#8A4E28" fillOpacity="0.95" stroke="#FCD34D" strokeWidth="1" />
                        <text x="302" y="462" fill="#FFFFFF" fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="bold">
                          113.2° RECLINE
                        </text>
                      </g>

                      {/* 48mm Rear Leg Taper Callout */}
                      <g className="transition-opacity duration-300">
                        <line x1="340" y1="680" x2="210" y2="680" stroke="#EDE9E0" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                        <circle cx="340" cy="680" r="3" fill="#8A4E28" />
                        <rect x="140" y="667" width="90" height="22" rx="4" fill="#221F1A" fillOpacity="0.85" stroke="#EDE9E0" strokeWidth="0.8" />
                        <text x="185" y="682" fill="#EDE9E0" fontSize="10" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
                          48mm TAPER
                        </text>
                      </g>

                      {/* 7° Pelvis Cradle Angle across Seat Pan */}
                      <g className="transition-opacity duration-300">
                        <line x1="370" y1="630" x2="570" y2="655" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
                        <rect x="420" y="665" width="115" height="22" rx="5" fill="#10B981" fillOpacity="0.9" />
                        <text x="477" y="680" fill="#FFFFFF" fontSize="10.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="bold">
                          7° PELVIS CRADLE
                        </text>
                      </g>

                      {/* 700 mm Depth Footprint Dimension */}
                      <g className="transition-opacity duration-300">
                        <line x1="275" y1="925" x2="650" y2="925" stroke="#EDE9E0" strokeWidth="1.5" markerStart="url(#dim-arrow-hero)" markerEnd="url(#dim-arrow-hero)" />
                        <rect x="400" y="913" width="125" height="24" rx="6" fill="#221F1A" fillOpacity="0.9" stroke="#EDE9E0" strokeWidth="1" />
                        <text x="462" y="929" fill="#EDE9E0" fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
                          700 mm DEPTH
                        </text>
                      </g>
                    </svg>
                  )}

                  {/* Interactive Hotspot Pins Over Photo */}
                  {showHotspots && (
                    <div className="absolute inset-0 z-20 pointer-events-auto">
                      {hotspots.map((hs) => {
                        const isActive = activeHotspotId === hs.id;
                        const isRightSide = parseFloat(hs.x) > 52;
                        const isBottomSide = parseFloat(hs.y) > 75;
                        const isTopSide = parseFloat(hs.y) < 30;

                        return (
                          <div
                            key={hs.id}
                            style={{ left: hs.x, top: hs.y }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group"
                          >
                            {/* Pulsing Pin Button */}
                            <button
                              onClick={() => setActiveHotspotId(isActive ? null : hs.id)}
                              className={`relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-transform hover:scale-125 focus:outline-hidden ${
                                isActive
                                  ? 'bg-[#8A4E28] text-white ring-2 sm:ring-4 ring-[#8A4E28]/40 shadow-lg scale-110'
                                  : 'bg-[#EDE9E0]/90 text-[#221F1A] border border-[#221F1A]/30 shadow-md backdrop-blur-xs'
                              }`}
                              title={hs.label}
                            >
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current" />
                              <span className="absolute inset-0 rounded-full animate-ping bg-[#8A4E28]/30 pointer-events-none" />
                            </button>

                            {/* Responsive Tooltip Overlay */}
                            <div
                              className={`absolute ${
                                isRightSide ? 'right-6 sm:right-8 -translate-x-0' : 'left-6 sm:left-8 translate-x-0'
                              } ${
                                isBottomSide ? 'bottom-0' : isTopSide ? 'top-0' : 'top-1/2 -translate-y-1/2'
                              } w-40 sm:w-48 md:w-60 max-w-[210px] sm:max-w-[240px] md:max-w-[260px] bg-[#221F1A]/95 text-[#EDE9E0] p-2 sm:p-2.5 md:p-3.5 rounded-lg sm:rounded-xl shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-200 pointer-events-none z-30 ${
                                isActive
                                  ? 'opacity-100'
                                  : 'opacity-0 group-hover:opacity-100'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                                <span className="font-serif-fraunces text-[10.5px] sm:text-xs md:text-sm font-semibold text-white truncate">
                                  {hs.label}
                                </span>
                                <span className="font-mono-plex text-[7.5px] sm:text-[8.5px] md:text-[9.5px] text-[#8A4E28] font-bold bg-[#EDE9E0] px-1 sm:px-1.5 py-0.2 rounded whitespace-nowrap">
                                  {hs.spec}
                                </span>
                              </div>
                              <p className="text-[8.5px] sm:text-[9.5px] md:text-[11px] text-[#D8D2C4] leading-snug sm:leading-relaxed">
                                {hs.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Top Right HUD Controls on Image */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-[#221F1A]/85 backdrop-blur-md p-1 rounded-xl border border-white/15 shadow-md">
                    <button
                      onClick={() => setShowDimensions(!showDimensions)}
                      className={`px-2.5 py-1 rounded-lg font-mono-plex text-[11px] font-medium flex items-center gap-1.5 transition-all ${
                        showDimensions
                          ? 'bg-[#8A4E28] text-white'
                          : 'text-[#D8D2C4] hover:text-white'
                      }`}
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>{showDimensions ? 'Dims: ON' : 'Dims: OFF'}</span>
                    </button>
                    <button
                      onClick={() => setShowHotspots(!showHotspots)}
                      className={`px-2.5 py-1 rounded-lg font-mono-plex text-[11px] font-medium flex items-center gap-1.5 transition-all ${
                        showHotspots
                          ? 'bg-[#8A4E28] text-white'
                          : 'text-[#D8D2C4] hover:text-white'
                      }`}
                    >
                      <Tag className="w-3.5 h-3.5" />
                      <span>{showHotspots ? 'Pins: ON' : 'Pins: OFF'}</span>
                    </button>
                  </div>

                  {/* Bottom Image Caption Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#221F1A]/95 via-[#221F1A]/70 to-transparent z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif-fraunces text-base sm:text-lg text-[#EDE9E0] font-medium">
                          The Wren Chair (ثابت) · In-Situ Architectural Study
                        </span>
                      </div>
                      <p className="text-xs text-[#D8D2C4]/90 font-mono-plex">
                        112° Recline Profile · Steam-bent Solid Walnut & Ash Frame · Natural Wool Cushions
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto font-mono-plex text-[11px] text-[#EDE9E0]/80">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>1:1 SCALE RESOLUTION</span>
                    </div>
                  </div>
                </div>
              </TiltContainer>
            )}

            {/* Orthographic CAD Views with Slot Image Support */}
            {activeHeroView === 'side' && (
              <div className="w-full max-w-md flex flex-col items-center">
                {sideProfileUrl ? (
                  <TiltContainer className="w-full aspect-square mb-3" maxTilt={8} scale={1.02}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#221F1A]/20 bg-white/70 shadow-xs">
                      <img
                        src={sideProfileUrl}
                        alt="Side Profile View (112°)"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-2"
                      />
                      <div className="absolute top-2 left-2 z-20">
                        <SlotImageUploader slotId="hero_side" slotLabel="Side Profile" variant="overlay" />
                      </div>
                    </div>
                  </TiltContainer>
                ) : (
                  <div className="relative w-full">
                    <SideElevationSvg showDimensions={true} showLoadPaths={true} />
                    <div className="absolute top-2 right-2 z-20">
                      <SlotImageUploader slotId="hero_side" slotLabel="Side Profile" variant="overlay" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeHeroView === 'front' && (
              <div className="w-full max-w-md flex flex-col items-center">
                {frontViewUrl ? (
                  <TiltContainer className="w-full aspect-square mb-3" maxTilt={8} scale={1.02}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#221F1A]/20 bg-white/70 shadow-xs">
                      <img
                        src={frontViewUrl}
                        alt="Front View (620mm)"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-2"
                      />
                      <div className="absolute top-2 left-2 z-20">
                        <SlotImageUploader slotId="hero_front" slotLabel="Front View" variant="overlay" />
                      </div>
                    </div>
                  </TiltContainer>
                ) : (
                  <div className="relative w-full">
                    <FrontElevationSvg showDimensions={true} />
                    <div className="absolute top-2 right-2 z-20">
                      <SlotImageUploader slotId="hero_front" slotLabel="Front View" variant="overlay" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeHeroView === 'top' && (
              <div className="w-full max-w-sm flex flex-col items-center">
                {topPlanUrl ? (
                  <TiltContainer className="w-full aspect-square mb-3" maxTilt={8} scale={1.02}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#221F1A]/20 bg-white/70 shadow-xs">
                      <img
                        src={topPlanUrl}
                        alt="Top Plan (700mm)"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-2"
                      />
                      <div className="absolute top-2 left-2 z-20">
                        <SlotImageUploader slotId="hero_top" slotLabel="Top Plan" variant="overlay" />
                      </div>
                    </div>
                  </TiltContainer>
                ) : (
                  <div className="relative w-full">
                    <TopPlanSvg showDimensions={true} />
                    <div className="absolute top-2 right-2 z-20">
                      <SlotImageUploader slotId="hero_top" slotLabel="Top Plan" variant="overlay" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick Action Overlay Buttons */}
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={() => scrollToSection('workspace')}
                className="px-4 py-2 bg-[#8A4E28] hover:bg-[#6B3B1D] text-[#EDE9E0] rounded-lg font-mono-plex text-xs font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-102"
              >
                <span>Interactive Study</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollToSection('exploded')}
                className="px-3 py-2 bg-[#E4DFD3] hover:bg-[#D8D2C4] text-[#221F1A] border border-[#221F1A]/15 rounded-lg font-mono-plex text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <Layers className="w-3.5 h-3.5 text-[#8A4E28]" />
                <span>Exploded View</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

