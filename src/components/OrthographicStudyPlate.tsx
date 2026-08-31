import React, { useState } from 'react';
import { useImageSlots } from '../context/ImageSlotContext';
import { SlotImageUploader } from './SlotImageUploader';
import { TiltContainer } from './TiltContainer';
import {
  Ruler,
  Tag,
  Maximize2,
  Minimize2,
  Eye,
  Crosshair,
  Layers,
  ZoomIn,
  CheckCircle2,
  Info,
  UploadCloud
} from 'lucide-react';

interface OrthographicStudyPlateProps {
  showDimensionsDefault?: boolean;
  showHotspotsDefault?: boolean;
  activeView?: 'all' | 'front' | 'side' | 'top' | 'section';
  onSelectHotspot?: (id: string) => void;
  className?: string;
}

export const OrthographicStudyPlate: React.FC<OrthographicStudyPlateProps> = ({
  showDimensionsDefault = true,
  showHotspotsDefault = true,
  activeView = 'all',
  onSelectHotspot,
  className = ''
}) => {
  const [selectedView, setSelectedView] = useState<'all' | 'front' | 'side' | 'top' | 'section'>(activeView);
  const [showDimensions, setShowDimensions] = useState<boolean>(showDimensionsDefault);
  const [showHotspots, setShowHotspots] = useState<boolean>(showHotspotsDefault);
  const [activePinId, setActivePinId] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const { getSlotImage } = useImageSlots();
  const masterCadUrl = getSlotImage('cad_master', 'Gemini_Generated_Image_8hf5sg8hf5sg8hf5.jpg');
  const frontCadUrl = getSlotImage('cad_front', '');
  const sideCadUrl = getSlotImage('cad_side', '');
  const topCadUrl = getSlotImage('cad_top', '');
  const sectionCadUrl = getSlotImage('cad_section', '');

  const activeSlotId =
    selectedView === 'all'
      ? 'cad_master'
      : selectedView === 'front'
      ? 'cad_front'
      : selectedView === 'side'
      ? 'cad_side'
      : selectedView === 'top'
      ? 'cad_top'
      : 'cad_section';

  const activeSlotLabel =
    selectedView === 'all'
      ? '4-View Master Plate'
      : selectedView === 'front'
      ? 'Front CAD Plate'
      : selectedView === 'side'
      ? 'Side CAD Plate'
      : selectedView === 'top'
      ? 'Top CAD Plate'
      : 'Section A-A Plate';

  // Determine current active image for quadrant
  const currentSpecificUrl =
    selectedView === 'front' && frontCadUrl
      ? frontCadUrl
      : selectedView === 'side' && sideCadUrl
      ? sideCadUrl
      : selectedView === 'top' && topCadUrl
      ? topCadUrl
      : selectedView === 'section' && sectionCadUrl
      ? sectionCadUrl
      : null;

  const effectiveImageUrl = currentSpecificUrl || masterCadUrl;
  const isUsingMasterPlate = !currentSpecificUrl;

  const cadHotspots = [
    {
      id: 'hs-front-headrest',
      x: '27%',
      y: '12%',
      label: 'Headrest (BW: 550mm)',
      spec: 'OH: 1080mm',
      view: 'front',
      description: 'Steam-bent solid European Ash headrest spanning 550mm with gentle 12mm crown crowning.'
    },
    {
      id: 'hs-front-armrest',
      x: '39%',
      y: '30%',
      label: 'Sloped Armrest (AH: 660→560mm)',
      spec: 'OW: 620mm',
      view: 'front',
      description: 'Forward-raked arm profile tapering from 660mm at front post to 560mm at rear joint.'
    },
    {
      id: 'hs-side-recline',
      x: '81%',
      y: '16%',
      label: 'Thoracic Angle (BA: 112°)',
      spec: '112° Recline',
      view: 'side',
      description: 'Optimal reading recline angle reducing intervertebral disk pressure by 28%.'
    },
    {
      id: 'hs-side-seat',
      x: '75%',
      y: '32%',
      label: 'Seat Incline (SA: 7° / SH: 460mm)',
      spec: 'SD: 500mm',
      view: 'side',
      description: '7° posterior drop preventing forward pelvic sliding and supporting natural ischial tuberosity load.'
    },
    {
      id: 'hs-top-curvature',
      x: '27%',
      y: '63%',
      label: 'Steam-Bent Shell Arc',
      spec: 'SW: 550mm',
      view: 'top',
      description: 'Continuous compound curvature cradling lumbar anatomy without restrictive lateral bolsters.'
    },
    {
      id: 'hs-section-tectonics',
      x: '62%',
      y: '74%',
      label: 'Tectonic Joinery & Cushion Core',
      spec: 'Mortise & Tenon',
      view: 'section',
      description: 'Blind mortise & tenon with Baltic birch 9-ply core and dual-density multi-zone foam topper.'
    }
  ];

  // Zoom transform styles based on selected view quadrant
  const getQuadrantTransform = () => {
    switch (selectedView) {
      case 'front':
        return 'scale(1.85) translate(24%, 24%)';
      case 'side':
        return 'scale(1.85) translate(-24%, 24%)';
      case 'top':
        return 'scale(1.85) translate(24%, -24%)';
      case 'section':
        return 'scale(1.85) translate(-24%, -24%)';
      case 'all':
      default:
        return 'scale(1) translate(0%, 0%)';
    }
  };

  const handlePinClick = (id: string) => {
    const nextId = activePinId === id ? null : id;
    setActivePinId(nextId);
    if (onSelectHotspot && nextId) {
      onSelectHotspot(nextId);
    }
  };

  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      {/* Plate View Control Toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 px-2">
        {/* Quadrant Focus Tabs */}
        <div className="flex items-center bg-[#EDE9E0] p-1 rounded-xl border border-[#221F1A]/10 text-xs font-mono-plex shadow-2xs">
          <button
            onClick={() => setSelectedView('all')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              selectedView === 'all'
                ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                : 'text-[#5B564C] hover:text-[#221F1A]'
            }`}
          >
            4-View Master Plate
          </button>
          <button
            onClick={() => setSelectedView('front')}
            className={`px-2 py-1 rounded-lg transition-all ${
              selectedView === 'front'
                ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                : 'text-[#5B564C] hover:text-[#221F1A]'
            }`}
          >
            Front (620mm)
          </button>
          <button
            onClick={() => setSelectedView('side')}
            className={`px-2 py-1 rounded-lg transition-all ${
              selectedView === 'side'
                ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                : 'text-[#5B564C] hover:text-[#221F1A]'
            }`}
          >
            Side (112°)
          </button>
          <button
            onClick={() => setSelectedView('top')}
            className={`px-2 py-1 rounded-lg transition-all ${
              selectedView === 'top'
                ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                : 'text-[#5B564C] hover:text-[#221F1A]'
            }`}
          >
            Top Plan
          </button>
          <button
            onClick={() => setSelectedView('section')}
            className={`px-2 py-1 rounded-lg transition-all ${
              selectedView === 'section'
                ? 'bg-[#8A4E28] text-white font-semibold shadow-xs'
                : 'text-[#5B564C] hover:text-[#221F1A]'
            }`}
          >
            Section A-A
          </button>
        </div>

        {/* HUD Toggles & Upload Action */}
        <div className="flex items-center gap-1.5 font-mono-plex text-xs">
          <SlotImageUploader
            slotId={activeSlotId}
            slotLabel={activeSlotLabel}
            variant="compact"
          />

          <button
            onClick={() => setShowDimensions(!showDimensions)}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition-all ${
              showDimensions
                ? 'bg-[#8A4E28] text-white border-[#8A4E28] shadow-2xs'
                : 'bg-[#EDE9E0] text-[#5B564C] border-[#221F1A]/15 hover:text-[#221F1A]'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>{showDimensions ? 'Dims: ON' : 'Dims: OFF'}</span>
          </button>
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition-all ${
              showHotspots
                ? 'bg-[#8A4E28] text-white border-[#8A4E28] shadow-2xs'
                : 'bg-[#EDE9E0] text-[#5B564C] border-[#221F1A]/15 hover:text-[#221F1A]'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>{showHotspots ? 'Pins: ON' : 'Pins: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage Container */}
      <TiltContainer className="w-full max-w-[540px] aspect-square" maxTilt={6} scale={1.015}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#221F1A]/20 bg-[#FAF7F2] shadow-sm flex items-center justify-center">
          {/* Top-Left Slot Uploader Action Pill */}
          <div className="absolute top-3 left-3 z-30">
            <SlotImageUploader
              slotId={activeSlotId}
              slotLabel={activeSlotLabel}
              variant="overlay"
            />
          </div>

        {/* Actual Orthographic CAD Image with Smooth Quadrant Pan/Zoom */}
        <div
          className="relative w-full h-full transition-transform duration-500 ease-out origin-center"
          style={{ transform: isUsingMasterPlate ? getQuadrantTransform() : 'scale(1) translate(0%, 0%)' }}
        >
          <img
            src={effectiveImageUrl}
            alt="Fellah Chair — Orthographic Technical Study 1:1 Geometric Extraction"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              // Fallback image in case path resolution requires asset root
              const target = e.currentTarget;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85';
              }
            }}
          />

          {/* Interactive Hotspot Pins (Linked to Drawing Coordinates) */}
          {showHotspots && (
            <div className="absolute inset-0 pointer-events-auto">
              {cadHotspots.map((hs) => {
                const isActive = activePinId === hs.id;
                // Highlight pins relevant to active quadrant view
                const isRelevantToView = selectedView === 'all' || selectedView === hs.view;
                if (!isRelevantToView) return null;

                const isRightSide = parseFloat(hs.x) > 50;
                const isBottomSide = parseFloat(hs.y) > 65;
                const isTopSide = parseFloat(hs.y) < 30;

                return (
                  <div
                    key={hs.id}
                    style={{ left: hs.x, top: hs.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  >
                    {/* Animated Pulsing Pin */}
                    <button
                      onClick={() => handlePinClick(hs.id)}
                      className={`relative w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all hover:scale-125 focus:outline-hidden ${
                        isActive
                          ? 'bg-[#8A4E28] text-white ring-2 sm:ring-4 ring-[#8A4E28]/40 shadow-lg scale-110'
                          : 'bg-[#221F1A] text-white border border-white/50 shadow-md'
                      }`}
                      title={hs.label}
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current" />
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#8A4E28]/40 pointer-events-none" />
                    </button>

                    {/* Responsive Popover Callout */}
                    <div
                      className={`absolute ${
                        isRightSide
                          ? 'right-6 sm:right-7 -translate-x-0'
                          : 'left-6 sm:left-7 translate-x-0'
                      } ${
                        isBottomSide
                          ? 'bottom-0'
                          : isTopSide
                          ? 'top-0'
                          : 'top-1/2 -translate-y-1/2'
                      } w-40 sm:w-48 md:w-56 max-w-[210px] sm:max-w-[240px] md:max-w-[260px] bg-[#221F1A]/95 text-[#EDE9E0] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-200 pointer-events-none z-30 ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1">
                        <span className="font-serif-fraunces text-[10.5px] sm:text-xs md:text-sm font-semibold text-white truncate">
                          {hs.label}
                        </span>
                        <span className="font-mono-plex text-[7.5px] sm:text-[8.5px] md:text-[9px] text-[#8A4E28] font-bold bg-[#EDE9E0] px-1 py-0.2 rounded whitespace-nowrap">
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

          {/* Dynamic Vector Dimension Highlight Overlays */}
          {showDimensions && (
            <svg
              viewBox="0 0 1000 1000"
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"
            >
              {/* Subtle highlight boxes over critical measurements */}
              {selectedView === 'all' && (
                <g>
                  {/* Front OW: 620mm badge */}
                  <rect x="200" y="32" width="140" height="22" rx="4" fill="#8A4E28" fillOpacity="0.12" stroke="#8A4E28" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Side BA: 112° badge */}
                  <rect x="760" y="105" width="100" height="22" rx="4" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Side SA: 7° badge */}
                  <rect x="850" y="355" width="80" height="20" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Side OD: 700mm */}
                  <rect x="680" y="460" width="140" height="22" rx="4" fill="#8A4E28" fillOpacity="0.12" stroke="#8A4E28" strokeWidth="1" strokeDasharray="3 2" />
                </g>
              )}
            </svg>
          )}
        </div>

        {/* View Badge in Bottom Left */}
        <div className="absolute bottom-3 left-3 z-30 bg-[#221F1A]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white font-mono-plex text-[10px] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8A4E28] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            {selectedView === 'all' && 'PLATE 01 · 1:1 MASTER 4-VIEW PROJECTION'}
            {selectedView === 'front' && 'VIEW 01 · FRONT ELEVATION (OW: 620mm · OH: 1080mm)'}
            {selectedView === 'side' && 'VIEW 02 · SIDE ELEVATION (112° RECLINE · 7° SEAT)'}
            {selectedView === 'top' && 'VIEW 03 · TOP PLAN (550mm SW · 630mm OW)'}
            {selectedView === 'section' && 'VIEW 04 · SECTION A-A (JOINERY & FOAM TECTONICS)'}
          </span>
        </div>
      </div>
      </TiltContainer>

      {/* Quick Dimension Reference Bar */}
      <div className="w-full mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono-plex">
        <div className="bg-[#E4DFD3]/80 p-2 rounded-lg border border-[#221F1A]/10">
          <span className="text-[#5B564C] block text-[10px] uppercase">Overall Height</span>
          <span className="font-bold text-[#221F1A]">1080 mm (OH)</span>
        </div>
        <div className="bg-[#E4DFD3]/80 p-2 rounded-lg border border-[#221F1A]/10">
          <span className="text-[#5B564C] block text-[10px] uppercase">Recline Angle</span>
          <span className="font-bold text-[#8A4E28]">112° Back (BA)</span>
        </div>
        <div className="bg-[#E4DFD3]/80 p-2 rounded-lg border border-[#221F1A]/10">
          <span className="text-[#5B564C] block text-[10px] uppercase">Seat Incline</span>
          <span className="font-bold text-[#10B981]">7° Pitch (SA)</span>
        </div>
        <div className="bg-[#E4DFD3]/80 p-2 rounded-lg border border-[#221F1A]/10">
          <span className="text-[#5B564C] block text-[10px] uppercase">Overall Width/Depth</span>
          <span className="font-bold text-[#221F1A]">620 × 700 mm</span>
        </div>
      </div>
    </div>
  );
};
